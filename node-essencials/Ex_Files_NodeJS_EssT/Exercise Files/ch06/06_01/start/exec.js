const cp = require("child_process");

// execute a command that open the browser
// cp.exec("open http://www.linkedin.com/learning");

// execute a command that opens another instance of terminal
// cp.exec("open -a Terminal .");

// execute a command that returns data
cp.exec("ls", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// execute a command that doen's exist return an error and the error message goes to the third parameter
cp.exec("lst", (err, data, stderr) => {
  console.log(stderr);
});
