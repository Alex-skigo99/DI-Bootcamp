const http = require('http');
const server = http.createServer((request, response) => {
    // console.log(request.url);
    // console.log(request.method);
    if (request.url === '/users') {
        if (request.method === 'GET') {
            let users = [
                {name:'John',age:25},
                {name:'Mike',age:27},
                {name:'Rici',age:20},
            ];
            response.end(JSON.stringify(users))
        }
        else if (request.method === 'POST') {

        }
    }
    else {
        response.end('I dont know what you want')
    };
});

server.listen(3001, () => {
    console.log('run on port 3001');
});
