let str = "Hello, World!";     // String
let num = 42;                  // Number
let bool = true;               // Boolean
let und;                       // Undefined
let n = null;                  // Null
let sym = Symbol("id");        // Symbol
let bigIntNum = 9007199254740991n; // BigInt

// Non-primitive (object) types
let arr = [1, 2, 3];           // Array (type: object)
let obj = { name: "Alice", age: 25 }; // Object
let func = function() { return "Hi!"; }; // Function

// Logging types
console.log("str:", typeof str);
console.log("num:", typeof num);
console.log("bool:", typeof bool);
console.log("und:", typeof und);
console.log("n:", typeof n);           // Note: returns 'object' (a known JS quirk)
console.log("sym:", typeof sym);
console.log("bigIntNum:", typeof bigIntNum);
console.log("arr:", typeof arr);       // Returns 'object'
console.log("obj:", typeof obj);
console.log("func:", typeof func);     // Returns 'function'