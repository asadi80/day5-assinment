// 1. Create a function that every time you invoke it, it will print out the message “Congrats you 
//     earn the chance!“, however it can only print out the message with the first 5 invokes. all the 
//     rest invokes will print out the message “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)
// 2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))  
//     which takes minimumLength as a input and filter all the strings whose length is longer than minimumLength (hint : using currying) (edited) 

const  myChance = () =>{
    let x = 0;
    return function(){
       
        if(x <= 5){
            console.log("Congrats you earn the chance!")
        }else{
            console.log("Sorry you missed the chance")
        }
        x += 1
    }
}
const closure = myChance();
let times =10;
for(let j = 0; j < times; j++){
    closure();
}

//------------------------------------------------------------------------------------------------------
let array=['chance','you', 'longerThan', 'Congrats', 'minimumLength', 'currying', 'this', 'to']
function longerThan(minimumLength){
    return (element) => {
        return (element.length > minimumLength)
    }
}

//test #2
let minimumLength = 5;
console.log(array.filter(longerThan(minimumLength)));