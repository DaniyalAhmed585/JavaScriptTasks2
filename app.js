// CHAPTER 01

// TASK 01
// alert("We are pleased to have you on our site : )");


// TASK 02
// var name = prompt("Enter your name:");
// var password = prompt("Enter password:");
// alert("Error! Please enter a valid password.");


// TASK 03
// alert("Welcome to JS Land...\nHappy Coding!");


// TASK 04
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");


// TASK 05
// function showAlert() {
//     alert ("Liking my site?");
//   }









// CHAPTER 02

// TASK 01
// var userName;


// TASK 02
// var myName = "Daniyal Ahmed Khan";


// TASK 03
// var message = "Hello World!";
// alert(message);


// TASK 04
// var studentName = prompt("Enter your name:");
// var studentAge = prompt("Enter your age:");
// var studentDegree = prompt("Enter your degree/certification:");
// alert(studentName);
// alert(studentAge);
// alert(studentDegree);


// TASK 05
// var a = prompt("Enter any word: ");
// while(a.length != 0){
//     alert(a);
//     a = a.slice(0, a.length - 1);
// }


// TASK 06
// var email = "daniyalahmed1010@gmail.com";
// alert("My email address is " + email);


// task 07
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book " + book);


// TASK 08
// document.write("<br>Yah! I can write HTML content through JavaScript");


// TASK 09
// var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(<br>design);









// CHAPTER 03

// TASK 01
// var age = 20;
// alert("I am " + age + " years old.");


// TASK 02

// TASK 03
// var birthYear = 1999;
// document.write("<br>My birth year is " + birthYear + ".<br>" + "Data type of my declared variable is number.");   


// TASK 04
// var visitorName = prompt("Enter your name:");
// var productTitle = prompt("What product have you ordered?");
// var quantity = prompt("In how much quantity?");
// document.write("<br><b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + " (s) on XYZ Clothing store.")









// CHAPTER 04

// TASK 01
// var a , b , c;


// TASK 02
//var name , password1 , $userInput , _myBook , userAlert ;  // LEGAL VARIABLE NAMES 
// var 1 , 1A , a b , "a"a" , prompt ;  // ILLEGAL VARIABLE NAMES


// TASK 03
// document.write("<br><b> Rules for naming JS variables </b> <br><br><br>");
// document.write("Variable names can only contain letters, numbers, $ and _ . For example : $my_1stVariable <br>");
// document.write("Variable must begin with a letter, $ or _ . For example : $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS keywords");










// CHAPTER 05

// TASK 01 AND TASK 02
// var inp1 = prompt("Enter 1st number:");
// var inp2 = prompt("Enter 2nd number:");
// // var sum = +inp1 + +inp2; // This is correct.
// var sum = Number(inp1) + Number(inp2); // This is also correct.
// var difference = Number(inp1) - Number(inp2);
// var product = Number(inp1) * Number(inp2);
// var division = Number(inp1) / Number(inp2);
// var modulus = Number(inp1) % Number(inp2);
// document.write("<br>Sum of " + inp1 + " and " + inp2 + " is " + sum + "<br>");
// document.write("Difference of " + inp1 + " and " + inp2 + " is " + difference + "<br>");
// document.write("Product of " + inp1 + " and " + inp2 + " is " + product + "<br>");
// document.write("Quotient of " + inp1 + " and " + inp2 + " is " + division + "<br>");
// document.write("Modulus of " + inp1 + " and " + inp2 + " is " + modulus);


// TASK 03
// var number;
// document.write("<br>Value after variable declaration is " + number + "<br>");
// number = 5;
// document.write("Initial value: " + number + "<br>");
// number++;
// document.write("Value after increment is " + number + "<br>");
// number = number + 7;
// document.write("Value after addition is " + number + "<br>");
// number--;
// document.write("Value after decrement is " + number + "<br>");
// number = number % 3;
// document.write("The remainder is: " + number);


// TASK 04
// var ticketCost = Number(600);
// ticketCost = ticketCost * 5;
// document.write("<br>Total cost to buy 5 tickets to a movie is " + ticketCost + "PKR");


// TASK 05
// var number = Number(prompt("Enter any number:"));
// document.write("<br><b>Table of " + number + "</b><br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + "x" + i + "=" + number * i + "<br>");
// }


// TASK 06
// var celsiusTemp = 25;
// var farenheit = (celsiusTemp * (9 / 5) + 32);                    
// document.write("<br>" + celsiusTemp + "<sup>o</sup>" + "C is " + farenheit + "<sup>o</sup>" + "F" + "<br>");    
// farenheit = 70;
// celsiusTemp = (farenheit - 32) * (5 / 9);
// document.write(farenheit + "<sup>o</sup>" + "F is " + celsiusTemp + "<sup>o</sup>" + "C");    


// TASK 07
// var itemprice1 = 650;
// var itemprice2 = 100;
// var itemquantity1 = 3;
// var itemquantity2 = 7;
// var charges = 100;
// document.write("<br><b>Shopping Cart</b>".fontsize(7) + "<br><br>");
// var a = document.write("Price of item 1 is " + itemprice1 + "<br>" + "Quantity of item 1 is " + itemquantity1 + "<br>" +
// "Price of item 2 is " + itemprice2 + "<br>" + "Quantity of item 2 is " + itemquantity2 + "<br>" + "Shipping Chagres " + charges);
// var totalCost = ((itemprice1 * itemquantity1) + (itemprice2 * itemquantity2)) + charges;
// document.write("<br><br>Total cost of your order is " + totalCost);


// TASK 08
// var totalmarks = 980;                             
// var marksObtained = 804;
// var percentage = (804 * 100) / 980;
// document.write("<br><b>Marks Sheet</b>".fontsize(7) + "<br><br><br>");
// document.write("Total marks: " + totalmarks);
// document.write("<br>Marks obtained: " + marksObtained);
// document.write("<br>Percentage: " + percentage + "%");


