// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
/*
function erase(value){
    document.getElementById("result") -= value;
}*/

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p); //return the result of an expression
    document.getElementById("result").value = q;
}
