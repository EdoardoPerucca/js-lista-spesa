/*
- creo la lista della spesa in array
- tramite la variabile 'append' creo 'li' della lista
- creo una variabile contatore
- stampo un elemento della lista alla volta 
*/



// creo variabili che richiamano l'html
const ListContainerEl = document.getElementById("list-container");
const ulListEl = document.getElementById('ul-list');
const listButtonEL = document.getElementById('list-button');


// creo la lista della spesa in array
const shoppingList = ['latte', 'uova', 'caffè', 'biscotti', 'yogurt', 'pasta', 'shampoo'];
console.log(shoppingList);


//creo una variabile contatore
let i = 0;


// creo la lista li
const liListEl = document.createElement('ul');
liListEl.classList.add('li')
ulListEl.append(liListEl);


// creo funzione button
listButtonEL.addEventListener('click', function () {


    console.log(ulListEl);
    
    liListEl.textContent = shoppingList;
    

// creo ciclo while
    while (i < shoppingList[i]) {
        liListEl = shoppingList[i];
        console.log(liListEl);
        i++;
    };

    
});