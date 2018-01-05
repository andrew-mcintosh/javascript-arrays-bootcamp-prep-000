var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var newBar = "foo";

function addElementToBeginningOfArray(chocolateBars, newBar) {
  return [chocolateBars, ...newBar]; 
}

function addElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}