class ListNode {
    value: number;
    prev: ListNode;
    next: ListNode;
    constructor(value: number) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class MyDeque {
    head: ListNode;
    tail: ListNode;
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head.next === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newTail = new ListNode(value);
        newTail.prev = this.tail.prev;
        newTail.next = this.tail;
        this.tail.prev.next = newTail;
        this.tail.prev = newTail;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newHead = new ListNode(value);
        newHead.next = this.head.next;
        newHead.prev = this.head;
        this.head.next.prev = newHead;
        this.head.next = newHead;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.isEmpty()) return -1;
        const targetNode = this.tail.prev;
        const prevNode = targetNode.prev;
        const value = targetNode.value;

        this.tail.prev = prevNode;
        prevNode.next = this.tail;

        return value;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) return -1;
        const targetNode = this.head.next;
        const nextNode = targetNode.next;
        const value = targetNode.value;

        this.head.next = nextNode;
        nextNode.prev = this.head;

        return value;
    }
}
