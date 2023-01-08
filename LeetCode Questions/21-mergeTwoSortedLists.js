const mergeTwoLists = (list1, list2) => {
    let mergedList = new LinkedList();
    while (list1 !== null && list2 !== null) {
        if (list1.data < list2.data) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }

    while(list1 !== null) {
        mergedList.next = list1;
        list1 = list1.next;
        mergedList = mergedList.next;
    }
    while(list2 !== null) {
        mergedList.next = list2;
        list2 = list2.next;
        mergedList = mergedList.next;
    }
    return mergedList.next;
}

let list1 = new LinkedList();
list1.addToHead(new Node(1));
list1.addToTail(new Node(2));
list1.addToTail(new Node(4));

let list2 = new LinkedList();
list2.addToHead(new Node(1));
list2.addToTail(new Node(3));
list2.addToTail(new Node(4));

console.log(mergeTwoLists(list1, list2));