var Product = require('../mongoSchema/product');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/toastApparel');

mongoose.connect('mongodb+srv://Andrew:zRU9AvitXI6ksbiU@cluster0-gbspm.mongodb.net/lamode?retryWrites=true');

var products = [
new Product({
  name: 'Cult Denim Short',
  brand: 'DeDe',
  color: 'Blue',
  link: 'cult-denim-shorts-blue',
  description: `The Cult Denim short is a fun and flirty summer shape made from a bold statement denim fabric. 
  Complete the perfect summer look with the matching stripe top.`,
  features: ['Regular fit - true to size.',
    'Mid Rise Denim short.',
    'Heavily Washed.',
    'Deconstructed fit.',
    'Distressed detail for a vintage look.',
    'Belt looped waistband.',
    'Five pocket design.'
  ],
  category: 'womens',
  subcategory: 'shorts',
  stock: [
    {size: 'S', quantity: 0},
    {size: 'M', quantity: 20},
    {size: 'L', quantity: 15},
    {size: 'XL', quantity: 0},
    {size: 'XXL', quantity: 5},
  ],
  images: ['Cult-Denim-Short-Blue.jpg',
    'Cult-Denim-Short-Blue-Full.jpg',
    'Cult-Denim-Short-Blue-Back.jpg',
    'Cult-Denim-Short-Blue-Front.jpg'
  ],
  price: 29,
  salePrice: 27,
  currency: 'NZD',
  dateAdded: new Date()
}),
new Product({
  name: 'Cult Denim Short',
  brand: 'DeDe',
  color: 'Black',
  link: 'cult-denim-shorts-black',
  description: `The Cult Denim short is a fun and flirty summer shape made from a bold statement denim fabric. 
  Complete the perfect summer look with the matching stripe top.`,
  features: ['Regular fit - true to size.',
    'Mid Rise Denim short.',
    'Heavily Washed.',
    'Deconstructed fit.',
    'Distressed detail for a vintage look.',
    'Belt looped waistband.',
    'Five pocket design.'
  ],
  category: 'womens',
  subcategory: 'shorts',
  stock: [
    {size: 'S', quantity: 0},
    {size: 'M', quantity: 20},
    {size: 'L', quantity: 15},
    {size: 'XL', quantity: 0},
    {size: 'XXL', quantity: 5},
  ],
  images: ['Cult-Denim-Short-Black.jpg',
    'Cult-Denim-Short-Black-Full.jpg',
    'Cult-Denim-Short-Black-Back.jpg',
    'Cult-Denim-Short-Black-Front.jpg'
  ],
  price: 29,
  salePrice: 27,
  currency: 'NZD',
  dateAdded: new Date()
  }),
new Product({
name: 'Highlife Short',
brand: 'The Valley',
color: 'White',
link: 'highlife-short-white',
description: `The Highlife short is a fun and flirty summer shape made from a bold statement denim fabric. 
Complete the perfect summer look with the matching stripe top.`,
features: ['Regular fit - true to size.',
  'Mid Rise Denim short.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.',
  'Belt looped waistband.',
  'Five pocket design.'
],
category: 'womens',
subcategory: 'shorts',
stock: [
  {size: 'S', quantity: 25},
  {size: 'M', quantity: 20},
  {size: 'L', quantity: 0},
  {size: 'XL', quantity: 0},
  {size: 'XXL', quantity: 5},
],
images: ['Highlife-Short-White.jpg',
    'Highlife-Short-White-Full.jpg',
    'Highlife-Short-White-Back.jpg',
    'Highlife-Short-White-Front.jpg'
],
price: 25,
salePrice: 22,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Tigerpalm Short',
brand: 'The Valley',
color: 'White',
link: 'tigerpalm-short-white',
description: `The Tigerpalm short is a fun and flirty summer shape made from a bold statement denim fabric. 
Complete the perfect summer look with the matching stripe top.`,
features: ['Regular fit - true to size.',
  'Mid Rise Denim short.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.',
  'Belt looped waistband.',
  'Five pocket design.'
],
category: 'womens',
subcategory: 'shorts',
stock: [
  {size: 'S', quantity: 0},
  {size: 'M', quantity: 20},
  {size: 'L', quantity: 15},
  {size: 'XL', quantity: 10},
  {size: 'XXL', quantity: 0},
],
images: ['Tigerpalm-Short-White.jpg',
    'Tigerpalm-Short-White-Full.jpg',
    'Tigerpalm-Short-White-Back.jpg',
    'Tigerpalm-Short-White-Front.jpg'
],
price: 24,
salePrice: 19,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Warfie Short',
brand: 'Dede',
color: 'Black',
link: 'warfie-short-black',
description: `The Warfie short is a fun and flirty summer shape made from a bold statement denim fabric. 
Complete the perfect summer look with the matching stripe top.`,
features: ['Regular fit - true to size.',
  'Mid Rise Denim short.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.',
  'Belt looped waistband.',
  'Five pocket design.'
],
category: 'womens',
subcategory: 'shorts',
stock: [
  {size: 'S', quantity: 25},
  {size: 'M', quantity: 20},
  {size: 'L', quantity: 0},
  {size: 'XL', quantity: 10},
  {size: 'XXL', quantity: 5},
],
images: ['Warfie-Short-Black.jpg',
    'Warfie-Short-Black-Full.jpg',
    'Warfie-Short-Black-Back.jpg',
    'Warfie-Short-Black-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Basque Short',
brand: 'Hazey',
color: 'Black',
link: 'basque-short-black',
description: `The Basque short is a fun and flirty summer shape made from a bold statement denim fabric. 
Complete the perfect summer look with the matching stripe top.`,
features: ['Regular fit - true to size.',
'Mid Rise Denim short.',
'Heavily Washed.',
'Deconstructed fit.',
'Distressed detail for a vintage look.',
'Belt looped waistband.',
'Five pocket design.'
],
category: 'womens',
subcategory: 'shorts',
stock: [
{size: 'S', quantity: 25},
{size: 'M', quantity: 0},
{size: 'L', quantity: 0},
{size: 'XL', quantity: 0},
{size: 'XXL', quantity: 5},
],
images: ['Basque-Short-Black.jpg',
'Basque-Short-Black-Full.jpg',
'Basque-Short-Black-Back.jpg',
'Basque-Short-Black-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Cloudscape Singlet',
brand: 'Contender',
color: 'Black',
link: 'cloudscape-singlet-black',
description: `The Cloudscape singlet is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching black bottoms.`,
features: ['Regular fit - true to size.',
'Mid Rise top.',
'Heavily Washed.',
'Deconstructed fit.',
'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'tops',
stock: [
{size: 'S', quantity: 25},
{size: 'M', quantity: 10},
{size: 'L', quantity: 10},
{size: 'XL', quantity: 0},
{size: 'XXL', quantity: 5},
],
images: ['Cloudscape-Singlet-Black.jpg',
  'Cloudscape-Singlet-Black-Full.jpg',
  'Cloudscape-Singlet-Black-Back.jpg',
  'Cloudscape-Singlet-Black-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Cloudscape Singlet',
brand: 'Contender',
color: 'White',
link: 'cloudscape-singlet-white',
description: `The Cloudscape singlet is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching white bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 25},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 0},
  {size: 'XXL', quantity: 5},
],
images: ['Cloudscape-Singlet-White.jpg',
    'Cloudscape-Singlet-White-Full.jpg',
    'Cloudscape-Singlet-White-Back.jpg',
    'Cloudscape-Singlet-White-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Ribbed Scoopneck Top',
brand: 'Summer',
color: 'Blue',
link: 'ribbed-scoopneck-top-blue',
description: `The Ribbed Scoopneck top is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 25},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 5},
],
images: ['Ribbed-Scoopneck-Top-Blue.jpg',
    'Ribbed-Scoopneck-Top-Blue-Full.jpg',
    'Ribbed-Scoopneck-Top-Blue-Back.jpg',
    'Ribbed-Scoopneck-Top-Blue-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Ribbed Scoopneck Top',
brand: 'Summer',
color: 'Pink',
link: 'ribbed-scoopneck-top-pink',
description: `The Ribbed Scoopneck top is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 0},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 5},
],
images: ['Ribbed-Scoopneck-Top-Pink.jpg',
    'Ribbed-Scoopneck-Top-Pink-Full.jpg',
    'Ribbed-Scoopneck-Top-Pink-Back.jpg',
    'Ribbed-Scoopneck-Top-Pink-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Ribbed Scoopneck Top',
brand: 'Summer',
color: 'Tan',
link: 'ribbed-scoopneck-top-tan',
description: `The Ribbed Scoopneck top is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 0},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 0},
  {size: 'XL', quantity: 0},
  {size: 'XXL', quantity: 0},
],
images: ['Ribbed-Scoopneck-Top-Tan.jpg',
    'Ribbed-Scoopneck-Top-Tan-Full.jpg',
    'Ribbed-Scoopneck-Top-Tan-Back.jpg',
    'Ribbed-Scoopneck-Top-Tan-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Vision Track Pant',
brand: 'Vision',
color: 'Tan',
link: 'vision-track-pant-tan',
description: `The Vision track pant is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'mens',
subcategory: 'pants',
stock: [
  {size: 'S', quantity: 0},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 0},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 0},
],
images: ['Vision-Track-Pant-Tan.jpg',
    'Vision-Track-Pant-Tan-Full.jpg',
    'Vision-Track-Pant-Tan-Back.jpg',
    'Vision-Track-Pant-Tan-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Adidas XLR Shoe',
brand: 'Adidas',
color: 'Black',
link: 'adidas-xlr-shoe-black',
description: `The Adidas XLR shoe is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'mens',
subcategory: 'footwear',
stock: [
  {size: 'S', quantity: 7},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 0},
],
images: ['Addidas-XLR-Shoe-Black.jpg',
    'Addidas-XLR-Shoe-Black-Full.jpg',
    'Addidas-XLR-Shoe-Black-Side.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Lauren Sneaker',
brand: 'Snow',
color: 'Whote',
link: 'lauren-sneaker-white',
description: `The Lauren sneaker is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
'Mid Rise top.',
'Heavily Washed.',
'Deconstructed fit.',
'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'footwear',
stock: [
{size: 'S', quantity: 7},
{size: 'M', quantity: 0},
{size: 'L', quantity: 10},
{size: 'XL', quantity: 5},
{size: 'XXL', quantity: 0},
],
images: ['Lauren-Sneaker-White.jpg',
'Lauren-Sneaker-White-Full.jpg',
'Lauren-Sneaker-White-Side.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Juno Plimsoll Shoe',
brand: 'Adidas',
color: 'Snow',
link: 'juno-plimsoll-black',
description: `The Juno Plimsoll shoe is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
'Mid Rise top.',
'Heavily Washed.',
'Deconstructed fit.',
'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'footwear',
stock: [
{size: 'S', quantity: 7},
{size: 'M', quantity: 0},
{size: 'L', quantity: 10},
{size: 'XL', quantity: 5},
{size: 'XXL', quantity: 0},
],
images: ['Juno-Plimsoll-Black.jpg',
  'Juno-Plimsoll-Black-Full.jpg',
  'Juno-Plimsoll-Black-Side.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Hazey-Vee-Neck',
brand: 'Hazey',
color: 'Grey',
link: 'hazey-vee-neck-grey',
description: `The Hazey vee neck tee is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'mens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 7},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 25},
],
images: ['Hazey-Vee-Neck-Grey.jpg',
    'Hazey-Vee-Neck-Grey-Full.jpg',
    'Hazey-Vee-Neck-Grey-Front.jpg',
    'Hazey-Vee-Neck-Grey-Back.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Hazey-Vee-Neck',
brand: 'Hazey',
color: 'White',
link: 'hazey-vee-neck-white',
description: `The Hazey vee neck tee is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'mens',
subcategory: 'tops',
stock: [
  {size: 'S', quantity: 7},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 25},
],
images: ['Hazey-Vee-Neck-White.jpg',
    'Hazey-Vee-Neck-White-Full.jpg',
    'Hazey-Vee-Neck-White-Front.jpg',
    'Hazey-Vee-Neck-White-Back.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Snow Midi Dress',
brand: 'Snow',
color: 'Black',
link: 'snow-midi-dress-black',
description: `The Snow Midi dress is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'dresses',
stock: [
  {size: 'S', quantity: 0},
  {size: 'M', quantity: 0},
  {size: 'L', quantity: 0},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 0},
],
images: ['Snow-Midi-Dress-Black.jpg',
    'Snow-Midi-Dress-Black-Full.jpg',
    'Snow-Midi-Dress-Black-Back.jpg',
    'Snow-Midi-Dress-Black-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Snow Midi Dress',
brand: 'Snow',
color: 'Red',
link: 'snow-midi-dress-red',
description: `The Snow Midi dress is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'dresses',
stock: [
  {size: 'S', quantity: 20},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 10},
],
images: ['Snow-Midi-Dress-Red.jpg',
    'Snow-Midi-Dress-Red-Full.jpg',
    'Snow-Midi-Dress-Red-Back.jpg',
    'Snow-Midi-Dress-Red-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Highrise Jegging',
brand: 'Summer',
color: 'Black',
link: 'highrise-jegging-black',
description: `The Highrise jegging is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'pants',
stock: [
  {size: 'S', quantity: 20},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 10},
],
images: ['Highrise-Jegging-Black.jpg',
    'Highrise-Jegging-Black-Full.jpg',
    'Highrise-Jegging-Black-Back.jpg',
    'Highrise-Jegging-Black-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Highrise Jegging',
brand: 'Summer',
color: 'Blue',
link: 'highrise-jegging-blue',
description: `The Highrise jegging is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'pants',
stock: [
  {size: 'S', quantity: 20},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 10},
],
images: ['Highrise-Jegging-Blue.jpg',
    'Highrise-Jegging-Blue-Full.jpg',
    'Highrise-Jegging-Blue-Back.jpg',
    'Highrise-Jegging-Blue-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Highrise Jegging',
brand: 'Summer',
color: 'Maroon',
link: 'highrise-jegging-maroon',
description: `The Highrise jegging is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'pants',
stock: [
  {size: 'S', quantity: 20},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 10},
],
images: ['Highrise-Jegging-Maroon.jpg',
    'Highrise-Jegging-Maroon-Full.jpg',
    'Highrise-Jegging-Maroon-Back.jpg',
    'Highrise-Jegging-Maroon-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
}),
new Product({
name: 'Highrise Jegging',
brand: 'Summer',
color: 'White',
link: 'highrise-jegging-white',
description: `The Highrise jegging is a fun and flirty summer shape made from a bold statement dark fabric. 
Complete the perfect summer look with the matching bottoms.`,
features: ['Regular fit - true to size.',
  'Mid Rise top.',
  'Heavily Washed.',
  'Deconstructed fit.',
  'Distressed detail for a vintage look.'
],
category: 'womens',
subcategory: 'pants',
stock: [
  {size: 'S', quantity: 20},
  {size: 'M', quantity: 10},
  {size: 'L', quantity: 10},
  {size: 'XL', quantity: 5},
  {size: 'XXL', quantity: 10},
],
images: ['Highrise-Jegging-White.jpg',
    'Highrise-Jegging-White-Full.jpg',
    'Highrise-Jegging-White-Back.jpg',
    'Highrise-Jegging-White-Front.jpg'
],
price: 24,
salePrice: 18,
currency: 'USD',
dateAdded: new Date()
})
];

var readyToDisconnect = 0;
for (var i = 0; i < products.length; i++){
  console.log(products[i]);
  products[i].save(function(err, result){
    readyToDisconnect++;

    if (readyToDisconnect === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
