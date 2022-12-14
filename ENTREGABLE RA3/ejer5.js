var date1 = window.prompt("introduce una fecha (yyyy-mm-dd)");
var date2 = new Date();

console.log('difference in ms', date1 - date2);
console.log('difference in ms abs', Math.abs(date1 - date2));
console.log('difference in segundos', Math.abs(date1 - date2) / 1000);

var diffInsegundos = Math.abs(date1 - date2) / 1000;
var days = Math.floor(diffInsegundos / 60 / 60 / 24);
var hours = Math.floor(diffInsegundos / 60 / 60 % 24);
var minutes = Math.floor(diffInsegundos / 60 % 60);
var segundos = Math.floor(diffInsegundos % 60);

console.log('days', days);
console.log('hours', ('0' + hours).slice(-2));
console.log('minutes', ('0' + minutes).slice(-2));
console.log('segundos', ('0' + segundos).slice(-2));