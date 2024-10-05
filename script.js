var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);

console.log(h1_elements[0].innerText="Hiiiii"); //innerText
console.log(h1_elements[1].innerHTML = "<p>This is a paragraph</p>");//innerHTML

var x = document.getElementById("header");
x.innerHTML = "<p>This is a paragraph</p>" // inner HTML
x.innerText = "I am supermannnnn!!!!!"//innerText

var y = document.querySelector("#para").innerText = "Hello";
console.log(y);

//indexOf.("")
var new_string = "HEllo, World world";
console.log(new_string.indexOf("World"));
console.log(new_string.indexOf("ld"));

//lastIndexOf("");
new_string = "Hello, World World"
new_string.indexOf("World"); //7
new_string.lastIndexOf("World"); //13

//localeCompare()
var str1 = "apple";
var str2 = "mango";
var str3 = "mango";
console.log(str1.localeCompare(str2));//return 1
console.log(str2.localeCompare(str3));//return 0

//localeCompare() ADVANCE
var str4 = "Mango"
console.log(str3.localeCompare(str4));//return -1
console.log(str4.localeCompare(str3));//return 1
var str5 = "maNgo";
console.log(str4.localeCompare(str5));

// match()
var str = "Thi cat is very grumpy";
console.log(str.match(/([A-Z])\w+/g));//['Thi']
str = "This Cat Is Very Grumpy";
console.log(str.match(/([A-Z])\w+/g)); //['This', 'Cat', 'Is', 'Very', 'Grumpy']

//replace()
var str100 = "A B C D E F";
console.log(str100.replace(" "," ,"));//'A ,B C D E F'
console.log(str100.replaceAll(" "," ,"));//'A ,B ,C ,D ,E ,F'

//search()
var x = "Hello hi";
console.log(x.search("hi"));
console.log(x.search("lo"));

//slice(x,y);
var y = "Hello, _ World";
y.slice(0,8)//'Hello, _' spaces are consider as charactor

//split()
var  z = "A, B, C, D, E, F";
console.log(z.split(", "));


var a = "Hello mchn";
console.log(a.startsWith("Hello"));// true
console.log(a.endsWith("mchn"));// true
console.log(a.endsWith("Hello"));// false

//upper and lower 
var b = "hello world";
b.toLocaleLowerCase();//'hello world'
b.toLocaleUpperCase();//'HELLO WORLD'
b.toLowerCase();//'hello world'
b.toUpperCase();//'HELLO WORLD'

var c = " Hello World ";
console.log(c.trim());

var d = "Hello";
var e = "Hello";
var f = "Hi";
var g = "5";
var h = 5; 

console.log(d==e);
console.log(d!=e);
console.log(e!=f);
console.log(g==h);
console.log(g===h);//if same data type and value
console.log(g!==h1);

var i = "10";
var number = +i;
console.log(number);

var num1 = 1;
consoe.log(num1++);

var num1 = 1;
consoe.log(++num1);

var num1 = 1;
consoe.log(num1++);

var num1 = 1;
consoe.log(++num1);

if(5>2){
    console.log("Hello")
}else if(5==2){
    console.log("Dhanu");
} else if(10>3){
    console.log("World");
}