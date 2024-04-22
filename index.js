import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
import morgan from "morgan"

const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express();
const port = 3000;
let bandName = "";


app.use(bodyParser.urlencoded({extended: true}))

const bandNameGenerator = (req, res, next) => {
    console.log(req.body);
    bandName = req.body["street"] + req.body["pet"]
    next();
}

app.use(bandNameGenerator)

// const logger = (req, res, next) => {
//     console.log("Request Method: ", req.method);
//     console.log("Request URL: ", req.url);
//     next();
// }

// app.use(logger);


// app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`)
})

// app.post("/submit", (req, res) => {
//     console.log(req.body)
// })

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