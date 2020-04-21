$('#notOpt').change(function(){ 
    var value = $(this).val();

    if(value != 'none') {
        document.getElementById('notOptLabel').style.visibility = "hidden";
    } else {
        document.getElementById('notOptLabel').style.visibility = "visible";
    }

    var req = new XMLHttpRequest();
    req.open('GET', './assets/notification.json');
    req.onreadystatechange = function(){
        if(req.readyState === 4){
            var notObj = JSON.parse(req.responseText);
            var cardlist = '';
            for (var obj in notObj){
                if(notObj[obj]['option'] === value){
                    cardlist += '<div class="card shadow mb-4"><div class="card-header py-3 d-flex justify-content-between"><div class="m-0 font-weight-bold text-primary h6" id="cardHead">' + notObj[obj]['title'] + '</div><div class="px-3">' + notObj[obj]['date'] + '</div></div><div class="card-body" id="ansBody"><a href="' + notObj[obj]['link'] + '">' + notObj[obj]['link'] + '</a></div></div>';
                }
            }
            document.getElementById("notCards").innerHTML = cardlist;
        }
    }
    req.send();
});