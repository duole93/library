//DOM reference
const addaBookBtn = document.querySelector(".add > button");
//Dialog References
const newBookDialog = document.querySelector("#new-book-dialog");
const titleDialog = document.querySelector("#title");
const authorDialog = document.querySelector("#author");
const pagesDialog = document.querySelector("#pages");
const isReadDialog = document.querySelector("#isRead");

const cancelDialogBtn = document.querySelector("#new-book-dialog > form > .cancel-btn");
const submitaBookBtn = document.querySelector("#new-book-dialog > form > .add-btn");

const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, isRead) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}
// Book.prototype.getTitle = function () {
//     return this.title;
// }

// Book.prototype.getAuthorname = function () {
//     return this.author;
// }

// Book.prototype.getTotalPages = function () {
//     return this.pages;
// }

// Book.prototype.getReadStatus = function () {
//     return this.isRead;
// }

//list of book
const books = new Array();

//display book - clear display, and display book

function displayBooks(){
    //clear display;
    bookContainer.innerHTML="";

    //display the list again
    books.forEach((item, index)=>{
        let bookCard= document.createElement("div");
        let title= document.createElement("h1");
        let author= document.createElement("p");
        let pages= document.createElement("p");
        let isReadCheckBox= document.createElement("input"); 
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        
        title.textContent = item.title;
        author.textContent = item.author;
        pages.textContent = item.pages;

        isReadCheckBox.setAttribute("type","checkbox");
        isReadCheckBox.checked = item.isRead;

        editBtn.classList.add("edit-btn");
        editBtn.textContent = "✎";

        deleteBtn.classList.add("close-btn");
        deleteBtn.textContent = "X";

        
        bookCard.append(title, author, pages, isReadCheckBox, editBtn, deleteBtn);
        bookCard.classList.add("book-card");
        bookCard.classList.add(`${index}`)


        bookContainer.appendChild(bookCard);
    });
}
function resetDialog(){
    titleDialog.value = "";
    authorDialog.value ="";
    pagesDialog.value="";
    isReadDialog.checked=false;
}
addaBookBtn.addEventListener('click', () =>{
    newBookDialog.showModal();
})

submitaBookBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let title = titleDialog.value;
    let author = authorDialog.value;
    let page = pagesDialog.value;
    let isRead = isReadDialog.checked;
    let book = new Book (title, author, page, isRead);
    books.push(book);
    newBookDialog.close();
    displayBooks();
    resetDialog();
})

cancelDialogBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    newBookDialog.close();
    resetDialog();
})
