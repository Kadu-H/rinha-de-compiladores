function interpret(node){
    var jscode = "";
    switch(node.kind){
        case "Print":
            jscode += `console.log(${interpret(node.value)});`;
            break;
        case "Str":
            return `"${node.value}"`;
        case "Let":
            jscode += `let ${node.name.text} = ${interpret(node.value)};`;
            break;
        case "Var":
            return node.text;
        case "Binary":
            const lhs = interpret(node.lhs);
            const rhs = interpret(node.rhs);
            switch(node.op){
                case "Add":
                    return `${lhs}+${rhs}`;
                case "Sub":
                    return `${lhs}-${rhs}`;
                default:
                    break;
            }
        case "Int":
            return node.value;
        case "Bool":
            return node.value;
        default:
            break;
    }
    if(node.next){
        jscode += interpret(node.next);
    }
    return jscode;
}

module.exports = interpret;