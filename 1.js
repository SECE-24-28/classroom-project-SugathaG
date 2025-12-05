// Starting array
let arr = [10, 20, 30];

// push() → add at end
arr.push(40);  

// pop() → remove last value
arr.pop();     

// unshift() → add at beginning
arr.unshift(5);

// shift() → remove first value
arr.shift();

// length → number of items in array
console.log("Length:", arr.length);

// splice() → add 25 at index 1
arr.splice(1, 0, 25);   

// slice() → take part of array (copy)
let part = arr.slice(0, 2);  

// concat() → join 2 arrays
let arr2 = [100, 200];
let merged = arr.concat(arr2);

// toString() → convert array to text
console.log("toString:", merged.toString());

// delete → removes value but keeps empty slot
delete merged[1];

// some() → checks if any value > 50
console.log("some > 50:", merged.some(x => x > 50));

// every() → checks if all values are numbers
console.log("every number:", merged.every(x => typeof x === "number"));

// map() → create new array, multiply each value by 2
let doubled = merged.map(x => x * 2);

// forEach() → print each value one by one
merged.forEach(x => console.log("forEach value:", x));

// Final Outputs
console.log("Array:", arr);
console.log("Part:", part);
console.log("Merged:", merged);
console.log("Doubled:", doubled);
