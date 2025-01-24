/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}
console.log(crazySum(1, 2));
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e
  ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è
   esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(x) {
  if ((x > 20 && x <= 100) || x == 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(302));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString",
  che accetta una stringa come parametro e la ritorna invertita
   (es.: EPICODE => EDOCIPE).
*/
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("ciao"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che
 accetta una stringa come parametro e la ritorna
rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
  stringArray = string.split(" ");
  let upperCaseString;
  for (word of stringArray) {
    upperCaseString =
      upperCaseString + " " + word.charAt(0).toUpperCase() + word.slice(1);
  }
  return upperCaseString;
}
console.log(upperFirst("ciao a tutti"));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come
  parametro un numero chiamato n e ritorna un array 
  contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  randomNumbers = [];
  for (i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  return randomNumbers;
}
console.log(giveMeRandom(5));
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2)
  e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  rectangleArea = l1 * l2;
  return rectangleArea;
}
console.log(area(2, 5));
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza 
 assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare 
 tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
y = 19;
function crazyDiff(x, y) {
  diff = x - y;
  if (diff > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log(crazyDiff(20, y));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come
  parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa 
 fornita e ritornare il risultato, ma se la stringa fornita comincia 
 proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(string) {
  if (string.slice(0, 4) == "code") {
    return string;
  } else {
    return `code ${string}`;
  }
}
console.log(codify("Ciao a tutti"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero
  positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7,
  e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  if (n % 3 == 0 || n % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(16));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come 
 parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
  return string.slice(1, string.length - 1);
}
console.log(cutString("Ciao a tutti"));
