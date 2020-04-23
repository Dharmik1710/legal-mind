var rootUrl = "https://api.legalmind.tech:8041"
// let rootUrl = "http://0.0.0.0:8044"

isIncludeCost = null
isOverulled = null
supremeCourtJudges = ["HON'BLE THE CHIEF JUSTICE", "HON'BLE MR. JUSTICE N.M. KASLIWAL", "HON'BLE MR. JUSTICE T.K. THOMMEN", "HON'BLE MR. JUSTICE V. RAMASWAMI", "HON'BLE MR. JUSTICE S. RATNAVEL PANDIAN", "HON'BLE MR. JUSTICE K. JAYACHANDRA REDDY", "HON'BLE MR. JUSTICE R.M. SAHAI", "HON'BLE MR. JUSTICE P.B. SAWANT", "HON'BLE MR. JUSTICE KULDIP SINGH", "HON'BLE MR. JUSTICE K. RAMASWAMY", "HON'BLE MR. JUSTICE S.C. AGRAWAL", "HON'BLE MR. JUSTICE YOGESHWAR DAYAL", "HON'BLE MR. JUSTICE S. MOHAN", "HON'BLE MR. JUSTICE B.P.JEEVAN REDDY", "HON'BLE MR. JUSTICE G.N. RAY", "HON'BLE MR. JUSTICE N.P. SINGH", "HON'BLE MR. JUSTICE N. VENKATACHALA", "HON'BLE MR. JUSTICE M.K. MUKHERJEE", "HON'BLE MR. JUSTICE FAIZAN UDDIN", "HON'BLE MR. JUSTICE B.L. HANSARIA", "HON'BLE MR. JUSTICE S.C. SEN", "HON'BLE MR. JUSTICE K.S. PARIPOORNAN", "HON'BLE MR. JUSTICE K. JAYACHANDRA REDDY", "HON'BLE MR. JUSTICE S.B. MAJMUDAR", "HON'BLE MR. JUSTICE SUJATA V. MANOHAR", "HON'BLE MR. JUSTICE G.T. NANAVATI", "HON'BLE MR. JUSTICE S. SAGHIR AHMAD", "HON'BLE MR. JUSTICE K. VENKATASWAMI", "HON'BLE MR. JUSTICE B.N. KIRPAL", "HON'BLE MR. JUSTICE G.B. PATTANAIK", "HON'BLE MR. JUSTICE S.P. KURDUKAR", "HON'BLE MR. JUSTICE K.T. THOMAS", "HON'BLE MR. JUSTICE M. JAGANNADHA RAO", "HON'BLE MR. JUSTICE V.N. KHARE", "HON'BLE MR. JUSTICE D.P. WADHWA", "HON'BLE MR. JUSTICE M. SRINIVASAN", "HON'BLE MR. JUSTICE S.R. BABU", "HON'BLE MR. JUSTICE A.P. MISRA", "HON'BLE MR. JUSTICE SYED SHAH MOHAMMED QUADRI", "HON'BLE MR. JUSTICE M.B. SHAH", "HON'BLE MR. JUSTICE D.P. MOHAPATRA", "HON'BLE MR. JUSTICE U.C. BANERJEE", "HON'BLE MR. JUSTICE R.C. LAHOTI", "HON'BLE MR. JUSTICE N. SANTOSH HEGDE", "HON'BLE MR. JUSTICE R.P. SETHI", "HON'BLE MR. JUSTICE S.N. PHUKAN", "HON'BLE MR. JUSTICE DORAISWAMY RAJU", "HON'BLE MR. JUSTICE Y.K. SABHARWAL", "HON'BLE MR. JUSTICE RUMA PAL", "HON'BLE MR. JUSTICE S.N. VARIAVA", "HON'BLE MR. JUSTICE SHIVARAJ V. PATIL", "HON'BLE MR. JUSTICE K.G. BALAKRISHNAN", "HON'BLE MR. JUSTICE BRIJESH KUMAR", "HON'BLE MR. JUSTICE B.N. AGRAWAL", "HON'BLE MR. JUSTICE P.V. REDDI", "HON'BLE MR. JUSTICE ASHOK BHAN", "HON'BLE MR. JUSTICE ARIJIT PASAYAT", "HON'BLE MR. JUSTICE B.P. SINGH", "HON'BLE MR. JUSTICE D.M. DHARMADHIKARI", "HON'BLE MR. JUSTICE H.K. SEMA", "HON'BLE MR. JUSTICE S.B. SINHA", "HON'BLE MR. JUSTICE ARUN KUMAR", "HON'BLE MR. JUSTICE B.N. SRIKRISHNA", "HON'BLE MR. JUSTICE A.R. LAKSHMANAN", "HON'BLE MR. JUSTICE G.P. MATHUR", "HON'BLE MR. JUSTICE S.H. KAPADIA", "HON'BLE MR. JUSTICE A.K. MATHUR", "HON'BLE MR. JUSTICE C.K. THAKKER", "HON'BLE MR. JUSTICE TARUN CHATTERJEE", "HON'BLE MR. JUSTICE P.K. BALASUBRAMANYAN", "HON'BLE MR. JUSTICE P.P. NAOLEKAR", "HON'BLE MR. JUSTICE ALTAMAS KABIR", "HON'BLE MR. JUSTICE R.V. RAVEENDRAN", "HON'BLE MR. JUSTICE DALVEER BHANDARI", "HON'BLE MR. JUSTICE LOKESHWAR SINGH PANTA", "HON'BLE MR. JUSTICE D.K. JAIN", "HON'BLE MR. JUSTICE MARKANDEY KATJU", "HON'BLE MR. JUSTICE HARJIT SINGH BEDI", "HON'BLE MR. JUSTICE V.S. SIRPURKAR", "HON'BLE MR. JUSTICE B. SUDERSHAN REDDY", "HON'BLE MR. JUSTICE P. SATHASIVAM", "HON'BLE MR. JUSTICE G.S. SINGHVI", "HON'BLE MR. JUSTICE AFTAB ALAM", "HON'BLE MR. JUSTICE J.M. PANCHAL", "HON'BLE MR. JUSTICE MUKUNDAKAM SHARMA", "HON'BLE MR. JUSTICE CYRIAC JOSEPH", "HON'BLE MR. JUSTICE ASOK KUMAR GANGULY", "HON'BLE MR. JUSTICE R.M. LODHA", "HON'BLE MR. JUSTICE H.L. DATTU", "HON'BLE MR. JUSTICE DEEPAK VERMA", "HON'BLE DR. JUSTICE B.S. CHAUHAN", "HON'BLE MR. JUSTICE A.K. PATNAIK", "HON'BLE MR. JUSTICE T.S. THAKUR", "HON'BLE MR. JUSTICE K.S. RADHAKRISHNAN", "HON'BLE MR. JUSTICE SURINDER SINGH NIJJAR", "HON'BLE MR. JUSTICE SWATANTER KUMAR", "HON'BLE MR. JUSTICE CHANDRAMAULI KR. PRASAD", "HON'BLE MR. JUSTICE H.L. GOKHALE", "HON'BLE MS. JUSTICE GYAN SUDHA MISRA", "HON'BLE MR. JUSTICE ANIL R. DAVE", "HON'BLE MR. JUSTICE SUDHANSU JYOTI MUKHOPADHAYA", "HON'BLE MRS. JUSTICE RANJANA PRAKASH DESAI", "HON'BLE MR. JUSTICE JAGDISH SINGH KHEHAR", "HON'BLE MR. JUSTICE J. CHELAMESWAR", "HON'BLE MR. JUSTICE FAKKIR MOHAMED IBRAHIM KALIFUL", "HON'BLE MR. JUSTICE MADAN B. LOKUR", "HON'BLE MR. JUSTICE M.Y. EQBAL", "HON'BLE MR. JUSTICE V. GOPALA GOWDA", "HON'BLE MR. JUSTICE VIKRAMAJIT SEN", "HON'BLE MR. JUSTICE PINAKI CHANDRA GHOSE", "HON'BLE MR. JUSTICE KURIAN JOSEPH", "HON'BLE MR. JUSTICE S.P. BHARUCHA", "HON'BLE MR. JUSTICE S.A. BOBDE", "HON'BLE MR. JUSTICE A.K. SIKRI", "HON'BLE MR. JUSTICE SHIVA KIRTI SINGH", "HON'BLE MR. JUSTICE C. NAGAPPAN", "HON'BLE MR. JUSTICE R.K. AGRAWAL", "HON'BLE MR. JUSTICE N.V. RAMANA", "HON'BLE MR. JUSTICE ARUN MISHRA", "HON'BLE MR. JUSTICE ADARSH KUMAR GOEL", "HON'BLE MR. JUSTICE ROHINTON FALI NARIMAN", "HON'BLE MR. JUSTICE ABHAY MANOHAR SAPRE", "HON'BLE MRS. JUSTICE R. BANUMATHI", "HON'BLE MR. JUSTICE PRAFULLA C. PANT", "HON'BLE MR. JUSTICE UDAY UMESH LALIT", "HON'BLE MR. JUSTICE AMITAVA ROY", "HON'BLE MR. JUSTICE A.M. KHANWILKAR", "HON'BLE DR. JUSTICE D.Y. CHANDRACHUD", "HON'BLE MR. JUSTICE ASHOK BHUSHAN", "HON'BLE MR. JUSTICE L. NAGESWARA RAO", "HON'BLE MR. JUSTICE SANJAY KISHAN KAUL", "HON'BLE MR. JUSTICE MOHAN M. SHANTANAGOUDAR", "HON'BLE MR. JUSTICE S. ABDUL NAZEER", "HON'BLE MR. JUSTICE NAVIN SINHA", "HON'BLE MR. JUSTICE DEEPAK GUPTA", "HON'BLE MS. JUSTICE INDU MALHOTRA", "HON'BLE MS. JUSTICE INDIRA BANERJEE", "HON'BLE MR. JUSTICE VINEET SARAN", "HON'BLE MR. JUSTICE K.M. JOSEPH", "HON'BLE MR. JUSTICE HEMANT GUPTA", "HON'BLE MR. JUSTICE R. SUBHASH REDDY", "HON'BLE MR. JUSTICE M.R. SHAH", "HON'BLE MR. JUSTICE AJAY RASTOGI", "HON'BLE MR. JUSTICE DINESH MAHESHWARI", "HON'BLE MR. JUSTICE SANJIV KHANNA", "HON'BLE MR. JUSTICE B.R. GAVAI", "HON'BLE MR. JUSTICE SURYA KANT", "HON'BLE MR. JUSTICE ANIRUDDHA BOSE", "HON'BLE MR. JUSTICE A.S. BOPANNA", "HON'BLE MR. JUSTICE KRISHNA MURARI", "HON'BLE MR. JUSTICE S. RAVINDRA BHAT", "HON'BLE MR. JUSTICE V. RAMASUBRAMANIAN", "HON'BLE MR. JUSTICE HRISHIKESH ROY"]
chairpersonCourtJudges = ["Justice S.J. Mukhopadhaya Chairperson", "Justice Bansi Lal Bhat Member (Judicial)", "Justice A.I.S. Cheema Member (Judicial)", "Mr. Balvinder Singh Member (Technical)", "Mr. Kanthi Narahari Member (Technical)", "Mr. V. P. Singh Member (Technical)", "Justice Venugopal M Member (Judicial)", "Justice Jarat Kumar Jain Member (Judicial)", "Dr. Ashok Kumar Mishra Member (Technical)"]

