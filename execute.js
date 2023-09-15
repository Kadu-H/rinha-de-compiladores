const json = require("./var/rinha/source.rinha.json");
const interpret = require("./interpret.js");

const start = performance.now();

eval(interpret(json.expression));

const end = performance.now();

const tempExec = parseFloat((end-start)/1000).toFixed(5)

console.log(`Tempo de execução: ${tempExec}`)