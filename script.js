//DOM reference
const addBtn = document.querySelector(".add > button");


function Book(title, author, pages, isRead) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}
Book.prototype.getTitle = function () {
    return this.title;
}

Book.prototype.getAuthorname = function () {
    return this.author;
}

Book.prototype.getTotalPages = function () {
    return this.pages;
}

Book.prototype.getReadStatus = function () {
    return this.isRead;
}

//list of book
const books = new Array();

addBtn.addEventListener('click', () =>{
    let book = new Book('naruto', 'managaka', 700*18, true);
    books.push(book);
})


