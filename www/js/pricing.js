window.onload = PageLoad;

function PageLoad(){
	showList();
}

function showList(){
	let company = localStorage.getItem("ProcessedCompany");
	let parent = document.getElementById("pricingList");
	let string = "";
	switch(company){
		case "netflix":
			//베이식 요금
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">베이식</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">9,500원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";			  
			string += "<li>동시접속 1명</li>";
			string += "<li>기본 화질 제공</li>";
			string += "<li>스마트폰 또는 태플릿 1대에 콘텐츠 저장 가능</li>";  
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"basic\">선택하기</button>"
			string += "</div>";    
			string += "</div>";
			//스탄다드 요금
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">스탠다드</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">12,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>동시접속 2명</li>";
			string += "<li>풀 HD(1080p) 화질 제공</li>";
			string += "<li>스마트폰 또는 태블릿 2대에 콘텐츠 저장 가능</li>";
			string += " </ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"standard\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//프리미아무 요금
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">프리미엄</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">14,500원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>동시접속 4명</li>";
			string += "<li>풀 HD(1080p) 및 UHD(4K) 화질 제공</li>";
			string += "<li>스마트폰 또는 태블릿 4대에 콘텐츠 저장 가능</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"premium\">선택하기</button>";
			string += "</div>";
			string += "</div>";			
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#basic").click({name: "[넷플릭스] 베이식 요금제", interval: "1개월", price: "9500"}, saveProcessedData);
			$("#standard").click({name: "[넷플릭스] 스탠다드 요금제", interval: "1개월", price: "12000"}, saveProcessedData);
			$("#premium").click({name: "[넷플릭스] 프리미엄 요금제", interval: "1개월", price: "14500"}, saveProcessedData);
			break;

		case "youtube":
			//유튜브 프리미엄
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">유튜브 프리미엄</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">9,500원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>광고 없이 즐기기</li>";
			string += "<li>저장해서 감상하기</li>";
			string += "<li>백그라운드에서 재생하기</li>";
			string += "<li>YouTube Music Premuim</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"premium\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#premium").click({name: "[유튜브] 유튜브 프리미엄", interval: "1개월", price: "9500"}, saveProcessedData);
			break;

		case "watcha":
			//왓챠 베이직
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">베이직</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">7,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>동시접속 1명</li>";
			string += "<li>풀 HD(1080p) 화질 제공</li>";
			string += "<li>콘텐츠 5개까지 저장 가능</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"basic\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//왓챠 프리미엄
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">프리미엄</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">12,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>동시접속 4명</li>";
			string += "<li>풀 HD(1080p) 및 UHD(4K) 화질 제공</li>";
			string += "<li>HDR 10+의 선명한 화질</li>";
			string += "<li>콘텐츠 100개까지 저장 가능</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"premium\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#basic").click({name: "[왓챠] 베이직 이용권", interval: "1개월", price: "7900"}, saveProcessedData);
			$("#premium").click({name: "[왓챠] 프리미엄 이용권", interval: "1개월", price: "12900"}, saveProcessedData);
			break;

		case "tving":
			//왓챠 베이직
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">베이직</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">7,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>PC, 스마트폰, 태블릿, 크롬 캐스트 지원</li>";
			string += "<li>티빙의 모든 방송 및 영화 500여 편</li>";
			string += "<li>고화질(720P) 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"basic\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//왓챠 프리미엄
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">프리미엄</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">13,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>PC, 스마트폰, 태블릿, 크롬캐스트, 스마트TV, 안드로이드TV 지원</li>";
			string += "<li>티빙의 모든 방송 및 영화 4000여 편</li>";
			string += "<li>초고화질(1080P) 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"premium\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//왓챠 베이직
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">베이직 (iOS)</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">12,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>PC, 스마트폰, 태블릿, 크롬 캐스트 지원</li>";
			string += "<li>티빙의 모든 방송 및 영화 500여 편</li>";
			string += "<li>고화질(720P) 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"basicios\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//왓챠 프리미엄
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">프리미엄</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">20,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>PC, 스마트폰, 태블릿, 크롬캐스트, 스마트TV, 안드로이드TV 지원</li>";
			string += "<li>티빙의 모든 방송 및 영화 5000여 편</li>";
			string += "<li>초고화질(1080P) 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"premiumios\">선택하기</button>";
			string += "</div>";
			string += "</div>";		
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#basic").click({name: "[티빙] 베이직 이용권", interval: "1개월", price: "7900"}, saveProcessedData);
			$("#premium").click({name: "[티빙] 프리미엄 이용권", interval: "1개월", price: "13900"}, saveProcessedData);
			$("#basicios").click({name: "[티빙] 베이직(iOS) 이용권", interval: "1개월", price: "12000"}, saveProcessedData);
			$("#premiumios").click({name: "[티빙] 프리미엄(iOS) 이용권", interval: "1개월", price: "20000"}, saveProcessedData);
			break;

			case "melon":
			//스트리밍 플러스
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">스트리밍 플러스</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">10,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>온라인과 오프라인 무제한 듣기</li>";
			string += "<li>디바이스 1대까지 오프라인 저장</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingplus\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//Hi-Fi 스트리밍 클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">Hi-Fi 스트리밍 클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">12,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>무손실 고음질 음원파일(FLAC) 무제한 듣기</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"hifistreaming\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//스트리밍 클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">스트리밍 클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">7,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streaming\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//모바일 클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">모바일 클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">6,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mobilestreaming\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 30 플러스
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 30 플러스</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">16,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "<li>MP3 30곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp30plus\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 50 플러스
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 50 플러스</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">19,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "<li>MP3 50곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp50plus\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 100 플러스
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 100 플러스</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">28,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "<li>MP3 100곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp100plus\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 30
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 30</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">12,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>MP3 30곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp30\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 50
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 50</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">15,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>MP3 50곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp50\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//MP3 100
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">MP3 100</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">24,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>MP3 100곡 다운로드 서비스 제공</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"mp100\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//프리클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">프리클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">14,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기 제한 없이 무제한 듣기</li>";
			string += "<li>DCF 다운로드 서비스 무제한</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"freeclub\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//어학 프리클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">어학 프리클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">5,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>어학컨텐츠 기기 제한 없이 무제한 듣기</li>";
			string += "<li>어학컨텐츠 DCF 다운로드 서비스 무제한</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"languagefreeclub\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//어학 스트리밍 클럽
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">어학 스트리밍 클럽</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">3,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>어학컨텐츠 기기 제한 없이 무제한 듣기</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"languagestreamingclub\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#streamingplus").click({name: "[멜론] 스트리밍 플러스", interval: "1개월", price: "10900"}, saveProcessedData);
			$("#hifistreaming").click({name: "[멜론] Hi-Fi 스트리밍 클럽", interval: "1개월", price: "12000"}, saveProcessedData);
			$("#streaming").click({name: "[멜론] 스트리밍 클럽", interval: "1개월", price: "7900"}, saveProcessedData);
			$("#mobilestreaming").click({name: "[멜론] 모바일 스트리밍 클럽", interval: "1개월", price: "6900"}, saveProcessedData);
			$("#mp30plus").click({name: "[멜론] MP3 30 플러스", interval: "1개월", price: "16000"}, saveProcessedData);
			$("#mp50plus").click({name: "[멜론] MP3 50 플러스", interval: "1개월", price: "19000"}, saveProcessedData);
			$("#mp100plus").click({name: "[멜론] MP3 100 플러스", interval: "1개월", price: "28000"}, saveProcessedData);
			$("#mp30").click({name: "[멜론] MP3 30", interval: "1개월", price: "12000"}, saveProcessedData);
			$("#mp50").click({name: "[멜론] MP3 50", interval: "1개월", price: "15000"}, saveProcessedData);
			$("#mp100").click({name: "[멜론] MP3 100", interval: "1개월", price: "24000"}, saveProcessedData);
			$("#freeclub").click({name: "[멜론] 프리클럽", interval: "1개월", price: "14900"}, saveProcessedData);
			$("#languagefreeclub").click({name: "[멜론] 어학 프리클럽", interval: "1개월", price: "5000"}, saveProcessedData);
			$("#languagestreamingclub").click({name: "[멜론] 어학 스트리밍 클럽", interval: "1개월", price: "3000"}, saveProcessedData);
			break;

		case "flo":
			//무제한 듣기+오프라인 재생
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기+오프라인 재생</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">10,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "<li>오프라인 재생</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingoff\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">7,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streaming\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//300회 듣기
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">300회 듣기</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">4,800원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>300회 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streaming300\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//모바일 무제한
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">모바일 무제한 듣기</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">6,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>모바일 전용</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingmobile\">선택하기</button>";
			string += "</div>";
			string += "</div>";
				
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#streamingoff").click({name: "[플로] 무제한 듣기+오프라인", interval: "1개월", price: "10900"}, saveProcessedData);
			$("#streaming").click({name: "[플로] 무제한 듣기", interval: "1개월", price: "7900"}, saveProcessedData);	
			$("#streaming300").click({name: "[플로] 300회 듣기", interval: "1개월", price: "4800"}, saveProcessedData);
			$("#streamingmobile").click({name: "[플로] 모바일 무제한 듣기", interval: "1개월", price: "6900"}, saveProcessedData);
			break;

		case "vibe":
			//무제한 듣기 재생
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">8,500원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streaming\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기 재생 1년 선결제
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기 1년 선결제</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">82,800원 <small class=\"text-muted\">/ 년</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingyear\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기 재생 1년 약정
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기 1년 약정</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">6,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingyearduty\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기 대학생
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기 1년 약정</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">5,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingstudent\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기+오프라인 재생
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기+오프라인</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">11,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "<li>DRM저장 및 오프라인 재생</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingoff\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기+오프라인 재생 1년 선결제
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기+오프라인 1년 선결제</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">108,000원 <small class=\"text-muted\">/ 년</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "<li>DRM저장 및 오프라인 재생</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingoffyear\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기+오프라인 재생 1년 약정
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기+오프라인 1년 약정</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">9,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "<li>DRM저장 및 오프라인 재생</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingoffyearduty\">선택하기</button>";
			string += "</div>";
			string += "</div>";

			//무제한 듣기+오프라인 대학생
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">무제한 듣기+오프라인 1년 약정</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">7,700원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>기기제한 없음</li>";
			string += "<li>무제한 스트리밍</li>";
			string += "<li>DRM저장 및 오프라인 재생</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"streamingoffstudent\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#streaming").click({name: "[바이브] 무제한 듣기", interval: "1개월", price: "8500"}, saveProcessedData);
			$("#streamingyear").click({name: "[바이브] 무제한 듣기 1년 선결제", interval: "1년", price: "82800"}, saveProcessedData);	
			$("#streamingyearduty").click({name: "[바이브] 무제한 듣기 1년 약정", interval: "1개월", price: "6900"}, saveProcessedData);
			$("#streamingstudent").click({name: "[바이브] 무제한 듣기 대학생", interval: "1개월", price: "5900"}, saveProcessedData);

			$("#streamingoff").click({name: "[바이브] 무제한 듣기+오프라인", interval: "1개월", price: "11000"}, saveProcessedData);
			$("#streamingoffyear").click({name: "[바이브] 무제한 듣기+오프라인 1년 선결제", interval: "1년", price: "108000"}, saveProcessedData);	
			$("#streamingoffyearduty").click({name: "[바이브] 무제한 듣기+오프라인 1년 약정", interval: "1개월", price: "9000"}, saveProcessedData);
			$("#streamingoffstudent").click({name: "[바이브] 무제한 듣기+오프라인 대학생", interval: "1개월", price: "7700"}, saveProcessedData);
			break;

		case "gdrive":
			//100GB
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">100GB</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">2,400원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 100GB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"100GB\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//100GB 1년
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">100GB 1년 선불</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">24,000원 <small class=\"text-muted\">/ 년</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 100GB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"100GByear\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//200GB
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">200GB</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">3,700원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 200GB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"200GB\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//200GB 1년
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">200GB 1년 선불</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">37,000원 <small class=\"text-muted\">/ 년</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 200GB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"200GByear\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//2TB
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">2TB</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">11,900원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 2TB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"2TB\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//2TB
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">2TB 1년 선불</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">119,000원 <small class=\"text-muted\">/ 년</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>스토리지 2TB</li>";
			string += "<li>Google 전문가와의 상담</li>";
			string += "<li>가족 추가 옵션</li>";
			string += "<li>회원을 위한 추가 혜택</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"2TByear\">선택하기</button>";
			string += "</div>";
			string += "</div>";	
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#100GB").click({name: "[구글드라이브] 100GB", interval: "1개월", price: "2400"}, saveProcessedData);
			$("#100GByear").click({name: "[구글드라이브] 100GB", interval: "1년", price: "24000"}, saveProcessedData);
			$("#200GB").click({name: "[구글드라이브] 200GB", interval: "1개월", price: "3700"}, saveProcessedData);
			$("#200GByear").click({name: "[구글드라이브] 200GB", interval: "1년", price: "37000"}, saveProcessedData);
			$("#2TB").click({name: "[구글드라이브] 2TB", interval: "1개월", price: "11900"}, saveProcessedData);
			$("#2TByear").click({name: "[구글드라이브] 2TB", interval: "1년", price: "119000"}, saveProcessedData);	
			break;

		case "framer":
			//Pro
			string += "<div class=\"card mb-4 shadow-sm\">";
			string += "<div class=\"card-header\">";
			string += "<h4 class=\"my-0 font-weight-normal\">Pro</h4>";
			string += "</div>";
			string += "<div class=\"card-body\">";
			string += "<h1 class=\"card-title pricing-card-title\">24,000원 <small class=\"text-muted\">/ 월</small></h1>";
			string += "<ul class=\"list-unstyled mt-3 mb-4\">";
			string += "<li>무제한 프로젝트</li>";
			string += "<li>비공개 공유 링크</li>";
			string += "<li>오프라인 편집</li>";
			string += "<li>데스크탑 앱</li>";
			string += "<li>로컬 파일 액세스</li>";
			string += "<li>맞춤 글꼴</li>";
			string += "</ul>";
			string += "<button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" id=\"pro\">선택하기</button>";
			string += "</div>";
			string += "</div>";
			//디자인 적용
			parent.innerHTML = string;
			//리스너 달기
			$("#pro").click({name: "[프레이머] Pro 요금제", interval: "1개월", price: "24000"}, saveProcessedData);
			break;
	}
}

function saveProcessedData(event){
	//프리셋으로 설정 중인지 커스템 페이지에 알려주기
	localStorage.setItem("isProcessed", "TRUE");
	localStorage.setItem("ProcessedName", event.data.name);
	localStorage.setItem("ProcessedInterval", event.data.interval);
	localStorage.setItem("ProcessedPrice", event.data.price);
	window.location.href = "./custom.html";
}