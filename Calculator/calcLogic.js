var num = 0;
var arr = [0];
var exp = [] , postfix = [] , stack = [];
var result , disp = '' , count = 0 , flag = false;

function createExp(id)
{ 
if (flag == true) {
clearExp();
flag = false;
}
count = count + 1;
var a = document.getElementById(id).innerText;
var text = document.getElementById("disp").innerText;
if (text == '0' && a == '0') {
window.alert("Zero already there!");
a = '';
return;
}


if( (checkOperator(arr[arr.length - 1]))  && checkOperator(a))
{
return;
}

if (count == 1) 
{
if(checkNumber(a))
{
disp = '';
exp = [];
}
} 
//disp = disp + a;

if( a != '+' && a != '-' && a != '*' && a != '/' ) {
disp = disp + a;
arr.push(a);  
//disp = Number(disp).toString();    
}
document.getElementById("disp").innerHTML = disp;

if( checkOperator(a) )
{    
if ( checkLast(exp , arr) ) {
    return;
}

else
{    
computeNum(arr);
if (!(count == 1 && checkOperator(a))) {
disp = disp + a;
document.getElementById("disp").innerHTML = disp;   
exp.push(num);
exp.push(a);
count = count + 1;
}

num = 0;
arr = [];

}   

}   
}

function clearExp() {
num = 0;
arr = [];
exp = [] ;
postfix = [] ;
stack = [];
disp = '';
result = 0;
document.getElementById("disp").innerText = null;
initialize();
count = 0;
}
function evaluateExp(id)
{
console.log('swastik');
if (checkOperator(exp[exp.length - 1]) && arr[0] == undefined){

}
else{
computeNum(arr);

exp.push(num);

inToPost(exp);

var final =  evalPostfix(postfix);
document.getElementById("disp").innerText = final;
flag = true;

}
}

function inToPost(exp) {
if (checkOperator(exp[ exp.length - 1])) {

}
else{
for (let index = 0; index < exp.length; index++) {
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

if (stack.length != 0) {
            
while (stack.length != 0 ) {
var pop = stack.pop();
postfix.push(pop);
    
}

}
}
}


function evalPostfix(postfix) {
//write postfix eval code here
var nStack = [];
for (let index = 0; index < postfix.length; index++) {
var element = postfix[index]; 
if (checkNumber(element)) {
nStack.push(element);  
} 
if (checkOperator(element)) {

var op1 = nStack.pop();
var op2 = nStack.pop();

result =  operation(op1 , op2 , element );
nStack.push(result);

}


}
return nStack.pop();

}
operation = (op1, op2 , element) =>
{
switch (element) {
case '+':
return ( op2 + op1 );
break;
case '-':
return ( op2 - op1 );
break;
case '*':
return ( op2 * op1 );
break;
case '/':
return ( op2 / op1 );
break;

default:
break;
}

}

precedance = (op) => {

switch (op) {
case '*':
case '/':
return 2;

break;

case '+':
case '-':
return 1;
    
    break;
default:
return 0;
break;
}
}

function checkOperator(str) {
if ( str == '+' || str == '-' || str == '*' || str == '/' ) {
return true;   
}
}

function checkNumber(val) {
if ( !(isNaN(val))) {
return true;   
}
}

function checkLast(arr1 , arr2) {
if ((arr1[arr1.length - 1] == '+' || arr1[arr1.length - 1] == '-' || arr1[arr1.length - 1] == '*' || arr1[arr1.length - 1] == '/' ) && arr2.length == 0)
{
return true;
}
}

function computeNum(arr) {

var i = arr.length - 1;

for (let index = 0 ; index <= arr.length - 1; index++) {
num = num + arr[index] * Math.pow(10,i);
i--;
}
}

function initialize(p) { //this is to liitialize the expression with 0
disp = '0' ;
document.getElementById("disp").innerHTML = disp;
exp = [0];
}
