function great(name, age) {
    return age ? "hello ".concat(name, ", you are ").concat(age, " years old") : "hello ".concat(name);
}
console.log(great("John"));
console.log(great("John", 25));

function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}, you are ${age} years old.` : `Hello, ${name}`;
}

console.log(greet("John"));
console.log(greet("Alice", 25));

