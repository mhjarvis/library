class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return ("Author: " + this.author + "\nLength: " + 
            this.pages + " pages" + "\nStatus: " + this.read);
    }
}

const display = (() => {

    let library = [];                      //array to hold all Book objects

    const newBookButton = document.getElementById('new-book-button');
    const container = document.getElementById("container");
    const submitButton = document.getElementById("submit-button");
    const titleInput = document.querySelector('#bookTitle');
    const authorInput = document.querySelector('#authorName');
    const pagesInput = document.querySelector('#numberOfPages');
    const readInput = document.querySelector('#isRead');
    const openForm = () => { document.getElementById("form-container").style.display = "block"; };

    const submitForm = () => {           //add book to array and update display
        document.getElementById("form-container").style.display = "none";
        title = titleInput.value;
        author = authorInput.value;
        pages = pagesInput.value;
        read = readInput.checked

        let newBook = new Book(title, author, pages, read);
        addBook(newBook);
        formReset();
    };
    const addBook = (book) => {         //push book to array
        library.push(book);
        displayLibrary();
    };
    const formReset = () => {           //close and clear form after submission
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readInput.checked = false;
    };
    const updateStatus = (id) => {        //update read/not read status
        newid = id.substring(1);

        if(library[newid].read === "Not Read"){
            library[newid].read = "Read";
        } else {
            library[newid].read = "Not Read";
        }
        displayLibrary();
    }

    //event listeners for form
    newBookButton.addEventListener('click', openForm);
    submitButton.addEventListener('click', submitForm);

    function displayLibrary() {         //builds user interface cards for all books in library

        clear();    //clear any div elements (for rebuilding after delete)
    
        for(let i = 0; i < library.length; i++) {       //loop through library[]
    
            const holder = document.createElement('div');
            const paragraph = document.createElement('p');
            const second_div = document.createElement('div');
            const button = document.createElement('button');
            const readStatus = document.createElement('button');
    
            container.appendChild(holder);
            holder.appendChild(paragraph);
            holder.appendChild(second_div);
            holder.appendChild(button);
            holder.appendChild(readStatus);
            
            holder.className = ('holder');
            paragraph.className = ('card-titles');
            second_div.className = ('card-info');
            button.className = ('card-button');
            button.id = (i);
            button.setAttribute('onclick', 'display.del(this.id)');
            readStatus.className = ('readButton');
            readStatus.id = ("s" + i);
            readStatus.setAttribute('onclick', 'display.updateStatus(id)');

            if(library[i].read === true) {
                library[i].read = "Read";
            } else if(library[i].read === false) {
                library[i].read = "Not Read";
            }
    
            paragraph.innerText = library[i].title;
            second_div.innerText = library[i].info();
            button.innerText = "X";
            readStatus.innerText = "Status";
        }
    }
    const clear = () => {                   //clear div elements when rebuilding interface
        container.textContent = "";
    }
    function del(id) {                      //remove book from library
        library.splice(id, 1);
        displayLibrary();
    }
    //testing/initialization
    let book = new Book("Lord of the Rings", "J.R.R. Tolkien", 998, false);
    let nbook = new Book("The Hobbit", "J.R.R. Tolkien", 333, false);

    addBook(book);
    addBook(nbook);
    displayLibrary();

    return {del, updateStatus};
})();