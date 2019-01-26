// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function adder(x, y, cb) {
  return cb(x +y);
};

const myCb = function (x) {
   return(x);
}

console.log(adder(5,21, myCb));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const consume= function(x, y, cb){
  return cb(x , y)
}

const add = function (x,y) {
  return x+y;
}

const multiply = function (x,y) {
return x*y;
}

const greeting = function (x,y) {
console.log(`Hello ${x} ${y}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//The nestedFunction (in this case) a closure function, will search for the value of the variable, outside of its local scope/closure. This is called lexical scope. The 
//ability of the inner function to access the outer scope in which its defined. Here, myFunction is the LEXICAL SCOPE of the nestedFunction.  This closure function, (nestedFunction) has access to the scope
//in which it was created, not the scope in which it is executed.  

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();