function updateJudgeNamesData(pracAreaData) {
  var judge = document.getElementById("judge");
  for (let i = 0; i < pracAreaData.length; i++) {
      var option = document.createElement("option");
      option.text = pracAreaData[i];
      judge.add(option);
  }

  $('#judge').trigger('chosen:updated');
}

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
  if ($("#court").val() == "NCLT") {
      // $("#lawyerNameParent").css("display","none")
      $("#lawyerNameParent").hide()
      return;
  } else {
      $("#lawyerNameParent").show()
  }

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
}

function updatePraticeAreasData(pracAreaData) {
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
}

function updateProvisionsData(provisionData) {
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

  verdictTypeGraph.destroy()
  let graphElement = document.getElementById("verdictTypeGraph").getContext('2d')
  verdictTypeGraph = new Chart(graphElement, {
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
          },
          legend:{
            position: 'right'
          }
      }
  });
}

function updateIsCostGraph(isCostGraphObj) {
  updateDoghnutGraph("costGraph", costGraph, isCostGraphObj.true, isCostGraphObj.false, "Is Cost Involved Or Not")
}

function updateCountYearGraph(coutYearGraphObj) {
  //console.log(coutYearGraphObj)
  allLabels = getUniqueArray(Object.keys(coutYearGraphObj.posCount).concat(Object.keys(coutYearGraphObj.negCount)))
  allLabels = allLabels.sort()
  yearCountChart.destroy()
  c1 = document.getElementById("chart1").getContext('2d');

  for (let i = 0; i < allLabels.length; i++) {
      coutYearGraphObj.posCount[allLabels[i]] = coutYearGraphObj.posCount[allLabels[i]] == undefined ? 0 : coutYearGraphObj.posCount[allLabels[i]]
      coutYearGraphObj.negCount[allLabels[i]] = coutYearGraphObj.negCount[allLabels[i]] == undefined ? 0 : coutYearGraphObj.negCount[allLabels[i]]
  }
  // console.log(Object.values(coutYearGraphObj.posCount))

  yearCountChart = new Chart(c1, {
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
              label: "Total Verdicts",
              backgroundColor: "#1d4fb2",
              borderColor: "#1d4fb2",
              data: Object.values(coutYearGraphObj.posCount)
          }

          ]
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: false,
      }
  });
}

function updatePraticeAreaGraph(praticeGraphObj) {

  //console.log(praticeGraphObj)
  praticeAreaChart.destroy()
  c2 = document.getElementById("chart2").getContext('2d');
  praticeAreaChart = new Chart(c2, {
      type: "doughnut",
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
      }
  });
}
function updateIsOveruleGraph(isOveruleGraphObj) {
  updateDoghnutGraph("overuleGraph", overuleGraph, isOveruleGraphObj.true, isOveruleGraphObj.false, "Is Overuled Or Not")
}

function updateDoghnutGraph(graphElementId, graph, trueCount, falseCount, titleMessage) {
  // console.log("updateDoghnutGraph -> isCostGraphObj -> ", isCostGraphObj)
  graph.destroy()
  let graphElement = document.getElementById(graphElementId).getContext('2d')
  graph = new Chart(graphElement, {
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
  });
}

function updateTopAndLowLawyersModal(lawyersList) {
  // alert(lawyersList)
  if (lawyersList == undefined)
      return

  $('#topLawyersTable').DataTable().destroy()
  $("#topLawyersTableBody").html("")

  $("#th1").html("Lawyer's Name")
  $("#th2").html("Lawyer's Win")
  $("#th3").html("Lawyer's Loss")
  $("#th4").html("Lawyer's Winning %")

  lawyersList.forEach(lawyer => {
      winningPer = parseInt(((lawyer.lawyerWins) / (lawyer.lawyerWins + lawyer.lawyerLoss)) * 100)
      // if(winningPer > 100)
      if (lawyer.lawyerName != "")
          $("#topLawyersTableBody").append(
              `<tr><td>${lawyer.lawyerName}</td>
          <td>${lawyer.lawyerWins}</td>
          <td>${lawyer.lawyerLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
  });

  $('#topLawyersTable').DataTable({
      "order": [
          [1, "desc"]
      ]
  });
}

function updatePartyStatsModal(partyList) {
  if (partyList == undefined)
      return

  // localStorage.setItem("partyList",partyList)
  partyListGlobal = partyList
  $('#topLawyersTable').DataTable().destroy()
  $("#topLawyersTableBody").html("")

  $("#th1").html("Party Name")
  $("#th2").html("Party Win")
  $("#th3").html("Party Loss")
  $("#th4").html("Party Winning %")

  partyList.forEach(party => {
      winningPer = parseInt(((party.partyWins) / (party.partyWins + party.partyLoss)) * 100)
      // if(winningPer > 100)
      if (party.partyName != "")
          $("#topLawyersTableBody").append(
              `<tr><td>${party.partyName}</td>
          <td>${party.partyWins}</td>
          <td>${party.partyLoss}</td>
          <td>${winningPer}%</td>
          </tr>`)
  });

  $('#topLawyersTable').DataTable({
      "order": [
          [1, "desc"]
      ]
  });
}

function updateHearingStatsModal(hearingList) {
  if (hearingList == undefined)
      return

  // localStorage.setItem("partyList",partyList)
  hearingListStatsGlobal = hearingList
  $('#topLawyersTable').DataTable().destroy()
  $("#topLawyersTableBody").html("")

  $("#th1").html("Judge Name")
  $("#th2").html("Less than 2")
  $("#th3").html("Less than 4")
  $("#th4").html("More than equal to 4")

  hearingList.forEach(hearing => {
      // if(winningPer > 100)
      if (hearing.section != "")
          $("#topLawyersTableBody").append(
              `<tr><td>${hearing.section}</td>
          <td>${hearing.lessThan2}</td>
          <td>${hearing.lessThan4}</td>
          <td>${hearing.moreThan4}</td>
          </tr>`)
  });

  $('#topLawyersTable').DataTable({
      "order": [
          [1, "desc"]
      ]
  });
}


function updateIsProOC(isProOC) {
  if (isProOC)
      $("#judgeName").html($("#judgeName").html() + " (Pro OC)")
  else
      $("#judgeName").html($("#judgeName").html() + " (Pro OD)")
}

function updateCaseTypeData(caseTypeData) {
  if ($("#court").val() == "NCLT")
      document.getElementById("caseTypeParent").style.display = "block"
  else
      document.getElementById("caseTypeParent").style.display = "none"
}

function getRandomColorArray(length) {
  return ['indigo', 'green', 'maroon', 'navy', 'olive', 'blue', 'lime', 'orange', 'purple', 'red', 'teal', 'white', 'yellow']
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