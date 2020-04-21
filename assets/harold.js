$( document ).ready(function() {

    var quesList = [];
    var ques;
    var quesReq = new XMLHttpRequest();
    quesReq.open('GET', './assets/qAndAns.json');
    quesReq.onreadystatechange = function () {
        if(quesReq.readyState === 4) {
            var ques = JSON.parse(quesReq.responseText);
            for (var i=0; i<ques.length; i += 1) {
                quesList.push(ques[i].Ques);
            }
            
            var newScript = document.createElement("script");
            newScript.src = "./assets/harold.js";
            document.getElementsByTagName("body").appendChild = newScript;
        }
    };
  
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer").style.cursor = "pointer";
    quesReq.send();
    var l="";
    autocomplete(document.getElementById("ask1"), quesList);

    document.getElementById("askQues").addEventListener("click", function(){
        document.getElementById("answer").style.display = "block";
        let asked = document.getElementById("ask1").value;
        let qh = document.getElementById("quesHead");
        let ab = document.getElementById("ansBody");

        var quesReq = new XMLHttpRequest();
        quesReq.open('GET', './assets/qAndAns.json');
        quesReq.onreadystatechange = function () {
            if(quesReq.readyState === 4) {
                var ques = JSON.parse(quesReq.responseText);
                for (var i=0; i<ques.length; i += 1) {
                    if(ques[i].Ques === asked){
                        qh.innerHTML = asked;
                        ab.innerHTML = ques[i].Ans;
                        link = ques[i].link;
                    }
                }               
            }
        };
        quesReq.send();        
    })
});

$("#answer").click(function(){
    window.open(link);
});