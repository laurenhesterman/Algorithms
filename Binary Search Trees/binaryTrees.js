function BST(){
    this.root = null;
}

BST.prototype.findMin = function(){
    if(!this.root){
        return false;
    }
    return this.root.min();
}
BST.prototype.findMax = function(){
    if(!this.root){
        return false;
    }
    return this.root.min();
}
BST.prototype.findSize = function(){
    if(!this.root){
        return 0;
    }
    return this.root.size();
}

BST.prototype.contain = function(val){
    if(!this.root){
        return false
    }
    var current = this.root;
    while(current){
        if(current.val==val){
            return true;
        } else if (current.val > val) {
            current = current.left;
        } else {
            current = current.right
        }
    }
    return false;
}

BST.prototype.add = function(val){
    if (!this.root){
        this.root = new Node(val);
    }
    var current = this.root;
    while (current){
        if (current.val > val){
            if(!current.left){
                current.left = new Node(val);
                break;
            } else {
                current = current.left
            }
        }
        else {
            if (!current.right){
                current.right = new Node(val);
                break;
            } else {
                current = current.right;
            }
        }
    }
}

BST.prototype.max = function(){
    if(!this.root){
        return false;
    }
    current = this.root;
    while(current){
        if (current.right){
            current = current.right
        }else{
            return current
        }
    }
}


function Node(val){
    this.left = null;
    this.right = null;
    this.val = val;
}
Node.prototype.min = function(){
    if(this.left){
        return this.left.min();
    }else{
        return this.val;
    }
}
Node.prototype.max = function(){
    if(this.right){
        return this.right.max();
    }else{
        return this.val;
    }
}
Node.prototype.size = function(){
    var right = 0;
    var left = 0;
    if(this.left){
        left += this.left.size()+1;
    }
    if (this.right){
        right += this.right.size()+1;
    }
    return right + left;
}

tree = new BST();

tree.add(5);
tree.add(10);
tree.add(13);
tree.add(15);
tree.add(17);
tree.add(1);
tree.add(7);
tree.add(9);


console.log(tree);
console.log(tree.findSize());