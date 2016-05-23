var id = 0;
var text = ["AC", "CE", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "Ans", "="];
var getRow = function(item1, item2, item3, item4){
    var each = "";
    for(var i = 0; i < 4; i++){
	each += "<h3 class='row_item' id='i"+id+"'>"+text[id]+"</h3>";
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
