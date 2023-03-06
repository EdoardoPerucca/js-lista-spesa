/*
- creo la lista della spesa in array
- tramite la variabile 'append' creo 'li' della lista
- creo una variabile contatore
- stampo un elemento della lista alla volta 
*/



// creo variabili che richiamano l'html

const ulListEl = document.getElementById('ul-list');
const listButtonEL = document.getElementById('list-button');


// creo la lista della spesa in array
const shoppingList = ['latte', 'uova', 'caffè', 'biscotti', 'yogurt', 'pasta', 'shampoo'];


//creo una variabile contatore
let i = 0;




// creo funzione button
listButtonEL.addEventListener('click', function () {


    console.log(ulListEl);
    
    

// creo ciclo while
    while (i < shoppingList.length) {

        const liEl = document.createElement('li');
        
        const ulLiEl = shoppingList[i];

        liEl.innerText= shoppingList[i];

        ulListEl.append(liEl);


        console.log = liEl;
        i++;


    };

    
});