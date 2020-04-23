
function updateJudgeNamesData(judges) {
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
}

function updateCount(count) {
    $("#judgementCount").html(count)
}

// Insights update
function updateHearingMinMaxCount(hearingMinMaxCount) {
    $("#hearingMinCount").html(hearingMinMaxCount.minHearing)
    $("#hearingMaxCount").html(hearingMinMaxCount.maxHearing)
}

function updateIsProOC(isProOC, isProFC) {
    $("#proOC").html(isProOC.yes + ":" + isProOC.no)
    $("#proFC").html(isProFC.yes + ":" + isProFC.no)
    setYesNoInsight("ProOCyes","ProOCno", isProOC.yes, isProOC.no)
    setYesNoInsight("ProFCyes","ProFCno", isProFC.yes, isProFC.no)
}

function updateBankInvocationCount(bankInvocationCount) {
    setYesNoInsight("bankInvocationYes","bankInvocationNo", bankInvocationCount.yes, bankInvocationCount.no)
}

function updateWithdrawalOfPlan(withdrawalOfPlan) {
    setYesNoInsight("withdrawalOfPlanNo","withdrawalOfPlanYes", withdrawalOfPlan.yes, withdrawalOfPlan.no)
}

function updateOCDispute(ocDispute) {
    setYesNoInsight("ocDisputeYes","ocDisputeNo", ocDispute.yes, ocDispute.no)
}

function updateDefaultByFC(defualtByFC) {
    setYesNoInsight("defaultByFCYes","defaultByFCNo", defualtByFC.yes, defualtByFC.no)
}

function updateReplacementOfRP(replacementOfRP) {
    setYesNoInsight("replacementOfRPYes","replacementOfRPNo", replacementOfRP.yes, replacementOfRP.no)
}

function updateRejectionOfPlan(rejectionOfPlan) {
    setYesNoInsight("rejectionOfPlanYes","rejectionOfPlanNo", rejectionOfPlan.yes, rejectionOfPlan.no)
}

function setYesNoInsight(yesId, noId, yesCount, noCount) {
    $(`#${yesId}`).html(yesCount)
    $(`#${noId}`).html(noCount)
}

var insights = {
    'Corporate' : [],
    'Taxation' : [],
    'Supreme Court' : [],
    'ibc' : ['In Favour Financial Creditor', 'In Favour of Operational Creditor', 'Involving Withdrawal of Application', 'Involving Withdrawal Of application u/s 12A', 'Stayed Invocation of Bank Guarantee', 'Existence oF disputes with Operational creditor', 'Existence of Default with Financial Credior', 'Replacement/ Changing Of RP/IRP', 'Rejection/Modification of Resolution Plan'],
    'Company Law' : ['De Registration of company', 'Existence of Oppression Mismanagement', 'Protection of non promoters/shareholders', 'Relief to the investors', 'Rights of Depositors', 'Revision/rectification of Financial Statement', 'Foreign Investigation of company', 'Investigating into comapny affairs', 'Freezing assets of a company', 'Restriction on securities of the company', 'Coversion from public limited to private', 'Alteration of registered year'],
    'Antitrust' : ['U/S 26(2) , CALL FOR INVESTIGATION', 'u/s 26(1) , Identifaction of Prima Facie, call for investigation', 'U/S 26(2) , CALL FOR INVESTIGATION', 'u/s 26(2) , Identifaction of Prima Facie, call for investigation', 'U/S 26(2) , CALL FOR INVESTIGATION', 'u/s 26(2) , Identifaction of Prima Facie, call for investigation', 'U/S 26(6) , CALL FOR INVESTIGATION', 'u/s 26(6) , Identifaction of Prima Facie, call for investigation', 'Orders U/S 27', 'Penalties<10%', 'Penalties>= 10%'],
};

var updateInsightsIbc = {
    0: ['ProFCyes', 'ProFCno'], 
    1: ['ProOCyes', 'ProOCno'],
    2: ['withdrawalOfPlanYes', 'withdrawalOfPlanNo'],
    3: ['yesId1', 'noId1'],
    4: [ 'bankInvocationYes', 'bankInvocationNo'],
    5: ['ocDisputeYes', 'ocDisputeNo'], 
    6: ['defaultByFCYes', 'defaultByFCNo'], 
    7: ['replacementOfRPYes', 'replacementOfRPNo'], 
    8: ['rejectionOfPlanYes', 'rejectionOfPlanNo'], 
};

