
// parentElement
// var form=document.querySelector("form");
// console.log(form.parentNode)

// lastelementchild
// var listitem=document.getElementById("items");
// console.log(listitem.lastElementChild);

// lastchild
// var listitem=document.getElementById("items");
// console.log(listitem.lastChild);


// firstelementchild
// var listitem=document.getElementById("items");
// console.log(listitem.firstElementChild);


// firstchild
// var listitem=document.getElementById("items");
// console.log(listitem.firstChild);

// nextsibling
// var listitem=document.querySelector(".list-group-item");
// console.log(listitem.nextSibling);


// nextelementsibling
// var listitem=document.querySelector(".list-group-item");
// console.log(listitem.nextElementSibling);

// previoussibling
// var listitem=document.querySelectorAll(".list-group-item");
// console.log(listitem[1].previousSibling);

// previouselementsibling
// var listitem=document.querySelectorAll(".list-group-item");
// console.log(listitem[1].previousElementSibling);




//........create element
// createelement
var newdiv=document.createElement("div");
console.log(newdiv);
// setAttribute
newdiv.setAttribute("title","hello")
//set id
newdiv.id="hello"

//set class
newdiv.className="hello"
// createtesxtnode
var textnode=document.createTextNode("Hello");
// appendchild
newdiv.appendChild(textnode);

// Now go head and add HEllo word before Item Lister
var h1tag=document.querySelector("#header-title");
var container=document.querySelector(".container");

container.insertBefore(newdiv,h1tag);
newdiv.style.fontSize="30px";

// Now go head and add HEllo word before Item 1
var item1=document.querySelector(".list-group-item");
var items=document.getElementById("items");

items.insertBefore(newdiv,item1);