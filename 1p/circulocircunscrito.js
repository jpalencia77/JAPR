var a = 5;
var b = 8;
var c = 12;
var s = .5 * (a+b+c);
var x = s*((s-a)*(s-b)*(s-c));
var r1 = Math.sqrt(x);
var r2 = 4*r1;
var r = (a*b*c)/r2;
print('El radio es: '+r);


