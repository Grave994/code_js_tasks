class Product {
    #productCode
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getProductCode() {
        return this.#productCode;
    }
    changePrice(newPrice) {
        this.price = newPrice > 0 ? newPrice : (() => { throw new Error("Yeni qiymət 0-dan böyük olmalıdır!"); })();
        return this.price;
    }
}

class ElectronicsProduct extends Product {
    constructor(name, price, category, power) {
        super(name, price, category);
        this.power = power;
    }
    getPowerConsumption() {
        return this.power
    }
}

class FoodProduct extends Product {
    constructor(name, price, category, expiryDate) {
        super(name, price, category);
        this.expiryDate = new Date(expiryDate);
    }
    checkExpiryDate() {
        const currentDate = new Date();
        return currentDate > this.expiryDate ? "Məhsulun son istifadə tarixi keçib!" : "Məhsul hələdə istifadə oluna bilər :)";
    }
}

const products = [
    new Product("İce Cream", 3, "general"),
    new Product("Water", 1, "general"),
    new ElectronicsProduct("Laptop", 1500, "electronics", 65),
    new ElectronicsProduct("Smartphone", 800, "electronics", 10),
    new FoodProduct("Chocolate", 5, "snack", "2024-12-31"),
    new FoodProduct("Milk", 2, "dairy", "2023-11-30")
];

//Filter method
const filteredProduct = products.filter(products => products.price < 50);
console.log(filteredProduct);


//Find method
const findProduct = products.find(products => products.category == "electronics");
console.log(findProduct);


//Sort method
const sortedProduct = products.sort((a, b) => a.price - b.price);
console.log(sortedProduct);


//Some method
const hasInStock = products.some(product => product.stock > 0);
console.log(hasInStock);

