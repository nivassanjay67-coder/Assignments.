const book = {
  title: "Game of Thrones",
  author: "F. Scott Fitzgerald",
  pages: 200,

  describe() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages.`);
  }
};
book.describe(); 