//this is a good tricky question and can be asked in many ways

// let a;

// if(a=null){
//     console.log("the output is true");
// }
// else{
//     console.log("the output is false");
// }

// the solution ends here




// let num = 66;

// switch(num){
//     case 1:
//         console.log("The day is Monday")
//         break;
//     case 2:
//         console.log("The day is Tuesday")
//         break;
//     case 3:
//         console.log("The day is Wednesday")
//         break;
//     case 4:
//         console.log("The day is Thursday")
//         break;
//     case 5:
//         console.log("The day is Friday")
//         break;
//     case 6:
//         console.log("The day is Saturday")
//         break;
//     case 7:
//         console.log("The day is Sunday")
//         break;
//     default:
//         console.log("Enter a valid number between 1-7")
// }





// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name");

// name = firstName + " " + lastName;

// console.log(`The name after concat is ${name}`);


// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");

// len1 = a.length -1;
// len2 = b.length -1;

// if(a[len1] === b[len2]){
//     console.log("Both of them have same last digit!");
// }
// else{
//     console.log("Both of them dont have a same last digit!")
// }


// Practice Q

// 1
// let msg = "help";

// newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


//2
// let name = "Apna College";

// let anotherName;


// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace('Apna', 'Our'));

// newName = name.slice(4);
// anotherName = newName.replace('l', 't');
// console.log(anotherName);


//Practice Qs new

//1

// let arr=['january', 'july', 'march', 'august'];
// arr.splice(0, 2, 'july', 'june');

// console.log(arr);










//Asssignment




// q1




// let n = prompt("Enter the number");
// let arr = [7,9,0,2,10,11,12,15];

// arr.splice(n);
// console.log(arr);




//q2




// let n = prompt("Enter the number");
// let arr = [7,9,0,2,10,11,12,15];
// let l = arr.length;

// newArr = arr.splice(l-n);
// console.log(newArr);




//q3




// let str = prompt("Enter a string: ");

// if(str[0] == undefined){
//     console.log("The string is empty!");
// }
// else{
//     console.log("The string is not empty!");
// }





//q4





// let str = prompt("Enter the Name: ");
// let n = prompt("Enter the index: ");

// console.log(str[n]);

// //CHECK IF THIS THING WORKS OR NOT


// // if(str[n] > 60){
// //     console.log("The alphabet is lowercase");
// // }
// // else{
// //     console.log("The alphabet is Uppercase");
// // }


// //CHECK IF THIS THING WORKS OR NOT

// if(str[n] == str.toUpperCase()[n]){
//     console.log("The alphabet is Uppercase");
// }
// else{
//     console.log("The alphabet is lowercase");
// }





//q5




// let arr = [4,7,"adi", 'a'];
// let item = prompt("Enter the item name or the number: ");

// //to check if it a number or not and if it is then convert it into float as the input given by the user in prompt is always a string!
// item = isNaN(item) ? item : parseFloat(item);

// if(arr.indexOf(item) == -1){
//     console.log("The item doesn't exists in the array!");
// }
// else{
//     console.log("The item exists in the array!")
// }




// Movie Guesser Code using loop



// let mov = "adi";
// let guess = prompt("Guess the movie.");


// if( guess == mov){
//     console.log("Correct!");
// }
// else{
//     console.log("Try Again!");
//     for(let i = 1; !(guess == mov || guess == "quit") ; i++){
//         guess = prompt("Enter the Movie Again");
//     }
//     console.log("yay you guessed to correct movie!")
// }





// TODO App



// let list = [];
// let task;
// let t = 0;
// let n;


// for(let j = 0; ; j++){
//     action = prompt("Enter the Action!");

//     // to add tasks to the list
//     if(action == "list"){
//         console.log("#This is your task list!#");
//         let x = 1;
//         for(task of list){
//             console.log(`${x}~${task}`);
//             x++;
//         }
//     }

//     //to get the list of the tasks entered
//     else if(action == "add"){
//         n = prompt("Enter the number of tasks that you want to enter!");
//         for(let i = 0; i < n; i++){
//             list[t+i] = prompt("Enter the TASK that you want to add to the list!");
//             console.log("Task Added!");
//         }
//         t = t + parseInt(n);
//     }

//     // to delete the task
//     else if(action == "delete"){
//         let del = parseInt(prompt("Enter the number assigned to the task that you want to delete!"));
//         list.splice(del-1, del-1);
//         t -= 1;
//     }
    
//     else if(action == "quit"){
//         break;
//     }

//     else{
//         console.log("Enter a valid input");
//     }
// }



//ASSIGNMENT PART 4 


//Q1