// TASK 09
// var dollars = 10;
// var riyals = 25;
// var pkr = (dollars * 104.80) + (riyals * 28);
// document.write("<br><b>Currency in PKR</b><br><br>".fontsize(5));
// document.write("Total currency in PKR: " + pkr);


// TASK 10
// var number = 5;
// number = ( (number + 5) * 10 ) / 2;
// document.write("<br>" + number);


// TASK 11
// var currentyear = 2020;
// var birthyear = 1999;
// var age = currentyear - birthyear;
// document.write("<br><b>Age Calculator</b><br><br>".fontsize(6));
// document.write("Current Year: " + currentyear + "<br>Birth Year: " + birthyear + "<br>");
// document.write("You are either " + age + " or " + (age - 1) + " years old.");  


// TASK 12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * Math.pow(radius,2);
// document.write("<br><b>The Geometrizer</b><br><br>".fontsize(6));
// document.write("Radius of a Circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br>"); 


// TASK 13
// var favSnack = "Lays";
// var myAge = 20;
// var maxAge = 70;
// var amountPerDay = 3;
// var totalSnack = (maxAge - myAge) * amountPerDay;
// document.write("<br><b>The Lifetime Supply Calculator</b><br><br>".fontsize(6));
// document.write("Favourite Snack: " + favSnack + "<br>");                  
// document.write("Current Age: " + myAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snacks Per Day: " + amountPerDay + "<br>");
// document.write("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + maxAge);  









// CHAPTER 06 - 09

// TASK 01
// var a = prompt("Enter any number: ");
// document.write("<br>Result:<br>".fontsize(4));
// document.write("The value of a is: " + a + "<br>........................................<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a-- is: " + a-- + "<br>Now the value of a is: " + a);


// TASK 02
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br>a is " + a + "<br>b is " + b + "<br>");
// document.write("result is " + result);
// 1 - 0 + 1 + 1;                         


// TASK 03
// var name = prompt("Enter your name:");
// alert("Pleasure to have you (" + name + ") on our website :)");


// TASK 04
// var number = prompt("Enter a number:");
// for(var i = 1; i <= 10; i++){
//     if(number != 0){
//         document.write("<br>" + number + " x " + i + " = " + (number*i) + "<br>");
//     }
//     else{
//         document.write("<br>" + 5 + " x " + i + " = " + (5*i) + "<br>");
//     }
// }               


// TASK 05
// function getData() {

//     var subj1 = prompt("Enter name of subject 1:");
//     var subj2 = prompt("Enter name of subject 2:");
//     var subj3 = prompt("Enter name of subject 3:");

//     var totalEachSubj = 100;

//     var obtMarksSubj1 = prompt("Enter obtained marks of subject 1:");
//     var obtMarksSubj2 = prompt("Enter obtained marks of subject 2:");
//     var obtMarksSubj3 = prompt("Enter obtained marks of subject 3:");

//     var per1 = obtMarksSubj1 % totalEachSubj;
//     var per2 = obtMarksSubj2 % totalEachSubj;
//     var per3 = obtMarksSubj3 % totalEachSubj;

//     document.getElementById("a1").innerHTML = subj1;
//     document.getElementById("a2").innerHTML = totalEachSubj;
//     document.getElementById("a3").innerHTML = obtMarksSubj1;
//     document.getElementById("a4").innerHTML = per1 + "%";

//     document.getElementById("b1").innerHTML = subj2;
//     document.getElementById("b2").innerHTML = totalEachSubj;
//     document.getElementById("b3").innerHTML = obtMarksSubj2;
//     document.getElementById("b4").innerHTML = per2 + "%";

//     document.getElementById("c1").innerHTML = subj3;
//     document.getElementById("c2").innerHTML = totalEachSubj;
//     document.getElementById("c3").innerHTML = obtMarksSubj3;
//     document.getElementById("c4").innerHTML = per3 + "%";

//     var totalObtMarks = 0;
//     var table = document.getElementById("table").getElementsByTagName('td');
//     for(var i = 1; i < table.length; i++){
//         if(table[i].className == 'count-me'){
//             totalObtMarks += parseInt(table[i].innerHTML);
//         }
//     }

//     document.getElementById("d2").innerHTML = totalEachSubj * 3;
//     document.getElementById("d3").innerHTML = totalObtMarks;
//     document.getElementById("d4").innerHTML = ((totalObtMarks * 100) / parseInt(document.getElementById("d2").innerHTML)) + "%";
// }









// CHAPTER 09 - 11

// TASK 01
// var city = prompt("Enter any city name:");
// if(city == "karachi" || city == "Karachi"){
//     alert("Welcome to city of lights");
// }               


// TASK 02
// var gender = prompt("Enter your gender:");
// if (gender == "male" || gender == "Male"){
//     alert("Good Morning Sir");
// }                             
// else if (gender == "female" || gender == "Female"){
//     alert("Good Morning Ma'am");
// }


// TASK 03
// var trafficLightSignal = prompt("Enter traffic light color:");
// if (trafficLightSignal == "Red" || trafficLightSignal == "red"){
//     alert("Must Stop");
// }                      
// else if (trafficLightSignal == "Yellow" || trafficLightSignal == "yellow"){
//     alert("Ready to move");
// }                  
// else if (trafficLightSignal == "Green" || trafficLightSignal == "green"){
//     alert("Move now");
// }


// TASK 04
// var fuel = prompt("How many litres of petrol is in your car?");
// if(fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }       


