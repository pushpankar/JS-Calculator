/*
 * This file will do all the calculation work in the calculator app.
 */

var takeInput = function(obj){
  console.log(obj.id);
  var text = document.getElementById(obj.id).innerHTML;
  var currentText = document.getElementById("result").innerHTML ;
  document.getElementById("result").innerHTML = currentText + text;
  work[obj.id]();
}

var work = {
  i0 : function(){document.getElementById("result").innerHTML="";},
  i1 : function(){
    var text = document.getElementById("result").innerHTML;
    var newText = text.substr(0, text.length - 3);
    console.log(newText);
    document.getElementById("result").innerHTML = newText;
  }
}

