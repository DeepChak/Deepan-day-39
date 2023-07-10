
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    let fileName = +new Date()
    res.writeHead(200, { "content-Type": "text/html" })
    fs.writeFile(`files/${fileName}.txt`,
     `Time - ${new Date()}`, 'utf-8', () => {
        fs.readFile(`files/${fileName}.txt`, 'utf-8', (error, data) => {
            if (error)
                console.log(error)
            else
                res.end(data)
        })
    })
})

server.listen(8000, () => console.log("Server is Listening port 8000"))