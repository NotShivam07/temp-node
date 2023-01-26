const path=require('path')

console.log(path.sep)

const filePath=path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute_path=path.resolve(__dirname,'content', 'subfolder', 'test.txt')//__dirname will point to the directory in which this file (in which i am writting this code) is present 
console.log(absolute_path);