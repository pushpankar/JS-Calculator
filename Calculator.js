var id = 0;
var text = ["AC", "=", "0", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "Ans", "="];
var getRow = function(item1, item2, item3, item4){
    var each = "";
    for(var i = 0; i < 4; i++){
	each += "<button onclick='takeInput(this)' class='mButton' id='i"+id+"'>"+text[id]+"</button>";
	id++;
    }
    return "<div class='row'>"+each+"</div>";
}

var init = function(){
    var row =  "";
    for(var i = 0; i < 4; i++){
	row += getRow();
    }
    var element = document.getElementsByClassName("buttons");
    //  element.innerHTML = "hello";
    $(".buttons").html(row);
    console.log("Testing");
    
}
//window.onload = init;
document.addEventListener("DOMContentLoaded", init);
