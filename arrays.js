var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var newBar = "foo";

function addElementToBeginningOfArray(chocolateBars, newBar) {
  return [chocolateBars...newBar]; 
}