// let arr = [9,6,9,9,0,8,5,7,6,7];
// let num = 7;
// let n = arr.length;


// for(let i=0 ; i<n ; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//         i = 0;
//     }
// }

// console.log(arr);





//Q2


// let num = 9699085767;
// let n = 0;

// for(i=0 ; num >= 1 ; i++){
//     num = num/10;
//     n++;
// }

// console.log("The number of digits in the number are: ",n);





//Q3




// let num = 287152;
// let s = 0;
// let d;

// for(let i=0 ; num > 1 ; i++){
//     d = num%10;
//     num = num/10;
//     num = parseInt(num);
//     s = s + d;
// }

// console.log("The sum of digits in the number is: ",s);




//TEST


// let num = 5.9;
// console.log(parseInt(num));





//Q4





// let n = 5;
// let f=1;

// for(let i = 1; i <= n; i++){
//     f *= i;
// }

// console.log(f);




//Q5


// let arr = [5, 76, 890, 3456, 60];
// let n = arr.length;
// let largest = arr[0];

// for(i = 1; i < n; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
// }

// console.log(largest);



// Object Literals 


// let post = {
//     username: "aditya",
//     content: "Video",
//     reposts: 34555,
//     tags: "VIRATKOHLI",
//     likes: 454545
// };



//Guess the number game


// let n = prompt("Enter the max number till which you can guess it!");
// let num;
// let ran = Math.floor(Math.random()*n) + 1;

// console.log(ran);

// for(let i=1; !(num == ran) ;i++){
//     num = prompt("Enter your guess!");
//     if(num == "quit"){
//         break;
//     }
//     if(num > ran){
//         console.log("HINT: Enter a smaller number!");
//     }
//     else if(num < ran){
//         console.log("HINT: Enter a larger number!");
//     }
// }

// console.log("You entered the correct number!");



//ASSIGNMENT PART 5



//q1

// let ran  = Math.floor(Math.random()*6) + 1;
// console.log(`The number on dice is ${ran}`);









//Q2



// let car = {
//     name: "XUV",
//     model: "700",
//     color: "dark blue",
// }

// console.log(`The model of the car is ${car.name}`);



//Q3



// let person = {
//     name : "Aditya",
//     age: 19,
//     city: "NewYork",
// }

// console.log("The name of the city that Aditya lives in is: ", person.city);




//Practice Q

//Q1

// function rollDice(n){
//     let ran  = Math.floor(Math.random()*n) + 1;
//     console.log(`The number on dice is ${ran}`);
// }

// num = prompt("Enter the maximum number for dice!");

// rollDice(num);

// Q2

// function avg(a, b, c){
//     console.log((a+b+c)/3);
// }

// let a = parseInt(prompt("Enter the first number"));
// let b = parseInt(prompt("Enter the second number"));
// let c = parseInt(prompt("Enter the third number"));

// avg(a, b, c);


//Q3


// function mul(n){
//     for(i=1; i <11; i++){
//         console.log(n*i);
//     }
// }

// let num = parseInt(prompt("Enter the number for multiplication"));
// mul(num);




//Q4



// let arr = ["Hi", "Hello", "I am Adi"];
// let n = arr.length;

// function concat(arr){
//     let str = ""; 
//     for(i = 0; i < n; i++){
//        str = str + arr[i]; 
//     }
//     return str;
// }




//Assignment Part 6


// Q1



// let arr = [1111,8,9,10,6,8];
// let n = arr.length;
// let num;

// function find(num){
//     num = prompt("Enter the number!");
//     for(i=0; i<n; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// find();


//Q2



// let str = "abcdabcdefgggh";
// let n;
// let ans = "";
// let t = 0;

// function ext(arr){
//     n = arr.length;
//     ans = ans + arr[0];
//     let l = 1;
//     for(let i=1; i<n; i++){
//         l = ans.length;
//         for(let j=0; j<l; j++){
//             if(arr[i] != ans[j]){
//                 t++;
//             }
//         }
//         if(t == l){
//             ans = ans + arr[i];
//         }
//     }                                                                                                                           
//     console.log(ans);
// }

// ext(str);








// const square = (n) => {
//     return n*n;
// }

// console.log(square(100));










// let id = setInterval(() => {
//     console.log("Hello World")
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);










// let num = [1,2,3,4,5,6];

// const arrAvg = (arr) => {
//     let n = arr.length;
//     let sum = 0;
//     for(let i = 0; i<n ; i++){
//         sum = sum + arr[i];
//     }
//     let Avg = (sum/n);
//     console.log(Avg);
// }

// arrAvg(num);









