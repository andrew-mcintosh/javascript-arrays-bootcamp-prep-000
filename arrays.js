var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var newBar = "foo";
function addElementToBeginningOfArray(array, element) {
  var list = [];
  list.unshift(...element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var list = [];
  list = ["element",...array];
}