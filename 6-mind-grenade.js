const num1=5
const num2=10

const addVal=()=>{
    console.log(`The sum is: ${num1 + num2}`);
}

addVal()//here we are not exporting it to other file we are just invoking it. even this if we import it in app.js it will invoke there automatically laso we don't need to store the imported data into something(in app.js)