$("#court").change(function () {
    let court = $(this).val()

    let judges = []
    if (court == "Supreme Court") {
        judges = supremeCourtJudges
    } else if (court == "NCLAT") {
        judges = chairpersonCourtJudges
    } else if (court.includes("NCLT")) {
        updateJudgeNamesData("")
        benchPlace = getBenchPlaceNCLT(court)

        if (benchPlace != "")
            processGetAllJudges({ court: "NCLT", benchPlace: benchPlace })
        else
            processGetAllJudges({ court: "NCLT" })
    }

    $("#judge").chosen();
    var judgesEle = document.getElementById("judge");
    judgesEle.innerHTML = ""
    var option = document.createElement("option");
    option.text = "Judge";
    judgesEle.add(option);
    for (let i = 0; i < judges.length; i++) {
        var option = document.createElement("option");
        option.text = judges[i];
        judgesEle.add(option);
    }

    $('#judge').trigger('chosen:updated');
})

$("#judge").change(function () {
    let court = $("#court").val()
    let judgeName = $(this).val() == "Judge" ? null : $(this).val()
    let lawyerName = $("#lawyerName").val() == "Lawyer Name" ? null : $("#lawyerName").val()
    let pracArea = $("#pracArea").val() == "Pratice Area" ? null : $("#pracArea").val()
    let partyName = $("#partyName").val() == "Party Name" ? null : $("#partyName").val()
    let provisions = $("#provisions").val() == "Provisions" ? null : $("#provisions").val()

    reqData = {
        "court": court,
        "judgeName": judgeName,
        "isIncludeCost": isIncludeCost,
        "lawyerName": lawyerName,
        "praticeArea": pracArea,
        "overuled": isOverulled,
        "partyName": partyName,
        "provisions": provisions
    }

    if (court.includes("NCLT") && court != "NCLT") {
        benchPlace = getBenchPlaceNCLT(court)
        reqData.benchPlace = benchPlace
        reqData.court = "NCLT"
    }

    // console.log(reqData)
    processGetAllGraphs(reqData)
    processGetAllJudgeData(reqData)

});

