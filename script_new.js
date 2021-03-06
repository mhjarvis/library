class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const display = (() => {

    let library = [];

    const newBookButton = document.getElementById('new-book-button');

    const container = document.getElementById("container");
    const holder = document.getElementsByClassName("holder");
    const submitButton = document.getElementById("submit-button");
    const titleInput = document.querySelector('#bookTitle');
    const authorInput = document.querySelector('#authorName');
    const pagesInput = document.querySelector('#numberOfPages');
    const readInput = document.querySelector('#isRead');


    const openForm = () => { document.getElementById("form-container").style.display = "block"; };
    const closeForm = () => { document.getElementById("form-container").style.display = "none"; };

    const submitForm = () => { 
        document.getElementById("form-container").style.display = "none";
        title = titleInput.value;
        author = authorInput.value;
        pages = pagesInput.value;
        read = readInput.checked

        let newBook = new Book(title, author, pages, read);
        addBook(newBook);
        console.log(library);
        formReset();

    };
    const addBook = (book) => {
        library.push(book);
        displayLibrary();
    };

    const formReset = () => {           //clear form after submission
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readInput.checked = false;
    };

    //event listeners
    newBookButton.addEventListener('click', openForm);
    submitButton.addEventListener('click', submitForm);

    function displayLibrary() {

        clear();    //clear any div elements (for rebuilding after delete)
    
        for(let i = 0; i < library.length; i++) {       //loop through library[]
    
            const holder = document.createElement('div');
            const paragraph = document.createElement('p');
            const second_div = document.createElement('div');
            const button = document.createElement('button');
            const readStatus = document.createElement('button');
    
            container.appendChild(holder);
            holder.appendChild(paragraph);
            holder.appendChild(second_div);              //create div
            holder.appendChild(button);
            holder.appendChild(readStatus);
            
            holder.className = ('holder');
            paragraph.className = ('card-titles');
            second_div.className = ('card-info');               //for styling
            button.className = ('card-button');
            button.id = (i);
            button.setAttribute('onclick', 'display.del(this.id)');
            readStatus.className = ('readButton');
            readStatus.id = ("s" + i);
            readStatus.setAttribute('onclick', 'updateStatus(id)');
    
            paragraph.innerText = library[i].title;
            second_div.innerText = library[i].author + '\n' +
                                   library[i].pages + '\n' +
                                   library[i].read;
            button.innerText = "X";
            readStatus.innerText = "Status";
        }
    }

    // displayLibrary = () => {

    //     for(let i = 0; i < library.length; i++) {
    //         const holder = document.createElement('div');
    //         const paragraph = document.createElement('p');
    //         const second_div = document.createElement('div');
    //         const button = document.createElement('button');
    //         const readStatus = document.createElement('button');

    //         container.appendChild(holder);
    //         holder.appendChild(paragraph);
    //         holder.appendChild(second_div);
    //         holder.appendChild(button);
    //         holder.appendChild(readStatus);

    //         holder.className = ('holder');
    //         paragraph.className = ('card-titles');
    //         second_div.className = ('card-info');
    //         button.className = ('card-button');
    //         button.id = (i);
    //         button.setAttribute('onclick', 'del(id)');
    //         readStatus.className = ('readButton');
    //         readStatus.id = ("s" + i);
    //         readStatus.setAttribute('onclick', 'updateStatus(id)');

    //         paragraph.innerText = library[i].title;
    //         second_div.innerText = library[i].author + '\n' +
    //                                library[i].pages + '\n' +
    //                                library[i].read;
    //         button.innerText = "X";
    //         readStatus.innerText = "Status";
    //     }
    // 
    const clear = () => {
        container.textContent = "";
    }
    function del(id) {
        console.log(library);
        library.splice(id, 1);
        displayLibrary();
    }

    function updateStatus(id) {
        newid = id.substring(1);

        if(library[newid].read == "No") {
            library[newid].read = "Yes";
        } else {
            library[newid].read = "No";
        }
        displayAll();
    }

    //testing
    let book = new Book("Lord of the Rings", "J.R.R. Tolkien", 998, false);
    let nbook = new Book("The Hobbit", "J.R.R. Tolkien", 333, false);

    addBook(book);
    addBook(nbook);

    displayLibrary();

    return {del};
})();





// /* Functions removes object from library arraay */
// function del(id) {
//     console.log(library);
//     library.splice(id, 1);
//     console.log(library);
//     displayAll();
// }
// /* Function deletes all elements from container */
// function clearContainer() {
//     container.textContent = '';
// }

