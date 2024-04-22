import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/about", (req, res) => {
    res.send("<h1>about</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1>")
})

app.post("/register", (req, res) => {
    res.sendStatus(201)
})

app.put("/user/milosz", (req, res) => {
    res.sendStatus(200)
})

app.patch("/user/milosz", (req, res) => {
    res.sendStatus(200)
})

app.delete("/user/milosz", (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`server running port ${port}`)
})