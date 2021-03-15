const fn = () => process.stdout.clearLine();
const fn1 = () => process.stdout.cursorTo(0);
const fn2 = () => process.stdout.write("hello world");

// setTimeout(fn2, 1000);
// setTimeout(fn, 2000);
// setTimeout(fn1, 3000);

process.stdin.on("data", (data) => {
  console.log("hello world");
});
