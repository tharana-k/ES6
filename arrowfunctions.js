//anonymous function
const a = function(){
    console.log("hello");
}
a();
//arrow function
const add = (a,b) => a+b;
console.log(add(3,4));

//arrow function multiline
let display = (c) =>{
    if(c>0){
        console.log(c +"is positive");
    }
    else{
        console.log(c +"is negative");
    }
}
display(78);