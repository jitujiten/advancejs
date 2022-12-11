var form=document.getElementById("addForm");
var items=document.getElementById("items");


// add event for adding
form.addEventListener("submit",additems);
// add event for deleting
items.addEventListener("click",deleteitems);

//additems function
function additems(e){
  e.preventDefault();

//new li
var li=document.createElement("li");
li.className="list-group-item";

//value of input
var valueof=document.getElementById("item");
//getting input text
var text=document.createTextNode(valueof.value)
//append it with li
li.appendChild(text);
//break button
var breakbtn=document.createElement("span");
breakbtn.appendChild(document.createTextNode("   "));
//delete btn
var delbtn=document.createElement("button");
delbtn.className="btn btn-danger btn-sm float-right delete"
//delete btn content
var delbtncon=document.createTextNode("X");
//edit button
var editbtn=document.createElement("button");
editbtn.className="btn btn-white btn-sm float-right edit";
editbtn.id="editbtn";
//edit button text content
var edittext=document.createTextNode("📝");
//append text content inside edit button
editbtn.appendChild(edittext);
//append  edit button inside li
li.appendChild(editbtn);
//append btn content with editbtn
delbtn.appendChild(delbtncon);
//append break btn in li
li.appendChild(breakbtn);
//append btn in to li
li.appendChild(delbtn);
//append to items
items.appendChild(li);
console.log(li);
}





function deleteitems(e){
    if(e.target.classList.contains("delete")){
      if(confirm("are you sure to delete?")){
        var li=e.target.parentElement;
        items.removeChild(li);
      }
    }
    
}


