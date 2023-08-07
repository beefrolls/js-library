
//Actual
const addBookBtn = document.querySelector('#add-book');
const delBookBtn = document.querySelector('#delete-book');
const addBookMenu = document.querySelector('.add-book-menu');
const confirmBookBtn = document.querySelector('#confirm');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPageCnt = document.querySelector('#page-count');
const bookReadStat = document.querySelector('#read-status');
const libShelf = document.querySelector('.lib-main');
const readStatBtn = document.querySelector('.read-status');
const userName = document.querySelector('.left h3');
const userImg = document.querySelector('.left img');
const libName = document.querySelector('.center h1');


//These codes alter the name of the library & user, and the user image
libName.addEventListener('click', function() {
    let newName = prompt('Enter your desired library name');
    console.log(newName);
    if (newName != undefined || newName != null) {
        libName.textContent = newName;
    } else {
        return;
    }
})

userName.addEventListener('click', function() {
    let newName = prompt('Enter your name')
    console.log(newName)
    if (newName != undefined || newName != null) {
        userName.textContent = newName;
    } else {
        return;
    }
})

/*IMG REPLACEMENT - To be added soon
userImg.addEventListener('click', function() {

})
*/


//This code opens and closes the add book menu

let addBookActive = false; //Add book is always closed initially

addBookBtn.addEventListener('click', function() {
    addBookActive = !addBookActive;
    if (addBookActive == true) {
        addBookMenu.style.display = 'grid';
    } else {
        addBookMenu.style.display = 'none';
    }
})

//This code creates an object of the book given the title, author, page count & read status. 
confirmBookBtn.addEventListener('click', function() {
    let book = {};
    if (bookTitle.value && bookAuthor.value && bookPageCnt.value) {
        //Checks to see if page count inputted is within range.
        if (bookPageCnt.value >= 1 && bookPageCnt.value <= 2000) {
            //Creates an object with the info entered
            book = {
                title: bookTitle.value,
                author: bookAuthor.value,
                pages: bookPageCnt.value
            }
            //Adds a key-value pair for the read status
            if (bookReadStat.checked) {
                book.read = 'Read'
            } else {
                book.read = 'Not Read'
            }
            console.log(book)
        } else {
            console.log('Please input a number within range');
            return;  
        }
        


        //Creates an html element and adds it to the parent container for display
        let newBook = document.createElement('div');
        let newBookTitle = document.createElement('h3');
        let newBookAuthor = document.createElement('p');
        let newBookPgCnt = document.createElement('p');
        let newBookOpt = document.createElement('div');
        let newBookRdStat = document.createElement('button');
        let newBookDel = document.createElement('button');


        newBook.classList.add('book');
        newBookTitle.classList.add('title');
        newBookAuthor.classList.add('author');
        newBookPgCnt.classList.add('page-count');
        newBookOpt.classList.add('options');
        newBookRdStat.classList.add('read-status');
        newBookDel.classList.add('delete');

        newBookTitle.textContent = `${book['title']}`; 
        newBookAuthor.textContent = `${book['author']}`;
        newBookPgCnt.textContent = `${book['pages']}`;
        newBookRdStat.textContent = `${book['read']}`;
                //Adds id to read-status to provide appropriate style
                if (newBookRdStat.textContent == 'Read') {
                    newBookRdStat.setAttribute('id', 'read');
                } else {
                    newBookRdStat.setAttribute('id', 'not-read');
                }
        newBookDel.textContent = 'Del';

        //Adds event listeners to elements: Read Status & Delete
        //Changes the read status on click (read -> not read, vise versa)
        newBookRdStat.addEventListener('click', function() {
            if (newBookRdStat.textContent == 'Read') {
                newBookRdStat.setAttribute('id', 'not-read');
                newBookRdStat.textContent = 'Not Read';
            } else {
                newBookRdStat.setAttribute('id', 'read');
                newBookRdStat.textContent = 'Read';
            }
        })

        //Deletes the book on click
        newBookDel.addEventListener('click', function(e) {
            (newBookDel.parentNode).parentNode.remove()
        })

        newBookOpt.appendChild(newBookRdStat);
        newBookOpt.appendChild(newBookDel);

        newBook.appendChild(newBookOpt);
        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookPgCnt)
        
        
        libShelf.appendChild(newBook);
        
        
    } else {
        console.log('Please fill up the required fields')
    }
})

