const {readFileSync,writeFileSync}=require('fs')//or const fs=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second);

console.log("start");
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag:'a'}
)// If result-sync.txt will not be there then first it will create that file then write in it. Here we are using a third argument which is flag it ensures that the data written in the file will not be overwritten every time we run it.
console.log("done with this task");
console.log("starting the next task");