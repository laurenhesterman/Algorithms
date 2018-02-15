function palindrome(DLL){
    if(!DLL.head){
        return null;
    }
    if(DLL.head == DLL.tail){
        return DLL;
    }
    var front = DLL.head;
    var end = DLL.tail;
    while(front.val === end.val){
        if (front == end || front.next == end){
            return true;
        }
        else {
            front = front.next
            end = end.prev
        }
    }
    return false;
}

function DLL(){
    
}


palindrome();