window.onload = PageLoad;

function PageLoad(){
	showMyPlan();
}

function showMyPlan(){
	let parent = document.getElementById("planList");
	let lastIndex = parseInt(localStorage.getItem("lastIndex"));
	let string = ""
	let averagePrice = 0;
	for(var i = 0; i < lastIndex; i++){
		
		//데이터 가져오기
		let myPlan = localStorage.getItem("myPlan"+String(i));
		if(myPlan == null) return;				//저장된 구독 내용 없으면 출력없이 리턴
		if(myPlan == "DELETED") continue;		//삭제해서 비어버린 배열은 건너뛴다.

		//데이터 토크나이징하기
		let planName = myPlan.split('/')[0];
		let planInterval = myPlan.split('/')[1];
		let planPrice = myPlan.split('/')[2];
		let planShare = myPlan.split('/')[3];
		let planBillDate = myPlan.split('/')[4];
		let planPush = myPlan.split('/')[5];
		let planImage = myPlan.split('/')[6];

		//출력할 요소들 양식맞춰 가공
		let sharedPrice = parseInt(planPrice / parseInt(planShare));
		let title = planName+" ("+sharedPrice+"원 / "+planInterval+")";
		//let imageName = planName.split("]")[0]
		//imageName = imageName.substr(1,imageName.lenght-1);
		
		//날짜 가공 전에 갱신여부 체크하기(푸시알림 갱신 + 총액계산)
		let parsedBillDate = parseBillDate(planBillDate);
		let nextBillDate = calcNextBillDate(parsedBillDate, planInterval);
		
		let now = new Date();	
		if(now > nextBillDate){//결제예정일이 지났을 때
			
			//다음 결제일이 마지막 결제일이 되고
			planBillDate = getFormatDate(nextBillDate);
			//다다음 결제일을 구해서
			nextBillDate = calcNextBillDate(nextBillDate, planInterval);
			//그걸 다음 결제일에 넣는다
			nextBillDate = getFormatDate(nextBillDate);
			//갱신된 데이터 다시 넣기
			let temp = planName+'/'+planInterval+'/'+planPrice+'/'+planShare+'/'+planBillDate+'/'+planPush+'/'+planImage+'/';
			//푸시알림 설정
			localStorage.removeItem("myPlan"+String(i));
			localStorage.setItem("myPlan"+String(i), temp);
			setPush(i);

		} else nextBillDate = getFormatDate(nextBillDate);
		

		averagePrice += calcAveragePrice(planPrice, planInterval, planShare);

		//결제예정일 갱신 여부 검사
		string += "<div class=\"col-md-4\" id=\"plan\">";
		string += "<div class=\"card mb-4 shadow-sm\">";
		string += "<img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"255\" src=\"./img/"+planImage+".png\">";
		string += "<div class=\"card-body\">";
		string += "<p class=\"card-text\">"+title+"</p>";
		string += "<div class=\"d-flex justify-content-between align-items-center\">";
		string += "<div class=\"btn-group\">";
		string += "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"edit"+i+"\">수정</button>";
		string += "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"cancel"+i+"\">구독 취소</button>";
		string += "</div>";
		string += "<small class=\"text-muted\">다음 결제일: "+nextBillDate+"</small>";
		string += "</div>";
		string += "</div>";
		string += "</div>";
		string += "</div>";
	}
	parent.innerHTML = string;

	//평균 지출액에 쉼표 추가
	averagePrice = averagePrice.toLocaleString();

	//수정삭제버튼에 리스너 달기
	for(var i = 0; i <= lastIndex; i++){
		$("#edit"+i).click({param: i}, edit);
		$("#cancel"+i).click({param: i}, cancel);
	}

	//평균 지불금액 작성
	$("#averagePrice").text("월평균 "+averagePrice+"원");
}

function edit(event){
	//프리셋 사용 또는 수정되는 것 알려주기 위함
	localStorage.setItem("isProcessed", "TRUE");
	
	//데이터 가져오기
	var index = event.data.param;
	let myPlan = localStorage.getItem("myPlan"+String(index));
	
	//데이터 토크나이징해서 넘겨주기
	let planName = myPlan.split('/')[0];
	let planInterval = myPlan.split('/')[1];
	let planPrice = myPlan.split('/')[2];
	let planShare = myPlan.split('/')[3];
	let planBillDate = myPlan.split('/')[4];
	let planPush = myPlan.split('/')[5];
	let planImage = myPlan.split('/')[6];

	localStorage.setItem("ProcessedIndex", index);
	localStorage.setItem("ProcessedName", planName);
	localStorage.setItem("ProcessedInterval", planInterval);
	localStorage.setItem("ProcessedPrice", planPrice);
	localStorage.setItem("ProcessedShare", planShare);
	localStorage.setItem("ProcessedBillDate", planBillDate);
	localStorage.setItem("ProcessedPush", planPush);
	localStorage.setItem("ProcessedCompany", planImage);

	window.location.href = "./custom.html";
}

