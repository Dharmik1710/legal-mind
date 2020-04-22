let rootUrl = "https://api.legalmind.tech:8041"
// alert("sd")
// getJudgementData()
function getJudgementData() {
    // document.getElementById("fullScreenLoader").style.display = "block";
    if(!localStorage.getItem("url").includes("nclat"))
    document.getElementById("judgement").innerHTML = `<iframe src="https://api.legalmind.tech:8041/judgementData/Judgement.pdf?url=${localStorage.getItem("url")}" frameborder="0" height="1000px" width="1200px"></iframe>`

    let url = `${rootUrl}/judgementData/getJudgementData`;

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                data = JSON.parse(req.responseText);
                console.log(data)
                setPastOrders(data.pastOrders)
                setActs(data.acts)
                setCitations(data.citations)
                setStats(data.stats)
                setCaseData(data.caseData)
                if (data.caseData.court == "NCLT") {
                    document.getElementById("judgement").innerHTML = `<iframe src="https://api.legalmind.tech:8041/judgementData/Judgement.pdf?url=${localStorage.getItem("url")}" frameborder="0" height="1000px" width="1200px"></iframe>`
                } else
                    document.getElementById("judgementBody").innerHTML = data.data
                // document.getElementById("fullScreenLoader").style.display = "none";
            } else {
                // Handle error case
            }
        }
    };
    req.send(JSON.stringify({ "judge": localStorage.getItem("judge"), "url": localStorage.getItem("url") }));
}

function setPastOrders(pastOrdersArrObj) {
    if (isEmpty(pastOrdersArrObj)) {
        $("#pastHearingBody").html("Not Past Orders Found")
        return
    }
    pastHearingBodyHTML = ""
    pastOrdersArrObj.forEach((passOrder, index, array) => {
        pastHearingBodyHTML += `<div class="p-2"><a target="_blank" href="${passOrder.url}">${passOrder.date}</a></div>`
    })
    $("#pastHearingBody").html(pastHearingBodyHTML)
}

function setActs(actsArr) {
    if (isEmpty(actsArr)) {
        $("#actBody").html("No Citations Case Laws Found")
        return
    }
    pastActsBodyHTML = ""
    actsArr.forEach((act, index, array) => {
        pastActsBodyHTML += `<div class="p-2"><a target="_blank" href="https://ibbi.gov.in//webadmin/pdf/legalframwork/2017/Jul/IBC%202016.pdf#page=26">${act}</a></div>`
    })
    $("#actBody").html(pastActsBodyHTML)
}

function setCitations(citations) {
    if (isEmpty(citations)) {
        $("#citationBody").html("No Citations Found")
        return
    }
    pastHearingBodyHTML = ""
    citations.forEach((citation, index, array) => {
        pastHearingBodyHTML += `<div class="my-2"><a target="_blank" href="judgement.html">${citation}</a></div>`
    })
    // localStorage.setItem("judge", "Justice S.J. Mukhopadhaya Chairperson")
    // localStorage.setItem("url", "https://nclat.nic.in/Useradmin/upload/8459145675c51981d39a86.pdf")
    $("#citationBody").html(pastHearingBodyHTML)
}


function setStats(statsObj) {
    statsBodyHTML = ""

    if (isEmpty(statsObj)) {
        return  }

    if (!isEmpty(statsObj.caseNumber))
        statsBodyHTML += `<div class="my-2"><a>Case No: ${statsObj.caseNumber}</a></div>`


    if (!isEmpty(statsObj.praticeArea))
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Pratice Area: ${statsObj.praticeArea}</a></div>`

    if (!isEmpty(statsObj.verdictType))
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Verdict Type: ${statsObj.verdictType}</a></div>`

    if (!isEmpty(statsObj.isProOC)) {
        proOC = statsObj.isProOC ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Operational Creditor: ${proOC}</a></div>`
    }

    if (!isEmpty(statsObj.isProFC)) {
        proFC = statsObj.isProFC ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Financial Creditor: ${proFC}</a></div>`
    }

    if (!isEmpty(statsObj.isBankInvoked)) {
        isBankInvoked = statsObj.isBankInvoked ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Bank Invoked: ${isBankInvoked}</a></div>`
    }


    if (!isEmpty(statsObj.isWithdrawalOfPlan)) {
        isWithdrawalOfPlan = statsObj.isWithdrawalOfPlan ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Plan Withdrawal: ${isWithdrawalOfPlan}</a></div>`
    }


    if (!isEmpty(statsObj.isOCDispute)) {
        isOCDispute = statsObj.isOCDispute ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Oper. Cred. Dispute: ${isOCDispute}</a></div>`
    }


    if (!isEmpty(statsObj.isCost)) {
        isCost = statsObj.isCost ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Cost Involved: ${isCost}</a></div>`
    }

    if (!isEmpty(statsObj.isOveruled)) {
        isOveruled = statsObj.isOveruled == "true" ? "Yes" : "No"
        statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Overuled: ${isOveruled}</a></div>`
    }
    // if (!statsObj.caseNumber)
    //     statsBodyHTML += `<div class="my-2"><a target="_blank" href="">Case No: ${statsObj.}</a></div>`
    $("#statsBody").html(statsBodyHTML)


}

function setCaseData(caseData) {

    caseTitle = ""
    if (!isEmpty(caseData.appellantName))
        caseTitle += caseData.appellantName
    else
        caseTitle += "..."
    caseTitle += " vs "
    if (!isEmpty(caseData.respondantName))
        caseTitle += caseData.respondantName
    else
        caseTitle += "..."
    $("#caseTitle").html(caseTitle)

    if (!isEmpty(caseData.court))
        $("#court").html(caseData.court)

    if (!isEmpty(caseData.date))
        $("#date").html(caseData.date)

    if (!isEmpty(caseData.judge))
        $("#judge").html(caseData.judge)


}

function isEmpty(obj) {
    return (obj == null || obj == undefined || obj.length == 0)
} 