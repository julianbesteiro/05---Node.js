// Un prompt como output

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea

const fs = require("fs");

module.exports = {
  pwd: function () {
    let ruta = process.argv;

    process.stdout.write("The route is: " + ruta);
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (input) {
    let inputSplitteado = input.split(" ");
    let arregloSinEcho = inputSplitteado.slice(1).join(" ");
    process.stdout.write(arregloSinEcho);
  },
  cat: function (str) {
    setTimeout(() => {
      process.stdout.write("\nprompt > ");
    }, 100);

    let inputSplitteado = str.split(" ");

    inputSplitteado.forEach(function (elemento) {
      process.stdout.write(elemento.toString() + "\n");

      fs.readFile(elemento, "utf8", function (err, data) {
        process.stdout.write(data + "\n");
      });
    });
  },
};

//crear arreglo
//validar formato de archivo

//let route = process.argv.toString();

// process.stdin.on("data", function (data) {
//   let fecha = new Date();
//   let ruta = process.argv;

//   let cmd = data.toString().trim(); // Remueve la nueva línea

//   if (cmd == "date") {
//     process.stdout.write("The date is: " + fecha);
//   } else if (cmd == "pwd") {
//     process.stdout.write("The route is: " + ruta);
//   } else {
//     process.stdout.write("You typed: " + cmd);
//   }
//   process.stdout.write("\nprompt > ");
// });
