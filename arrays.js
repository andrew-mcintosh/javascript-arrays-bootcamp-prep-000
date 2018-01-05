var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var newBar = "foo";

function addElementToBeginningOfArray(chocolateBars, newBar) {
  return [newBar, ...chocolateBars]; 
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newBar) {
  return [...chocolateBars, newBar];
}