$("#popup-sub-brand div").click(function(){
    domain_insights = '';
    let domain = this.innerHTML;
    for(let i=0; i<insights[domain].length; i++){
        domain_insights += '<div class="col-12 text-white insights mb-3"><div class="p-0 justify-content-between d-flex"><div class="rounded w-100 p-3 strip-head">'+insights[domain][i]+'</div> <div class="justify-content-between d-flex ml-4 strip-body text-center"><div class="py-3 px-4 bg-primary rounded strip-pos" id="'+updateInsightsIbc[i][0]+'"></div><div class="py-3 px-4 bg-danger rounded strip-neg ml-2" id="'+updateInsightsIbc[i][1]+'"></div></div></div></div>'
    }
    document.getElementById('insights').innerHTML = domain_insights;
    $('#insights').hide();

    // on click .strip-pos open search results
    $('.strip-pos, .strip-neg').click(function(){
        var resWindow = window.open(window.location.href);
        resScript = document.createElement('script');
    
        function injectThis() {
    
            var updateScript = document.createElement("script");
            updateScript.src = "./assets/UpdateUI.js";
        
            var apiScript = document.createElement("script");
            apiScript.src = "./assets/api.js";
        
            document.getElementById('page-content').innerHTML = '<div class="px-5 py-2" id="cards">' + window.opener.document.getElementById('cards').innerHTML + '</div>';     
            $('#Search').focus();
            document.getElementById('cards').appendChild(updateScript);
            document.getElementById('cards').appendChild(apiScript);
        }
    
        resScript.innerHTML = '(' + injectThis.toString() + '());';
        resWindow.onload = function () {
            // this.document.body.appendChild(initScript);
            this.document.body.appendChild(resScript);
        };
    });

});

$('#showInsights').click(function(){
    $('#insights').toggle();
});


// updateDefaultByFC(data.defaultByFCYes)
//                 updateReplacementOfRP(data.replacementOfRP)
//                 updateRejectionOfPlan(data.rejectionOfPlan)

function updateJudgeData(judgeData) {
    // console.log(judgeData)
    $("#total").text(judgeData.totalJudgments)
    $("#posVer").text(judgeData.posVerdictCases)
    $("#negVer").text(judgeData.negVerdictCases)

    if ($("#court").val() == "NCLAT" && judgeData.avgYearTakenForJudgement == null)
        judgeData.avgYearTakenForJudgement = "< 1 year"
    else if (judgeData.avgYearTakenForJudgement == "0" || judgeData.avgYearTakenForJudgement < 0 || judgeData.avgYearTakenForJudgement == null)
        judgeData.avgYearTakenForJudgement = "--"
    else
        judgeData.avgYearTakenForJudgement += " years"

    $("#pracTime").text(judgeData.avgYearTakenForJudgement)
}

function updateJudgementsTable(judgements) {
    $('#judgementTable').DataTable().destroy()
    $("#judgementTableBody").html("")
    judgements.forEach(judgement => {
        // existingRows =  $("#judgementTableBody").innerHTML()
        // petitionarName = judgement.petitionarName
        // if (petitionarName.length > 30)
        //     petitionarName = petitionarName.substring(0, 30)

        // respondantName = judgement.respondantName
        // if (respondantName.length > 30)
        //     respondantName = respondantName.substring(0, 30)

        verdictBgColor = judgement.verdict == "true" ? "rgba(145, 222, 45, 0.10)" : "rgba(255, 0, 0, 0.10)"
        $("#judgementTableBody").append(
            `<tr style="background-color:${verdictBgColor};">
          <td>${judgement.caseNumber}</td>
          <td>${judgement.date}</td>
          <td>${judgement.petitionarName} V/S ${judgement.respondantName}</td>
          <td>${judgement.verdict}</td>
          <td>${judgement.petitionarAdvocate}</td>
          <td>${judgement.respondantAdvocate}</td>
          <td><a target='_blank' href='${judgement.url}'><img src="res/images/pdf.svg" height='30' width='30'/></td>
      </tr>`)
    });
    $('#judgementTable').DataTable();
}

