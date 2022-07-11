// awesome Class: Handle UI Tasks
import {Store} from "./store.js";

class awesomeBooks {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => awesomeBooks.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const listBook = document.createElement("div");
    listBook.classList.add("the-book");

    listBook.innerHTML = `
      <div class="book-details">
        <p class="infor">"${book.title}"</p>
        <p>by</p>
        <p class="infor">${book.author}</p>
        <button class="delete">Remove</button>
      </div>
      
      `;

    list.appendChild(listBook);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector("#new-title").value = "";
    document.querySelector("#new-author").value = "";
  }
}

export { awesomeBooks };