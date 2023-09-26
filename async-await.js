function wait(as){
    return new Promise(resolve=>setTimeout(resolve,as));
}

//async function that uses wait() function to simulate anasynchronous operation
async function doSomethingAsync(){
    console.log(`starting async operation`);
    await wait(2000);
    console.log(`async operation completed`);
}
//main function that calls doSomethingAsync() asynchronously using await
async function main(){
    console.log(`starting main function`);
    await doSomethingAsync();
    console.log(`main function completed`);
}
//call the main function to start the program
main();