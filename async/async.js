const getTodos = (callback) => {
    request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("could not fetch data", undefined);
        }
    });

    request.open("GET", "todos/quam.json");
    request.send();
};

getTodos((err, data) => {
    console.log("callback is fired");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});