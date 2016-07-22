var toRPN = function(){
    function convert(calculation){
	var tokens = calculation.split(" ");
	for(var i = 0; i < tokens.length; i++){
	    
	    var token = tokens[i];
	    if(Number.isInteger(parseInt(token))){
		//add to the output queue
		queue.add(token);
	    }else if(isOperator(token)){
		while (precidence[stack.peek()] >=  precidence[token]){
		    //pop top operator in the stack and add to the output queue
		    queue.add(stack.pop());
		    
		}
		//add token to the operator stack
		stack.add(token);
		
	    }else if(token === "("){
		//push the token to the operator stack
		stack.add(token);
	    }else if(token === ")"){
		//get operator from the stack
		while(!isLeftParan(stack.peek())){
		    //pop from the stack and add to queue
		    queue.add(stack.pop());
		    
		}
		//pop left paran as well
		stack.pop();
	    }
	}
	while(stack.peek()){
	    queue.add(stack.pop());
	}
	
    }
    function isLeftParan(token){
	if(token === "("){
	    return true;
	}
	return false;
    }
    function isOperator(token){
	if(token === "+" || token === "-" || token === "*" || token === "/"){
	    return true;
	}
	return false;
    }
    
   
    
    var precidence = {
	"*" : 3,
	"/" : 3,
	"+" : 2,
	"-" : 2
    }
    return convert;
}();
	
