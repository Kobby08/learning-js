// fetch api
fetch("todos/john.json")
    .then((response) => {
        console.log("resolved", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("rejected", err);
    });

// async and await

getTodos = async() => {
    const response = await fetch("todos/quam.json");
    const data = await response.json();
    return data;
};

getTodos().then((data) => {
    console.log("resolved data: ", data);
});