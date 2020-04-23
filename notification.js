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
                    cardlist += `<a href="` + notObj[obj]['link'] + `" target="_blank">
                                    <div class="card shadow mb-4">
                                        <div class="card-body py-3 d-flex justify-content-between">
                                            <div class="px-3 col-2">` + notObj[obj]['date'] + `</div>
                                            <div class="m-0 col-10 font-weight-bold text-primary h6" id="cardHead">` + notObj[obj]['title'] + `</div>
                                        </div>
                                    </div>
                                </a>`;
                }
            }
            document.getElementById("notCards").innerHTML = cardlist;
        }
    }
    req.send();
});