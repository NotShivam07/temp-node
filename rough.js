let promise=new Promise(function(resolve,reject){
    console.log("Promise is pending")
    setTimeout(()=>{
        resolve(true);
    },3000)
  })

promise.then((value)=>{
    console.log(value)
    let p2=new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Promise 2 resolved")
        }, 3000);
    })
    return p2;
}).then((value)=>{
    console.log(value);
    return 3;
}).then((value)=>{
    console.log(value);
})