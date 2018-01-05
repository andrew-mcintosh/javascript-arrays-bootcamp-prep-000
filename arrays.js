var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;

function addElementToBeginningOfArray(array, element) {
  var list = [];
  list[0] = element;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var list = [];
  list.unshift(element);
}