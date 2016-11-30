/******************************/
//Javascript closures theory
/******************************/

function createFunction() {
  var name = "local environment variable value";
  function printName() {
    alert(name);
  }
  return printName;
}

var myClosureFunction = createFunction();
//The key is here : the variable nammed 'myClosureFunction' contains now the function nammed 'printName' AND it environment. 
//In this case, this means the local variable 'name' too !. 
//This is a closure. A closure means a function to run and it environment too !!
myClosureFunction();

/******************************/
//JavaScript closure usage
/******************************/
//so now we can create a closure that captures a value an add a number to this value.
function addFunctionClosure(numberToCapture) {
  function add (value) {
    return numberToCapture+value ; 
  }
  return add ;
}

var adderToTen=addFunctionClosure(10);
alert(adderToTen(5)); //15
alert(adderToTen(10)); //20


function addFunctionClosureShort(numberToCapture){
  return function(value) {
    return numberToCapture+value;
  }
}

var adderToTenShort=addFunctionClosureShort(10);
alert(adderToTenShort(5)); //15
alert(adderToTenShort(10)); //20



/******************************/
//Javascript closures REAL WORLD usage
/******************************/

/*
Let's say you want to process an array of element with a timeout. The process in this case consists in printing the element in the console and changing it color.
You need to make use of the window.setTimeout function.
*/

//first approach
var delay =1000;
var elements = document.querySelectorAll('p');
for (var i = 0; i < 2; i++) {
    window.setTimeout(function() {
        console.log(elements[i]);
        elements[i].style.backgroundColor='gold';
    },delay);
}
//The last element is only processed !
//The variable 'i' is modified by the loop. When the setTimeout function is called, it is too late. The value of 'i' is already at it highest value (number of elements to process).


//second approach :()() syntax
var delay =1000;
var elements = document.querySelectorAll('p');
for (var i = 0; i < elements.length; i++) {
    window.setTimeout((function(element) {
        console.log(element);
        element.style.backgroundColor='gold';
    })(elements[i]),i*delay);
}
//The value of the loop iterator is well captured but the time out is exectuted immediatly !

//Closure approach !
var delay =1000;
var elements = document.querySelectorAll('p');
for (var i = 0; i < elements.length; i++) {
    window.setTimeout((function (element) {
      //returns a function to run at the end of the timeout
      return function () {
        console.log(element);
        element.style.backgroundColor='blue';
      }
    }) (elements[i]), i*delay)
}
//That's it ! 