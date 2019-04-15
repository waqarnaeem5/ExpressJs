var express = require("express")
var app = express();
var path = require("path") // already in package just included


app.listen(3000, function () {
    console.log("listening at 3000")

})
//------------------ Simple HTML page 
app.get("/", function (request, response) {
    response.send('<html><body><h1> hello </h1><br>  <h1> hello22 </h1> ');


})
//----------- redirecting to any page
app.get("/", function (request, response) {
    response.redirect("http://www.google.com");
})

//--------------------- from any folder here folder name is public 
app.use("/public", express.static("Public"))

//---------------------ejs-----------------------

app.set("views", path.join(__dirname, "/EjsFolder"));
app.set("view engine", "ejs");
app.get('/EjsFolder', function (req, res) {
    res.render("Index", {
        user: "Vicky", title: "My First Embedded javascript file"
            + " on the page "
    });
});