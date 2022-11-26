function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  var greeting = 'Hello' + ' ' + name + '!';
  console.log(greeting);
}

getGreeting('World');

function addAndMultiplyBy5(a, b) {
  return (a + b) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(a, b) {
  return (a * b) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(a, b) {
  return a - b;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(a) {
  return (a * 2) * Math.PI;
}

var getCircleCircumferenceResult = getCircleCircumference(5);

console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  console.log(fullName);
}

getFullName('Juan', 'Ramirez');

function cube(a) {
  return a * a * a;
}

var cubeResult = cube(5);

console.log('cube Result:', cubeResult);
