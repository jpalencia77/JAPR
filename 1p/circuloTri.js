print('Numero para x: ');
var x = Number(readline());
print('Numero para y: ');
var y = Number(readline());
print('Introduce el radio: ');
var radio = Number(readline());

var z = (x * x) + (y * y);
var a = Math.sqrt(z);
if (radio > a) {
	print('Dentro del circulo');
}
else if (radio < a) {
	print('Fuera del circulo');
}
else {
	print('Sobre el circulo');
}