// TASK 05
// var a = 4;
// if(++a === 5){
//     alert("Given condition for variable a is true");
// } //CONDITION IS TRUE                              

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// } //CONDITION IF FALSE

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } //CONDITION IS FALSE
// if (c === 13){
// alert("condition 2 is true");
// } //CONDITION IS TRUE
// if (++c < 14){
// alert("condition 3 is true");
// } //CONDITION IS FALSE
// if(c === 14){
// alert("condition 4 is true");
// } //CONDITION IS TRUE

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } //CONDITION IS TRUE

// if (true) {
//     alert("True");
// } //THIS CONDITION IS TRUE
// if (false) {
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// } //CONDITION IS TRUE


// TASK 06
// var marksObtSubj1 = prompt("Enter the marks obtained in subject 1:");
// var marksObtSubj2 = prompt("Enter the marks obtained in subject 2:");
// var marksObtSubj3 = prompt("Enter the marks obtained in subject 3:");  
// var totalMarksObt = +marksObtSubj1 + +marksObtSubj2 + +marksObtSubj3;
// var totalMarks = 300;
// var percentage = (totalMarksObt * 100) / totalMarks;
// var grade , remarks;
// if(percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if(percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<br><b>Marks Sheet<b><br><br>".fontsize(5));
// document.write("Total Marks : " + totalMarks + "<br>Marks Obtained : " + totalMarksObt + "<br>");
// document.write("Percentage : " + percentage + "<br>Grade : " + grade + "<br>Remarks : " + remarks);


// TASK 07
// var number = 6;
// var guessNumber = prompt("Guess the secret number:");
// if (guessNumber == number){
//     alert("Bingo! Correct Answer");
// }                                  
// else if ((+guessNumber + 1) == number){
//     alert("Close enough to the correct answer");
// }      


// TASK 08
// var number = prompt("Enter any number:");
// if ((number % 3) == 0){
//     alert("Entered number is divisible by 3");
// }          
// else{
//     alert("Entered number is not divisible by 3");
// }


// TASK 09
// var number = prompt("Enter any number:");
// if((number % 2) == 0){
//     alert("Entered number is even number");
// }                                        
// else{
//     alert("Entered number is odd number");
// }


// TASK 10
// var temp = prompt("Enter current temperature");
// if(temp > 40){
//     alert("It is too hot outside");
// }                                        
// else if(temp > 30){
//     alert("The weather today is normal");
// }
// else if(temp > 20){
//     alert("Today's weather is cool");
// }
// else if(temp > 10){
//     alert("OMG! Today's weather is so cool");
// }


// TASK 11
// var firstNumber = prompt("Enter first number");
// var secondNumber = prompt("Enter second number");    
// var operator = prompt("What operation you want to perform on these numbers?");
// var result;
// if (operator == "+"){
//     result = +firstNumber + +secondNumber;
// }         
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
// }                          
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
// }
// else if (operator == "%"){
//     result = firstNumber % secondNumber;
// }
// alert("Result is " + result);        









// CHAPTER 12 - 13

// TASK 01
// var char = prompt("Enter a character:");
// if(!isNaN(char * 1)){
//     alert("It is a numeric character");
// }
// else if(char == char.toUpperCase()){
//     alert("It is an upper case character");
// }
// else if(char == char.toLowerCase()){
//     alert("It is a lower case character");
// }


// TASK 02
// var num1 = parseInt(prompt("Enter first integer"));
// var num2 = parseInt(prompt("Enter second integer"));
// if(num1 > num2){
//     alert(num1 + " is larger");
// }        
// else if(num2 > num1){
//     alert(num2 + " is larger");
// }          
// else if(num1 === num2){
//     alert("Both are equal");
// }


// TASK 03
// var number = parseInt(prompt("Enter a number"));
// if(number > 0){
//     alert("Entered number is positive");
// }                                  
// else if(number < 0){
//     alert("Entered number is negative");
// }      
// else{
//     alert("Entered number is zero");
// }


// TASK 04
// var char = prompt("Enter a character");
// char = char.charAt(0).toLowerCase();
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//     alert("TRUE");
// }                 
// else{
//     alert("FALSE");
// } 


// TASK 05
// var correctPassword = "qwerty"
// var userPassword = prompt("Enter your password:");
// while (userPassword == 0) {
//     userPassword = prompt("Please enter your password");
// }
// if (correctPassword == userPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }


// TASK 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }


// TASK 07
// var time = parseInt(prompt("Enter time (IN 24 HOURS FORMAT)"));
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//      alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }









// CHAPTER 14 - 16

// TASK 01
// var studentName = [];


// TASK 02
// var studentName = {};


// TASK 03
// var stringsArray = ["pet" , "cat" , "dog"];


// TASK 04
// var numberArray = [12 , 14 , 124];


// TASK 05
// var booleanArray = [true , false];


// TASK 06
// var mixedArray = [1 , "hello" , false];


// TASK 07
// var eduPakistan = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// document.write("<br>Qualifications:<br><br>");
// for (var i = 0; i < eduPakistan.length; i++) {
//     document.write((+i + 1) + ") " + eduPakistan[i] + "<br>");
// }


// TASK 08
// var studentName = [];
// var studentScore = [];
// var totalMarks = 500;
// for (var i = 0; i < 3; i++) {
//     studentName[i] = prompt("Enter student " + (+i + 1) + " name:");
// }
// for (var i = 0; i < 3; i++) {
//     studentScore[i] = prompt("Enter student " + (+i + 1) + " score:");
// }
// for (var i = 0; i < 3; i++) {
//     document.write("Score of " + studentName[i] + " is " + studentScore[i] + ". Percentage: " + 
//     ((studentScore[i] * 100) / totalMarks) + "%<br>");
// }


// TASK 09
// var colorNames = ["red", "green", "blue", "black"];
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>");
// }

