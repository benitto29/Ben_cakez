/* ================================= */
/* BEN CAKEZ */
/* COMPLETE JAVASCRIPT */
/* ================================= */


/* ================================= */
/* PRODUCT DATA */
/* ================================= */

const products = {

    brownie: {

        name: "Chocolate Brownie",

        price: 80

    },

    tub: {

        name: "Brownie Tub",

        price: 250

    },

    slab: {

        name: "Brownie Slab",

        price: 490

    }

};



/* ================================= */
/* QUANTITIES */
/* ================================= */

const quantities = {

    brownie: 1,

    tub: 1,

    slab: 1

};



/* ================================= */
/* CART */
/* ================================= */

let cart = [];



/* ================================= */
/* CHANGE QUANTITY */
/* ================================= */

function changeQuantity(product, change) {

    quantities[product] += change;


    /* Minimum quantity = 1 */

    if (quantities[product] < 1) {

        quantities[product] = 1;

    }


    updateQuantityDisplay(product);

}



/* ================================= */
/* UPDATE QUANTITY DISPLAY */
/* ================================= */

function updateQuantityDisplay(product) {

    const quantityElement =
        document.getElementById(
            product + "-quantity"
        );


    const totalElement =
        document.getElementById(
            product + "-total"
        );


    quantityElement.textContent =
        quantities[product];


    totalElement.textContent =
        products[product].price *
        quantities[product];

}



/* ================================= */
/* ADD TO CART */
/* ================================= */

function addToCart(product) {

    const quantity =
        quantities[product];


    const existingProduct =
        cart.find(
            item => item.product === product
        );


    if (existingProduct) {

        existingProduct.quantity += quantity;

    }

    else {

        cart.push({

            product: product,

            quantity: quantity

        });

    }


    updateCart();


    /* Reset product quantity */

    quantities[product] = 1;

    updateQuantityDisplay(product);


    alert(
        products[product].name +
        " added to cart! 🛒"
    );

}



/* ================================= */
/* UPDATE CART */
/* ================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );


    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    const cartCount =
        document.getElementById(
            "cart-count"
        );


    /* Empty cart */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <p>
                    Your cart is empty.
                </p>

                <a href="#menu">
                    Browse Menu
                </a>

            </div>

        `;


        cartTotal.textContent = "0";

        cartCount.textContent = "0";

        return;

    }


    let total = 0;

    let totalItems = 0;


    let html = "";


    cart.forEach(
        (item, index) => {


        const product =
            products[item.product];


        const itemTotal =
            product.price *
            item.quantity;


        total += itemTotal;

        totalItems += item.quantity;


        html += `

            <div class="cart-item">

                <div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        Quantity:
                        ${item.quantity}
                    </p>

                    <p>
                        ₹${product.price}
                        ×
                        ${item.quantity}
                    </p>

                    <strong>
                        ₹${itemTotal}
                    </strong>

                </div>


                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    cartItems.innerHTML = html;


    cartTotal.textContent = total;


    cartCount.textContent = totalItems;

}



/* ================================= */
/* REMOVE FROM CART */
/* ================================= */

function removeFromCart(index) {

    cart.splice(index, 1);


    updateCart();

}



/* ================================= */
/* WHATSAPP CHECKOUT */
/* ================================= */

function checkoutCart() {


    if (cart.length === 0) {

        alert(
            "Your cart is empty! Please add a product first."
        );

        return;

    }


    let message =
        "Hello BeN Cakez! 🍰%0A%0A";

    message +=
        "I would like to place an order:%0A%0A";


    let total = 0;


    cart.forEach(
        item => {

            const product =
                products[item.product];


            const itemTotal =
                product.price *
                item.quantity;


            total += itemTotal;


            message +=
                "• " +
                product.name +
                " × " +
                item.quantity +
                " = ₹" +
                itemTotal +
                "%0A";

        }
    );


    message +=
        "%0A*Total: ₹" +
        total +
        "*%0A%0A";


    message +=
        "Thank you! 😊";


    /*
       IMPORTANT:
       Replace 919999999999
       with your real WhatsApp number.

       Example:
       919876543210
    */


    const phoneNumber =
        "8122684253";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* ================================= */
/* INITIALIZE */
/* ================================= */

updateQuantityDisplay("brownie");

updateQuantityDisplay("tub");

updateQuantityDisplay("slab");

updateCart();