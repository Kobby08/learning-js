var userOne = {
    email: "nana@gmail.com",
    name: "Nana Quam",
    login() {
        console.log(this.email, "has logged in");
    },
    logout() {
        console.log(this.email, "has logged out");
    },
};
newUser = userOne;
console.log(newUser.name);
console.log(newUser["email"]);
newUser.login();
newUser.name = "John Doe";
console.log(newUser.name);
console.log(newUser);