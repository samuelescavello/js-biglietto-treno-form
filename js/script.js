// let numberKm = parseInt(prompt ('quanti km devi percorrere?'));
// let ageUser = parseInt(prompt ('quanti anni hai?'));
// console.log (numberKm, ageUser);
// let priceKm = 0.21;
// let youngUser = 20 / 100;
// let oldUser = 40 / 100;
// let totalPrice = priceKm * numberKm

// if (!isNaN(ageUser) && !isNaN(numberKm)){
//     if (ageUser < 18){
//         totalPrice = (totalPrice - (totalPrice * youngUser))
//         console.log(totalPrice)
//     }else if (ageUser > 64){
//         totalPrice = (totalPrice - (totalPrice * oldUser))
//         console.log(totalPrice)
//     }
//     document.getElementById('prezzo').innerHTML = `il prezzo é ${totalPrice}`;
// }
// else{
//     document.getElementById('prezzo').innerHTML = `non hai inserito i giusti dati!!`
// }

let nomeCognome = document.getElementById('name');
let numberKm = document.getElementById('distancekm');
let ageUser = document.getElementById('age');
let btninv = document.querySelector('.btngenera');

// console.log(nomeCognome, numberKm, ageUser, btninv);

btninv.addEventListener('click', function(){
    // console.log('cliccato');
    let testoNome = nomeCognome.value
    let testoKm = numberKm.value
    let testoAge = ageUser.value
    // console.log(testoNome, testoKm, testoAge)
    // calcolo biglietti
    
});