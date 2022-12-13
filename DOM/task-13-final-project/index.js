var submitbtn=document.getElementById("submit");

submitbtn.addEventListener("click",adduserdetails);


function  adduserdetails(e){
 
    var namevalue=document.getElementById("name").value;
    var emailvalue=document.getElementById("email").value;
    var phonevalue=document.getElementById("phone").value;
    var datevalue=document.getElementById("date").value;
    var timevalue=document.getElementById("time").value;
    
    if(localStorage.getItem(emailvalue)!=null){
        alert("this email id is already registered");
    }

    let obj={
        name:namevalue,
        email:emailvalue,
        phone:phonevalue,
        date:datevalue,
        time:timevalue
    }
    var objtostring=JSON.stringify(obj);
    localStorage.setItem(`${obj.email}`,`${objtostring}`);


}


for(var i=0;i<localStorage.length;i++){
    var key=localStorage.key(i);
    var data=localStorage.getItem(key);
    
   let lname=JSON.parse(data).name;
   let lemail=JSON.parse(data).email;
   
   var li=`<li class="litag" id="${lemail}">${lname}<button class="delete" onClick="deletebtn('${lemail}')">delete</button><button class="delete" onClick="editbtn('${lemail}')">edit</button></li>`;

   var target=document.querySelector(".usersList");
   target.innerHTML=target.innerHTML + li;
}

function deletebtn(em){
   localStorage.removeItem(em);
   deletefromscreen(em);
}

function deletefromscreen(em){
    var parent=document.querySelector(".usersList"); 
    var child=document.getElementById(em);
    parent.removeChild(child);
}

function editbtn(em){
   
    var nameinl=JSON.parse(localStorage.getItem(em)).name;
    var emailinl=JSON.parse(localStorage.getItem(em)).email;
    var phoneinl=JSON.parse(localStorage.getItem(em)).phone;

    document.getElementById("name").value=nameinl;
    document.getElementById("email").value=emailinl;
    document.getElementById("phone").value=phoneinl;

    deletefromscreen(em);
}