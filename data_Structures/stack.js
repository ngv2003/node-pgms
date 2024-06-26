class Stack{
    constructor(){
        this.items=[];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "stack was empty-> underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    printStack() {
        return this.items.join(" ");
    }
}

module.exports = Stack;