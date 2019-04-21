const shoppingCart = {
  cartItems: [
    {	productId: 1,
      product: {
        name: 'Cloudscape Singlet',
        brand: 'Contender',
        color: 'White',
        category: 'womens',
        subcategory: 'tops',
        images: ['Cloudscape-Singlet-White.jpg',
            'Cloudscape-Singlet-White-Full.jpg',
            'Cloudscape-Singlet-White-Back.jpg',
            'Cloudscape-Singlet-White-Front.jpg'
        ],
        price: 24,
        salePrice: 18,
      },
      size: 'S',
      quantity: 2,
    },
    { productId: 2,
      product: {
        name: 'Ribbed Scoopneck Top',
        brand: 'Summer',
        color: 'Blue',
        category: 'womens',
        subcategory: 'tops',
        images: ['Ribbed-Scoopneck-Top-Blue.jpg',
            'Ribbed-Scoopneck-Top-Blue-Full.jpg',
            'Ribbed-Scoopneck-Top-Blue-Back.jpg',
            'Ribbed-Scoopneck-Top-Blue-Front.jpg'
        ],
        price: 22,
        salePrice: 19,
      },
      size: 'M',
      quantity: 3, 
    },
    { productId: 2,
      product: {
        name: 'Ribbed Scoopneck Top',
        brand: 'Summer',
        color: 'Pink',
        category: 'womens',
        subcategory: 'tops',
        images: ['Ribbed-Scoopneck-Top-Pink.jpg',
            'Ribbed-Scoopneck-Top-Pink-Full.jpg',
            'Ribbed-Scoopneck-Top-Pink-Back.jpg',
            'Ribbed-Scoopneck-Top-Pink-Front.jpg'
        ],
        price: 22,
        salePrice: 19,
      },
      size: 'XXL',
      quantity: 1, 
    }
  ],
  shipping: 'FREE SHIPPING!',
  totalPrice: 150
};


function updateQty(id, qty) {

}
function addToCart(id, prdt, qty){
  alert('here');
  let newItem = {productId: id, product: prdt, quantity: qty};
  shoppingCart.cartItems.push(newItem);
  alert('shoppingCart' + shoppingCart.cartItems);
}
export {shoppingCart, addToCart, updateQty};
