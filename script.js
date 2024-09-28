var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);

console.log(h1_elements[0].innerText="Hiiiii"); //innerText
console.log(h1_elements[1].innerHTML = "<p>This is a paragraph</p>");//innerHTML

var x = document.getElementById("header");
x.innerHTML = "<p>This is a paragraph</p>" // inner HTML
x.innerText = "I am supermannnnn!!!!!"//innerText
