const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs');
const port = process.env.PROD || 8000;
const publicPath = path.join(__dirname, "../public/");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// view engine
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// middleware
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    // res.send("Hi")
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.send("404, Oops you hit the wrong URL")
});

app.listen(port, () => {
    console.log(`Lisenting to port no. ${port}`);
});