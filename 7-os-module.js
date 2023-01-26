const os=require('os')//it is a buil-in module so we don't require './' in start of name of module

// info about current user
const user=os.userInfo()
console.log(user);


// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)