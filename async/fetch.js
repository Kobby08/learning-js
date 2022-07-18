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
    const response = await fetch("todos/qusam.json");

    if (response.status !== 200) {
        throw new Error("could not fetch data");
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then((data) => {
        console.log("resolved data: ", data);
    })
    .catch((err) => {
        console.log("error: ", err.message);
    });