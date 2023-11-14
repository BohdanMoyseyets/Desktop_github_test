// console.log("Hello world!!!");

// {
//     let a;
//     {
//         {

//         }
//     }
// }

// var b;

// const c = "123";

// //string

// let color = "red";

// //number

// let number = 123;
// number = "1245";
// number = null;
// let number1 = 12.5;

// //BigInt

// let x = BigInt("123456789012345678901234567890");

// //symbol

// //undefined

// let zminna1 = undefined;

// //null

// let zminna2 = null;

// //boolean

// let zminna3 = true;
// let zminna4 = false;

// //object

// let zminna5 = {
//     name: "bohdan",
//     age: 25,
//     location: "lviv"
// }

// let a1 = 'sdfsdfsfsdfsfds';
// let a2 = "a2";
// let a3 = `sdhfkjhdkshkdfhkshfkskhdfkhsk ${a1}`;

// console.log(+"123" + true + 12 + undefined + "");

// // ==
// // ===

// // >

// let obj1 = {name: "bohdan"};
// let obj2 = obj1;

// console.log( a3);

// console.log( 2 > 1 );  // true (правильно)
// console.log( 2 == 1 ); // false (неправильно)
// console.log( 2 != 1 ); // true (правильно)

// let result = 5 > 4; // присвоїти результат порівняння змінній result
// console.log( result ); // true

// //перевірка
// console.log("ананас" > "аблуковававава")
// console.log(2 > "12")
// console.log(2 >= 3)
// console.log(3 <= 3)

// console.log(null === +"\n0\n")
// console.log(+"\n0\n")
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// let a = 5;
// let b = 15;

// if ( a == b ){
//     console.log("a == b");
// } else {
//     console.log( "a != b");
// }

// if ( a == b ){
//     console.log("a == b");
// }

// if ( a != b ){
//     console.log("a != b");
// }

// a === b ? console.log( "a = b") : console.log( "a != b");

//Перевірка
// console.log( null || 2 || undefined );
// console.log( 1 && null && 2 );
// console.log( undefined || null && +"0" && "false" || null && ("01"<="00"));
// console.log( undefined || null && +"0" && "false" || null && ("01"<="00"));
// console.log( "undefined" && null || "0" && 3 || null && 2);
// console.log(1 || null);
// console.log((NaN && "   ") || ("hello" && +"0xf"));
// console.log({} == {});

// if (-1 || 0) console.log( 'перший' );
// if (-1 && 0) console.log( 'другий' );
// if (null || -1 && 1) console.log( 'третій' );
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(day)

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log("///");

// let i = 0;
// while(i<10){
//     console.log(i);
//     // i=i+2;
//     i++;
// }
// console.log("///")
// do{
//     console.log(i);
//     i++;

// }while(i<10)

// for(let i = 1; i<=9; i++){
//     console.log(`1x${i} = ${1*i}`);
//     console.log(`2x${i} = ${2*i}`);
//     console.log(`3x${i} = ${3*i}`);
//     console.log(`4x${i} = ${4*i}`);
//     console.log(`5x${i} = ${5*i}`);
//     console.log(`6x${i} = ${6*i}`);
//     console.log(`7x${i} = ${7*i}`);
//     console.log(`8x${i} = ${8*i}`);
//     console.log(`9x${i} = ${9*i}`);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if( i <= j ){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }

// 0 1 1 2 3 5 8

// let prev = 0;
// let next = 0;
// let sum = 0;

// for( i = 0 ; i < 10; i++ ){
//     if( i < 2){

//         console.log(i);
//         next = i;
//         prev = next;
//     } else {
//         sum = prev + next;
//         prev = next;
//         next = sum;
//         console.log(prev);
//     }
//     debugger
// }

// function sayHello(user){
//     return `hello ${user} !!!`
// }

// var functionResult = sayHello(123);
// console.log(functionResult);

// function pow(x, n) {
//     let result = 1;

//     // множимо result на x n разів в циклі
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// alert(pow(2, 3)); // 8
// //////////
// function pow(x, n) {
//     debugger
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// alert(pow(2, 3)); // 8

// let fruits = ["Apple", "Orange", "Plum"];

// console.log( fruits[0] ); // Apple
// console.log( fruits[1] ); // Orange
// console.log( fruits[2] ); // Plum
// console.log(fruits.length);

