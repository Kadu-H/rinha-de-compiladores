function interpret(node){
    var jscode = "";
    //console.log(node)
    switch(node.kind){
        case "Print":
            jscode += `console.log(${interpret(node.value)});`;
            break;
        case "Let":
            jscode += `let ${node.name.text} = ${interpret(node.value)};`;
            break;
        case "Binary":
            const lhs = interpret(node.lhs);
            const rhs = interpret(node.rhs);
            switch(node.op){
                case "Add":
                    return `${lhs}+${rhs}`;
                case "Sub":
                    return `${lhs}-${rhs}`;
                case "Lt":
                    return `${lhs}<${rhs}`;
                case "Gt":
                    return `${lhs}>${rhs}`;
                case "Lte":
                    return `${lhs}<=${rhs}`;
                case "Gte":
                    return `${lhs}>=${rhs}`;
                case "And":
                    return `${lhs}&&${rhs}`;
                case "Or":
                    return `${lhs}||${rhs}`;
                default:
                    break;
            }
        case "If":
            jscode += `if(${interpret(node.condition)}){
                return ${interpret(node.then)}
            } else{
                return ${interpret(node.otherwise)}
            }`
            break;
        case "Function":
            jscode += `function(${node.parameters[0].text}){${interpret(node.value)}}`
            break;
        case "Call":
            jscode += `${interpret(node.callee)}(${interpret(node.arguments[0])})`
            break;
        case "Var":
            return node.text;
        case "Str":
            return `"${node.value}"`;
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