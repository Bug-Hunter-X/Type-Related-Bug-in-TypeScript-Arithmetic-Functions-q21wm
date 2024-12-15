function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function subtractSafe(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

let result3 = addSafe(5,3);
let result4 = subtractSafe(10,5);

console.log(result1,result2,result3,result4);

//Demonstrate Error handling
// let result5 = addSafe("5",3); //Throws Error
// let result6 = subtractSafe(10,"5"); //Throws Error