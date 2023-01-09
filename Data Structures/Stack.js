const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }
    push(data) {
        if(!this.hasRoom()) throw new Error('Stack is full');
        this.stack.addToHead(data);
        this.size++;
    }
    pop() {
        if(this.isEmpty()) return null;
        this.size--;
        return this.stack.removeHead();
    }
    peek() {
        if(this.isEmpty()) return null;
        return this.stack.head.data;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    isEmpty() {
        return this.size === 0;
    }
}