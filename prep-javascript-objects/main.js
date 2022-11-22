var person = {
  firstName: 'Karina',
  lastName: 'Kim',
  hobby: 'singing and dancing',
  job: 'singer',
  previousJob: 'barista'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is" + ' ' + fullName);
var job = person.job;
console.log("The person's current job is" + ' ' + 'a' + ' ' + job);
var previousJob = person.previousJob;
console.log("The person's previous job was" + ' ' + 'a' + ' ' + previousJob);
