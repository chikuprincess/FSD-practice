// variables and data types :
a=3;
b=4;
c=a*b;
console.log(c)


var x = 10;
var z = 20;
var y = x+z;
console.log(y);

var carname;
carname ="volvo";
console.log(carname);

let d ='john';
let n='mathews';
let m =d+n;
console.log(m);

const price1= 5;
const price2 = 6;
let   total = price1+price2;
console.log(total);

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
console.log(pi,person,answer)

const j = "jai" +" "+"shetty";
console.log(j)

let r= "5"+6+7;
console.log(r)

let k= 1+2+"3";
console.log(k)

const $= 'i am a engineer';
const $$money=5000;
console.log($);

const PI =3.14;
console.log(pi);

let str ='volvo' + 16;
console.log(str)

const t = 'money' +'mind'+1000;
console.log(t);

let answer1 = "It's alright";
let answer2 = "you can do it";
let answer3 = "and it is important";
console.log(answer1);
console.log(answer2);
console.log(answer3);

let  q = 123e5;    // 12300000
let v  = 123e-5;
console.log(q,v)

let s  = BigInt("123456789012345678901234567890");
console.log(s);

{
    let a =10;
    let b= 15;
    let z=10;
    d=a==z;
    w=z==b;
    console.log(w);
    console.log(d);

}

console.log(typeof(""));
console.log(typeof(123));
console.log(typeof(true));

let car 
console.log(car);

//operations in javascript

{
    let x =2;
    let y =3;
    let z =x+y;
    let j=x-y;
    let u=x*y;
    let o=x/y; 
    console.log(z,j,u,o);
}

{
  const age=3;
  const vote=age>=18? "eligible to vote!":"not eligible to vote";
  console.log(vote);
}
{
const a = true;
const b = false;
const result = a && b;  
console.log(result);    

console.log(10 > 5 && 8 < 12); }
//conditionals
let hour = 15;  
let greeting;

if (hour < 18) {
  greeting = "Good day";
}

console.log(greeting);  

{
    let hour = 20;
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);  
}
{
let time=5;
    if (time < 10) {
        greeting = "Good morning";
      } else if (time < 20) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }
      console.log(greeting);
}
{   let day;
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      console.log(day);
}
//loops

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }


  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum += i;
  }
  console.log('Sum:', sum); 
  
 
  {
    const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index + ': ' + colors[index]);
}
  }


  {
    const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}
}


{
    const text = "Hello";

for (let char of text) {
  console.log(char);
}
}


{

    let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
}

{

    let sum = 0;
let n = 1;

while (n <= 5) {
  sum += n;
  n++;
}
console.log('Sum:', sum); 

}

{
    const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});

console.log('Sum:', sum);  
}

{
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
          break; 
        }
        console.log(i);
      }
}
  
//functions
{
    
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("varshini")); 
}


{
   
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  

  console.log(greet("priya"));  
  
}

{

    
const greet = (name) => `Hello, ${name}!`;


const add = (a, b) => a + b;


const multiply = (a, b) => {
  return a * b;
};
console.log(greet("anjali")) ; 
console.log(add(2, 3));  
console.log(multiply(2, 3));  

}

{
    
(function() {
    console.log("This function runs ");
  })();
  
 
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Deva");
  
  
}

{

    
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5));  
  
}

//array and its methods

{
    
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Orange"];
console.log(numbers[0]);  
console.log(fruits[2]); 
console.log(numbers.length);
numbers.push(6);
console.log(numbers);let lastElement = numbers.pop();
console.log(lastElement);  
console.log(numbers);   
numbers.unshift(0);
console.log(numbers);  
let firstElement = numbers.shift();
console.log(firstElement);  
console.log(numbers); 
let index = fruits.indexOf("Banana");
console.log(index); 

let removedElements = fruits.splice(1, 1);  
console.log(fruits);          
console.log(removedElements); 

fruits.splice(1, 0, "Mango", "Pineapple");  
console.log(fruits);  


fruits.splice(2, 1, "Grapes"); 
console.log(fruits);  
let slicedArray = fruits.slice(1, 3); 
console.log(slicedArray); 

fruits.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
  });
  
let lengths = fruits.map(function(item) {
    return item.length;
  });
  console.log(lengths);  
  

let filteredArray = numbers.filter(function(number) {
    return number > 3;
  });
  console.log(filteredArray);  
  
  
}