const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    enqueue(data) {
        if(!this.hasRoom()) throw new Error('')
        this.queue.addToTail(data);
        this.size++;
        console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    }
    dequeue() {
        if(this.isEmpty()) throw new Error('Queue is empty!');
        const data = this.queue.removeHead();
        this.size--;
        console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
        return data;
    }
    isEmpty() {
        return this.size === 0;
    }
}