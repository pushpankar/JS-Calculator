var stack = function(){
    var head = null;
    function add(value){
	if(head !== null){
	    head.next = createNode(head, value);
	    head = head.next;
	    console.log("created new node" + head.value);
	}else{
	    head = createNode(null, value);
	    console.log("created head" + head.value);
	}
    }
    function pop(){
	if(head === null){
	    return;
	}
	var tempVal = head.value;
	head = head.prev;
	if(head !== null){
	    
	    head.next = null;
	}
	return tempVal;
    }
    function peek(){
	if(head !== null){
	    return head.value;
	}
    }
    
    function createNode(previous, val){
	return {
	    next : null,
	    prev : previous,
	    value : val
	}
    }
    function show(){
	var currentNode = head;
	while(currentNode !== null){
	    console.log(currentNode.value);
	    currentNode = currentNode.prev;
	}
    }
    return {
	"peek": peek,
	"pop" : pop,
	"add" : add,
	"show" : show
    }
}();
