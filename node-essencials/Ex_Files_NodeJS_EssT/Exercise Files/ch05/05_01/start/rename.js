const fs = require("fs");

// rename a file
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// move the file
fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) {
    throw err;
  }
});

// removing a file
setTimeout(() => {
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);
