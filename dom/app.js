// get element by class name
let titles = document.getElementsByClassName("title");

Array.from(titles).forEach(function(title) {
    console.log(title);
});

// get element using the query selector function
let book = document.querySelector("#book-list li:nth-child(2) .name");
console.log(book);

let books = document.querySelectorAll("#book-list li .name");
console.log(books);

books.forEach(function(book) {
    book.textContent += "(latest)";
});

// cloning an element
let banner = document.querySelector("#page-banner");

let clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

bookList = document.querySelector("#book-list");

// parent node
console.log(bookList.parentNode);

// children
console.log(bookList.children);

// siblings
console.log(bookList.nextSibling);
console.log(bookList.nextElementSibling);

console.log(bookList.previousElementSibling);

prev = bookList.previousElementSibling;
// prev.querySelector("p").innerHTML += "<br/> Nana wrote this..";

// removing element from the DOM
btns = document.querySelectorAll("#book-list .delete");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});