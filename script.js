let library = [];

const container = document.getElementById("container");     //get container div
const holder = document.getElementsByClassName("holder");


/* Book object constructor */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
/* Function returns string of object parameters */
Book.prototype.info = function() {      //returns string with object parameters
    return ("Author: " + this.author + "\nLenght: " + 
        this.pages + " pages" + "\nRead: " + this.read);
}
/* Function to take user input and add it to array */
function addBookToLibrary(obj) {
    library.push(obj);
}
/* Function to display each book in the library array */
function displayAll() {

    clearContainer();             //clear any div elements (for rebuilding after delete)

    //console.log(library.length);        //testing
    for(let i = 0; i < library.length; i++) {       //loop through library[]
        const holder = document.createElement('div');
        const newPar = document.createElement('p');
        const newDiv = document.createElement('div');
        const newButton = document.createElement('button');
        const readStatus = document.createElement('button');

        container.appendChild(holder);
        holder.appendChild(newPar);
        holder.appendChild(newDiv);              //create div
        holder.appendChild(newButton);
        holder.appendChild(readStatus);
        
        holder.className = ('holder');
        newPar.className = ('card-titles');
        newDiv.className = ('card-info');               //for styling
        newButton.className = ('card-button');
        newButton.id = (i);
        newButton.setAttribute('onclick', 'del(id)');
        readStatus.className = ('readButton');
        readStatus.id = ("s" + i);
        readStatus.setAttribute('onclick', 'updateStatus(id)');

        newPar.innerText = library[i].title;
        newDiv.innerText = library[i].info();       //display object info
        newButton.innerText = "X";
        readStatus.innerText = "Status";
    }
}
/* Function opens the input form */
function openForm() {
    document.getElementById("form-container").style.display = "block";
}
/* Function closes the input form */
function closeForm() {
    document.getElementById("form-container").style.display = "none";
    console.log(bookTitle);
}
/* Functions removes object from library arraay */
function del(id) {
    console.log(library);
    library.splice(id, 1);
    console.log(library);
    displayAll();
}
/* Function deletes all elements from container */
function clearContainer() {
    container.textContent = '';
}
/* Function to change read status on card */
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
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "No");
const lotr = new Book("Lord of the Rings", "J.R.R. Tolkien", 988, "No");
addBookToLibrary(lotr);
addBookToLibrary(theHobbit);
//addBookToLibrary(lotr);
//addBookToLibrary(theHobbit);

console.log(theHobbit.title);
displayAll();
console.log(theHobbit.info());