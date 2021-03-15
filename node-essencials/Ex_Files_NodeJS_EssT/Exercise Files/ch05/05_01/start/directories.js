const fs = require("fs");

// rename directory
//fs.renameSync("./storage-files", "./storage");

// to remove a directory using rmdir I first need to delete the files in it
fs.readdirSync("./storage").forEach((fileName) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

// removing directory
fs.rmdir("./storage", (err) => {
  if (err) {
    throw err;
  }
  console.log("./storage directory removed");
});
