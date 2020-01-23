console.log("Ejercicio 1")
var myname
myname= "alan";
var age= 18;
console.log("Iniciando javascript...");
console.log(myname);
console.log(age);
console.log("ejercicio 3");
var ignasiAge=32;
var ageDiff=age-ignasiAge;
console.log(ageDiff);
console.log("ejercicio 4");
if (age>21) {
	console.log("Tiene mas de 21 años");
}
else{
	console.log("No tiene mas de 21 años");
}
console.log("ejercicio 5");

if (age<ignasiAge) {
	console.log("Ignasi es mayor que usted");
}
else if (age>ignasiAge) {
	console.log("Ignasi es menor que usted ");
}
else {
	console.log("Tiene la misma edad que Ignasi");
}
console.log("ejercicio de array 1")
var NombresDelCurso=["Lean","Alan","Diego","Nahu","Ariel","Branko","Rodri"];
NombresDelCurso.sort();
console.log(NombresDelCurso[0]);
console.log(NombresDelCurso[NombresDelCurso.length-1]);
for (var i=0; i<NombresDelCurso.length; i++)
{
	console.log(NombresDelCurso[i]);
}


console.log("ejercicio de array 2")
var	EdadesDelCurso=[15,18,20,21,13,32,26];
var i=0
while(i<EdadesDelCurso.length){
	console.log(EdadesDelCurso[i]);
	i++;
}
console.log("ejercicio de array 2 numeros pares")
i=0
while(i<EdadesDelCurso.length){
	
	
	if (EdadesDelCurso[i]%2 == 0) {
		console.log(EdadesDelCurso[i]);
	}
	i++;
}
console.log("Reemplazo while con for")
i=0
for (var i=0; i<EdadesDelCurso.length;i++){

	if (EdadesDelCurso[i]%2==0){
		console.log(EdadesDelCurso[i]);
	}
}
console.log("Ejercicio 3 array")
var numeros=[1,42,33,12,22,31,13,18,25,41,37,31]
function minimoDelArray(array){
		var minimo;
		for(var i=0; i<array.length; i++){
			if (i==0)
			{
			minimo=array[i]	;
			}
			else if (minimo>array[i]) {
				minimo=array[i];
			}
		}
		console.log(minimo);
}
minimoDelArray(numeros);

console.log("ejercicio 5 array");
function maximoDelArray(array){
		var maximo;
		for(var i=0; i<array.length; i++){
			if (i==0)
			{
			maximo=array[i]	;
			}
			else if (maximo<array[i]) {
				maximo=array[i];
			}
		}
		console.log(maximo);
}
maximoDelArray(numeros);

console.log("Ejercicio 6 array");
function posicionDelArray(array,index){
		
		console.log(array[index-1]);
	}
posicionDelArray(numeros,4);

console.log("ejercicio 6");

var numerosrepetidos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function imprimirRepetidos(array){
for (var i=0; i<array.length;i++){
	for (var j=i+1; j<array.length; j++){
		if (array[i]==array[j]) {
			console.log(array[i]);
		}
	}
} 
}
imprimirRepetidos(numerosrepetidos);