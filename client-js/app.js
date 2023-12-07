// Example in test-app's index.js
const hwm = require('hello-world-module');

async function esmMain() {
  const hwmesm = await import("hello-world-module-esm")
  console.log("hwmesm")

  console.log(hwmesm.helloWorld());
  console.log(hwmesm.default());
}


console.log(hwm.helloWorld());
console.log(hwm.default());
esmMain().then(() => console.log("done"));
