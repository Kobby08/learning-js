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

// getting and setting attributes
const elem = document.querySelector("#book-list li:first-child .name");

console.log(elem.getAttribute("class"));
console.log(elem.getAttribute("href"));
console.log(elem.setAttribute("class", "test"));
console.log(elem.hasAttribute("href"));
console.log(elem.hasAttribute("class"));