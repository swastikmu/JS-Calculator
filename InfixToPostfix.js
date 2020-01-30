ifor (let index = 0; index < exp.length; index++) {
var val = exp[index];
if (checkNumber(val)) {
postfix.push(parseInt(val));
}
if (checkOperator(val)) {
var prio = precedance(val);
if (stack.length != 0) {
if ((precedance(stack[stack.length -1 ] )) < prio ) {
    stack.push(val);
}
else{                   
    while (precedance(stack[stack.length -1 ] ) >= prio) {
        var pop = stack.pop();
        postfix.push(pop);
            
    }
    stack.push(val); 
}
}
else{
stack.push(val);
}
}
}  