// function addColorBegin() {
//     colorNames.unshift(prompt("What color do you want to add to the begining?"));
//     document.write("<br><br>Updated Array:<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// function addColorEnd() {
//     colorNames.push(prompt("What color do you want to add at the end?"));
//     document.write("<br><br>Updated Array:<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// colorNames.unshift("purple", "brown");
// document.write("<br><br>Updated Array (Added two colors in the begining):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// colorNames.shift();
// document.write("<br><br>Updated Array (Removed first color from the begining):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// colorNames.pop();
// document.write("<br><br>Updated Array (Removed last color from the end):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// function addColorIndex() {
//     var addColorIndex = prompt("At which index do you want to add color?");
//     var addColorName = prompt("Enter the color name:");
//     colorNames.splice(addColorIndex, 0, addColorName);
//     document.write("<br><br>Updated Array (Added desired color at the desired index):<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// function removeColorIndex() {
//     var removeColorIndex = prompt("At which index do you want to delete color?");
//     var removeColorName = prompt("How many colors do you want to delete?");
//     colorNames.splice(removeColorIndex, removeColorName);
//     document.write("<br><br>Updated Array (Added desired color at the desired index):<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }


// TASK 10
// var studentScore = [320, 230, 480, 120];
// document.write("<br>Scores of students: " + studentScore);
// studentScore.sort();
// document.write("<br>Ordered scores of students: " + studentScore);


// TASK 11
// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cityNames.slice(2, 5);
// document.write("<br>Cities List: " + cityNames);
// document.write("<br>Selected cities list: " + selectedCities);


// TASK 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("<br>Array: " + arr);
// arr = arr.join(" ");
// document.write("<br>String: " + arr);


// TASK 13
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<br>Devices:<br>")
// document.write(devices + "<br><br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("Out:<br>" + devices[i] + "<br>");
// }


// TASK 14
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<br>Devices:<br>")
// document.write(devices + "<br><br>");
// for (var i = devices.length - 1; i >= 0; i--) {
//     document.write("Out:<br>" + devices[i] + "<br>");
// }


// TASK 15
// var phoneManufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var select = document.getElementById("selectBrand"); 
// for(var i = 0; i < phoneManufac.length; i++) {
//     var opt = phoneManufac[i];
//     document.getElementById("selectBrand").innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
// }










// CHAPTER 17 - 20

// TASK 01
// var items = [[1, 2], [3, 4], [5, 6]];
// console.log(items[0][0]); // 1
// console.log(items[0][1]); // 2
// console.log(items[1][0]); // 3
// console.log(items[1][1]); // 4
// console.log(items);


// TASK 02
// var items = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var row = 0; row < 3; row++) {
//     for (var col = 0; col < 4; col++) {
//         document.write(items[row][col] + " ");
//     }
//     document.write("<br>");
// }


// TASK 03
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// TASK 04
// var tableNumber = +prompt("Enter a number to show it's multiplication table:");
// var tableLength = +prompt("Enter length multiplication table:");
// document.write("Multiplication table of " + tableNumber + "<br>");
// document.write("Length " + tableLength + "<br><br>")
// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }


// TASK 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// TASK 06
// document.write("Counting:<br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + " ");
// }
// document.write("<br><br>Reverse Counting:<br>");
// for (var i = 15; i > 0; i--) {
//     document.write(i + " ");
// }
// document.write("<br><br>Even Numbers:<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " ");
//     }
// }
// document.write("<br><br>Odd Numbers:<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write(i + " ");
//     }
// }
// document.write("<br><br>Series:<br>");
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "k ");
//     }
// }


