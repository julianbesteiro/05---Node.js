let commands = require("./commands");

process.stdout.write("prompt > ");

process.stdin.on("data", function (data) {
  let cmd = data.toString().trim();

  let comandos = cmd.split(" ")[0];

  if (commands[comandos]) {
    commands[comandos](cmd);
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});

//   let arreglo = cmd.split(" ");

//   if (arreglo[0] == "echo") {
//     commands.echo(arreglo);
//   } else if (cmd === "pwd") {
//     commands.pwd();
//   } else if (cmd === "ls") {
//     commands.ls();
//   } else {
//     process.stdout.write("You typed: " + cmd);
//   }
//   process.stdout.write("\nprompt > ");
// });
