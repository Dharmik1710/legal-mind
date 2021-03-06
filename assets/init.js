$(function () {
  let selectInit = {
    courts: ['NCLAT', 'NCLT', 'NCLT - Principle Bench', 'NCLT - New Delhi II Bench', 'NCLT - New Delhi III Bench', 'NCLT - New Delhi Bench IV', 'Registrar NCLT', 'NCLT - Ahemdabad Bench',
      'NCLT - Allahabad Bench', 'NCLT - Bengaluru Bench', 'NCLT - Chandigarh Bench', 'NCLT - Chennai Bench', 'NCLT - Guhawati Bench',
      'NCLT - Hyderabad Bench', 'NCLT - Kolkata Bench', 'NCLT - Mumbai Bench', 'NCLT - Cuttack Bench', 'NCLT - Jaipur Bench', 'NCLT - New Delhi Bench V', 'NCLT - New Delhi Bench VI', 'NCLT - Amaravati Bench'],
    supremeCourtJudges: ["HON'BLE THE CHIEF JUSTICE", "HON'BLE MR. JUSTICE N.M. KASLIWAL", "HON'BLE MR. JUSTICE T.K. THOMMEN", "HON'BLE MR. JUSTICE V. RAMASWAMI", "HON'BLE MR. JUSTICE S. RATNAVEL PANDIAN", "HON'BLE MR. JUSTICE K. JAYACHANDRA REDDY", "HON'BLE MR. JUSTICE R.M. SAHAI", "HON'BLE MR. JUSTICE P.B. SAWANT", "HON'BLE MR. JUSTICE KULDIP SINGH", "HON'BLE MR. JUSTICE K. RAMASWAMY", "HON'BLE MR. JUSTICE S.C. AGRAWAL", "HON'BLE MR. JUSTICE YOGESHWAR DAYAL", "HON'BLE MR. JUSTICE S. MOHAN", "HON'BLE MR. JUSTICE B.P.JEEVAN REDDY", "HON'BLE MR. JUSTICE G.N. RAY", "HON'BLE MR. JUSTICE N.P. SINGH", "HON'BLE MR. JUSTICE N. VENKATACHALA", "HON'BLE MR. JUSTICE M.K. MUKHERJEE", "HON'BLE MR. JUSTICE FAIZAN UDDIN", "HON'BLE MR. JUSTICE B.L. HANSARIA", "HON'BLE MR. JUSTICE S.C. SEN", "HON'BLE MR. JUSTICE K.S. PARIPOORNAN", "HON'BLE MR. JUSTICE K. JAYACHANDRA REDDY", "HON'BLE MR. JUSTICE S.B. MAJMUDAR", "HON'BLE MR. JUSTICE SUJATA V. MANOHAR", "HON'BLE MR. JUSTICE G.T. NANAVATI", "HON'BLE MR. JUSTICE S. SAGHIR AHMAD", "HON'BLE MR. JUSTICE K. VENKATASWAMI", "HON'BLE MR. JUSTICE B.N. KIRPAL", "HON'BLE MR. JUSTICE G.B. PATTANAIK", "HON'BLE MR. JUSTICE S.P. KURDUKAR", "HON'BLE MR. JUSTICE K.T. THOMAS", "HON'BLE MR. JUSTICE M. JAGANNADHA RAO", "HON'BLE MR. JUSTICE V.N. KHARE", "HON'BLE MR. JUSTICE D.P. WADHWA", "HON'BLE MR. JUSTICE M. SRINIVASAN", "HON'BLE MR. JUSTICE S.R. BABU", "HON'BLE MR. JUSTICE A.P. MISRA", "HON'BLE MR. JUSTICE SYED SHAH MOHAMMED QUADRI", "HON'BLE MR. JUSTICE M.B. SHAH", "HON'BLE MR. JUSTICE D.P. MOHAPATRA", "HON'BLE MR. JUSTICE U.C. BANERJEE", "HON'BLE MR. JUSTICE R.C. LAHOTI", "HON'BLE MR. JUSTICE N. SANTOSH HEGDE", "HON'BLE MR. JUSTICE R.P. SETHI", "HON'BLE MR. JUSTICE S.N. PHUKAN", "HON'BLE MR. JUSTICE DORAISWAMY RAJU", "HON'BLE MR. JUSTICE Y.K. SABHARWAL", "HON'BLE MR. JUSTICE RUMA PAL", "HON'BLE MR. JUSTICE S.N. VARIAVA", "HON'BLE MR. JUSTICE SHIVARAJ V. PATIL", "HON'BLE MR. JUSTICE K.G. BALAKRISHNAN", "HON'BLE MR. JUSTICE BRIJESH KUMAR", "HON'BLE MR. JUSTICE B.N. AGRAWAL", "HON'BLE MR. JUSTICE P.V. REDDI", "HON'BLE MR. JUSTICE ASHOK BHAN", "HON'BLE MR. JUSTICE ARIJIT PASAYAT", "HON'BLE MR. JUSTICE B.P. SINGH", "HON'BLE MR. JUSTICE D.M. DHARMADHIKARI", "HON'BLE MR. JUSTICE H.K. SEMA", "HON'BLE MR. JUSTICE S.B. SINHA", "HON'BLE MR. JUSTICE ARUN KUMAR", "HON'BLE MR. JUSTICE B.N. SRIKRISHNA", "HON'BLE MR. JUSTICE A.R. LAKSHMANAN", "HON'BLE MR. JUSTICE G.P. MATHUR", "HON'BLE MR. JUSTICE S.H. KAPADIA", "HON'BLE MR. JUSTICE A.K. MATHUR", "HON'BLE MR. JUSTICE C.K. THAKKER", "HON'BLE MR. JUSTICE TARUN CHATTERJEE", "HON'BLE MR. JUSTICE P.K. BALASUBRAMANYAN", "HON'BLE MR. JUSTICE P.P. NAOLEKAR", "HON'BLE MR. JUSTICE ALTAMAS KABIR", "HON'BLE MR. JUSTICE R.V. RAVEENDRAN", "HON'BLE MR. JUSTICE DALVEER BHANDARI", "HON'BLE MR. JUSTICE LOKESHWAR SINGH PANTA", "HON'BLE MR. JUSTICE D.K. JAIN", "HON'BLE MR. JUSTICE MARKANDEY KATJU", "HON'BLE MR. JUSTICE HARJIT SINGH BEDI", "HON'BLE MR. JUSTICE V.S. SIRPURKAR", "HON'BLE MR. JUSTICE B. SUDERSHAN REDDY", "HON'BLE MR. JUSTICE P. SATHASIVAM", "HON'BLE MR. JUSTICE G.S. SINGHVI", "HON'BLE MR. JUSTICE AFTAB ALAM", "HON'BLE MR. JUSTICE J.M. PANCHAL", "HON'BLE MR. JUSTICE MUKUNDAKAM SHARMA", "HON'BLE MR. JUSTICE CYRIAC JOSEPH", "HON'BLE MR. JUSTICE ASOK KUMAR GANGULY", "HON'BLE MR. JUSTICE R.M. LODHA", "HON'BLE MR. JUSTICE H.L. DATTU", "HON'BLE MR. JUSTICE DEEPAK VERMA", "HON'BLE DR. JUSTICE B.S. CHAUHAN", "HON'BLE MR. JUSTICE A.K. PATNAIK", "HON'BLE MR. JUSTICE T.S. THAKUR", "HON'BLE MR. JUSTICE K.S. RADHAKRISHNAN", "HON'BLE MR. JUSTICE SURINDER SINGH NIJJAR", "HON'BLE MR. JUSTICE SWATANTER KUMAR", "HON'BLE MR. JUSTICE CHANDRAMAULI KR. PRASAD", "HON'BLE MR. JUSTICE H.L. GOKHALE", "HON'BLE MS. JUSTICE GYAN SUDHA MISRA", "HON'BLE MR. JUSTICE ANIL R. DAVE", "HON'BLE MR. JUSTICE SUDHANSU JYOTI MUKHOPADHAYA", "HON'BLE MRS. JUSTICE RANJANA PRAKASH DESAI", "HON'BLE MR. JUSTICE JAGDISH SINGH KHEHAR", "HON'BLE MR. JUSTICE J. CHELAMESWAR", "HON'BLE MR. JUSTICE FAKKIR MOHAMED IBRAHIM KALIFUL", "HON'BLE MR. JUSTICE MADAN B. LOKUR", "HON'BLE MR. JUSTICE M.Y. EQBAL", "HON'BLE MR. JUSTICE V. GOPALA GOWDA", "HON'BLE MR. JUSTICE VIKRAMAJIT SEN", "HON'BLE MR. JUSTICE PINAKI CHANDRA GHOSE", "HON'BLE MR. JUSTICE KURIAN JOSEPH", "HON'BLE MR. JUSTICE S.P. BHARUCHA", "HON'BLE MR. JUSTICE S.A. BOBDE", "HON'BLE MR. JUSTICE A.K. SIKRI", "HON'BLE MR. JUSTICE SHIVA KIRTI SINGH", "HON'BLE MR. JUSTICE C. NAGAPPAN", "HON'BLE MR. JUSTICE R.K. AGRAWAL", "HON'BLE MR. JUSTICE N.V. RAMANA", "HON'BLE MR. JUSTICE ARUN MISHRA", "HON'BLE MR. JUSTICE ADARSH KUMAR GOEL", "HON'BLE MR. JUSTICE ROHINTON FALI NARIMAN", "HON'BLE MR. JUSTICE ABHAY MANOHAR SAPRE", "HON'BLE MRS. JUSTICE R. BANUMATHI", "HON'BLE MR. JUSTICE PRAFULLA C. PANT", "HON'BLE MR. JUSTICE UDAY UMESH LALIT", "HON'BLE MR. JUSTICE AMITAVA ROY", "HON'BLE MR. JUSTICE A.M. KHANWILKAR", "HON'BLE DR. JUSTICE D.Y. CHANDRACHUD", "HON'BLE MR. JUSTICE ASHOK BHUSHAN", "HON'BLE MR. JUSTICE L. NAGESWARA RAO", "HON'BLE MR. JUSTICE SANJAY KISHAN KAUL", "HON'BLE MR. JUSTICE MOHAN M. SHANTANAGOUDAR", "HON'BLE MR. JUSTICE S. ABDUL NAZEER", "HON'BLE MR. JUSTICE NAVIN SINHA", "HON'BLE MR. JUSTICE DEEPAK GUPTA", "HON'BLE MS. JUSTICE INDU MALHOTRA", "HON'BLE MS. JUSTICE INDIRA BANERJEE", "HON'BLE MR. JUSTICE VINEET SARAN", "HON'BLE MR. JUSTICE K.M. JOSEPH", "HON'BLE MR. JUSTICE HEMANT GUPTA", "HON'BLE MR. JUSTICE R. SUBHASH REDDY", "HON'BLE MR. JUSTICE M.R. SHAH", "HON'BLE MR. JUSTICE AJAY RASTOGI", "HON'BLE MR. JUSTICE DINESH MAHESHWARI", "HON'BLE MR. JUSTICE SANJIV KHANNA", "HON'BLE MR. JUSTICE B.R. GAVAI", "HON'BLE MR. JUSTICE SURYA KANT", "HON'BLE MR. JUSTICE ANIRUDDHA BOSE", "HON'BLE MR. JUSTICE A.S. BOPANNA", "HON'BLE MR. JUSTICE KRISHNA MURARI", "HON'BLE MR. JUSTICE S. RAVINDRA BHAT", "HON'BLE MR. JUSTICE V. RAMASUBRAMANIAN", "HON'BLE MR. JUSTICE HRISHIKESH ROY"],
    chairpersonCourtJudges: ["Justice S.J. Mukhopadhaya Chairperson", "Justice Bansi Lal Bhat Member (Judicial)", "Justice A.I.S. Cheema Member (Judicial)", "Mr. Balvinder Singh Member (Technical)", "Mr. Kanthi Narahari Member (Technical)", "Mr. V. P. Singh Member (Technical)", "Justice Venugopal M Member (Judicial)", "Justice Jarat Kumar Jain Member (Judicial)", "Dr. Ashok Kumar Mishra Member (Technical)"],
    lawyerName: ['parc 1', 'parc 2', 'parc 3', 'prac4'],
    caseType: ['Class Action', 'Refusal to Transfer Shares', 'Opressions & Management', 'Reopening of Accounts & Revision of Financial Statements', 'Deregistraion of Companies', 'Deposits', 'Power to Investigate']
  
  };

  var courts = document.getElementById("court");
  for (let i = 0; i < selectInit.courts.length; i++) {
    var option = document.createElement("option");
    option.text = selectInit.courts[i];
    courts.add(option);
  }
  $("#court").chosen();

  var caseTypeElement = document.getElementById("caseType");
  for (let i = 0; i < selectInit.caseType.length; i++) {
    var option = document.createElement("option");
    option.text = selectInit.caseType[i];
    caseTypeElement.add(option);
  }
  $("#caseType").chosen();
  $('#caseTypeParent').hide();
});

