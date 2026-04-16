// script.js

// Shopping Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`Product ${product.name} added to cart.`);
}

function viewCart() {
    console.log("Your cart contents:", cart);
}

// Product Search Functionality
function searchProducts(products, searchTerm) {
    return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Category Filters Functionality
function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
}

// Form Submission Functionality
function submitForm(formData) {
    console.log("Form submitted with data:", formData);
    // Placeholder for form submission logic
}

// Payment Integration Placeholder
function processPayment(paymentDetails) {
    console.log("Processing payment with details:", paymentDetails);
    // Placeholder for payment processing logic
}