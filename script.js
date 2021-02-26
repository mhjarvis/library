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
    console.log(library.length);        //testing
    for(let i = 0; i < library.length; i++) {       //loop through library[]
        const holder = document.createElement('div');
        const newPar = document.createElement('p');
        const newDiv = document.createElement('div');

        container.appendChild(holder);
        holder.appendChild(newPar);
        holder.appendChild(newDiv);              //create div
        
        holder.className = ('holder');
        newPar.className = ('card-titles');
        newDiv.className = ('card-info');               //for styling

        newPar.innerText = library[i].title;
        newDiv.innerText = library[i].info();       //display object info
    }
}
/* Function opens the input form */
function openForm() {
    document.getElementById("form-container").style.display = "block";
}
function closeForm() {
    document.getElementById("form-container").style.display = "none";
    console.log(bookTitle);
}





//testing
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "No");
const lotr = new Book("Lord of the Rings", "J.R.R. Tolkien", 988, "No");
addBookToLibrary(lotr);
addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
addBookToLibrary(theHobbit);

console.log(theHobbit.title);
displayAll();
console.log(theHobbit.info());