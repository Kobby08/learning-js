const getTodos = (resource, callback) => {
    request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("could not fetch data", undefined);
        }
    });

    request.open("GET", resource);
    request.send();
};

getTodos("todos/john.json", (err, data) => {
    console.log("callback is fired");
    console.log(data);
    getTodos("todos/mario.json", (err, data) => {
        console.log(data);
        getTodos("todos/quam.json", (err, data) => {
            console.log(data);
        });
    });
});