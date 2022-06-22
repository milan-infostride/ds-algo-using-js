//import {defaultEquals} from '../util/defaultequals';
//import {Node} from './node';
class LinkedList{
    constructor(eqFunction = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.eqFunction = eqFunction;
    }
    //methods
    push(element){
        let node = new Node(element);
        let current;
        if(this.head==null){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next!=null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
        //o(n)
    }
    // insert(element,position){
    //     let node  = new Node(element);
    //     let current;
    
    //     if(position==0||this.head==null){
    //         this.head=node;
    //     }
    //     else{
    //         for(let c=0;c<position;c++){
    //             current = current.next;
    //         }
    //         node.next = current.next;
    //         current.next = node;
    //     }
    //     this.count++;
    // }
    removeAt(index){
        if(index>=0 && index<this.count){
            let current;
            if(index==0){
                current = {...this.head};
                this.head = this.head.next;
            }
            else{
                //current = this.head;
                let prev =  this.getNodedAt(index-1);
                let current = prev.next;
                prev = current.next;
            }
            this.count--;
            return current.element;
        }
        else{
            return undefined;
        }
        //O(n)
    }
    getNodedAt(index){
        if(index>=0&&index<this.count){
            let current;
            if(index==0){
                return this.head;
            }
            else{
                current = this.head;
                for(let cnt = 0; cnt<index;cnt++){
                    current = current.next;
                }
                return current;
            }
        }
        else{
            return undefined;
        }
        //o(n)
    }
    insert(element,index){
        let node = new Node(element);
        if(index>=0&&index<=this.count){
            if(index==0){
                node.next = this.head;
                this.head = node;
            }
            else{
                let prev = this.getNodedAt(index-1);
                node.next = prev.next;
                prev.next = node;
            }
            this.count++;
            return true;
        }
        else{
            return false;
        }
        //O(n)
    }
    indexOf(element){
        let i = 0;
        let current = this.head;
        while(current!=null){
            if(this.eqFunction(element,current.element)){
                return i;
            }
            current = current.next;
            i++;
        }
        
        return -1;
        // O(n)
    }
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
        //O(n)
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size() == 0;
    }
    getHead(){
        return this.head;
    }
    toString(){
        let objstring = `${this.head.element}`;
        let current = this.head.next;
        while(current!=null){
            objstring = `${objstring},${current.element}`;
            current = current.next;
        }
        return objstring;
        //O(n)
    }
}