// const isEven = (n) => {
//     if(n%2 == 0){
//         console.log("The number is an Even Number");
//     }
//     else{
//         console.log("The number is not an Even Number")
//     }
// }

// isEven(10);










// let arr = [10,20,30];

// let a = arr.every((n) => {
//     return n%10 == 0;
// });

// console.log(a);

// let arr = [1,20,32,65,-500];

// let min = arr.reduce((min, el) =>{
//     if(min < el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });

// console.log(min);






//Js part 8 Practice Questions


// let nums = [1,2,3,4,5] 

// let avg = (arr) => {
//     let sum = 0;
//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + (arr[i]*arr[i])
//     }
//     console.log(sum);
//     for(let i=0; i<arr.length; i++){
//         total = total + arr[i]
//     }
//     avg = total/arr.length;
//     console.log("The average of the following numbers is ", avg);
// }

// avg(nums);






// let arr = [0,5,10];

// let newArr = arr.map((num) => {
//     return num+5;
// })

// console.log(newArr);




// let words = ["aditya","snehal"];
// let capwords = words.map((char) => {
//     return char.toUpperCase();
// })

// console.log(capwords);







// function doubleAndReturnArgs(arr, ...args){
//     let allArgs = [...args];
//     let doubledArgs = allArgs.map((num) => {
//         return num*2;
//     });

//     let doubleAndReturnArgs = [...arr, ...doubledArgs]
//     console.log(doubleAndReturnArgs);
// }

// arr = [1,3,5,7,9];
// doubleAndReturnArgs(arr, 2,4,6,8,10);








// const mergeObjects = (obj1, obj2) => {
//     let merged = {...obj1, ...obj2} ;
//     console.log(merged);
// }

// let adi1 = {
//     name: "Aditya",
//     place: "kirloskarwadi",
//     age: 19
// };

// let adi2 = {
//     talsil: "palus",
//     state: "mahrashtra"
// };

// mergeObjects(adi1,adi2);






// Class Questions for practice


// let div = document.createElement("div");
// let heading = document.createElement("h1");
// let para = document.createElement("p");

// heading.innerText = "Hello im inside the div";
// para.innerText = "Hello Im aslo inside the div";

// div.append(heading);
// div.append(para);

// document.querySelector("body").append(div);
// div.classList.add("box");






//Js part 9 
//Assignment



//All questions


// let inp = document.createElement("input");
// let btn = document.createElement("button");
// let head = document.createElement("h1");
// let para = document.createElement("para");

// para.innerHTML = "<b> Sigma </b> Practice Questions";
// head.innerText = "DOM Practice";
// btn.innerText = "Click me";
// inp.placeholder = "username";
// btn.id = "btn";

// document.querySelector("body").append(inp);
// document.querySelector("body").append(btn);
// document.querySelector("body").append(head);
// document.querySelector("body").append(para);

// head.classList.add("heading");
// btn.classList.add("button");




//Assignment of 9




//Q2



// let btn =  document.createElement("button")

// document.querySelector("body").append(btn);
// btn.innerText = "This is a button";

// btn.addEventListener("click", function(){
//     btn.style.color = "green";
// })


//Q3


// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");

// inp.addEventListener("keyup", function (){
//     const isAlpha = str => /^[a-zA-Z]*$/.test(str);
//     if(isAlpha(this.value)){
//         h2.innerText = this.value;
//     }
//     else{
//         h2.innerText = "Enter a valid name that only consists of lowercase or uppercase letters";
//     }
// })

// let h1 = document.querySelector("h1");

// h1.style.color = "red";

// function colorChange(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color was changed");
//         }, delay);
//     })
// }

// colorChange("red", 1000)
//     .then(() => {
//         console.log("color changed to red");
//         return colorChange("orange", 1000);
//     })
//     .then(() => {
//         console.log("color changed to orange");
//         return colorChange("green", 1000);
//     })
//     .then(() => {
//         console.log("color changed to green");
//         return colorChange("violet", 1000);
//     })
//     .then(() => {
//         console.log("color changed to violet");
//     })
//     .catch(() => {
//         console.log("error while changing the color");
//     })


// let url = "http://universities.hipolabs.com/search?country=India";
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// btn.addEventListener("click", async function(){
//     let state = inp.value;
//     getColleges();
    
// })

// async function getColleges(state){
//     let res = await axios.get(url);
//     console.log(res.data);
//     let allColleges = res.data;
//     console.log(allColleges.state-province);
    // for(clg of allColleges){
    //     if(allColleges.state-province == state){
    //         console.log(allColleges.name);
    //     }
    //     else{
    //         console.log("no colleges found");
    //     }
    // }
// }

