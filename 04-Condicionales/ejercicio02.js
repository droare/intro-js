var formal = prompt('¿Te gusta vestir formal?')
var casual = prompt('¿Te gusta vestir casual?')


var camisa = prompt('¿Te gustan las camisas?');
var camiseta= prompt('¿Te gustan camisetas?');

var pantalon = prompt('¿Te gustan los pantalones formales?')
var pants = prompt('¿Te gustan los pants ?')

var calzado = prompt('¿Te gustan los zapatos?')
var tenis = prompt('¿Te gustan los tenis?')




var look1 = formal=="Si" && camisa=="Si" && zapato =="Si" && pantalon=="Si";
var look2 = formal=="Si" && camiseta=="Si" && tenis == "Si" && pantalon=="Si";
var look3 = casual=="Si" && camiseta=="Si" && tenis=="Si" && pants=="Si";
var look4 = casual=="Si" && camisa =="Si" && tenis =="Si" && pantalon=="Si";

if(look1==true){
document.write("<img src='https://i.pinimg.com/550x/29/83/19/2983196bca91f310731b63a75c975edb.jpg'>");

}else if(look2==true){
document.write("<img src='https://media.gq.com.mx/photos/609c1e9379463395540d3534/master/pass/TENIS.jpg'>");
}else if(look3==true){
document.write("<img src='https://media.gq.com.mx/photos/6197e269437d0a9c32f76a07/master/w_2000,h_3000,c_limit/como-verse-elegante-con-pants-para-hombre-coordinados.jpg'>");
}else if(look4==true){
document.write("<img src='https://www.baisap.com/IMG/jpg/chemise_bambou_manche_courte_2_.jpg'>");
}else{
    document.write("No tenemos outfits para ti : ");

}