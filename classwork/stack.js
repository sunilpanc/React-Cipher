class Stack{
    constructor()
    {
        this.stack=[];
    }
    add(item){
        this.stack.push(item);
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    delete(){
        if(this.isEmpty())
        {
            return "Stack is empty!!";
        }
        return this.stack.pop();
    }
    topElement(){
        return this.stack[this.stack.length-1];
    }
    printAll(){
        this.stack.forEach((item)=>{
            console.log(item);
        })
    }
}

const s = new Stack();
s.add(10);
s.add(15);
s.add(20);
s.printAll();
console.log('Deleted element', s.delete());
console.log('Top element : ', s.topElement());
