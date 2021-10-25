var user = {
  email: "m@gmail.com",
  name: "manuel",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};
