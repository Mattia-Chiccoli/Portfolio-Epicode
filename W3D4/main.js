// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changeH1Content() {
  let h1 = document.getElementById("main-title");
  h1.innerText = "Catalogo numero due";
}
// changeH1Content();

function changeBackgroundColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
}
// changeBackgroundColor();
function changeFooterShopAddress() {
  let shopAddress = document.getElementById("footer-shop-address");
  shopAddress.innerText = "Porta Venezia, 12, Milano";
}
//changeFooterShopAddress();
function addClassToLinks() {
  let links = document.querySelectorAll("a");
  for (link of links) {
    link.classList.add("link");
  }
  console.log(link);
}
//addClassToLinks();
function addClassToImgs() {
  let images = document.querySelectorAll("img");
  for (image of images) {
    image.classList.add("image-visibility");
  }
}
//addClassToImgs();

function makeRandomColor() {
  let c = "";
  while (c.length < 6) {
    c += Math.random().toString(16).slice(-6).slice(-1);
  }
  return "#" + c;
}
let randomColor = makeRandomColor();
let color = randomColor;
console.log(color);
function changeColorPrice() {
  let prices = document.getElementsByClassName("card-price");
  for (price of prices) {
    price.style.color = color;
  }
}
changeColorPrice();
