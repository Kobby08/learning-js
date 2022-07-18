const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("could not fetch data");
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

getTodos("todos/john.json")
    .then((data) => {
        console.log("promised resolved:", data);
        return getTodos("todos/mario.json");
    })
    .then((data) => {
        console.log("promise 2 resolved:", data);
        return getTodos("todos/quam.json");
    })
    .then((data) => {
        console.log("promise 3 resolved:", data);
    })
    .catch((err) => {
        console.log("promise rejected:", err);
    });

// promise
getSomething = () => {
    return new Promise((resolve, reject) => {
        //resolve("some data");
        reject("some error");
    });
};

// getSomething().then(
//     (data) => {
//         console.log(data);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

getSomething()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });