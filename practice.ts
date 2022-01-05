
//Data Types in Typescript

// 1. Number



let salary : number = 111.23;
let age : number;
age = 21;
console.log(age);

console.log("***********************\n")

// 2. string



let first_Name : string;
first_Name = 'sudip';
let lastName : string = 'pradhan';
lastName = 'shrestha';

console.log(`My name is ${first_Name+ " "+ lastName}`);

console.log("***********************\n")

// 3. boolean


let is_under_age: boolean = false;
let isAccount : boolean = true;
console.log(`Am i ${is_under_age} to use Facebook ${isAccount}`);

console.log("***********************\n")


// 4. object


let resume :{
    name : string,
    age: number,
    percentage : number

}= {
    name : 'sudip',
    age : 27,
    percentage : 97.8
}
console.log(resume);


let books :{
    book_name : string,
    total_pages : number,
    author : string
}

books = {
    book_name : 'Head first in Java',
    total_pages : 345,
    author : 'Sudip Pradhan'
}

console.log(`I read ${books.book_name} by ${books.author} which contains ${books.total_pages} pages in it`);

console.log("***********************\n")


// 5. void

function tutor() : void {
    console.log("helo Student");
}
let tut: void = tutor();
console.log(tut);


function summation(num1,num2) : void{
    console.log(num1 + num2);
}

let addition : void = summation(4,5);
console.log(addition);

console.log("***********************\n")


// 6. tuple



let exams : [string , number] = ['physics', 24];

let student :[number, string];
student =[ 2, 'pradha'];

console.log(exams);

console.log("***********************\n")



// 7. any

let city :any = 'Kathmandu';
city = 'Bharatpur';

console.log(`I lived in ${city}`);

let homeNumber = 123;
homeNumber = 2344;
console.log(homeNumber);
console.log(typeof(homeNumber));

console.log("***********************\n")


// 8. array


let stud_name : string[] = ['sudp', 'pradhan','rajat', 'bheem'];
let stu_age : number[] = [25, 43, 23, 23,12];
let reg_num : Array<number> = [12 ,11, 10, 3, 5,];

console.log(stud_name);
console.log(stu_age);
console.log(reg_num);

console.log("***********************\n")

//functions in TypeScripts------------------------->

console.log("example of Function")

function adding(num: number , num1:string){
    return num + num1; 
}

console.log(adding(2,'3'));
console.log("***********************\n")

//--------------
const pie = 3.14;
function area_of_circle(radius){
    return pie*radius*radius
}

console.log(area_of_circle(3));
console.log("***********************\n")

//----------------

function price_discount(price:number ,rate:number = 0.50){
    let discount = price *rate;    
    console.log("Discount price : ", discount);
}

price_discount(1000);
price_discount(1000, 0.35);
console.log("***********************\n")

// -------------------
function displayData(id:number , name:string, email? :string){
    console.log("ID :" , id);
    console.log("name : ", name);

    if(email != undefined){
        console.log("Email" ,email)
    }

}

displayData(1, 'sudip');
displayData(1, 'sudip', 'sudip@java.com');
console.log("***********************\n")

//------------------------

function isNumber(num :any) : boolean{
    if(typeof num === 'number'){
        return true
    }
    else
    return false

}
let res = isNumber(2)
console.log(res);
console.log("***********************\n")
//output
// true

// let res1 = isNumber('2')
// console.log(res1);
// output
// false

//--------------------------------
function addings(a:number, b:number) : string {
    const res = a+b;
    console.log(res);
    return;
    //output - > 5
}

let res3 = addings(2,3);
console.log(res3);
console.log("***********************\n")
//output -->  undefined

//--------------------------------
function addd(a:number, b:number) : number {
    let sum = a + b;
    return sum;
}

console.log("added number is ", addd(2,3));
console.log("***********************\n")
//---------------------------------------
function adddd(a:number, b:number) : string {
    let sum = a + b;
    return sum.toString();
}

console.log("added number is ", adddd(2,3));
console.log("***********************\n")
function addded(a:number, b:any) : string {
    let sum = a + b;
    return sum;
}

console.log("added number is ", addded(2,'3'));