// Searchbar onclick scroll to cards
// $("#Search").click(function () {
//   $('#cards').show();
//   $('html, body').animate({
//     scrollTop: $("#cards").offset().top - 100
//   }, 0);
// });

// $('#Search').blur(function(){

//     $('#cards').hide();
// });

// open judgement.html in new tab
$("#cards li").click(function () {
  window.open('./assets/judgement.html', '_blank');
});

// toggle button of filter
$(document).ready(function () {
  $('#anlySidebarCollapse').on('click', function () {
    $('#sidebar, #cont').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  if($(window).width()<=450){
    $('#menuButton').css('display', 'none');
  }  

});

// functions of popup show and close

var srLawyerListStatsGlobal;
var partyListStatsGlobal;
var hearingListStatsGlobal;
var costListStatsGlobal;

function srLawyerPopup(ele) {
  // alert(srLawyerListStatsGlobal)
  updateSrLawyersModal(srLawyerListStatsGlobal)
  ele.setAttribute("data-target", "#myModal");
  ele.setAttribute("data-toggle", "modal");
  // document.getElementById("modalTitle") .innerHTML = opt.toUpperCase();
}

function lawyerPopup(ele) {
  // alert(srLawyerListStatsGlobal)
  updateSrLawyersModal(lawyerListStatsGlobal)
  ele.setAttribute("data-target", "#myModal");
  ele.setAttribute("data-toggle", "modal");
  // document.getElementById("modalTitle") .innerHTML = opt.toUpperCase();
}

function partyPopup(ele) {
  updatePartyStatsModal(partyListStatsGlobal)
  // alert(partyListStatsGlobal)
  ele.setAttribute("data-target", "#myModal");
  ele.setAttribute("data-toggle", "modal");
  // document.getElementById("modalTitle").innerHTML = opt.toUpperCase();
}

function hearingPopup(ele) {
  updateHearingStatsModal(hearingListStatsGlobal)
  // alert(partyListStatsGlobal)
  ele.setAttribute("data-target", "#myModal");
  ele.setAttribute("data-toggle", "modal");
  // document.getElementById("modalTitle").innerHTML = opt.toUpperCase();
}

function closePopup(btn) {
  btn.removeAttribute("data-target");
  btn.removeAttribute("data-toggle");
}