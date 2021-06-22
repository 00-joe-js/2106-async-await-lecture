const fs = require("fs");
const {promisify} = require("util");

const enhancedReadFile = promisify(fs.readFile);
 

const readMyFiles = async () => {
    const contentOfMyGitignore = await enhancedReadFile("./.gitignore", "utf-8");
    console.log(contentOfMyGitignore);
};
readMyFiles();
readMyFiles();
readMyFiles();
readMyFiles();