let sale
let km = prompt('Quanti chilometri vuoi percorrere?');
let age = prompt('Quanti anni hai?');

if(isNaN(km) || isNaN(age)){
    alert('Inserisci il valore in cifre')
}

let basePrice = km * 0.21;
console.log(basePrice);

if(age < 18){
   sale = 0.8;
}
else if(age > 65){
   sale = 0.6;
}
else{
   sale = 1;
}

let discountentPrice = basePrice * sale;
var twoDecimal = discountentPrice.toFixed(2);
console.log(twoDecimal);

document.getElementById('kmtxt').innerHTML = km;
document.getElementById('costtxt').innerHTML = twoDecimal;

if(km < 26){
    document.getElementById("hgt").style.backgroundColor = "seagreen";
}
else if(km > 65){
    document.getElementById("hgt").style.backgroundColor = "brown";
}
else{
    document.getElementById("hgt").style.backgroundColor = "darkcyan";
}







