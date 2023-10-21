describe("onlineStore", function() { describe("isProductAvailable", function() { it("should return 'Great! Product is available for purchase.' if stockQuantity is greater than 0", function() { expect(onlineStore.isProductAvailable("Product", 10)).to.equal("Great! Product is available for purchase."); });

it("should return 'Sorry, Product is currently out of stock.' if stockQuantity is 0", function() {
  expect(onlineStore.isProductAvailable("Product", 0)).to.equal("Sorry, Product is currently out of stock.");
});

it("should throw an error if product is not a string", function() {
  expect(() => {
    onlineStore.isProductAvailable(123, 10);
  }).to.throw("Invalid input.");
});

it("should throw an error if stockQuantity is not a number", function() {
  expect(() => {
    onlineStore.isProductAvailable("Product", "10");
  }).to.throw("Invalid input.");
});
});

describe("canAffordProduct", function() { it("should return 'Product purchased. Your remaining balance is 90.' if accountBalance is greater than productPrice", function() { expect(onlineStore.canAffordProduct(10, 100)).to.equal("Product purchased. Your remaining balance is 90."); });

it("should return 'You don't have sufficient funds to buy this product.' if accountBalance is less than productPrice", function() {
  expect(onlineStore.canAffordProduct(100, 50)).to.equal("You don't have sufficient funds to buy this product.");
});

it("should throw an error if productPrice is not a number", function() {
  expect(() => {
    onlineStore.canAffordProduct("10", 100);
  }).to.throw("Invalid input.");
});

it("should throw an error if accountBalance is not a number", function() {
  expect(() => {
    onlineStore.canAffordProduct(10, "100");
  }).to.throw("Invalid input.");
});
});

describe("getRecommendedProducts", function() { const productList = [ { name: "Product 1", category: "Category 1" }, { name: "Product 2", category: "Category 2" }, { name: "Product 3", category: "Category 1" }, ];

it("should return 'Recommended products in the Category 1 category: Product 1, Product 3' if productList contains products in the specified category", function() {
  expect(onlineStore.getRecommendedProducts(productList, "Category 1")).to.equal("Recommended products in the Category 1 category: Product 1, Product 3");
});

it("should return 'Sorry, we currently have no recommended products in the Category 3 category.' if productList does not contain products in the specified category", function() {
  expect(onlineStore.getRecommendedProducts(productList, "Category 3")).to.equal("Sorry, we currently have no recommended products in the Category 3 category.");
});

it("should throw an error if productList is not an array", function() {
  expect(() => {
    onlineStore.getRecommendedProducts("Product 1", "Category 1");
  }).to.throw("Invalid input.");
});

it("should throw an error if category is not a string", function() {
  expect(() => {
    onlineStore.getRecommendedProducts(productList, 123);
  }).to.throw("Invalid input.");
});
}); });