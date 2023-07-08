// Stacks

//functions: push, pop, peek, length

var Stack = function () {
  this.count = 0;
  this.data = {};

  //Adding a value at the top of the stack
  this.push = function (value) {
    this.data[this.count] = value;
    this.count++;
  };

  //pop the top value of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.data[this.count];
    delete this.data[this.count];
    return result;
  };

  //Peek the top value of the Stack
  this.peek = function () {
    return this.data[this.count - 1];
  };

  //to know the size of the stack
  this.size = function () {
    return this.count;
  };
};

var stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(6)
stack.push(8)
stack.push(9)
console.log(stack)
console.log(stack.peek())
console.log(stack.size())
stack.pop()
console.log(stack.peek())
console.log(stack.size())
