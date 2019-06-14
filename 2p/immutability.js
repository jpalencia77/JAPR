var careful = 3.1;
careful
careful = 1.3//watch out
careful
var careful = null//worst
careful

let price = 120.25;
price
let price = 20.125//syntax error
price= 110.12
price
price = null
price

const tax = 0.825;
tax
const tax = 0.825; //error, no se puede volver a definir
tax = 1.25

const sam = ({ first: 'sam', age: 2})
sam
const sam = {}//syntax error
sam.age = 3//however
sam

const greet = 'dude'
greet[0] = 'r '//string are immutable

const pearl = Object.freeze( {first: 'pearl', age: 1})
pearl 
const pearl = {}
pearl.age = 3//note
pearl
