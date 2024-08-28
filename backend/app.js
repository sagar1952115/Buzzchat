const express = require("express")
const cors = require("cors")
const { createServer } = require("http")
const socketSetup = require("./socket"); // Import the socket setup
const cron = require("node-cron");
require("dotenv").config()

const app = express()

const server = createServer(app)

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("Hello this is test message")
})

const port = process.env.PORT || 5000

server.listen(port, () => {                                                                                         
    console.log(`Server run on port http://localhost:${port}`)
})



socketSetup(server)

cron.schedule('*/5 * * * * *', () => {
    const http = require('http');
    console.log("hello")
    http.get(`http://localhost:${port}`);
});