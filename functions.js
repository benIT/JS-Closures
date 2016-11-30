//When diving in a JS closure understanding, you first need to understand the JS function syntax : 

/******************************/
//Javascript function syntax
/******************************/

//A classic JS function 
function doSomething(message){
  alert(message);
}
doSomething('doSomething in a classical way');

//but keep in mind that a function is just a variable.
//Thus you can attribute to a variable an anonymous function :

var doSomething= function (message) {
  alert(message);
}
doSomething('doSomething in anonymous function that is attributed to variable');

//JavaScript allows to define a function whithout giving it a name wrapping the function between () :
( function () {alert('doSomething in an anonymous function defined between (). This one is just defined and not runned');} ) ;
//note that the function is just define.

//You need to add extra () to execute the function () :
( function (message) {alert(message);} ) ('doSomething in an anonymous function defined between () and run with extra ()'); 