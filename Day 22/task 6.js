class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discountedPrice(discountPercent) {
    const discount = (this.price * discountPercent) / 100;
    return this.price - discount;
  }
}
const product1 = new Product("Laptop", 1200);

console.log(`Original Price: $${product1.price}`);
console.log(`Discounted Price (10% off): $${product1.discountedPrice(10)}`);