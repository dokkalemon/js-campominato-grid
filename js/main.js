/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. 
 */


// Referenza della difficoltà, del bottone e della griglia
const selectRef = document.getElementById('difficult');
const playBtn = document.querySelector('.btn');
const grid = document.querySelector('.grid');

playBtn.addEventListener('click', function() {
    console.log('click me')
})

