window.onload = PageLoad;

function PageLoad(){
	//검색창
	$("#searchBtn").click(search);
	//영상
	$("#netflixBtn").click({param: "netflix"}, setCompany);
	$("#youtubeBtn").click({param: "youtube"}, setCompany);
	$("#watchaBtn").click({param: "watcha"}, setCompany);
	$("#tvingBtn").click({param: "tving"}, setCompany);
	//음악
	$("#melonBtn").click({param: "melon"}, setCompany);
	$("#floBtn").click({param: "flo"}, setCompany);
	$("#vibeBtn").click({param: "vibe"}, setCompany);
	//업무
	$("#gdriveBtn").click({param: "gdrive"}, setCompany);
	$("#framerBtn").click({param: "framer"}, setCompany);
}	

function setCompany(event){
	let company = event.data.param;
	localStorage.setItem("ProcessedCompany", company);
	window.location.href = "./pricing.html";
}

function search(){
	let text = $("#searchBar").val();
	switch(text){
		case "넷플릭스":
		case "Netflix":
		case "netflix":
			localStorage.setItem("ProcessedCompany", "netflix");
			break;
		case "유튜브":
		case "유투브":
		case "youtube":
		case "Youtube":
			localStorage.setItem("ProcessedCompany", "youtube");
			break;
		case "왓챠":
		case "왓차":
		case "watcha":
		case "Watcha":
			localStorage.setItem("ProcessedCompany", "watcha");
			break;
		case "티빙":
		case "Tving":
		case "tving":
			localStorage.setItem("ProcessedCompany", "tving");
			break;
		case "멜론":
		case "맬론":
		case "Melon":
		case "melon":
			localStorage.setItem("ProcessedCompany", "melon");
			break;
		case "플로":
		case "Flo":
		case "flo":
			localStorage.setItem("ProcessedCompany", "flo");
			break;
		case "바이브":
		case "Vibe":
		case "vibe":
			localStorage.setItem("ProcessedCompany", "vibe");
			break;
		case "구글드라이브":
		case "구글 드라이브":
		case "Google drive":
		case "google drive":
		case "Gdrive":
		case "gdrive":
			localStorage.setItem("ProcessedCompany", "gdrive");
			break;
		case "프레이머":
		case "Framer":
		case "framer":	
			localStorage.setItem("ProcessedCompany", "framer");
			break;
	}
	window.location.href = "./pricing.html";
}