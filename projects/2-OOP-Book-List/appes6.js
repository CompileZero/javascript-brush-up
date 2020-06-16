class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  //Add book to list
  addBookToList(book) {
    const list = document.getElementById("book-list");

    //Create tr element
    const row = document.createElement("tr");

    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
  }

  //Delete Book
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  //Clear Fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  //Show Alert
  showAlert(message, className) {
    //Create div
    const div = document.createElement("div");
    //Add Classes
    div.className = `alert ${className}`;

    //Add Text
    div.appendChild(document.createTextNode(message));

    //Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    //Insert Alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//Local Storage
class Store {
  //Use static when you want to call a method without instantiating the class
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();

    const ui = new UI();
    books.forEach(function (book) {
      //Add book to UI
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    //Set Local Storage
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
        /*
        The splice() method adds/removes items to/from an array, and returns the removed item(s).
        Note: This method changes the original array.

        At position 2, remove 2 items:

        var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
        fruits.splice(2, 2);
        */
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

//DOM Load Event

document.addEventListener("DOMContentLoaded", Store.displayBooks());
// Event Listener for Add Book

document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate UI
  const ui = new UI();
  //Validation
  if (title === "" || author === "" || isbn === "") {
    //Error Alert
    ui.showAlert("Please enter all fields", "error");
  } else {
    //Instantiate book
    const book = new Book(title, author, isbn);

    //Add book to list
    ui.addBookToList(book);

    //Add Book to Storage
    Store.addBook(book);

    //Show Success
    ui.showAlert("Book Added", "success");

    //Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

//Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function (e) {
  //Instantiate UI
  const ui = new UI();

  //Delete Book
  ui.deleteBook(e.target);

  //Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //Show message
  ui.showAlert("Book removed", "success");
  e.preventDefault();
});
