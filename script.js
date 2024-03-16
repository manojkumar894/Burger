function placeOrder() {
    const foodItems = document.querySelectorAll('input[type="checkbox"]:checked');
    if (foodItems.length === 0) {
        alert("Please select at least one food item to place an order.");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;
    orderButton.innerText = "Processing...";

    const orderStatus = document.getElementById('orderStatus');
    orderStatus.innerHTML = '<div class="loader"></div><p>Placing your order...</p>';

    // Simulate food preparation time with a random delay
    const randomSeconds = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    setTimeout(() => {
        const orderID = generateOrderID();
        orderStatus.innerHTML = `<img src="food.png" alt="Ordered Food"><p>Order ID: ${orderID}</p>`;
        orderButton.disabled = false;
        orderButton.innerText = "Order Food";
    }, randomSeconds * 1000);
}

function generateOrderID() {
    // Generate a random 6-digit order ID
    return Math.floor(Math.random() * 900000) + 100000;
}