// TASK 07
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] == searchItem) {
//         document.write(searchItem + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if (i == bakeryItems.length) {
//     document.write("We are sorry. " + searchItem + " is <b>not available</b> in our bakery.");
// }


// TASK 08
// var array = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + " ");
// }
// document.write("<br><br>The largest number is ");
// var largestNumber = array[0];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > largestNumber) {
//         largestNumber = array[i];
//     }
// }
// document.write(largestNumber);


// TASK 09
// var array = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + " ");
// }
// document.write("<br><br>The smallest number is ");
// var smallestNumber = array[0];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] < smallestNumber) {
//         smallestNumber = array[i];
//     }
// }
// document.write(smallestNumber);


// TASK 10
// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + ", ");
//     }
// }










// CHAPTERS 21 - 25
// TASK 01
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// var fullName = "Full name is " + firstName + " " + lastName;
// alert(fullName);


// TASK 02
// var phoneModel = prompt("Enter your favourite mobile phone model");
// var length = phoneModel.length;
// document.write("My favourite phone is : " + phoneModel + "<br>");
// document.write("Length of String : " + length);


// TASK 03
// var string = "Pakistani";
// var index = string.indexOf('n');
// document.write("Index of 'n' is " + index);


// TASK 04
// var string = "Hello World";
// var index = string.lastIndexOf('l');
// document.write("String: " + string);
// document.write("<br>Last index of 'l': " + index);


// TASK 05
// var string = "Pakistani";
// var char = string.charAt(3);
// document.write("String: " + string);
// document.write("<br>Character at 3rd index: " + char);


// TASK 06
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// var fullName = ''.concat(firstName , ' ' , lastName); //THIS IS CORRECT
// var fullName = firstName.concat(' ' , lastName); // THIS IS ALSO CORRECT
// document.write(fullName);


// TASK 07
// var cityName = "Hyderabad";
// document.write("City name : " + cityName + "<br>");
// cityName = cityName.replace("Hyder", "Islam");
// document.write("After replacement : " + cityName);


// TASK 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before replacements :<br>" + message + "<br><br>")
// message = message.replace(/and/g,'&');
// document.write("After replacements :<br>" + message);


// TASK 09
// var string = "472";
// document.write("Value: " + string + "<br>Type: String<br><br>");
// string = parseInt(string);
// document.write("Value: " + string + "<br>Type: Number<br>");


// TASK 10
// var input = prompt("Enter some text");
// document.write("User input : " + input);
// input = input.toUpperCase();
// document.write("<br>Upper case : " + input);


// TASK 11
// var input = prompt("Enter some text");
// var firstChar = input.slice(0, 1);
// var otherChars = input.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input : " + input);
// document.write("<br>Title case : " + titleCase);


// TASK 12
// var num = 35.36;
// document.write("Number : " + num);
// var a = num.toString();
// var index = a.indexOf('.');
// document.write("<br>Result : " + a.slice(0, index) + a.slice(index + 1));


// TASK 13
// var userName = prompt("Enter your name ");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64){
//         alert("Please enter a valid username");
//         userName = prompt("Enter your name");
//         i = -1;
//     }
// }


// TASK 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchInput = prompt("What item do you want?");
// searchInput = searchInput.toLowerCase();
// for (var i = 0; i < items.length; i++) {
//     if (searchInput === items[i]) {
//         document.write(searchInput + " is available at " + i + " index in our bakery.");
//         break;
//     }
// }
// if (i == items.length) {
//     document.write("We are sorry. " + searchInput + " is not available in our bakery");
// }


// TASK 15
// var password = prompt("Enter your password");
// var x = 0, y = 0, z = 0;

// function notANumber() {
//     while (!isNaN(password[0])) {
//         alert("Password must not start with a number.\nPlease enter a valid password.");
//         password = prompt("Enter your password");
//     }
// }

// function sixCharLong(){
//     while(password.length < 6){
//         alert("Password must be atleast 6 characters long.\nPlease enter a valid password.");
//         password = prompt("Enter your password");
//     }
// }

// while (z == 0) {

//     sixCharLong();
//     notANumber();

//     for (var i = 0; i < password.length; i++) {
//         if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
//             x = 1;
//         }
//         else if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 123) {
//             y = 1;
//         }
//     }

//     for (var i = 0; i < password.length; i++) {
//         if (((password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57)
//             && (password.charCodeAt(i) < 65 || password.charCodeAt(i) > 122))
//             || (password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96)) {
//             alert("Password cannot contain special characters.\nPlease enter a valid password.");
//             z = 1;
//         }
//         if (z == 1) {
//             password = prompt("Enter your password");
//             sixCharLong();
//             notANumber();
//             i = -1;
//             z = 0;
//             x = 0;
//             y = 0;
//         }
//     }

//     if (x == 1 && y == 1) {
//         alert("Your password is valid.");
//         break;
//     }
//     else if (x == 1) {
//         alert("Password must also contain letters.\nPlease enter a valid password.");
//         x = 0;
//         password = prompt("Enter your password");
//         sixCharLong();
//         notANumber();
//     }
//     else if (y == 1) {
//         alert("Password must also contain numbers.\nPlease enter a valid password.");
//         y = 0;
//         password = prompt("Enter your password");
//         sixCharLong();
//         notANumber();
//     }

// }


// TASK 16
// var university = "University of Karachi";
// var array = university.split("");
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>")
// }


// TASK 17
// var userInput = prompt("Enter any string");
// var lastIndex = userInput.charAt((userInput.length)-1);
// document.write("User Input : " + userInput + "<br>Last character of input : " + lastIndex);


// TASK 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// text = text.toLowerCase();
// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "the") {
//         count++;
//     }
// }
// document.write("There are " + count + " occurrence(s) of word 'the'");










// CHAPTER 26 - 30

// TASK 01
// var userInput = prompt("Enter a positive integer");
// document.write("Number : " + userInput + "<br>");
// document.write("Round off value : " + Math.round(userInput) + "<br>");
// document.write("Floor value : " + Math.floor(userInput) + "<br>");
// document.write("Ceil value : " + Math.ceil(userInput));


// TASK 02
// var userInput = prompt("Enter a negative integer");
// document.write("Number : " + userInput + "<br>");
// document.write("Round off value : " + Math.round(userInput) + "<br>");
// document.write("Floor value : " + Math.floor(userInput) + "<br>");
// document.write("Ceil value : " + Math.ceil(userInput));


// TASK 03
// var number = prompt("Enter any number");
// document.write("The absolute value of " + number + " is " + Math.abs(number));


// TASK 04
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var diceNumber = Math.floor(improvedNum);
// document.write("random dice value : " + diceNumber);


// TASK 05
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 2) + 1;
// var coinToss = Math.floor(improvedNum);
// if(coinToss == 2){
//     document.write(coinToss + "<br>Random coin value : Heads");
// }
// if(coinToss == 1){
//     document.write(coinToss + "<br>Random coin value : Tails");
// }


// TASK 06
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 100) + 1;
// var reqNumber = Math.floor(improvedNum);
// document.write("random value between 1 and 100 : " + reqNumber);


// TASK 07
// var weight = prompt("Enter your weight in kilograms");
// weight = parseFloat(weight);
// document.write("The weight of user is " + weight + " kilograms");


// TASK 08
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 10) + 1;
// var secretNumber = Math.floor(improvedNum);
// var userInput = prompt("Enter a number between 1 and 10");
// while(userInput != secretNumber){
//     alert("Oops! your number didn't match the secret number.\n\nTry again");
//     userInput = prompt("Enter a number between 1 and 10");
// }
// alert("Congratulation your number matched the secret number");










// CHAPTER 31 - 34

// TASK 01
// var date = new Date();
// document.write(date);


// TASK 02
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = new Date();
// var currentMonth = month.getMonth();
// document.write("Current month : " + monthNames[currentMonth]);


// TASK 03
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date();
// var currentDay = day.getDay();
// document.write("Today is " + dayNames[currentDay]);


// TASK 04
// var day = new Date();
// var currentDay = day.getDay();
// if(currentDay == 0 || currentDay == 6){
//     document.write("It's fun day");
// }


