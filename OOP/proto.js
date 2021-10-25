// @ts-nocheck
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

// @ts-ignore
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

// @ts-ignore
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged in");
};

function Admin(...args) {
	this.role = 'admin'
	this.secret = 'secret'
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype)

const user1 = new User("email", "name");
const user2 = new User("admin@", "admin");
const admin = new Admin("admin@", "admin");

console.log(admin);
