// When "display" is clicked, display (perhaps using alert( ), etc.) 
// the content (i.e. innerHTML) of all your elements.


// var greetingString = "Hello";
// var myName = prompt("Please enter your name", "");
// var concatString;
// document.write(greetingString + " " + myName + "<br/>");
// concatString = greetingString + " " + myName;
// document.write(concatString);

// document.write("<br></br>")
// document.write("here I am");
// document.write("<br></br>")
// document.write("potato salad");

function getItAll() {
    let html = document.getElementById("everything").innerHTML;
    alert(html);    
}

function setItAll() {
    var p_elements = document.getElementsByTagName('p');
    for (index in in p_elements) {
        p_elements[index].innerText = "ha ha ha";
    }
}

// var elements = document.getElementsByTagName("*");
// let text_elements = "";
// for(let e = 0; e < elements.length; e++) {
//     text_elements += elements[e].tagName + ":" + elements[e].textContent + "<br>";
// }
// document.write(text_elements)

