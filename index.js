
function onClickHandler(num){
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + num;
}
function equal(){
    var exp = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(exp);

}
function clean(){
    document.getElementById("screen").value = "";
}