function cancel(event){

	$("#modalBtn").trigger("click");
	$("#yesBtn").click(function() {
		//먼저 로컬스토리지에 해당 인덱스 밸류 DELETED
		var index = event.data.param;
		localStorage.setItem("myPlan"+String(index), "DELETED");

		//PUSH 보내진 거 취소해야함
		cordova.plugins.notification.local.cancel(index, function() {
			//콜백
		});
		//새로고침 하기
		location.reload();
	});
}

function calcAveragePrice(price, interval, share){
	var averagePrice = 0;
	price = parseInt(price);
	share = parseInt(share);
	switch(interval){
	  case "30일":
	    averagePrice += price/share;
	    break;
	  case "1개월":
	    averagePrice += price/share;
	    break;
	  case "3개월":
	    averagePrice += price/(share * 3);
	    break;
	  case "6개월":
	    averagePrice += price/(share * 6);
	    break;
	  case "1년":
	    averagePrice += price/(share * 12);
	    break;
	}
	return parseInt(averagePrice);
}

function calcNextBillDate(parsedBillDate, interval){
	switch(interval){
	  case "30일":
	    parsedBillDate.setDate(parsedBillDate.getDate()+30);
	    break;
	  case "1개월":
	    parsedBillDate.setMonth(parsedBillDate.getMonth()+1);
	    break;
	  case "3개월":
	    parsedBillDate.setMonth(parsedBillDate.getMonth()+3);
	    break;
	  case "6개월":
	    parsedBillDate.setMonth(parsedBillDate.getMonth()+6);
	    break;
	  case "1년":
	    parsedBillDate.setFullYear(parsedBillDate.getFullYear()+1);
	    break;
	}
	return parsedBillDate;
}

function parseBillDate(billDate){
  //형식:yyyy-mm-dd
  var y = billDate.substr(0,4);
  var m = billDate.substr(5,2);
  var d = billDate.substr(8,2);
  return new Date(y, m-1, d);
}


//푸시알림용 함수
function setPush(index){
  let indexString = localStorage.getItem("myPlan"+String(index));

  let noteName = indexString.split('/')[0];
  let noteInterval = indexString.split('/')[1];
  let notePrice = indexString.split('/')[2];
  let noteShare = indexString.split('/')[3];
  let noteBillDate = indexString.split('/')[4];
  let notePush = indexString.split('/')[5];
  let noteImage = indexString.split('/')[6];

  //"안 함"이면 푸시설정 안하고 종료
  if(notePush == "안 함") return;
  
  //addNote(noteName, noteInterval, noteBillDate, notePush, index);
}

function parsePush(push){
  switch(push){
    case "하루 전":
      return 1;
    case "일주일 전":
      return 7;
    //안 함은 이미 걸리짐.
  }
}

function calcPushTimimg(noteInterval, parsedBillDate, parsedPush){
  switch(noteInterval){
    case "30일":
      parsedBillDate.setDate(parsedBillDate.getDate()+30);
      break;
    case "1개월":
      parsedBillDate.setMonth(parsedBillDate.getMonth()+1);
      break;
    case "3개월":
      parsedBillDate.setMonth(parsedBillDate.getMonth()+3);
      break;
    case "6개월":
      parsedBillDate.setMonth(parsedBillDate.getMonth()+6);
      break;
    case "1년":
      parsedBillDate.setFullYear(parsedBillDate.getFullYear()+1);
      break;
  }
  parsedBillDate.setDate(parsedBillDate.getDate()-parsedPush);
  return parsedBillDate;
}

function addNote(noteName, noteInterval, noteBillDate, notePush, index){

  let parsedBillDate = parseBillDate(noteBillDate);
  let parsedPush = parsePush(notePush);
  let pushTiming = calcPushTimimg(noteInterval, parsedBillDate, parsedPush);
  //테스트용 5초 후 푸시 알림
  pushTiming = new Date();
  pushTiming.setSeconds(pushTiming.getSeconds() + 5);
  
  //푸씨알림 디폴트 설정으로
  let props = cordova.plugins.notification.local.getDefaults();
  
  let noteOptions = {
    id: index,
    title: "결제일 미리 알림",
    text: noteName+"의 결제일이 "+notePush+" 입니다.",
    at: pushTiming,
    badge: 1,
    data: {
      prop: "prop value",
      num: 42
    }
  };

  cordova.plugins.notification.local.schedule(noteOptions, function(note){
    //this is the callback function for the schedule method
    //this runs AFTER the notification has been scheduled.
  });
}

function getFormatDate(date){
	var year = date.getFullYear();
	var month = (1 + date.getMonth());
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return year + '.' + month + '.' + day;
}