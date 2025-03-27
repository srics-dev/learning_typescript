function great (name:string,age?:number): string{
    return age ?`hello ${name}, you are ${age} years old`:`hello ${name}`;
}
console.log(great("John"));
console.log(great("John",25));