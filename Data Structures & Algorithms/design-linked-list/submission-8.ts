class ListNode {
    val: number;
    next: ListNode;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    head: ListNode;
    size: number;

    constructor() {
        this.head = new ListNode(0);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index >= this.size) return -1;
        let cur: ListNode = this.head.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const node = new ListNode(val);
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        const node = new ListNode(val);
        node.next = cur.next;
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index >= this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.size--;
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