function processGetAllGraphs(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";

    let url = `${rootUrl}/graphs/getAllGraphsData`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateVerdictTypeGraph(data.verdictTypeDoughnutData)
                updateIsCostGraph(data.costInvolvedDoughnutData)
                updateIsOveruleGraph(data.overuledDoughnutData)
                updateCountYearGraph(data.verdictBarData)
                updatePraticeAreaGraph(data.praticeAreaPieData)
                updateCitationGraph(data.citationBarData)
                document.getElementById("fullScreenLoader").style.display = "none";

                processTableStats(reqData)
                processGetAllFilterData(reqData)
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllJudgeData(reqData) {
    let url = `${rootUrl}/JudgeData/getJudgeData`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateCount(data.totalJudgments)
                updateHearingMinMaxCount(data.hearingMinMax)
                updateIsProOC(data.isProOC, data.isProFC)
                updateWithdrawalOfPlan(data.withdrawalOfPlan)
                updateBankInvocationCount(data.bankInvocation)
                updateOCDispute(data.ocDispute)
                updateDefaultByFC(data.defaultByFC)
                updateReplacementOfRP(data.replacementOfRP)
                updateRejectionOfPlan(data.rejectionOfPlan)
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllFilterData(reqData) {
    // document.getElementById("fullScreenLoader").style.display = "block";
    let url = `${rootUrl}/filterData/getAllFilterData`;
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updatePraticeAreasData(data.praticeAreas)
                updateLawyersData(data.lawyerNames)
                updatePartyNames(data.partyNames)
                updateProvisionsData(data.allSections)
                document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllJudges(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";

    let url = `${rootUrl}/JudgeData/getAllJudgesName`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateJudgeNamesData(data.allJudgesName)
                document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetJudgeDataRequest(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";

    let url = `${rootUrl}/getJudgeData`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateJudgeData(data)
                updateCountYearGraph(data.countYearGraph)
                updateJudgementsTable(data.allLawyerCases)
                updateCaseTypeData("")
                document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllRelatedLawyersRequest(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";

    let url = `${rootUrl}/filterData/getLawyerName`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateLawyersData(data.lawyerNames)
                document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllPraticeArea(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";
    let url = `${rootUrl}/getAllPraticeArea`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updatePraticeAreasData(data)
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processGetAllPartyName(reqData) {
    document.getElementById("fullScreenLoader").style.display = "block";
    let url = `${rootUrl}/getPartyNames`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updatePartyNames(data)
                document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function processTableStats(reqData) {
    // document.getElementById("fullScreenLoader").style.display = "block";

    let url = `${rootUrl}/tableData/getAllStats`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                // updateSrLawyersModal(data.lawyersStats)
                srLawyerListStatsGlobal = data.srLawyersStats
                lawyerListStatsGlobal = data.lawyersStats
                partyListStatsGlobal = data.partyStats
                hearingListStatsGlobal = data.hearingStats
                if (reqData.court == "NCLT")
                    updateSrLawyersPreviewTable(lawyerListStatsGlobal)
                else
                    updateSrLawyersPreviewTable(srLawyerListStatsGlobal)

                updateLawyersModal(lawyerListStatsGlobal)
                updatePartyStatsPreviewTable(partyListStatsGlobal)
                updateHearingStatsTable(hearingListStatsGlobal)



                // document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

$("#isCostInvolved").change(function () {
    isIncludeCost = document.getElementById("isCostInvolved").checked
    $("#judge").change()
})

$("#isOverulled").change(function () {
    isOverulled = document.getElementById("isOverulled").checked
    $("#judge").change()
})

$("#lawyerName").change(function () {
    $("#judge").change()
});

$("#partyName").change(function () {
    $("#judge").change()
});

$("#pracArea").change(function () {
    $("#judge").change()
});

$("#provisions").change(function () {
    $("#judge").change()
});


// $("#searchInput").change(function () {
$("#Search").on('input', function (e) {
    let court = $("#court").val()
    let judgeName = $(this).val() == "Judge" ? null : $(this).val()
    let lawyerName = $("#lawyerName").val() == "Lawyer Name" ? null : $("#lawyerName").val()
    let pracArea = $("#pracArea").val() == "Pratice Area" ? null : $("#pracArea").val()
    // let partyName = $("#partyName").val() == "Party Name" ? null : $("#partyName").val()
    let provisions = $("#provisions").val() == "Provisions" ? null : $("#provisions").val()

    reqData = {
        "court": court,
        "judgeName": judgeName,
        "isIncludeCost": isIncludeCost,
        "lawyerName": lawyerName,
        "praticeArea": pracArea,
        "overuled": isOverulled,
        // "partyName": partyName,
        "provisions": provisions,
        "search": $(this).val()
    }

    processGetSearchResults(reqData)
});


//Search Api
function processGetSearchResults(reqData) {
    // document.getElementById("fullScreenLoader").style.display = "block";
    let url = `${rootUrl}/search/fuzzySearch`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                updateSearchResults(data.fuzzySearchResults)
                // document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify(reqData));
}

function getBenchPlaceNCLT(court) {
    benchPlace = ""

    if (court.includes("Principle"))
        benchPlace = "principal_bench"
    else if (court.includes("New Delhi II"))
        benchPlace = "New_Delhi_Bench"
    else if (court.includes("New Delhi III"))
        benchPlace = "New_Delhi_Bench_III"
    else if (court.includes("New Delhi Bench IV"))
        benchPlace = "New_Delhi_Bench_IV"
    else if (court.includes("Registrar NCLT"))
        benchPlace = "registrar_NCLT"
    else if (court.includes("Ahemdabad"))
        benchPlace = "ahmedabad_bench"
    else if (court.includes("Allahabad"))
        benchPlace = "allahabad_bench"
    else if (court.includes("Bengaluru"))
        benchPlace = "bengluru_bench"
    else if (court.includes("Chandigarh"))
        benchPlace = "chandigarh_bench"
    else if (court.includes("Chennai"))
        benchPlace = "chennai_bench"
    else if (court.includes("Guhawati"))
        benchPlace = "guwahati_bench"
    else if (court.includes("Hyderabad"))
        benchPlace = "hyderabad_bench"
    else if (court.includes("Kolkata"))
        benchPlace = "kolkata_bench"
    else if (court.includes("Mumbai"))
        benchPlace = "mumbai_bench"
    else if (court.includes("Jaipur"))
        benchPlace = 'jaipur_bench'
    else if (court.includes("Cuttack"))
        benchPlace = 'cuttack_bench'
    else if (court.includes("New Delhi Bench V"))
        benchPlace = "New_Delhi_Bench_V"
    else if (court.includes("New Delhi Bench VI"))
        benchPlace = "New_Delhi_Bench_VI"
    else if (court.includes("Amaravati"))
        benchPlace = "amaravati_bench"


    return benchPlace
}