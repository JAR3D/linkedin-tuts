// spawn criar um outro processo de node à parte
// podemos comunicar com ele neste caso atraves do stdin

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Joao \n");
questionApp.stdin.write("Rinchoa \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
