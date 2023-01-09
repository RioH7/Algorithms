// Given the head of a singly linked list, reverse the list, and return the reversed list

const Node = require('./Node');
import LinkedList from '../Data Structures/LinkedList';

const reverseList = head => {
    const reversedList = new LinkedList();
    const currentNode = head;
    while(currentNode) {
        reversedList.addToHead(currentNode);
        currentNode = currentNode.getNextNode();
    }
    return reversedList;
}

const test1 = new LinkedList();
test1.addToHead(5);
test1.addToHead(4);
test1.addToHead(3);
test1.addToHead(2);
test1.addToHead(1);

console.log(reverseList(test1));