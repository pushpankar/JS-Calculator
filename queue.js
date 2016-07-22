var queue = function(){
    var head = null;
    function peek(){
	if(head !== null){
	    return head.value;
	}
    }
    function pop(){
	var currentNode = head;
	if(currentNode === null){
	    return;
	}
	var tempVal = head.value;
	head = head.next;
	return tempVal;
    }
    function add(value){
	var currentNode = head;
	if(head !== null){
	    while(currentNode.next !== null){
		currentNode = currentNode.next;
	    }
	    currentNode.next = createNewNode(currentNode, value);
	}else{
	    head = createNewNode(null,value);
	}
	
    }
    function show(){
	var currentNode = head;
	while(currentNode !== null){
	    console.log(currentNode.value);
	    currentNode = currentNode.next
	}
    }
    
    function createNewNode(prev,value){
    
	return {
	    next: null,
	    prev : prev,
	    value : value
	}
    }
     return {
	"peek": peek,
	"pop" : pop,
	"add" : add,
	"show" : show
    }
	
	
}();
    
