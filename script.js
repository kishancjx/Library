const dialogBox = document.querySelector(".dialogBox");
const addBook = document.querySelector("#addBook");
const closeBtn = document.querySelector(".dialogBox #close");
const form = document.querySelector(".form");
const toggleButton = document.getElementById("Read");
const ReadStatus = document.getElementById("ReadStatus");
const bookTitle = document.querySelector("#Title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");

toggleButton.addEventListener("change", () => {
  toggleButton.checked
    ? (ReadStatus.textContent = "Read")
    : (ReadStatus.textContent = "Not Read");
});

const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 100, status: "Read" },
  { title: "1984", author: "George Orwell", pages: 200, status: "Not Read" },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 100,
    status: "Read",
  },
];

function BookMaker(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  // this.info = () => {
  //   return `${this.title} by ${this.author} , ${this.pages} , ${this.status}`;
  // };
}

function addBookToLibrary() {
  // code to add book to library
}

addBook.addEventListener("click", () => {
  dialogBox.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogBox.close();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // getting all the values from the form and pushing it in the library
  const bookTitleValue = bookTitle.value;
  const bookAuthorValue = bookAuthor.value;
  const bookPagesValue = bookPages.value;
  const bookRead = document.querySelector("#ReadStatus").textContent;

  // Performing Validation
  validateInputs(bookTitleValue, bookAuthorValue, bookPagesValue);

  if (document.querySelectorAll(".success").length === 3) {
    const theBook = new BookMaker(
      bookTitleValue,
      bookAuthorValue,
      Number(bookPagesValue),
      bookRead
    );
    console.log(theBook);
    myLibrary.push(theBook);
    console.log(myLibrary);

    // Reseting all the Form Elements
    form.reset();
    toggleButton.checked = false;
    ReadStatus.textContent = "Not Read";

    // Close the Dialog Box
    dialogBox.close();
  }
});

function validateInputs(bookTitleValue, bookAuthorValue, bookPagesValue) {
  if (bookTitleValue == "") {
    setError(bookTitle, "Book Title Cannot be Empty");
  } else {
    setSuccess(bookTitle);
  }

  if (bookAuthorValue == "") {
    setError(bookAuthor, "Please Enter the Author Name");
  } else {
    setSuccess(bookAuthor);
  }

  if (bookPagesValue == "") {
    setError(bookPages, "Please Enter the Number of Pages");
  } else {
    setSuccess(bookPages);
  }
}

function setError(element, message) {
  const inputControl = element.parentElement;
  const messageBox = inputControl.querySelector(".error");
  messageBox.textContent = message;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const messageBox = inputControl.querySelector(".error");
  messageBox.textContent = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}
