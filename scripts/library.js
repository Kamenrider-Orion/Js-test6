const library = [];
const interface = {
  addBook: function(title, author, read) {
    const Book = {
      title: title,
      author: author,
      read: read
    };
  Book.title = prompt("Enter the title of the book:");
  Book.author = prompt("Enter the author of the book:");
  Book.read = confirm("Has you read this book?");
  if (Book.read === true) {
    Book.read = "isRead";
  }else {
    Book.read = "notRead";
  }
  library.push(Book);
  library.sort((a, b) => a.title.localeCompare(b.title));
  return Book;
},
bookList: function(array) {
    array = library.map(Book => `<li>${Book.title} by ${Book.author} - ${Book.read}</li>`).join("");
    document.getElementById("bookList").innerHTML = array;
    console.log(array);
    return array;
},
markAsRead: function(title) {
    const Book = library.find(Book => Book.title === title);
    if (Book) {
        Book.read = "isRead";
    }
},
removeBook: function(title) {
    const index = library.findIndex(Book => Book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
    }
},
listUnreadBooks: function(array) {
    array = library.filter(Book => Book.read === "notRead");
    array = array.map(Book => `<li>${Book.title} by ${Book.author} - ${Book.read}</li>`).join("");
    document.getElementById("bookList").innerHTML = array;
    console.log(array);
    return array;
}
};
console.log(library);