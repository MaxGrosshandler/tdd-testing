const fs = require("fs")
let commands = [];
function doCommand(name) {
    fs.readdir("./commands", (err, files) => {
        if (err) console.error(err);
        files.forEach(file => {
            try {
                const command = require(`./commands/${file}`);
                    commands.push(command)
                }

            catch (err) {
                console.log(
                    "An error has occured trying to load a command. Here is the error."
                );
                console.log(err.stack);
            }
        });
        commands.forEach(function (command) {
            if (command.name == name) {
                command.func()
               
            }
        
        })
    });
}
doCommand("ping")
module.exports.doCommand = doCommand;

