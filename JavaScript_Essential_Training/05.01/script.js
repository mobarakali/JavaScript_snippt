/*
var mainContent = document.getElementById("mainContent");

var display = mainContent.nodeName;
display = display + " \n " + mainContent.nodeType;
display = display + " \n " + mainContent.nodeValue;
display = display + " \n " + mainContent.childNodes.length;
display = display + " \n " + mainContent.parentNode.length;

alert( display);

*/

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var obj = {a:1, b:2, c:3};
    
for (var prop in myLinks) {
  console.log("o." + prop + " = " + myLinks[prop]);
}

/*
var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type: ", mainTitle.nodeType );
console.log("The inner HTML is ", mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "right");

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);
*/