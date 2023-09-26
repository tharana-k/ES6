function getData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
const data = [1,2,3,4,5];
if (data.length>0){
    resolve(data);
}
else{
    reject(new Error("no data found"));
}
},2000);

    });
}
console.log("fetching data");
getData()
.then((data)=>{
    console.log("data received",data);
})
.catch((error)=>{
console.error(error.message);
});