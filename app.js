const express = require("express")

const app = express();

app.set("view engine", 'ejs');

app.use((req, res, next) => {
    console.log("this is middleware");
    res.send("middleware")
})

app.get("/", (req, res) => {
    res.render('index');
})
app.get("/about", (req, res) => {
    res.send("THIS IS ABOUT PAGE");
})
app.get("/profile", (req, res) => {
    res.send("THIS IS PROFILE PAGE");
})

app.listen(3000);