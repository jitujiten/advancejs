//using bind
var addition=function(x,y){
   console.log(x+y); 
}

var addbyfive=addition.bind(this,5);
addbyfive(100);






//using clousers
var multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

var multiplybytwo=multiply(2);
multiplybytwo(5);

var multiplybythree=multiply(3);
multiplybythree(5);