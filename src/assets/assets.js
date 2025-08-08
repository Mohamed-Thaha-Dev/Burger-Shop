
import logo from './logo_img.png'
// import header_img from '/header_img.png'
import search_icon from './search_icon.png'
import basket_icon from './basket_icon.png'
import header_img from './header_img.png'
import rating_star from './rating_starts.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import add_icon_green from './add_icon_green.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import cross_icon from './cross_icon.png'

import menu_1 from './burger_menu-1.jpg'
import menu_2 from './pizza_menu_2.jpg'
import menu_3 from './french-fries_menu_3.jpg'
import menu_4 from './shawarma_menu-4.jpg'
import menu_5 from './fried-chicken_menu_5.jpg'
import menu_6 from './dessert_menu_6.jpg'
import menu_7 from './drinks_menu_7.jpg'
import menu_8 from './combo_menu_8.png'


import chicken_burger from './chicken burger.jpg'
import veg_burger from './veg burger.jpg'
import meat_burger from './meat burger.jpg'
import chees_burger from './chees burger.jpg'
import beef_burger from './beef burger.jpg'
import chicken_pizza from './chicken pizza.jpg'
import Farmhouse_Pizza from './Farmhouse Pizza.jpg'
import Margherita_Pizza from './Margherita Pizza.jpg'
import salt_fries from './salt fries.jpg'
import spicy_fries from './spicy fries.jpg'
import chicken_shawarma from './chicken shawarma.jpg'
import beef_shawarma from './beef shawarma.jpg'
import fried_chicken from './fried chicken.jpg'
import chicken_wings from './chicken wings.jpg'
import dessart_1 from './dessart_1.jpg'
import dessart_2 from './dessart_2.jpg'
import lemon_juice from './lemon_juice.jpg'
import pepsi from './pepsi.jpg'
import coco_burger_combo from './coca_burger.png'
import two_burger_combo from './twoburger_coco.png'



export const assets = {
    logo,
    search_icon,
    basket_icon,
    header_img,
    rating_star,
    add_icon_white,
    remove_icon_red,
    add_icon_green,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    app_store,
    play_store,
    cross_icon,



    menu_1,
    menu_2,
    menu_3,
    menu_4,
    menu_5,
    menu_6,
    menu_7,
    menu_8,

   



    
}

export const menu_list = [

    {
        menu_name : "Burger",
        menu_image : menu_1
    },
    {
        menu_name : "Pizza",
        menu_image : menu_2
    },
    {
        menu_name : "French Fries",
        menu_image : menu_3
    },
    {
        menu_name : "Shawarma",
        menu_image : menu_4
    },
    {
        menu_name : "Fried Chicken",
        menu_image : menu_5
    },
    {
        menu_name : "Dessert",
        menu_image : menu_6
    },
    {
        menu_name : "Drinks",
        menu_image : menu_7
    },
    {
        menu_name : "Combo Offer",
        menu_image : menu_8
    },
    
]

export const foodList = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Burger",
    image: chicken_burger,
    price: 120,
    type: "Non-Veg",
    description: "Juicy grilled chicken patty with fresh lettuce and mayo in a soft bun."
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Burger",
    image: veg_burger,
    price: 90,
    type: "Veg",
    description: "Crispy vegetable patty with tomatoes, onions, and tangy sauce."
  },
  {
    id: 3,
    name: "Meat Burger",
    category: "Burger",
    image: meat_burger,
    price: 140,
    type: "Non-Veg",
    description: "Tender meat patty with melted cheese and signature burger sauce."
  },
  {
    id: 4,
    name: "Cheese Burger",
    category: "Burger",
    image: chees_burger,
    price: 130,
    type: "Veg",
    description: "Classic cheeseburger with cheddar, pickles, and smoky sauce."
  },
  {
    id: 5,
    name: "Beef Burger",
    category: "Burger",
    image: beef_burger,
    price: 150,
    type: "Non-Veg",
    description: "Grilled beef patty with onions, lettuce, and creamy dressing."
  },
  {
    id: 6,
    name: "Chicken Pizza",
    category: "Pizza",
    image: chicken_pizza,
    price: 250,
    type: "Non-Veg",
    description: "Cheesy pizza topped with spiced chicken chunks and veggies."
  },
  {
    id: 7,
    name: "Farmhouse Pizza",
    category: "Pizza",
    image: Farmhouse_Pizza,
    price: 270,
    type: "Veg",
    description: "Loaded with capsicum, onions, mushrooms, and sweet corn."
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Pizza",
    image: Margherita_Pizza,
    price: 200,
    type: "Veg",
    description: "Classic margherita with fresh tomato sauce and mozzarella cheese."
  },
  {
    id: 9,
    name: "Salted Fries",
    category: "French Fries",
    image: salt_fries,
    price: 70,
    type: "Veg",
    description: "Golden crispy fries seasoned lightly with salt."
  },
  {
    id: 10,
    name: "Spicy Fries",
    category: "French Fries",
    image: spicy_fries,
    price: 80,
    type: "Veg",
    description: "Crunchy fries tossed in tangy chili spice mix."
  },
  {
    id: 11,
    name: "Chicken Shawarma",
    category: "Shawarma",
    image: chicken_shawarma,
    price: 100,
    type: "Non-Veg",
    description: "Tender chicken slices wrapped in pita with creamy garlic sauce."
  },
  {
    id: 12,
    name: "Beef Shawarma",
    category: "Shawarma",
    image: beef_shawarma,
    price: 120,
    type: "Non-Veg",
    description: "Juicy beef shawarma wrapped with pickles and special sauce."
  },
  {
    id: 13,
    name: "Fried Chicken",
    category: "Fried Chicken",
    image: fried_chicken,
    price: 160,
    type: "Non-Veg",
    description: "Crispy and juicy fried chicken seasoned to perfection."
  },
  {
    id: 14,
    name: "Chicken Wings",
    category: "Fried Chicken",
    image: chicken_wings,
    price: 150,
    type: "Non-Veg",
    description: "Spicy and crispy chicken wings with BBQ dipping sauce."
  },
  {
    id: 15,
    name: "Dessert Special 1",
    category: "Dessert",
    image: dessart_1,
    price: 90,
    type: "Veg",
    description: "Soft chocolate cake topped with whipped cream and sprinkles."
  },
  {
    id: 16,
    name: "Dessert Special 2",
    category: "Dessert",
    image: dessart_2,
    price: 100,
    type: "Veg",
    description: "Rich vanilla pudding served with caramel sauce and fruits."
  },
  {
    id: 17,
    name: "Lemon Juice",
    category: "Drinks",
    image: lemon_juice,
    price: 40,
    type: "Veg",
    description: "Refreshing homemade lemon juice with mint and ice."
  },
  {
    id: 18,
    name: "Pepsi",
    category: "Drinks",
    image: pepsi,
    price: 30,
    type: "Veg",
    description: "Chilled can of Pepsi, perfect for pairing with any meal."
  },
  {
    id:19,
    name : "CocaCola Burger Combo",
    category : "Combo Offer",
    image : coco_burger_combo,
    price:100,
    type : "Non-Veg",
    description :"Delicious juicy chicken burger served with crispy fries and a chilled CocaCola for a perfect meal combo."
  },
   {
    id:20,
    name : "Two Burger Combo",
    category : "Combo Offer",
    image : two_burger_combo,
    price:180,
    type : "Non-Veg",
    description :"Two Delicious juicy chicken burger served with crispy fries and a chilled CocaCola for a perfect meal combo."
  }
];


