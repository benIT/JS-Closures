Immediately Invoked Function Expressions : IIEE


/**
APP is a namespace that close up local values and methods.
Because the function expression is actually called, this returned object will be handed immediately to the APP variable and become a namespace
*/

var APP = (function () {
  var myList = [
    'one',
    'two',
    'three'
  ];
  var myFunction = function () {
    return myList.join(',');
  }
  
  return {
    myPublicMethod: function () {
      return myFunction();
    }
  }
})()


APP.myList; //undefined
APP.myFunction(); //APP.myFunction is not a function
APP.myPublicMethod(); //YEAH this is a public method of the APP namespace