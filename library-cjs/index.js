// index.js
function helloWorld() {
    return "Hello, World! (CJS)";
}

function defaultFunction() {
    return "Hello, World from default! (CJS)";
}

module.exports = {
    default: defaultFunction,
    helloWorld,
    defaultFunction
}