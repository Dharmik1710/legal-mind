function analytics(){
  regularPage();
  //  XMLHttpRequest for analytics page
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', './assets/analyticsNEW.html');
  myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4) {
      document.getElementById('page-content').innerHTML = myRequest.responseText;

      //  loading initial select data script dynamically
      var newScript = document.createElement("script");
      newScript.src = "./assets/init.js";
      document.getElementById("data_display").appendChild(newScript);

      //  loading initial graph data script dynamically
      var newScript = document.createElement("script");
      newScript.src = "./assets/graphs.js";
      document.getElementById("data_display").appendChild(newScript);

      var newScript = document.createElement("script");
      newScript.src = "./assets/UpdateUI.js";
      document.getElementById("data_display").appendChild(newScript);

      var newScript = document.createElement("script");
      newScript.src = "./assets/api.js";
      document.getElementById("data_display").appendChild(newScript);

      var newScript = document.createElement("script");
      newScript.src = "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.js";
      document.getElementById("lawyerTable").appendChild(newScript);
    }
  };

  myRequest.send();
}

function askHarold(){
  document.querySelector('.topbar').style.display = 'none';
  //  XMLHttpRequest for askArnold.html page
  var askReq = new XMLHttpRequest();
  askReq.open('GET', './assets/askHarold.html');
  askReq.onreadystatechange = function () {
      if (askReq.readyState === 4) {
        document.getElementById('page-content').innerHTML = askReq.responseText;

        var newScript = document.createElement("script");
        newScript.src = "./assets/harold.js";
        document.getElementById("page-content").appendChild(newScript);

        var newScript = document.createElement("script");
        newScript.src = "./assets/autocomplete/autocomplete.js";
        document.getElementById("page-content").appendChild(newScript);
      }
  };
  
  askReq.send();
}

function cirRegGuide(){
  regularPage();
  //  XMLHttpRequest for notification.html page
  var req = new XMLHttpRequest();
  req.open('GET', './assets/notification.html');
  req.onreadystatechange = function () {
      if (req.readyState === 4) {
        document.getElementById('page-content').innerHTML = req.responseText;

        var newScript = document.createElement("script");
        newScript.src = "./assets/notification.js";
        document.getElementById("page-content").appendChild(newScript);

        // var newScript = document.createElement("script");
        // newScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        // document.getElementById("page-content").appendChild(newScript);

      }
  };
  req.send();
}

function tandc(){
  document.querySelector(".topbar").style.display="none";
  document.querySelector("#page-content").style.margin=0;
  
  //  XMLHttpRequest for askArnold.html page
  var tandcReq = new XMLHttpRequest();
  tandcReq.open('GET', './assets/tandc.html');
  tandcReq.onreadystatechange = function () {
      if (tandcReq.readyState === 4) {
        document.getElementById('page-content').innerHTML = tandcReq.responseText;
      }
  };
  tandcReq.send();
}


$(document).ready(function () {
  $("#popup-sub-brand div").click(function(){
    document.getElementById('sub-brand').innerHTML = this.innerHTML;
  }); 
  function notify(){
    document.querySelector('#notifyDropdown').classList.toggle('show');
    document.querySelector('#notifyDropdown .dropdown-list').classList.toggle('show');
  }
});

function regularPage(){
  document.querySelector('.topbar').style.display = 'flex';
  document.getElementById('page-content').style.marginTop = '71px';
}