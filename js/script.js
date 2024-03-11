/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


//* Chiede il numero di kilometri 
const kmUser = parseInt(prompt('Ciao per prima dammi il numero di km che vui percorrere.'));
console.log(kmUser);

//* Chiede la quantita di anni all'utente
const ageUser = parseInt(prompt('Grazie, adesso mi serve anche la tua età.'));
console.log(ageUser);

//* Calcolo prezzo ticket
const priceTicket = (kmUser * 0.21)
console.log(priceTicket);

//*PREZZO FINALE

let finalPrice = priceTicket;

if (ageUser < 18) {
    const underDiscount = priceTicket * 20 / 100;
    console.log(underDiscount);
    finalPrice = priceTicket - underDiscount;
} else if (ageUser >= 65) {
    const overDiscount = priceTicket * 40 / 100;
    console.log(overDiscount);
    finalPrice = priceTicket - overDiscount;
}

//* Mostra il prezzo finale in un alert

alert("Il prezzo finale del biglietto è: " + finalPrice.toFixed(2) + "€");
