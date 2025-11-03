const user = {
  username: "john_doe",
  isLoggedIn: false,

  login() {
    this.isLoggedIn = true;
    console.log(`${this.username} has logged in.`);
  },

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} has logged out.`);
  }
};
user.login();   
user.logout(); 