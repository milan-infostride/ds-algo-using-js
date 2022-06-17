class Queue{
    constructor(){
        this.count = 0;
        this.lowerCount = 0;
        this.items = {}
    }
    //methods
    enqueue(item){
        this.items[this.count] = item;
        this.count++;
    }
    dequeue(){
        if(this.isEmpty())
            return undefined;
        let val = this.items[this.lowerCount];
        delete this.items[this.lowerCount];
        this.lowerCount++;
        return val;

    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowerCount];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.count-this.lowerCount;
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