function updateLawyersData(lawyersData) {
    let lawyerNameOld = $("#lawyerName").val() == "Lawyer Name" ? null : $("#lawyerName").val()
    // if ($("#court").val() == "NCLT") {
    //     // $("#lawyerNameParent").css("display","none")
    //     $("#lawyerNameParent").hide()
    //     return;
    // } else {
    //     $("#lawyerNameParent").show()
    // }

    $("#lawyerName").html("")
    $("#lawyerName").chosen();
    var lawyerNameEle = document.getElementById("lawyerName");
    lawyersData.unshift("Lawyer Name");
    for (let i = 0; i < lawyersData.length; i++) {
        var option = document.createElement("option");
        option.text = lawyersData[i];
        lawyerNameEle.add(option);
    }
    $('#lawyerName').trigger('chosen:updated');

    if (lawyerNameOld == null) {
        lawyerNameOld = "Lawyer Name"
    }
    $('#lawyerName').val(lawyerNameOld).trigger('chosen:updated');
}

function updatePraticeAreasData(pracAreaData) {
    let pracAreaOld = $("#pracArea").val() == "Pratice Area" ? null : $("#pracArea").val()
    $("#pracArea").html("")
    $("#pracArea").chosen();
    var pracArea = document.getElementById("pracArea");
    pracAreaData.unshift("Pratice Area")
    for (let i = 0; i < pracAreaData.length; i++) {
        var option = document.createElement("option");
        option.text = pracAreaData[i];
        pracArea.add(option);
    }

    $("#pracArea").chosen();
    $('#pracArea').trigger('chosen:updated');

    if (pracAreaOld == null) {
        pracAreaOld = "Pratice Area"
    }
    $('#pracArea').val(pracAreaOld).trigger('chosen:updated');
}

function updateProvisionsData(provisionData) {
    provisionsOld = $("#provisions").val() == "Provisions" ? null : $("#provisions").val()
    $("#provisions").html("")
    $("#provisions").chosen();

    var provisionEle = document.getElementById("provisions");
    provisionData.unshift("Provisions")
    for (let i = 0; i < provisionData.length; i++) {
        var option = document.createElement("option");
        option.text = provisionData[i];
        provisionEle.add(option);
    }

    $("#provisions").chosen();
    $('#provisions').trigger('chosen:updated');

    if (provisionsOld == null) {
        provisionsOld = "Provisions"
    }
    $('#provisions').val(provisionsOld).trigger('chosen:updated');
}

function updatePartyNames(partyNameData) {
    $("#partyName").html("")
    $("#partyName").chosen();
    var partyNameEle = document.getElementById("partyName");
    partyNameData.unshift("Party Name")
    for (let i = 0; i < partyNameData.length; i++) {
        var option = document.createElement("option");
        option.text = partyNameData[i];
        partyNameEle.add(option);
    }

    $("#partyName").chosen();
    $('#partyName').trigger('chosen:updated');
}

