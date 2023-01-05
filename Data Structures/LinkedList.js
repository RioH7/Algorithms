class Node { 
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if(node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.')
        }
        this.next = node;
    }
    getNextNode() {
        return this.next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        this.head.setNextNode(currentHead);
    }
    addToTail(data) {
        let tail = this.head;
        if(!tail) {
            this.head = new Node(data);
        } else {
            while(tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }
    removeHead() {
        const removedHead = this.head;
        if(!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while(currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
    findNode(data) {
        let prevNode = null;
        let node = this.head;
        while(node !== null) {
            if(node.data === data) {
                break;
            }
            prevNode = node;
            node = node.getNextNode();
        }
        return [prevNode, node];
    }
    swapNodes(data1, data2) {
        let node1, node1prev, node2, node2prev;
        [node1prev, node1] = this.findNode(data1);
        [node2prev, node2] = this.findNode(data2);
        
        if(data1 === data2) {
            console.log('Elements are the same - no swap to be made.')
            return;
        }
        if(node1 === null || node2 === null) {
            console.log('Swap not possible, one or more elements not found in the list.')
        } 
        if(node1prev === null) this.head = node2;
        else node1prev.setNextNode(node2);
        if(node2prev === null) this.head = node1;
        else node2prev.setNextNode(node1);
        let temp = node1.getNextNode();
        node1.setNextNode(node2.getNextNode());      
        node2.setNextNode(temp); 
    }
}

const seasons = new LinkedList();
seasons.addToHead(5);
seasons.addToHead(4);
seasons.addToHead(3);
seasons.addToTail(6);
// <head> 3 4 5 6 <tail>
seasons.printList();

seasons.swapNodes(3, 5);
// 5 4 3 6
seasons.printList();


