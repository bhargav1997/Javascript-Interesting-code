/*
Creating a linked list in JavaScript involves defining a Node class to represent each element in the list and a 
LinkedList class to manage the list operations. Here is an example implementation of a linked list with common operations:
*/

// Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the beginning of the linked list
    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at the end of the linked list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete a node from the linked list
    deleteNode(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Display the linked list
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage example
let linkedList = new LinkedList();
linkedList.insertAtBeginning(3);
linkedList.insertAtBeginning(2);
linkedList.insertAtEnd(4);
linkedList.display();
linkedList.deleteNode(2);
linkedList.display();
