
/*Testing
const addBook = document.querySelector('#add-book')
const menu = document.querySelector('.add-book-menu')
const btn = document.querySelector('#confirm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#page-count');
const read = document.querySelector('#read-status');
const libMain = document.querySelector('.lib-main');

let dispMenu = false;
addBook.addEventListener('click', function() {
    console.log('Hello')
    dispMenu = !dispMenu
    console.log(Boolean(dispMenu))
    if (dispMenu) {
        menu.style.display = 'grid'
    } else {
        menu.style.display = 'none'
    }
})

btn.addEventListener('click', function() {
    if (title.value && author.value && pages.value) {
        const newBook = {
            name: title.value,
            writer: author.value,
            pagenum: pages.value,
        }
        console.log(newBook.name)
        console.log(typeof newBook)
        const newDiv = document.createElement('div')
        newDiv.textContent = `${newBook.name}, ${newBook.writer}, ${newBook.pagenum}`
        newDiv.style.backgroundColor = 'yellow';
        libMain.appendChild(newDiv)
    } else {
        console.log('Enter a title first')
    }
})
*/

//Actual
const addBookBtn = document.querySelector('#add-book');
const addBookMenu = document.querySelector('.add-book-menu');
const confirmBookBtn = document.querySelector('#confirm');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPageCnt = document.querySelector('#page-count');
const bookReadStat = document.querySelector('#read-status');
const libShelf = document.querySelector('.lib-main');

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
    if (bookTitle.value && bookAuthor.value && bookPageCnt.value) {
        //Creates an object with the info entered
        const book = {
            title: bookTitle.value,
            author: bookAuthor.value,
            pages: bookPageCnt.value,
        }
        //Adds a key-value pair for the read status
        if (bookReadStat.checked) {
            book.read = 'yes'
        } else {
            book.read = 'no'
        }
        console.log(book)

        //Creates an html element and adds it to the parent container for display
        let newBook = document.createElement('div');
        let newBookTitle = document.createElement('h3');
        let newBookAuthor = document.createElement('p');
        let newBookPgCnt = document.createElement('p');


        newBook.classList.add('book');
        newBookTitle.classList.add('title');
        newBookAuthor.classList.add('author');
        newBookPgCnt.classList.add('page-count');

        newBookTitle.textContent = `${book['title']}`;
        newBookAuthor.textContent = `${book['author']}`;
        newBookPgCnt.textContent = `${book['pages']}`;

        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookPgCnt);
        
        libShelf.appendChild(newBook);
        
    } else {
        console.log('Please fill up the required fields')
    }
})

