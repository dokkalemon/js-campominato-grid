/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. 
 */


// Referenze della difficoltà, del bottone e della griglia
const selectRef = document.getElementById('difficult');
const playBtn = document.querySelector('.btn');
const gridConteiner = document.querySelector('.grid-conteiner');

playBtn.addEventListener('click', function() {
    console.log('click me')
})

// Difficoltà
playBtn.addEventListener('click', () => {

    //Resettiamo il conteiner
    gridConteiner.innerHTML = '';

    //Settiamo il grid in base alla difficoltà
    const difficultGrid = selectRef.value;
    let numberCells;
    let cellPerSide;

    switch (difficultGrid) {
        case '1':
            numberCells = 49;
            cellPerSide = 7;
            break;
        case '2':
            numberCells = 81;
            cellPerSide = 9;
            break;
        case '3':
            numberCells = 100;
            cellPerSide = 10;
    }
            console.log(numberCells);
            console.log(cellPerSide);
})













/* FUNCTIONS */

//Generiamo una square
function createSquare() {
    document.createElement(div);

}