// TASK 05
// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate < 16){
//     document.write("First fifteen days of the month.");
// }
// else{
//     document.write("Last days of the month.");
// }


// TASK 06
// var minutes = new Date();
// var crntMiliSec = minutes.getTime();
// var currentMin = crntMiliSec / (1000 * 60 * 60);
// document.write("Current Date : " + minutes);
// document.write("<br>Ellapsed milliseconds since January 1, 1970 : " + crntMiliSec);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + currentMin);


// TASK 07
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM");
// }


// TASK 08
// var date = new Date("Dec 31, 2020");
// document.write("Later date : " + date);


// TASK 09
// var dateRamzan = new Date("Apr 24, 2020");
// var currentDate = new Date();
// dateRamzan = dateRamzan.getTime();
// currentDate = currentDate.getTime();
// var diff = currentDate - dateRamzan;
// diff = diff / (1000 * 60 * 60 * 24);
// diff = Math.floor(diff);
// document.write(diff);


// TASK 10
// var date2020 = new Date("Jan 1, 2020");
// var refDate = new Date("Dec 5, 2020");
// var seconds2020 = date2020.getTime();
// var secondsRef = refDate.getTime();
// var diff = secondsRef - seconds2020;   //THIS IS CORRECT. BOTH ARE SAME
// var diff = refDate - date2020;        //THIS IS ALSO CORRECT. BOTH ARE SAME
// diff = Math.floor(diff / 1000);
// document.write("On reference date " + refDate + ", " + diff + " seconds had passed since beginning of 2020");


// TASK 11
// var d = new Date();
// document.write("Current date : " + d + "<br>");
// var hours = d.getHours();
// d.setHours(hours - 1);
// document.write("1 hour ago, it was " + d);


// TASK 12
// var d = new Date();
// document.write("Current date : " + d + "<br>");
// var years = d.getFullYear();
// d.setFullYear(years - 100);
// document.write("100 years back, it was " + d);


// TASK 13
// var age = prompt("What is your age?");
// var d = new Date();
// var year = d.getFullYear();
// d.setFullYear(year - age);
// var birthYear = d.getFullYear();
// document.write("Your age is " + age);
// document.write("<br>Your birth year is " + birthYear);


// TASK 14
// var customerName = "Daniyal Ahmed Khan";
// var month = "December";
// var numberOfUnits = 410;
// var chargesPerunit = 16;
// var netAmount = numberOfUnits * chargesPerunit;
// var latePayment = 350;
// var grossAmount = netAmount + latePayment;
// document.write("K-Electric Bill<br><br>".fontsize(6));
// document.write("Customer Name : <b>" + customerName + "</b><br>Month : <b>" + month +
//     "</b><br>Number of units : <b>" + numberOfUnits + "</b><br>Charges per unit : <b>" + chargesPerunit +
//     "</b><br><br>Net Amount Payable (within Due Date) : <b>" + netAmount + "</b><br>Late payment surcharge : <b>" +
//     latePayment + "</b><br>Gross Amount Payable (after Due Date) : <b>" + grossAmount + "</b>");










// CHAPTER 35 - 38
// TASK 01
// function currentDate(){
//     document.write(Date());
// }
// currentDate();


// TASK 02
// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + lastName;
//     alert(firstName + " " + lastName + ", you are welcome on our website");
// }
// name();


// TASK 03
// function addNumbers(){
//     var num1 = prompt("Enter first number");
//     var num2 = prompt("Enter second number");
//     var sum = +num1 + +num2;
//     document.write("The sum of two numbers is " + sum);
// }
// addNumbers();


// TASK 04
// function calc(num1, opr, num2) {
//     if (opr === "+") {
//         return num1 + num2;
//     }
//     else if (opr === "-") {
//         return num1 - num2;
//     }
//     else if (opr === "*") {
//         return num1 * num2;
//     }
//     else if (opr === "/") {
//         return num1 / num2;
//     }
//     else if (opr === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Incorrect operator";
//     }
// }
// num1 = 5, num2 = 5;
// var result = calc(num1, "-", num2);
// document.write("The difference of " + num1 + " and " + num2 + " is " + result);

// num1 = 4, num2 = 6;
// result = calc(4, "*", 6);
// document.write("<br>The product of " + num1 + " and " + num2 + " is " + result);

// num1 = 4, num2 = 6;
// result = calc(4, "$", 6);
// document.write("<br>" + result);

// num1 = 10, num2 = 5;
// result = calc(10, "/", 5);
// document.write("<br>The division of " + num1 + " and " + num2 + " is " + result);

// num1 = 8, num2 = 8;
// result = calc(8, "+", 8);
// document.write("<br>The sum of " + num1 + " and " + num2 + " is " + result);

// num1 = 9, num2 = 3;
// result = calc(9, "%", 3);
// document.write("<br>The remainder of " + num1 + " and " + num2 + " is " + result);


// TASK 05
// function square(sq) {
//     return sq * sq;
// }
// var num = prompt("Enter any number");
// document.write("Squared " + num + " is " + square(num));


// TASK 06
// function factorial(fac) {
//     var a1 = 1;
//     if (fac == 0 || fac == 1) {
//         return a1;
//     }
//     else {
//         for (var i = fac; i >= 1; i--) {
//             a1 = a1 * i;
//         }
//         return a1;
//     }
// }
// var a = prompt("Enter a number");
// document.write("The factorial of " + a + " is " + factorial(a));


// TASK 07
// function counting() {
//     var startNum = +prompt("Enter starting point");
//     var endNum = +prompt("Enter ending point");
//     for (var i = startNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting();


