const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(data) {
        const newHead = new Node(data);

        if(this.head !== null) {
            newHead.setNextNode(this.head);
            this.head.setPreviousNode(newHead);
        }
        this.head = newHead;
        if(this.tail === null) {
            this.tail = this.head;
        }
    }
    addToTail(data) {
        const newTail = new Node(data);
        
        if(this.tail !== null) {
            newTail.setPreviousNode(this.tail);
            this.tail.setNextNode(newTail);
        }
        this.tail = newTail;
        if(this.head === null) {
            this.head = this.tail;
        }
    }
    removeHead() {
        if(this.head === null) return;

        this.head = this.head.getNextNode();

        if(this.head !== null) {
            this.head.setPreviousNode(null); 
        } else {
            this.removeTail();
        }
    }
    removeTail() {
        if(this.tail === null) return;
        this.tail = this.tail.getPreviousNode();
        if(this.tail !== null) {
            this.tail.setNextNode(null);
        } else {
            this.removeHead();
        }
    }
    removeByData(data) {
        if(this.head === null) return;
        let currentNode = this.head;

        while(currentNode !== null && currentNode.data !== data) {
            currentNode = currentNode.getNextNode();
        }
        if(currentNode === null) return null;
        if(currentNode === this.head) this.removeHead();
        if(currentNode === this.tail) this.removeTail();
        currentNode.getPreviousNode().setNextNode(currentNode.getNextNode());
        currentNode.getNextNode().setPreviousNode(currentNode.getPreviousNode());
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}
