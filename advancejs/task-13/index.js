

function attach(){
    let counter=0;
    document.getElementById("clickme").addEventListener("click",function xyz(){
        console.log("button clicked",++counter);
    })
}
 
attach();


addEventListener("DOMContentLoaded",function xyz(){
    console.log("DOM has loaded");
})