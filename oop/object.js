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

// Class

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(this.email, "has logged in");
        return this;
    }

    logout() {
        console.log(this.email, "has logged out");
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

user1 = new User("Nana Quam", "nana@sbl.com");
user2 = new User("John Doe", "john@sbl.com");
console.log(user1);
console.log(user2);

user1.login();
user2.logout();

user1.login().updateScore().updateScore().logout();