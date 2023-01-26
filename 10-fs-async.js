const {readFile,writeFile, write}=require('fs')//or const fs=require('fs')

console.log("start");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;
        writeFile('./content/result-Async.txt',`Here is the result : ${first}, ${second}`,(error,result)=>{
            if(error){
                console.log(error)
                return
            }
            console.log("done with this task");
        })
    })
})
console.log("starting the next task");
// Here we've used callback
// Here in console we can see that "starting the next task" is printing before "done with this task" it is beacuse after "start" the control goes to readFile functionality we offload this task and continue the program execution(mtlb readfile wale ko jitna time lgna hai poora hone mei vo lgega (vo execute hota rhega) aur hum aage ka program execute kregnge wait ni krenge uska poora hone ka)