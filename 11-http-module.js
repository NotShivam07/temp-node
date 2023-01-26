const http=require('http')

const server=http.createServer((request,response)=>{
    // console.log(request);
    // response.write("Welcome to our Homepage")//instead of doing this(this and below line) we will do this(below) beacuse it will render the same page on any request
    // response.end()

    if(request.url === '/'){
        response.end("Welcome to our Homepage")
    }
    else if(request.url === '/about'){
        response.end("Here is our short history")
    }
    else{
        response.end(`<h1>Oops!!!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `)
    }
    
})

server.listen(5000)