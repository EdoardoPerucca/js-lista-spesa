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




// creo funzione button
listButtonEL.addEventListener('click', function () {


    console.log(ulListEl);
    
    

// creo ciclo while
    while (i < shoppingList[i]) {

        const liEl = document.createElement('li');
        
        const ulLiEl = shoppingList[i];

        liEl.innerText(ulLiEl);

        ulListEl.append(liEl);


        console.log(liEl);
        i++;


    };

    
});