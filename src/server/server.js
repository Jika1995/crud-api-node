import http from 'http';
import { getUsers } from '../controllers/getUserList';
import { getUserById } from '../controllers/getUserById';
import { createUser } from '../controllers/createUser';
import { updateUser } from '../controllers/updateUser';
import { deleteUser } from '../controllers/deleteUser'

const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res)
    } else if (req.url.match(/\/api\/users\/[a-z,0-9,-]{36,36}$/) && req.method === 'GET') {

        const id = req.url.split('/'[3])
        getUserById(req, res, id)

    } else if (req.url === '/api/users' && req.method === 'POST') {

        createUser(req, res)

    } else if (req.url.match(/\/api\/users\/[a-z,0-9,-]{36,36}$/) && req.method === 'PUT') {

        const id = req.url.split('/')[3];
        updateUser(req, res, id)

    } else if (req.url.match(/\/api\/users\/[a-z,0-9,-]{36,36}$/) && req.method === 'DELETE') {

        const id = req.url.split('/')[3];
        deleteUser(req, res, id)

    } else if (!req.url.match(/\/api\/users\/[a-z,0-9,-]{36,36}$/)) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "There is no such endpoint" }))
    } else {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Internal Server Error" }))
    }
})

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})