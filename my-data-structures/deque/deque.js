class Deque{
    constructor(){
        
        this.count = 0;
        this.items = {};
        this.lowerCount = 0;
    }
    //methods
    push(item){
        this.items[this.count] = item;
        this.count++;
    }
    pop(){
        if(this.isEmpty())
            return undefined;
        let val = this.items[this.count-1];
        
        delete this.items[this.count-1];
        this.count--;
        return val;

    }
    unshift(item){
        this.lowerCount--;
        this.items[this.lowerCount] = item;
    }
    shift(){
        if(this.isEmpty())
            return undefined;
        if(this.size() == 1){
            let val = this.pop();
            this.clear();
            return val;
        }
        else{
            this.lowerCount++;
            let val = this.items[this.lowerCount];
            return val;
        }
    }
    peekFront(){
        if(this.isEmpty())
            return undefined;
        return this.items[this.lowerCount];
    }
    peekEnd(){
        if(this.isEmpty())
            return undefined;
        return this.items[this.count-1];
    }
    isEmpty(){
        return this.size() == 0;
    }
    size(){
        return this.count + Math.abs(this.lowerCount);
    }
    clear(){
        this.count = 0;
        this.lowerCount = 0;
        this.items = {};
    }
    toString(){
        return JSON.stringify(this.items);
    }

}