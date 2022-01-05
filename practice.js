//Data Types in Typescript
// 1. Number
var salary = 111.23;
var age;
age = 21;
console.log(age);
console.log("***********************\n");
// 2. string
var first_Name;
first_Name = 'sudip';
var lastName = 'pradhan';
lastName = 'shrestha';
console.log("My name is ".concat(first_Name + " " + lastName));
console.log("***********************\n");
// 3. boolean
var is_under_age = false;
var isAccount = true;
console.log("Am i ".concat(is_under_age, " to use Facebook ").concat(isAccount));
console.log("***********************\n");
// 4. object
var resume = {
    name: 'sudip',
    age: 27,
    percentage: 97.8
};
console.log(resume);
var books;
books = {
    book_name: 'Head first in Java',
    total_pages: 345,
    author: 'Sudip Pradhan'
};
console.log("I read ".concat(books.book_name, " by ").concat(books.author, " which contains ").concat(books.total_pages, " pages in it"));
console.log("***********************\n");
// 5. void
function tutor() {
    console.log("helo Student");
}
var tut = tutor();
console.log(tut);
function summation(num1, num2) {
    console.log(num1 + num2);
}
var addition = summation(4, 5);
console.log(addition);
console.log("***********************\n");
// 6. tuple
var exams = ['physics', 24];
var student;
student = [2, 'pradha'];
console.log(exams);
console.log("***********************\n");
// 7. any
var city = 'Kathmandu';
city = 'Bharatpur';
console.log("I lived in ".concat(city));
var homeNumber = 123;
homeNumber = 2344;
console.log(homeNumber);
console.log(typeof (homeNumber));
console.log("***********************\n");
// 8. array
var stud_name = ['sudp', 'pradhan', 'rajat', 'bheem'];
var stu_age = [25, 43, 23, 23, 12];
var reg_num = [12, 11, 10, 3, 5,];
console.log(stud_name);
console.log(stu_age);
console.log(reg_num);
console.log("***********************\n");
//functions in TypeScripts------------------------->
console.log("example of Function");
function adding(num, num1) {
    return num + num1;
}
console.log(adding(2, '3'));
console.log("***********************\n");
//--------------
var pie = 3.14;
function area_of_circle(radius) {
    return pie * radius * radius;
}
console.log(area_of_circle(3));
console.log("***********************\n");
//----------------
function price_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount price : ", discount);
}
price_discount(1000);
price_discount(1000, 0.35);
console.log("***********************\n");
// -------------------
function displayData(id, name, email) {
    console.log("ID :", id);
    console.log("name : ", name);
    if (email != undefined) {
        console.log("Email", email);
    }
}
displayData(1, 'sudip');
displayData(1, 'sudip', 'sudip@java.com');
console.log("***********************\n");
//------------------------
function isNumber(num) {
    if (typeof num === 'number') {
        return true;
    }
    else
        return false;
}
var res = isNumber(2);
console.log(res);
console.log("***********************\n");
//output
// true
// let res1 = isNumber('2')
// console.log(res1);
// output
// false
//--------------------------------
function addings(a, b) {
    var res = a + b;
    console.log(res);
    return;
    //output - > 5
}
var res3 = addings(2, 3);
console.log(res3);
console.log("***********************\n");
//output -->  undefined
//--------------------------------
function addd(a, b) {
    var sum = a + b;
    return sum;
}
console.log("added number is ", addd(2, 3));
console.log("***********************\n");
//---------------------------------------
function adddd(a, b) {
    var sum = a + b;
    return sum.toString();
}
console.log("added number is ", adddd(2, 3));
console.log("***********************\n");
function addded(a, b) {
    var sum = a + b;
    return sum;
}
console.log("added number is ", addded(2, '3'));
