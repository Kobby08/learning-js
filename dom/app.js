// remocve books
// removing element from the DOM
const list = document.querySelector("#book-list ul");

list.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        const li = e.target.parentNode;
        li.parentNode.removeChild(li);
    }
});

// add books
// adding new element to the DOM
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // ceate new element
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const btn = document.createElement("span");

    // add content
    bookName.textContent = value;
    btn.textContent = "delete";

    // add classes
    // bookName.className = "name";
    btn.className = "delete";
    bookName.classList.add("name");

    // append elements
    li.appendChild(bookName);
    li.appendChild(btn);
    list.appendChild(li);
    m;
});

// hide books
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", function(e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

// filter books
const search = document.forms["search-books"].querySelector("input");

search.addEventListener("keyup", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent.toLowerCase();
        if (title.indexOf(searchTerm) != -1) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});