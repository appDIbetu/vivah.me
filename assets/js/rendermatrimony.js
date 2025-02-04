const products = {
    girls: [
        {
            id: 1,
            title: "लड़की 1",
            description: "यह लड़की अपनी शिक्षा और पेशेवर जीवन में बहुत सक्रिय है।",
            image: "assets/images/product/p-1.jpg",
            discount: "-10%",
            price: "$49.00"
        },
        {
            id: 3,
            title: "लड़की 2",
            description: "यह लड़की अपने परिवार का समर्थन करती है।",
            image: "assets/images/product/p-3.jpg",
            discount: "-15%",
            price: "$59.00"
        }
    ],
    boys: [
        {
            id: 2,
            title: "लड़का 1",
            description: "यह लड़का अपने परिवार का समर्थन करने में माहिर है।",
            image: "assets/images/product/p-2.jpg",
            discount: "-20%",
            price: "$69.00"
        },
        {
            id: 4,
            title: "लड़का 2",
            description: "यह लड़का खेलकूद और अध्ययन में सक्रिय है।",
            image: "assets/images/product/p-4.jpg",
            discount: "-25%",
            price: "$79.00"
        }
    ]
};

function loadProducts(category) {
    // Step 1: Get products for the selected category
    const products = productsData[category]; // Assume productsData is your object containing products by category.

    // Step 2: Clear the existing products from the slider
    $('.product-items-active').slick('unslick'); // Destroy current slider

    // Step 3: Clear HTML inside product container
    $('.product-items-active').empty();

    // Step 4: Populate the container with new products
    products.forEach(product => {
        $('.product-items-active').append(`
            <div class="single-product">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </div>
        `);
    });

    // Step 5: Reinitialize the Slick slider after content update
    $('.product-items-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-chevron-right"></i></span>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
}

// loadProducts('girls');
// loadProducts('boys');

// Event listeners for tab switches
// document.getElementById('v-pills-furniture-tab').addEventListener('click', () => {
//     loadProducts('girls');
// });

// document.getElementById('v-pills-decorative-tab').addEventListener('click', () => {
//     loadProducts('boys');
// });