// TASK 08
// function calcHypotenuse(b, p) {
//     b = b * b;
//     p = p * p;
//     var hsq = +b + +p;
//     var hsqrt = calcSquare();
//     function calcSquare(){
//         var hroot = Math.sqrt(hsq);
//         return hroot;
//     }
//     return hsqrt;
// }
// var base = prompt("Enter base of a right angled triangle");
// var perpendicular = prompt("Enter perpendicular of a right angled triangle");
// var hyp = calcHypotenuse(base, perpendicular);
// hyp = hyp.toFixed(2);
// document.write("The hypotenuse of right angled triangle is " + hyp);


// TASK 09
// function areaOfRectangle(w, h) {
//     var a = w * h;
//     return a;
// }
// var width = 30;
// var height = 10;
// var area1 = areaOfRectangle(20, 5);
// var area2 = areaOfRectangle(width, height);
// document.write("The area of rectangle (when arguments are as value) is : " + area1);
// document.write("<br>The area of rectangle (when arguments are as variables) is : " + area2);


// TASK 10
// function palindrome(str) {
//     var check = str.toLowerCase();
//     var array =[];
//     array = check.split("");
//     array = array.reverse();
//     array = array.join("");
//     if(check === array){
//         return "It is palindrome";
//     }
//     else{
//         return "It is not palindrome"
//     }
// }
// var string = prompt("Enter a word to check whether it is palindrome or not");
// var a = palindrome(string);
// document.write(a);


// TASK 11
// function firstLetterCapital(str) {
//     var array = [];
//     array = str.split("");
//     for (var i = 0; i < array.length; i++) {
//         if (i == 0) {
//             array[i] = array[i].toUpperCase();
//         }
//         else {
//             if (array[i] === " ") {
//                 array[i + 1] = array[i + 1].toUpperCase();
//             }
//         }
//     }
//     array = array.join("");
//     return array;
// }
// var string = prompt("Enter any string");
// var a = firstLetterCapital(string);
// document.write("Example String : " + string + "<br>Expected Output : " + a);


