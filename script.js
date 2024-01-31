function solve(val){
    var v = document.getElementById("res");
    v.value += val;
    document.getElementById('res').innerHTML = v.value;
}
function res(){
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById("res").value = num2;
}
function Clear(){
    document.getElementById("res").value = '';
}
function back(){
    var back = document.getElementById("res");
    back.value = back.value.slice(0,-1);
}