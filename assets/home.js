function analytics(){
 
  document.querySelector(".topbar").style.display="flex";
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

  //    loading initial graph data script dynamically
      var newScript = document.createElement("script");
      newScript.src = "./assets/graphs.js";
      document.getElementById("data_display").appendChild(newScript);

      var newScript = document.createElement("script");
      newScript.src = "./assets/UpdateUI.js";
      document.getElementById("data_display").appendChild(newScript);

      var newScript = document.createElement("script");
      newScript.src = "./assets/api.js";
      document.getElementById("data_display").appendChild(newScript);
    }
  };

  myRequest.send();

  //  XMLHttpRequest for json file getting cards data
var req = new XMLHttpRequest();
req.open('GET', './assets/cards.json');
req.onreadystatechange = function () {
    if(req.readyState === 4) {
        var cards = JSON.parse(req.responseText);
        // list of cards
        var cardsList = '<ul class="">';
        for (var i=0; i<cards.length; i += 1) {
          cardsList += '<li id="card' + i + '">    <fieldset class="shadow my-5">   <legend>' + cards[i].title + '</legend>   <div class="date">' + cards[i].date + '</div>   <div class="card-body">   <h5 class="card-title mb-4">' + cards[i].courtName +   '<span class="float-right">Bench: ' + cards[i].bench + '</span>   </h5>   <p class="card-text">' + cards[i].content + '</p>   </div> </fieldset> </li>';
        }
    cardsList += '</ul>';
    document.getElementById('cards').innerHTML = cardsList;
  }
};

  req.send();
}

function askHarold(){
  document.querySelector(".topbar").style.display="none";
  //  XMLHttpRequest for askArnold.html page
  var askReq = new XMLHttpRequest();
  askReq.open('GET', './assets/askHarold.html');
  askReq.onreadystatechange = function () {
      if (askReq.readyState === 4) {
        document.getElementById('page-content').innerHTML = askReq.responseText;
      }
  };
  askReq.send();
}

var searchArray = ['search1', 'search 2', 'search 3', 'search 4', 'search 5', 'search 6', 'search 7'];

$(document).ready(function(){

    $("#Search").keyup(function(){
        var search = $(this).val();
        var searchedArr = [];
        if(search != ""){
          for(var i=0; i<searchArray.length; i++){
            if(searchArray[i].match(search)){
              searchedArr.append(searchedArr[i]);
            }
          }
        }
        var searchList = "<ul>"
        for(var i=0; i<searchedArr.length; i++){
          searchList += "<li>" + searchedArr[i] + "</li>";
        }
        searchList += "</ul>";

        document.getElementById("Search").innerHTML = searchList;
    });

});

// Set Text to search box and get details
function setText(element){

    var value = $(element).text();
    var userid = $(element).val();

    $("#txt_search").val(value);
    $("#searchResult").empty();

    // Request User Details
    $.ajax({
        url: 'getSearch.php',
        type: 'post',
        data: {userid:userid, type:2},
        dataType: 'json',
        success: function(response){

            var len = response.length;
            $("#userDetail").empty();
            if(len > 0){
                var username = response[0]['username'];
                var email = response[0]['email'];
                $("#userDetail").append("Username : " + username + "<br/>");
                $("#userDetail").append("Email : " + email);
            }
        }

    });
}
