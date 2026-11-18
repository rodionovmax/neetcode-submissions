class ListNode {
    val: number;
    next: ListNode;
    prev: ListNode;
    constructor(val: number = 0) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    head: ListNode;
    tail: ListNode;
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let cur = this.head.next;
        while (cur && index > 0) {
            cur = cur.next;
            index--;
        }
        if (cur && cur !== this.tail && index === 0) {
            return cur.val;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const node = new ListNode(val);
        const next = this.head.next;
        const prev = this.head;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const node = new ListNode(val);
        const next = this.tail;
        const prev = this.tail.prev;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        let cur = this.head.next;
        while (cur && index > 0) {
            cur = cur.next;
            index--;
        }
        if (cur && index === 0) {
            const node = new ListNode(val);
            const next = cur;
            const prev = cur.prev;
            prev.next = node;
            next.prev = node;
            node.next = next;
            node.prev = prev;
        }

    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        let cur = this.head.next;
        while (cur && index > 0) {
            cur = cur.next;
            index--;
        }
        if (cur && cur !== this.tail && index === 0) {
            const next = cur.next;
            const prev = cur.prev;
            next.prev = prev;
            prev.next = next;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
