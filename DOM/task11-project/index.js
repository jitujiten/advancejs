var subbtn=document.getElementById("submit");



subbtn.addEventListener("click",submitted);

function submitted(e){
    var namevalue=document.getElementById("name").value;
    var emailvalue=document.getElementById("email").value;
    var phonevalue=document.getElementById("phone").value;
    var datevalue=document.getElementById("date").value;
    var timevalue=document.getElementById("time").value;
    
    e.preventDefault();

    var myobj={
         name:namevalue,
         email:emailvalue,
         phone:phonevalue,
         date:datevalue,
         time:timevalue
    }

    var objserialized=JSON.stringify(myobj);

    localStorage.setItem("myobj",objserialized);

    var objdeserialized=JSON.parse(objserialized);
    console.log(objdeserialized);


var namevalue=document.getElementById("name");
   if(namevalue.value==""||emailvalue.value==""||phonevalue.value==""){
    msgprint.innerHTML="please fill the details";
    msgprint.style.backgroundColor="red";

    setTimeout(() => {
        msgprint.remove(); 
    }, 2000);
   }else{
    msgprint.innerHTML="submitted";
    msgprint.style.backgroundColor="green";
    setTimeout(() => {
        msgprint.remove(); 
    }, 2000);
   }
}




