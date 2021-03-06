class StackObj{
    constructor(){
        this.count = 0;
        this.items = {};
    }
    //methods
    push(...arr){
        arr.forEach(item=>{
            this.items[this.count] = item;
            this.count++;
        })
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        let item = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return item;
    }
    peek(){
        if(this.isEmpty())
            return undefined;
        return this.items[this.count-1];
    }
    isEmpty(){
        return (this.count>0)?(false):(true);
    }
    size(){
        return this.count;
    }
    clear(){
        this.count = 0;
        this.items = {};
    }
}