// fruits[5] = 'Pear'; // тепер ["Apple", "Orange", «Pear"]
// console.log(fruits);
// console.log(fruits[4]);
// console.log(fruits.length);

// console.log(0 == []);
// console.log("0" == []);
// console.log([] == []);

// let arr = [[1,2,3], {a:5}, false, true, "str"];
// arr.push();
// // arr.pop(true);
// // arr[0].shift();
// arr[0].unshift("");

// console.log(arr);

// let arr2 = [[1,2,3], {a:5}, false, true, "str"];

// let removed = arr.splice(0, 2);

// console.log( arr );
// console.log( removed );

// let items = [1200, 1500, 400, 760, 1500];
// let names = 'Вася aasdasdетя asdasndbnabsdn ksndfj sjf sjfj sfj shdj fsdjfh jshdfj hsjfh sj fhj shfj'.split("").map(function(i, index, array){
//     if(i == " "){
//         return " " + array[index+1].toUpperCase().toString()
//     }else{
//         return i
//     }

// }).join("");
// console.log(names[5])
// console.log(items.map(function(item, index, array) {
//         if(item<=1000){
//             item = (item + 50) * 10;
//             console.log(item);
//             return item;
//         }
//         else{
//             item = item - 50;
//             console.log(item);
//             return item;
//         }
//       }));
// console.log(items);

// let  name1 = "aassAassaaa";

// let test1 = name1.toLowerCase().split("");
// let test2 = name1.toLowerCase().split("").reverse();
// console.log(test1)
// console.log(test2)
// console.log(name1)
// for(let i= 0; i<=test1.length/2;i++){
//     if(test1[i]!== test2[i]){
//         console.log("no");
//         break;
//     }else if(i==test1.length/2){
//         console.log("yes")
//     }
// }

// function polindromChecker(str){
//     str = str.toLowerCase();
//     console.log(str == str.split("").reverse().join(""));
// }

// polindromChecker(name1);

// let arr = [["name1", 30], ["name2", 40],["name3", 50],["name4", 10]];
// let arr2 = [
// {
//     name: "name1",
//     age: 130
// },
// {
//     name: "name2",
//     age: 230
// },
// {
//     name: "name3",
//     age: 330
// },
// {
//     name: "name4",
//     age: 430
// }
// ];

// console.log(arr[0][1]);
// console.log(arr2[0].age)

// let user = {};

// // присвоювання значення властивості
// user["любить птахів"] = true;
// user["name"] = "Bohdan";
// console.log(user);

// let abc = ["a", "b", "c", "a", "c", "c", "b", "b", "d","s", "a", "v"];
// let rez = {};

// for(let i of abc){
//     if(!(i in rez)){
//         rez[i] = 1;
//     } else {
//         rez[i]++;
//     }
// }
// console.log(rez)

// let user = {
//     name: "Микола",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// //   let user2 = structuredClone(user);
//   let user2 =  JSON.parse(JSON.stringify(user));
//   user2.name = "wsder";
// //   user2.sizes = Object.assign({}, user.sizes);
//   user2.sizes.width = 100;

// console.log(user);
// console.log(user2);
// console.log(user2 == user);

// function fib(n){
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// let a = fib(10);
// console.log(a);

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
// let arr2 = [];
// function counting(n){
//     return n<1? n: counting(n-1)
// }
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         arr2[(i+1)*(i-1)+j] = arr[i][j];
//         console.log(arr[i][j]);
//     }
// }
// console.log(arr2)

// function myFunction(a) {
//     return function (b) {
//         console.log(b, a);
//     };
// }
// var testFunction = myFunction(2);
// testFunction(3);

// for (let i = 0; i < 5; ++i){
//     alert( i );
// }
// let i = 0;
// while(i < 5){
//     alert( i );
//     i++;
// }
// console.log(i)
// var firstVar = "bar";
// var secondVar;
// switch (firstVar) {
//     case "foo":
//         secondVar = "bar";
//         break;
//     case "bar":
//         secondVar = "foo";
//         break;
//     case "foobar":
//         secondVar = "barfoo";
//         break;
//     default:
//         secondVar = "foobar";
// }
// console.log(secondVar);

// for(let i = 0; i<arr.length;i++){
//     if(i<3 && i>0){
//         arr[i] = arr[i] + "qwerty"
//     }
// }
// console.log(arr)

let x = function abc(a){
    return a+10;
}
console.log(x(10))


let y = a => a + 10

console.log(y(10))
console.log("task 2")