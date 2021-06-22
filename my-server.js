const express = require("express");
const app = express();

const fs = require("fs");

const createHomepageHtmlString = require("./make-homepage-html");

const availableAdjectives = require("./data/possible-adjectives.json");
const availableFirstNames = require("./data/possible-names.json");

app.use(express.static(__dirname + "/assets"));

app.get("/", (req, res) => {

    fs.readFile(__dirname + "/data/submissions.txt", "utf-8", (err, fileContents) => {
        if (err) {
            res.status(500); // Internal server error.
            res.send("Sorry, file read went wrong. :( I dunno why.");
        } else {
            const names = fileContents.split("\n");
            res.send(
                createHomepageHtmlString(
                    availableAdjectives,
                    availableFirstNames,
                    names
                )
            );
        }
    });
});

app.use(express.urlencoded({ extended: false }));
app.post("/submit-name", (req, res) => {
    const chosenAdjective = req.body.theAdjective;
    const chosenName = req.body.theName;

    console.log(chosenAdjective, chosenName);
    fs.appendFile(
        __dirname + "/data/submissions.txt", 
        `${chosenAdjective} ${chosenName}\n`,
        (err) => {
            if (err) {
                res.status(500); // Internal server error.
                res.send("Sorry, I couldn't write to the file. :( I dunno why.");
            } else {
                res.redirect("/");
            }
        }
    );

});

const port = 8080;
app.listen(port, () => {
    console.log("Server listening!");
});