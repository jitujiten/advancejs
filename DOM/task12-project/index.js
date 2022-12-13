var subbtn=document.getElementById("submit");
subbtn.addEventListener("click",submitted);







function submitted(e){
    var namevalue=document.getElementById("name").value;
    var emailvalue=document.getElementById("email").value;
    var phonevalue=document.getElementById("phone").value;
    var datevalue=document.getElementById("date").value;
    var timevalue=document.getElementById("time").value;
    
    if(localStorage.getItem(emailvalue)!==null){
        alert("This email is already registered !");
        return;
    }
    e.preventDefault();

    var obj={
         name:namevalue,
         email:emailvalue,
         phone:phonevalue,
         date:datevalue,
         time:timevalue
    }

    var objserialized=JSON.stringify(obj);

    localStorage.setItem(obj.email,objserialized);
    //iterate local storage
    for(var i=0;i<localStorage.length;i++){
      var key=localStorage.key(i);
      var data=localStorage.getItem(key);
      var lname=JSON.parse(data).name;
      var lemail=JSON.parse(data).email;
      var lphone=JSON.parse(data).phone;
      var parentul=document.getElementById("parent");
    //create element
    var newele=document.createElement("li");
    newele.id=`${lemail}`
    var textnode=document.createTextNode(`${lname} ${lemail}`);
    }
    newele.appendChild(textnode);
    parentul.appendChild(newele);
    
}