// TASK 12
// function longestWord(str) {
//     var array = [];
//     var longWord = "";
//     array = str.split(" ");
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].length > longWord.length) {
//             longWord = array[i];
//         }
//     }
//     return longWord;
// }
// var string = prompt("Enter any string");
// var a = longestWord(string);
// document.write("Entered string : " + string + "<br>Longest word in the string : " + a);


// TASK 13
// function occurrenceOfLetter(str, let) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == let.toLowerCase() || str[i] == let.toUpperCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// var string = prompt("Enter a string");
// var letter = prompt("Enter a letter");
// var a = occurrenceOfLetter(string, letter);
// document.write("The letter " + letter + " occurred " + a + " times in " + string + ".");


// TASK 14
// function calcCircumference(rad) {
//     var circumference = 2 * Math.PI * rad;
//     return circumference;
// }
// function calcArea(rad) {
//     var area = Math.PI * (rad * rad);
//     return area;
// }
// var radius = prompt("Enter radius of circle");
// var output1 = calcCircumference(radius);
// var output2 = calcArea(radius);
// output1 = output1.toFixed(2);
// output2 = output2.toFixed(2);
// document.write("The Circumference of circle is " + output1 + "<br>and the Area of circle is " + output2);










// CHAPTER 38 - 42
// TASK 01
// function pow(a, b) {
//     pow = a;
//     for (var i = 1; i < b; i++) {
//         pow = pow * a;
//     }
// }
// var number1, number2, pow;
// number1 = parseInt(prompt("Enter base number"));
// number2 = parseInt(prompt("Enter power number"));
// pow(number1, number2);
// document.write("Base number : " + number1 + "<br>Power number : " + number2 + "<br>" + number1 + " to the power " + number2 + " = " + pow);


// TASK 02
// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// var year = prompt("Enter any year :");
// while(year.length != 4) {
//     alert("Please write 4 digit year");
//     year = prompt("Enter any year :");
// }
// if(leapYear(year) == true) {
//     alert("The year is leap year");
// }
// else {
//     alert("The year is not a leap year");
// }


// TASK 03
// function triangleArea(a, b, c) {
//     var s = sides(a, b, c);
//     return s * (s - a) * (s - b) * (s - c);
// }
// function sides(a, b, c) {
//     return (a + b + c) / 2;
// }
// var s1 = parseInt(prompt("Enter length of first side of triangle :"));
// var s2 = parseInt(prompt("Enter length of second side of triangle :"));
// var s3 = parseInt(prompt("Enter length of third side of triangle :"));
// document.write("Area of triangle is " + triangleArea(s1, s2, s3));


// TASK 04
// function mainFunc(a, b, c) {
//     var avg = calcAvg(a, b, c);
//     var perc = calcPerc(a, b, c);
//     return "Average of marks is : " + avg + "<br>Percentage is : " + perc;
// }
// function calcAvg(a, b, c) {
//     return (a + b + c) / 3;
// }
// function calcPerc(a, b, c) {
//     return ((a + b + c) * 100) / 300;
// }
// var m1 = parseInt(prompt("Enter marks of subject 1"));
// var m2 = parseInt(prompt("Enter marks of subject 2"));
// var m3 = parseInt(prompt("Enter marks of subject 3"));
// document.write(mainFunc(m1, m2, m3));


// TASK 05
// function index(str, ind) {
//     var i;
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == ind) {
//             return "Index of " + ind + " is " + i;
//         }
//     }
//     if (i == str.length) {
//         return "The desired letter is not in the string"
//     }
// }
// var str = prompt("Enter any string :");
// var ind = prompt("Which letter do you want to find the index of?");
// document.write(index(str, ind));


// TASK 06
// function delVowels(str) {
//     str = str.replace(/a/g, "");
//     str = str.replace(/e/g, "");
//     str = str.replace(/i/g, "");
//     str = str.replace(/o/g, "");
//     str = str.replace(/u/g, "");
//     str = str.replace(/A/g, "");
//     str = str.replace(/E/g, "");
//     str = str.replace(/I/g, "");
//     str = str.replace(/O/g, "");
//     str = str.replace(/U/g, "");
//     return str;
// }
// var str = prompt("Write a sentence :");
// document.write(delVowels(str));


// TASK 07
// var str = prompt("Write a sentence : ");
// var lowCase = str.toLowerCase();
// var array = [];
// var j = 0;
// document.write(str + "<br><br>");
// vowelOccur(lowCase);
// function vowelOccur(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             if (str[i + 1] == 'a' || str[i + 1] == 'e' || str[i + 1] == 'i' || str[i + 1] == 'o' || str[i + 1] == 'u') {
//                 array[j] = str[i] + str[i + 1];
//                 j++;
//             }
//         }
//     }
//     for (var i = 0; i < array.length; i++) {
//         if(i == array.length - 1) {
//             document.write(array[i]);
//         }
//         else
//         document.write(array[i] + ", ");
//     }
// }


// TASK 08
// var distance = prompt("Enter distance (in KM)");
// document.write("Distance in meters is " + distMeter(distance) + "<br>Distance in feet is " + distFeet(distance)
//     + "<br>Distance in inches is " + distInches(distance) + "<br>Distance in centimeters is " + distCm(distance));
// function distMeter(d) {
//     return d * 1000;
// }
// function distFeet(d) {
//     return d * 3280.84;
// }
// function distInches(d) {
//     return d * 39370.1;
// }
// function distCm(d) {
//     return d * 100000;
// }


// TASK 09
// var hoursWorked = prompt("Enter the number of hours you worked :");
// if(hoursWorked > 40) {
//     document.write("Your overtime pay is " + (hoursWorked - 40) * 1200);
// }
// else {
//     document.write("You won't get overtime pay.");
// }









// CHAPTERS 43 -48
// TASK 01
// function showAlert() {
//     alert("Hey there!")
// }


// TASK 02
// function showMsg() {
//     alert("Thanks for purchasing this phone from us.")
// }


// TASK 03
// function deleteRecord(id) {
//     document.getElementById(id).parentNode.innerHTML = "";
// }


// TASK 04
// NO JAVASCRIPT CODE


// TASK 05
// function increase() {
//     i++;
//     document.getElementById("counter").innerHTML = i;
// }
// function decrease() {
//     i--;
//     document.getElementById("counter").innerHTML = i;
// }
// var i = 0;
// document.getElementById("counter").innerHTML = i;









// CHAPTERS 49 - 52
// TASK 01
// function formData() {
//     if (document.getElementById("password").value == document.getElementById("cnpassword").value) {
//         document.write("<h1>Form Data</h1><br> <h4>Name : " + document.getElementById("first-name").value
//             + " " + document.getElementById("last-name").value + "<br>Email : " + document.getElementById("email").value
//             + "<br>Password : " + document.getElementById("password").value + "</h4>");
//     }
//     else {
//         alert("Password is not same");
//     }
// }


// TASK 02
// function readMore() {
//     var text = "We have a large variety of shirts. The quality of our shirts is very high. We get our stocks from China, America,Japan and many parts of the world. Quality is first and last priority. You won't have any complains about our product. And will come again.";
//     var para = document.getElementById("para");
//     para.innerHTML = text;
// }










// CHAPTERS 58 - 67
// TASK 01
// var maincontent = document.getElementById("main-content");
// console.log(maincontent.childNodes);

// var render = document.getElementsByClassName("render");
// // var a = render.innerHtml;
// for (var i = 0; i < render.length; i++) {
//     document.write(render[i].innerHTML + "<br>");
// }

// var firstName = document.getElementById("first-name");
// var lastName = document.getElementById("last-name");
// var email = document.getElementById("email");
// firstName.value = "Daniyal";
// lastName.value = "Ahmed";
// email.value = "daniyalahmed1010@gmail.com";

// var form = document.getElementById("form-content");
// var nodeType = form.nodeType;
// if(nodeType == 1) {
//     document.write("Node is an element");
// }
// else if(nodeType == 3) {
//     document.write("Node is a text");
// }

// var lastName = document.getElementById("lastName");
// var nodeType = lastName.nodeType;
// var childNode = lastName.childNodes;
// if (nodeType == 1) {
//     document.write("Node is an element");
// }
// else if (nodeType == 3) {
//     document.write("Node is a text");
// }
// document.write("<br>" + childNode);

// var lastName = document.getElementById("lastName");
// var childNode = lastName.childNodes;
// var textNode = document.createTextNode(" Carry");
// lastName.appendChild(textNode);

// var main = document.getElementById("main-content");
// var firstChildName = main.firstChild.nodeName;
// var firstChildValue = main.firstChild.innerHTML;
// var lastChildName = main.lastChild.nodeName;
// var lastChildValue = main.lastChild.innerHTML;
// document.write("<br><br>First child of main content : " + firstChildName + ".....Value of first child " + firstChildValue);
// document.write("<br>Last child of main content : " + lastChildName + ".....Value of last child " + lastChildValue);

// var lastName = document.getElementById("lastName");
// var prvSibling = lastName.previousSibling.innerHTML;
// var nxtSibling = lastName.nextSibling.innerHTML;
// document.write("<br><br>Previous Sibling : " + prvSibling + "<br>Next Sibling : " + nxtSibling);

// var email = document.getElementById("email");
// var parentNode = email.parentNode.innerHTML;
// var nodeType = email.nodeType;
// document.write("<br><br>Parent node : " + parentNode + "<br>Node type : " + nodeType);
// if (nodeType == 1) {
//     document.write("<br>Node is an element");
// }
// else if (nodeType == 3) {
//     document.write("<br>Node is a text");
// }