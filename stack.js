// abc-d-e -> abe
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    getContent() {
        return this.items.join('');
    }
}

function processString(string) {
    const stack = new Stack();
    for (let char of string) {
        if (char === '-') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.getContent();
}

//push('a'), push('b'), push('c'), pop(), push('d'), pop(), push('e'), getContent() -> 'abe'






class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return this.items.pop();
        } else {
            throw new Error("Stack is empty");
        }
    }
    peek() {
        if (this.isEmpty()) {
            return this.items[this.items.length - 1];
        } else {
            throw new Error("Stack is empty");
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

