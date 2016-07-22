/*
 * This file will do all the calculation work in the calculator app.
 */

var takeInput = function(obj){
    if(obj.id === "i0"){
	document.getElementById("result").innerHTML="";
    }else if(obj.id === "i1"){
	toRPN(document.getElementById("result").innerHTML);
	calc();
	document.getElementById("result").innerHTML = "" + stack.pop();
    }else{
	var text = document.getElementById(obj.id).innerHTML;
	if(obj.id === "i3" || obj.id === "i7" || obj.id === "i11" || obj.id === "i15"){
	    updateExpr(" " + text + " ");
	}else{
	    updateExpr(text);
	}
    }
}


function updateExpr(text){
    var elem = document.getElementById("result");
    elem.innerHTML = elem.innerHTML + text;
}
function calc(){
    while(queue.peek()){
	if(Number.isInteger(parseInt(queue.peek()))){
	    stack.add(parseInt(queue.pop()));
	}else{
	    var result;
	    var operator = queue.pop();
	    var num2 = stack.pop();
	    var num1 = stack.pop();
	    if(operator === "+"){
		result = num1 + num2;
		stack.add(result);
	    }else if(operator === "-"){
		result = num1 - num2;
		stack.add(result);
	    }else if(operator === "*"){
		result = num1 * num2;
		stack.add(result);
	    }else if(operator === "/"){
		result = num1 / num2;
		stack.add(result);
	    }
	}
    }
}
function isOperator(token){
    if(token === "+" || token === "-" || token === "*" || token === "/"){
	return true;
    }
    return false;
}

