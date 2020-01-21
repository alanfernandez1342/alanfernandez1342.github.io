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
i=0
for (var i=0; i<EdadesDelCurso.length;i++){

	if (EdadesDelCurso[i]%2==0){
		console.log(EdadesDelCurso[i]);
	}
}