function updateVerdictTypeGraph(verdictTypeGraphObj) {

    verdictTypeGraph.destroy();
    let graphElement = document.getElementById("verdictTypeGraph").getContext('2d');
    var graphData = {
        type: 'doughnut',
        data: {
            labels: Object.keys(verdictTypeGraphObj),
            datasets: [{
                backgroundColor: getRandomColorArray(verdictTypeGraphObj.length),
                data: Object.values(verdictTypeGraphObj)
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Type of verdict"
            }
        }
    };
    var strGraphData = JSON.stringify(graphData);
    verdictTypeGraph = new Chart(graphElement, graphData);
    document.getElementById("zoomInVerTypeGraph").onclick = function () {
        localStorage.setItem('temp', strGraphData);
        window.open('./assets/zoomGraphs.html');
    };
}

function updateDoghnutGraph(graphElementId, graph, trueCount, falseCount, titleMessage, zoomId) {
    // console.log("updateDoghnutGraph -> isCostGraphObj -> ", isCostGraphObj)
    graph.destroy();
    let graphElement = document.getElementById(graphElementId).getContext('2d');
    var graphData =  {
        type: 'doughnut',
        data: {
            labels: ["Yes", "No"],
            datasets: [{
                backgroundColor: ["#1d4fb2", "#dc3545"],
                data: [trueCount, falseCount]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: titleMessage
            }
        }
    };
    var strGraphData = JSON.stringify(graphData);
    graph = new Chart(graphElement, graphData);
    document.getElementById(zoomId).onclick = function () {
    localStorage.setItem('temp', strGraphData);
        window.open('./assets/zoomGraphs.html');
    };
}

function updateIsCostGraph(isCostGraphObj) {
    updateDoghnutGraph("costGraph", costGraph, isCostGraphObj.true, isCostGraphObj.false, "Is Cost Involved Or Not", "zoomInCostGraph");
}

function updateCountYearGraph(coutYearGraphObj) {
    //console.log(coutYearGraphObj)
    allLabels = getUniqueArray(Object.keys(coutYearGraphObj.posCount).concat(Object.keys(coutYearGraphObj.negCount)));
    allLabels = allLabels.sort();
    yearCountChart.destroy();
    c1 = document.getElementById("chart1").getContext('2d');

    for (let i = 0; i < allLabels.length; i++) {
        coutYearGraphObj.posCount[allLabels[i]] = coutYearGraphObj.posCount[allLabels[i]] == undefined ? 0 : coutYearGraphObj.posCount[allLabels[i]]
        coutYearGraphObj.negCount[allLabels[i]] = coutYearGraphObj.negCount[allLabels[i]] == undefined ? 0 : coutYearGraphObj.negCount[allLabels[i]]
    }
    // console.log(Object.values(coutYearGraphObj.posCount))

    var graphData = {
        type: "bar",
        // The data for our dataset
        data: {
            labels: allLabels,
            datasets: [{
                label: "Negative Verdicts",
                backgroundColor: "#dc3545",
                borderColor: "#dc3545",
                data: Object.values(coutYearGraphObj.negCount)
            }, {
                label: "Positive Verdicts",
                backgroundColor: "#1d4fb2",
                borderColor: "#1d4fb2",
                data: Object.values(coutYearGraphObj.posCount)
            }]
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
        }
    };
    var strGraphData = JSON.stringify(graphData);
    yearCountChart = new Chart(c1, graphData);
    document.getElementById("zoomInVerStatGraph").onclick = function () {
        localStorage.setItem('temp', strGraphData);
        window.open('./assets/zoomGraphs.html');
    };
}

function updatePraticeAreaGraph(praticeGraphObj) {

    //console.log(praticeGraphObj)
    praticeAreaChart.destroy();
    c2 = document.getElementById("praticeAreaChart").getContext('2d');
    var graphData = {
        type: "doughnut",
        legend: {
            fontSize: 30
        },
        // The data for our dataset
        data: {
            labels: Object.keys(praticeGraphObj),
            datasets: [{
                label: "Pratice Area",
                backgroundColor: getRandomColorArray(Object.keys(praticeGraphObj).length),
                data: Object.values(praticeGraphObj)
            }]
        },
        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Cases by Practice Area"
            }
        }
    };
    var strGraphData = JSON.stringify(graphData);
    praticeAreaChart = new Chart(c2, graphData);
    document.getElementById("zoomInPracGraph").onclick = function () {
        localStorage.setItem('temp', strGraphData);
        window.open('./assets/zoomGraphs.html');
    };
}

function updateIsOveruleGraph(isOveruleGraphObj) {
    updateDoghnutGraph("overruleGraph", overruleGraph, isOveruleGraphObj.true, isOveruleGraphObj.false, "Is Overuled Or Not", "zoomInOverGraph");
}

function updateCitationGraph(citationGraphObj) {
    allLabels = getUniqueArray(Object.keys(citationGraphObj))
    // allLabels = allLabels.sort()
    citationChart.destroy()
    citationChartElemtent = document.getElementById("citationChart").getContext('2d');
    var graphData = {
        type: "horizontalBar",
        data: {
            labels: allLabels,
            datasets: [{
                label: "Citations",
                backgroundColor: "#1d4fb2",
                borderColor: "#1d4fb2",
                data: Object.values(citationGraphObj)
            }]
        },
        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{ ticks: { mirror: true, padding: -10 } }]
            },
            responsive: true,
            animation: {
                onProgress() {
                    const chartInstance = this.chart;
                    const ctx = chartInstance.ctx;
                    const dataset = this.data.datasets[0];
                    const meta = chartInstance.controller.getDatasetMeta(0);

                    Chart.helpers.each(meta.data.forEach((bar, index) => {
                        const label = this.data.labels[index];
                        const labelPositionX = 20;
                        const labelWidth = ctx.measureText(label).width + labelPositionX;

                        ctx.textBaseline = 'middle';
                        ctx.textAlign = 'left';
                        ctx.fillStyle = 'black';
                        ctx.fillText(label, labelPositionX, bar._model.y);
                    }));
                }
            }
        }
    };
    var strGraphData = JSON.stringify(graphData);
    citationChart = new Chart(citationChartElemtent, graphData);
    document.getElementById("zoomInCitationGraph").onclick = function () {
    localStorage.setItem('temp', strGraphData);
        window.open('./assets/zoomGraphs.html');
    };
}


