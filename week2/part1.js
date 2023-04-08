//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers.
function max(numbers) {
   let maxN = numbers[0]; //assign maxN to first element in numbers
   for (let i=1; i < numbers.length; i++) //start from 2nd element
    { if (numbers[i] > maxN) {
        maxN = numbers[i];} //set maxN to newfound maximum number
    } return maxN;
};
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment 2: Function and Object
//Complete the function below to calculate the result of the passing object
function calculate(args) {
   let total = 0;
   if (args.op === '+') { //args.op instead of args[2] because it is a property of the args object, and should be accessed using dot notation.
        total = args.n1 + args.n2;//use args.n1 and args.n2 to access the values of the n1 and n2 properties of the args object.
    } else if (args.op === '-') {
        total = args.n1 - args.n2;
    } else {
        total = 'Not supported';
    } return total;
}

console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'

//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the total price of all products after applying a discount.
function calculate(data) {
    let total = 0;
    for (let i = 0; i < data.products.length; i++ ){
        total += data.products[i].price; //calculate total price of products first
    } return total*(1-data.discount) //calculate discount
    
}
const discountedPrice = calculate({
    discount: 0.1, 
    products: [
        {name: "Product 1", price: 100}, 
        {name: "Product 2", price: 700}, 
        {name: "Product 3", price: 250}
    ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount
