var jscode = "";

function interpret(node){
    switch(node.kind){
        case "Print":
            jscode += `console.log(${interpret(node.value)})`;
            break;
        case "Str":
            return `"${node.value}"`;
        case "Int":
            return node.value;
        case "Bool":
            return node.value;
        default:
            return node.value;
    }
    return jscode;
}

module.export = interpret;