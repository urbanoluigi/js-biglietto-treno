// Chiedi all'utente il numero di chilometri da percorrere e l'età
let kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));
let etapersona = parseInt(prompt("Inserisci la tua età:"));

// Calcola il prezzo del biglietto
let prezzoBase = kmDaPercorrere * 0.21;

// Applica gli sconti in base all'età
if (etapersona < 18) {
    prezzoBase -= prezzoBase * 0.2; // Sconto del 20% per i minorenni
} else if (etapersona >= 65) {
    prezzoBase -= prezzoBase * 0.4; // Sconto del 40% per gli over 65
}

// Formatta il prezzo finale con massimo due decimali
let prezzoFinale = prezzoBase.toFixed(2);

// Visualizza il risultato nel documento HTML
let risultatoElement = document.createElement("p");
risultatoElement.textContent = "Il prezzo del biglietto è: " + prezzoFinale + " €";
document.body.appendChild(risultatoElement);