function updateSrLawyersPreviewTable(lawyersList) {
    if (lawyersList == undefined)
        return
    $("#lawyerStatsPreviewBody").html("")

    $("#th1").html("Lawyer's Name")
    $("#th2").html("Lawyer's Win")
    $("#th3").html("Lawyer's Loss")
    $("#th4").html("Lawyer's Winning %")

    for (i = 0; i < 3; i++) {
        lawyer = lawyersList[i]
        winningPer = parseInt(((lawyer.lawyerWins) / (lawyer.lawyerWins + lawyer.lawyerLoss)) * 100)
        if (lawyer.lawyerName != "")
            $("#lawyerStatsPreviewBody").append(
                `<tr><td>${lawyer.lawyerName}</td>
          <td>${lawyer.lawyerWins}</td>
          <td>${lawyer.lawyerLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
    };
}
function updateSrLawyersModal(lawyersList) {
    // alert(lawyersList)
    if (lawyersList == undefined)
        return

    $('#statsTable').DataTable().destroy()
    $("#srLawyersTableBody").html("")

    $("#th1").html("Lawyer's Name")
    $("#th2").html("Lawyer's Win")
    $("#th3").html("Lawyer's Loss")
    $("#th4").html("Lawyer's Winning %")

    lawyersList.forEach(lawyer => {
        winningPer = parseInt(((lawyer.lawyerWins) / (lawyer.lawyerWins + lawyer.lawyerLoss)) * 100)
        // if(winningPer > 100)
        if (lawyer.lawyerName != "")
            $("#srLawyersTableBody").append(
                `<tr><td>${lawyer.lawyerName}</td>
          <td>${lawyer.lawyerWins}</td>
          <td>${lawyer.lawyerLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
    });

    $('#statsTable').DataTable({
        "order": [
            [1, "desc"]
        ]
    });
}

function updateLawyersModal(lawyersList) {
    // alert(lawyersList)
    if (lawyersList == undefined)
        return

    $('#statsTable').DataTable().destroy()
    $("#srLawyersTableBody").html("")

    $("#th1").html("Lawyer's Name")
    $("#th2").html("Lawyer's Win")
    $("#th3").html("Lawyer's Loss")
    $("#th4").html("Lawyer's Winning %")

    lawyersList.forEach(lawyer => {
        winningPer = parseInt(((lawyer.lawyerWins) / (lawyer.lawyerWins + lawyer.lawyerLoss)) * 100)
        // if(winningPer > 100)
        if (lawyer.lawyerName != "")
            $("#srLawyersTableBody").append(
                `<tr><td>${lawyer.lawyerName}</td>
          <td>${lawyer.lawyerWins}</td>
          <td>${lawyer.lawyerLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
    });

    $('#statsTable').DataTable({
        "order": [
            [1, "desc"]
        ]
    });
}

function updatePartyStatsPreviewTable(partyList) {
    if (partyList == undefined)
        return
    $("#partyStatsPreviewBody").html("")

    $("#th1").html("Party Name")
    $("#th2").html("Party Wins")
    $("#th3").html("Party Losses")
    $("#th4").html("Party Winning %")

    for (i = 0; i < 3; i++) {
        party = partyList[i]
        winningPer = parseInt(((party.partyWins) / (party.partyWins + party.partyLoss)) * 100)
        if (party.partyName != "")
            $("#partyStatsPreviewBody").append(
                `<tr><td>${party.partyName}</td>
          <td>${party.partyWins}</td>
          <td>${party.partyLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
    };
}
function updatePartyStatsModal(partyList) {
    if (partyList == undefined)
        return

    // localStorage.setItem("partyList",partyList)
    partyListGlobal = partyList
    $('#statsTable').DataTable().destroy()
    $("#srLawyersTableBody").html("")

    $("#th1").html("Party Name")
    $("#th2").html("Party Win")
    $("#th3").html("Party Loss")
    $("#th4").html("Party Winning %")

    partyList.forEach(party => {
        winningPer = parseInt(((party.partyWins) / (party.partyWins + party.partyLoss)) * 100)
        // if(winningPer > 100)
        if (party.partyName != "")
            $("#srLawyersTableBody").append(
                `<tr><td>${party.partyName}</td>
          <td>${party.partyWins}</td>
          <td>${party.partyLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
    });

    $('#statsTable').DataTable({
        "order": [
            [1, "desc"]
        ]
    });
}

function updateHearingStatsTable(hearingList) {
    if (hearingList == undefined)
        return
    $("#hearingStatsPreviewBody").html("")

    $("#th1").html("Judge Name")
    $("#th2").html("Less than 2")
    $("#th3").html("Less than 4")
    $("#th4").html("More than equal to 4")

    for (i = 0; i < 3; i++) {
        hearing = hearingList[i]
        if (hearing.section != "")
            $("#hearingStatsPreviewBody").append(
                `<tr><td>${hearing.section}</td>
                <td>${hearing.lessThan2}</td>
                <td>${hearing.lessThan4}</td>
                <td>${hearing.moreThan4}</td>
                </tr>`)
    };
}
function updateHearingStatsModal(hearingList) {
    if (hearingList == undefined)
        return

    // localStorage.setItem("partyList",partyList)
    hearingListStatsGlobal = hearingList
    $('#statsTable').DataTable().destroy()
    $("#srLawyersTableBody").html("")

    $("#th1").html("Judge Name")
    $("#th2").html("Less than 2")
    $("#th3").html("Less than 4")
    $("#th4").html("More than equal to 4")

    hearingList.forEach(hearing => {
        // if(winningPer > 100)
        if (hearing.section != "")
            $("#srLawyersTableBody").append(
                `<tr><td>${hearing.section}</td>
          <td>${hearing.lessThan2}</td>
          <td>${hearing.lessThan4}</td>
          <td>${hearing.moreThan4}</td>
          </tr>`)
    });

    $('#statsTable').DataTable({
        "order": [
            [1, "desc"]
        ]
    });
}

function updateCaseTypeData(caseTypeData) {
    if ($("#court").val() == "NCLT")
        document.getElementById("caseTypeParent").style.display = "block"
    else
        document.getElementById("caseTypeParent").style.display = "none"
}

// function getRandomColorArray(length) {
//     return ['#00d4ff', '#fcff00', '#00f6ff', '#f29544', '#fcdec0', '#81cfe0', 'lime', 'orange', 'purple', 'red', 'teal', 'white', 'yellow']
// }

function getRandomColorArray(length) {
    return ['navy', 'lime', 'orange', 'purple', 'red', 'teal', 'yellow', 'indigo']
}

function getUniqueArray(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

//Search
function updateSearchResults(searchResults) {
    // list of cards
    var cardsList = '<ul class="">';
    for (var i = 0; i < searchResults.length; i += 1) {
        cardsList += `<li id="card` + i + `"onclick="openJudgement(\`${searchResults[i].judge}\`,\`${searchResults[i].url}\`,${i})"> <fieldset class="shadow my-4">   <legend>${searchResults[i].appellantName} vs ${searchResults[i].respondantName} </legend>  
         <div class="date">${searchResults[i].date} </div>   <div class="card-body">   <h5 class="card-title">${searchResults[i].court}
            <span class="float-right">Bench: ${searchResults[i].judge}</span>   </h5>   <p class="card-text" style="cursor:pointer">${searchResults[i].headline}
             </p>  </div> </fieldset> </li>`;
    }
    cardsList += '</ul>';

    // input search field
    // var searchField = '<input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search for cases" aria-label="Search"> <div class="input-group-append"> <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey"aria-hidden="true"></i></span></div>';

    document.getElementById('cards').innerHTML = cardsList;

    // $('#cards').show();
    $('html, body').animate({
        scrollTop: $("#cards").offset().top - 100
    }, 0);
    
    // document.getElementById('scrollFix').innerHTML = searchField;
}

function openJudgement(judge, url, index) {
    localStorage.setItem("judge", judge)
    localStorage.setItem("url", url)
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'assets/judgement.html';
    a.click();
    // window.location.href = "
}

$('#data_display #showResult').click(function(){
    var resWindow = window.open(window.location.href);
    resScript = document.createElement('script');

    function injectThis() {

        var updateScript = document.createElement("script");
        updateScript.src = "./assets/UpdateUI.js";
    
        var apiScript = document.createElement("script");
        apiScript.src = "./assets/api.js";
    
        document.getElementById('page-content').innerHTML = '<div class="px-5 py-2" id="cards">' + window.opener.document.getElementById('cards').innerHTML + '</div>';     
        $('#Search').focus();
        document.getElementById('cards').appendChild(updateScript);
        document.getElementById('cards').appendChild(apiScript);
    }

    resScript.innerHTML = '(' + injectThis.toString() + '());';
    resWindow.onload = function () {
        // this.document.body.appendChild(initScript);
        this.document.body.appendChild(resScript);
    };
});