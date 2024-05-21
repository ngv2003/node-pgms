

const Stack = require('./stack');
const Queue = require('./queue');


const stack = new Stack();
console.log("Stack Operations:");
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements:", stack.printStack());
console.log("Top element:", stack.peek());
console.log("Removed element:", stack.pop());
console.log("Stack elements after pop:", stack.printStack());


const queue = new Queue();
console.log("\nQueue Operations:");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue elements:", queue.printQueue());
console.log("Front element:", queue.front());
console.log("Removed element:", queue.dequeue());
console.log("Queue elements after dequeue:", queue.printQueue());

