//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 50;
const number2 = 30;
if (number1 > number2) {
  console.log(`Il numero più grande è : ${number1}`);
} else if (number2 > number1) {
  console.log(`Il numero più grande è : ${number2}`);
} else {
  console.log(`I numeri sono uguali`);
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = 20;
if (number < 5) {
  console.log("Tiny");
} else if (number < 10) {
  console.log("Small");
} else if (number < 15) {
  console.log("Medium");
} else if (number < 20) {
  console.log("Large");
} else if (number >= 20) {
  console.log("Huge");
}
//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let n = 0; n <= 10; n++) {
  if (n == 3 || n == 8) {
    continue;
  }
  console.log(n);
}
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let n = 0; n <= 15; n++) {
  if (n % 2 == 0) {
    console.log(`Il numero ${n} è pari`);
  } else {
    console.log(`Il numero ${n} è dispari`);
  }
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const int1 = 8;
const int2 = 0;
if (int1 + int2 == 8 || int1 - int2 == 8) {
  console.log(`La somma oppure la sottrazione tra i due numeri è uguale a 8`);
} else if (int1 == 8 || int2 == 8) {
  console.log(`Uno dei due numeri è uguale 8`);
} else {
  console.log(
    `Nessuno dei due numeri vale 8, tantomeno la loro somma o differenza`
  );
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA * ( L'ho COMMENTATO altrimenti va in conflitto con l'extra 3)/ 

// const totalShoppingCart = 50;
// const shipping = 10;
// let totalCheckout;
// if (totalShoppingCart > 50) {
//   totalCheckout = totalShoppingCart;
//   console.log(`Il costo totale è di ${totalCheckout} euro`);
// } else {
//   totalCheckout = totalShoppingCart + shipping;
//   console.log(`Il costo totale è di ${totalCheckout} euro`);
// }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let productsShoppingCart = [
  (tshirt = {
    price: 20,
  }),
  (polo = {
    price: 25,
  }),
  (jeans = {
    price: 30,
  }),
  (jacket = {
    price: 30,
  }),
  (beanie = {
    price: 15,
  }),
];

let totalShoppingCart = 0;
for (n = 0; n < productsShoppingCart.length; n++) {
  totalShoppingCart =
    totalShoppingCart + Object.values(productsShoppingCart[n]) * 1;
}
const shipping = 10;
let totalCheckout;
if (totalShoppingCart > 50) {
  totalCheckout = totalShoppingCart - (totalShoppingCart / 100) * 20;
  console.log(`Il costo totale è di ${totalCheckout} euro`);
} else {
  totalCheckout = totalShoppingCart + shipping;
  console.log(`Il costo totale è di ${totalCheckout} euro`);
}
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = false;
isMale == true
  ? console.log(`Il genere è maschio`)
  : console.log(`Il genere è femmina`);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz".
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let n = 1; n < 101; n++) {
  if ((n % 3 == 0) & (n % 5 == 0)) {
    console.log(`FizzBuzz`);
    continue;
  } else if (n % 3 == 0) {
    console.log(`Fizz`);
    continue;
  } else if (n % 5 == 0) {
    console.log(`Buzz`);
    continue;
  }
  console.log(n);
}
