var user = {
  email: "manchabla@gmail.com",
  name: "manuel",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

class User {
  /**
   * @param {string} _email
   * @param {string} _name
   */
  constructor(_email, _name) {
    this.email = _email;
    this.name = _name;
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
    console.log(this.email, " score is now ", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.email != user.email);
  }
}

const user1 = new User("email1@it.com", "email1");
const user2 = new User("email2@it.com", "email2");
const admin = new Admin("admin@gmai.com", "admin");

var users = [user1, user2, admin];

admin.deleteUser(user1);
console.log(users);
