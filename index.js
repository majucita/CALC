var operatora;
var operatorb;
var operation;

function init(){
    //get variables
    
    var total = document.getElementById("result");
    var resetvalue = document.getElementById("reset");
    var addition = document.getElementById("addition");
    var substraction = document.getElementById("substraction");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var cero = document.getElementById("cero");
    var equal1 =document.getElementById("equal");

    //events

    one.onclick=function(e){
        total.textContent=result.textContent +"1";
    }

    two.onclick=function(e){
        total.textContent=result.textContent +"2";
    }
    three.onclick=function(e){
        total.textContent=result.textContent +"3";
    }
    four.onclick=function(e){
        total.textContent=result.textContent +"4";
    }
    five.onclick=function(e){
        total.textContent=result.textContent +"5";
    }
    six.onclick=function(e){
        total.textContent=result.textContent +"6";
    }
    seven.onclick=function(e){
        total.textContent=result.textContent +"7";
    }
    eight.onclick=function(e){
        total.textContent=result.textContent +"8";
    }
    nine.onclick=function(e){
        total.textContent=result.textContent +"9";
    }
    
    cero.onclick=function(e){
        total.textContent=result.textContent +"0";
    }

    resetvalue.onclick =function(e){
        reset();
    }

    addition.onclick =function(e){

        operatora=result.textContent;
        operation= "+";
        clearscreen();

    }

    substraction.onclick =function(e){

        operatora=result.textContent;
        operation= "-";
        clearscreen();

    }

    multiplicacion.onclick =function(e){

        operatora=result.textContent;
        operation= "*";
        clearscreen();

    }
    division.onclick =function(e){

        operatora=result.textContent;
        operation= "/";
        clearscreen();

    }

    equal1.onclick =function(e){

        operatorb=result.textContent;
        solution();

    }

    function clearscreen(){
        total.textContent="";

    }

    function reset(){
        total.textContent="";
        operatoa =0;
        operatob=0;
        operation="";
    }

    function solution(){

        var x=0;
        switch(operation){

            case "+":
            x= parseFloat(operatora) + parseFloat(operatorb);
            break;

            
            case "-":
            x= parseFloat(operatora) - parseFloat(operatorb);
            break;

            
            case "*":
            x= parseFloat(operatora) * parseFloat(operatorb);
            break;
            
            case "/":
            x= parseFloat(operatora) / parseFloat(operatorb);
            break;

        }

        reset();
        total.textContent =x;
    }










}