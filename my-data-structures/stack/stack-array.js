class Stack{
    constructor(){
        this.items = [];
    }
    push(...arr){
        this.items.push.apply(this.items,arr);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return (this.items.length>0)?(false):(true);
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items.length = 0;
    }
}