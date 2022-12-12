// var getform=document.getElementById("addForm");
// var subbtn=document.getElementById("submit");

// var newinput=document.createElement("input");
// newinput.className="form-control mr-2";
// newinput.id="description";
// newinput.setAttribute("placeholder","Description")
// getform.insertBefore(newinput,subbtn);

// var form=document.getElementById("addForm");
// var items=document.getElementById("items");
// var search=document.getElementById("filter");

// // add event for adding
// form.addEventListener("submit",additems);
// // add event for deleting
// items.addEventListener("click",deleteitems);
// //add event for filter
// search.addEventListener("keyup",filterelem);




// //additems function
// function additems(e){
//   e.preventDefault();

// //new li
// var li=document.createElement("li");
// li.className="list-group-item";

// //value of input
// var valueof=document.getElementById("item");
// //getting input text
// var text=document.createTextNode(valueof.value)

// //append it with li
// li.appendChild(text);
// //var valueof description
// var des=document.getElementById("description");
// //getting input descriptiontext
// var destext=document.createTextNode(des.value)
// li.appendChild(destext);
// //break button
// var breakbtn=document.createElement("span");
// breakbtn.appendChild(document.createTextNode("   "));

// //delete btn
// var delbtn=document.createElement("button");
// delbtn.className="btn btn-danger btn-sm float-right delete"
// //delete btn content
// var delbtncon=document.createTextNode("X");

// //edit button
// var editbtn=document.createElement("button");
// editbtn.className="btn btn-white btn-sm float-right edit";
// editbtn.id="editbtn";
// //edit button text content
// var edittext=document.createTextNode("📝");
// //append text content inside edit button
// editbtn.appendChild(edittext);
// //append  edit button inside li
// li.appendChild(editbtn);
// //append btn content with editbtn
// delbtn.appendChild(delbtncon);
// //append break btn in li
// li.appendChild(breakbtn);
// //append btn in to li
// li.appendChild(delbtn);
// //append to items
// items.appendChild(li);
// console.log(li);
// }





// function deleteitems(e){
//     if(e.target.classList.contains("delete")){
//       if(confirm("are you sure to delete?")){
//         var li=e.target.parentElement;
//         items.removeChild(li);
//       }
//     }
    
// }


// function filterelem(e){
//     //tolowrcase
// var text=e.target.value.toLowerCase();

// var lists=items.getElementsByTagName("li");
// Array.from(lists).forEach(function(item){
//     var itemname=(item.firstChild.textContent);
//     var descriptionname=item.childNodes[1].textContent;
//     if(itemname.toLowerCase().indexOf(text)!=-1 ||descriptionname.toLowerCase().indexOf(text)!=-1){
//         item.style.display="block";  
//     }else{
//         item.style.display="none";  
//     }
// })
// }





var additems=document.getElementById("addForm");
var itemslist=document.getElementById("items");

//adding functionality for addingitems

additems.addEventListener("submit",adding);

//adding functionality for deleteitems

itemslist.addEventListener("click",deleting);

//adding functionality for filtering
var filtervalue=document.getElementById("filter");
filtervalue.addEventListener("keyup",filtering);

//adding description input
var newdesinput=document.createElement("input");
newdesinput.className="form-control mr-2";
newdesinput.id="description";
newdesinput.setAttribute("placeholder","Description");

var subbtn=document.getElementById("submit");
additems.insertBefore(newdesinput,subbtn);


function adding(e){
  e.preventDefault();
  //getting value from input
  var inputvalue=document.getElementById("item");
  var desvalue=document.getElementById("description");
  //adding element
  var itemforming=document.createElement("li");
  itemforming.className="list-group-item";
  var textofitem=document.createTextNode(inputvalue.value);
  var descofitem=document.createTextNode(desvalue.value);
  //appending text node to li
  itemforming.appendChild(textofitem);
  //appending destext node to li
  itemforming.appendChild(descofitem);
 //creating edit button
 var editbtn=document.createElement("button");
 editbtn.className="btn btn-white btn-sm float-right edit";
 editbtn.id="editbtn";
 var edittext=document.createTextNode("📝");
 editbtn.appendChild(edittext);
 itemforming.appendChild(editbtn);
//creating delete button
var delbtn=document.createElement("button");
delbtn.className="btn btn-danger btn-sm float-right delete";
 var deltext=document.createTextNode("X");
 delbtn.appendChild(deltext);
 itemforming.appendChild(delbtn);

  itemslist.appendChild(itemforming);

}

function deleting(e){
  if(e.target.classList.contains("delete")){
   if(confirm("are you sure to delete")){
    var li=e.target.parentElement;
    itemslist.removeChild(li);
   }
  }
}


function filtering(e){
  var searchingvalue=e.target.value.toLowerCase();
 var lis=document.getElementsByTagName("li");

 Array.from(lis).forEach(function(item){
   var listvalues=item.childNodes[0].textContent.toLowerCase();
   var descrvalues=item.childNodes[1].textContent.toLowerCase();
  if(listvalues.indexOf(searchingvalue)!=-1 || descrvalues.indexOf(searchingvalue)!=-1 ){
    item.style.display="block";
  }else{
    item.style.display="none";
  }
 });
}