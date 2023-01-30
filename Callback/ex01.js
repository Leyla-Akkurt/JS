function printName(name){
    console.log(name);
}
function sayHelloName(callback){
    console.log("Hello");
    let name="Leyla";
    callback(name);
 
}
sayHelloName(printName);