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
  $(".brand-md #popup-sub-brand div").click(function(){
    console.log(document.getElementById('sub-brand').innerHTML);
    document.getElementById('sub-brand').innerHTML = this.innerHTML;
  }); 

  $('.brand-sm').css('display', 'none');
  $('.brand-md').css('display', 'flex');

  if($(window).width()<=1024){
    $('#page-top').addClass("sidebar-toggled");
    $('#leftSidebar').addClass("toggled");
    $('.brand-sm').css('display', 'none');
    $('.brand-md').css('display', 'flex')
  }

  if($(window).width()<=450){
    $('#Search').css('display', 'none');
    // let col_opt = document.querySelector('.topbar ul');
    // col_opt.style.display = 'none';

    $('.brand-sm').css('display', 'flex');
    $('.brand-md').css('display', 'none')

    $('#menuButton').css('display', 'none');
    $('#menu_btn_sm').attr('id', 'sidebarCollapse');
    $('.topbar .navbar-nav').css('display', 'none');

    $(".brand-sm #popup-sub-brand div").click(function(){
      console.log(document.querySelector('.brand-sm #sub-brand').innerHTML);
      document.querySelector('.brand-sm #sub-brand').innerHTML = this.innerHTML;
    });
  
  }  

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #cont').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

function regularPage(){
  document.querySelector('.topbar').style.display = 'flex';
  document.getElementById('page-content').style.marginTop = '71px';
}