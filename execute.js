const json = require("./var/rinha/source.rinha.json");
const interpret = require("./interpret.js");

eval(interpret(json.expression));