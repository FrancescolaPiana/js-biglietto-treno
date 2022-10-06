
let km = prompt('Quanti chilometri vuoi percorrere?');
let age = prompt('Quanti anni hai?');

let basePrice = km * 0.21;
console.log(basePrice);

if(age < 18){
  let sale = 0.8;
}
else if(age > 65){
    let sale = 0.6;
}
else{
    let sale = 1;
}

let discountentPrice = basePrice * sale;

console.log(discountentPrice);


