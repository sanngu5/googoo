window.onload = PageLoad;

function PageLoad() {
  loadData();
  document.getElementById("submitPlan").addEventListener("click", saveData);
}

function loadData(){  //프리셋 전처리 겸 에디트 전처리
  let isProcessed = localStorage.getItem("isProcessed");
  if(isProcessed == "TRUE"){  //프리셋 사용한건지 아닌지 체크
    localStorage.setItem("isProcessed", "FALSE");

    let processedName = localStorage.getItem("ProcessedName");
    $("#sName").attr("value", processedName);

    let processedInterval = localStorage.getItem("ProcessedInterval");
    $("#sInterval").val(processedInterval).prop("selected", true);

    let processedPrice = localStorage.getItem("ProcessedPrice");
    $("#sPrice").attr("value", processedPrice);

    //얘내들은 수정할 때만 사용되니까 
    let processedShare = localStorage.getItem("ProcessedShare");
    if(processedShare != null && processedShare != "null"){
      localStorage.setItem("ProcessedShare", null);
      $("#sShare").val(processedShare).prop("selected", true);
    }
    let processedBillDate = localStorage.getItem("ProcessedBillDate");
    if(processedBillDate != null && processedBillDate != "null"){
      localStorage.setItem("ProcessedBillDate", null);
      $("#datePicker").datepicker("setDate", parseBillDate(processedBillDate));
    } 
    let processedPush = localStorage.getItem("ProcessedPush");
    if(processedPush != null && processedPush != "null"){
      localStorage.setItem("ProcessedPush", null);
      $("#sPush").val(processedPush).prop("selected", true);
    }

    //ProcessedProcess존재하면 수정 중 -> 기존 인덱스 삭제 및 새로 등록 해야 함 -> 삭제 리스너 달기
    let processedIndex = localStorage.getItem("ProcessedIndex");
    if(processedIndex != null && processedIndex != "null"){
      localStorage.setItem("ProcessedIndex", null);
      document.getElementById("submitPlan").addEventListener("click", function(){
        //먼저 로컬스토리지에 해당 인덱스 밸류 DELETED
        localStorage.setItem("myPlan"+String(processedIndex), "DELETED");
        //PUSH 보내진 거 취소해야함
        cordova.plugins.notification.local.cancel(processedIndex, function() {
          
        });
      });
    }
  }
}

function saveData() {
  //문서에서 데이터 받아오기
  let planName = document.getElementById("sName").value;
  let e = document.getElementById("sInterval");
  let planInterval = e.options[e.selectedIndex].value;
  let planPrice = document.getElementById("sPrice").value;
  e = document.getElementById("sShare");
  let planShare = e.options[e.selectedIndex].value;
  let planBillDate = $("#datePicker").val();
  e = document.getElementById("sPush");
  let planPush = e.options[e.selectedIndex].value;
  //혹시 넘겨받은 이미지 있는지 확인한다 없으면 그냥 커스텀.png
  let planImage = localStorage.getItem("ProcessedCompany");
  if(planImage == null || planImage == "null") planImage = "커스텀";

  //양식 비워두지 않고 작성했는지 검사함
  if(!checkData(planName, planInterval, planPrice, planBillDate)) return;    

  //라스트 인덱스 없으면 생성해주기
  var lastIndex = localStorage.getItem("lastIndex");
  if(lastIndex == null){
    localStorage.setItem("lastIndex", 0);
    lastIndex = localStorage.getItem("lastIndex");
  }

  //로컬스토리지에 저장하기
  let string = "";
  string += planName+'/';
  string += planInterval+'/';
  string += planPrice+'/';
  string += planShare+'/';
  string += planBillDate+'/';
  string += planPush+'/';
  string += planImage+'/';
  localStorage.setItem("myPlan"+String(lastIndex), string);
  localStorage.setItem("ProcessedCompany", null);

  //푸시알림 설정################################
  setPush(lastIndex);

  //라스트 인덱스값 증가
  lastIndex = parseInt(lastIndex);
  lastIndex++;
  localStorage.setItem("lastIndex",lastIndex);

  window.location.href = "./index2.html";
}

function checkData(planName, planInterval, planPrice, planBillDate){
  let confirmed = true;

  if(planName==""){
    $("#warningName").css("display", "block");
    confirmed = false;
  } else $("#warningName").css("display", "none");

  if(planInterval==""){
    $("#warningInterval").css("display", "block");
    confirmed = false;
  } else $("#warningInterval").css("display", "none");

  if(planPrice=="" || isNaN(planPrice) || parseInt(planPrice) < 0){
    $("#warningPrice").css("display", "block");
    confirmed = false;
  } else $("#warningPrice").css("display", "none");

  if(planBillDate==""){
    $("#warningBillDate").css("display", "block");
    confirmed = false;
  } else $("#warningBillDate").css("display", "none");

  return confirmed;
}

function setPush(index){
  let indexString = localStorage.getItem("myPlan"+String(index));

  let noteName = indexString.split('/')[0];
  let noteInterval = indexString.split('/')[1];
  let notePrice = indexString.split('/')[2];
  let noteShare = indexString.split('/')[3];
  let noteBillDate = indexString.split('/')[4];
  let notePush = indexString.split('/')[5];
  let notePlan = indexString.split('/')[6];

  //안 함이면 푸시설정 안하고 종료
  if(notePush == "안 함") return;
  
  addNote(noteName, noteInterval, noteBillDate, notePush, index);
}

function parseBillDate(billDate){
  //형식:yyyy-mm-dd
  var y = billDate.substr(0,4);
  var m = billDate.substr(5,2);
  var d = billDate.substr(8,2);
  return new Date(y, m-1, d);
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
  //pushTiming = new Date();
  //pushTiming.setSeconds(pushTiming.getSeconds() + 5);
  
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
    //document.write(pushTiming);
    //this is the callback function for the schedule method
    //this runs AFTER the notification has been scheduled.
  });
}