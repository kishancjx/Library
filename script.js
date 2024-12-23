const bookContainer = document.querySelector(".booksContainer");
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

function displayBooks() {
  myLibrary.forEach((book,index) => {
    const bookDiv = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const toggleDiv = document.createElement("div");
    const switchLabel = document.createElement("label");
    const checkBoxInput = document.createElement("input");
    const slideSpan = document.createElement("span");
    const bookStatus = document.createElement("p");
    const removeBtn = document.createElement("button");

    bookDiv.classList.add("book-card");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    toggleDiv.classList.add("toggle-div");
    switchLabel.classList.add("switch");
    checkBoxInput.classList.add("read-toggle");
    slideSpan.classList.add("slider", "round");
    bookStatus.classList.add("book-status");
    removeBtn.classList.add("delete-btn");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookPages.textContent = `${book.pages} Pages`;
    bookStatus.textContent = book.status;
    removeBtn.textContent = "Remove"; 

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    switchLabel.appendChild(checkBoxInput);
    switchLabel.appendChild(slideSpan);
    toggleDiv.appendChild(switchLabel);
    toggleDiv.appendChild(bookStatus);
    bookDiv.appendChild(toggleDiv);
    bookDiv.appendChild(removeBtn);

    bookContainer.appendChild(bookDiv);

    removeBtn.addEventListener("click",()=> {
      myLibrary.splice(index,1);
      bookDiv.remove();


    });

  });
}

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

    displayBooks();
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
