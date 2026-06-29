export type MenuItem = {
  name: string
  description: string
  price: number
  tag?: 'Bestseller' | 'Spicy' | 'New' | 'Veg' | 'Non-Veg'
}

export type MenuCategory = {
  id: string
  title: string
  blurb: string
  image: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'veg-speciality',
    title: 'Veg Speciality',
    blurb: 'Indulgent, cheese-filled, and extra loaded vegetarian camp-style specialities.',
    image: '/images/combo.png',
    items: [
      {
        name: 'Veg Burger Regular',
        description: 'Our standard mixed vegetable patty cooked camp-style with cheese and signature sauces.',
        price: 70,
        tag: 'Bestseller',
      },
      {
        name: 'Veg Burger Jumbo',
        description: 'Jumbo double patty mixed vegetable burger, stacked with double cheese and loaded camp mayo.',
        price: 130,
        tag: 'New',
      },
      {
        name: 'Cheesy Potato Regular',
        description: 'Golden fried potato patty stuffed with molten cheese, served in a toasted bun.',
        price: 80,
      },
      {
        name: 'Cheesy Potato Jumbo',
        description: 'Double layer cheesy potato patties with extra molten cheese and camp signature sauce.',
        price: 130,
        tag: 'Bestseller',
      },
    ],
  },
  {
    id: 'non-veg-speciality',
    title: 'Non-Veg Speciality',
    blurb: 'Premium grilled chicken and fish specialities, made with authentic camp spices.',
    image: '/images/chicken-burger.png',
    items: [
      {
        name: 'Chicken Burger Regular',
        description: 'Classic grilled camp-style chicken patty with fresh lettuce and signature burger spread.',
        price: 80,
        tag: 'Bestseller',
      },
      {
        name: 'Chicken Burger Jumbo',
        description: 'Our ultimate stack: double chicken patty, double melted cheese, and extra loaded camp sauce.',
        price: 140,
        tag: 'Bestseller',
      },
      {
        name: 'Chicken Salami Burger',
        description: 'Juicy camp chicken patty topped with premium sliced chicken salami, cheese, and spicy mayo.',
        price: 90,
        tag: 'New',
      },
      {
        name: 'Fish Fillet Burger',
        description: 'Crispy golden fried fish fillet topped with fresh tartare sauce and camp sandwich spread.',
        price: 80,
      },
    ],
  },
  {
    id: 'veg-burgers',
    title: 'Veg Burgers',
    blurb: 'Classic and spicy single-patty vegetarian camp burgers.',
    image: '/images/veg-burger.png',
    items: [
      {
        name: 'Aloo Tikki Burger',
        description: 'Crispy spiced potato tikki in a soft toasted bun with camp mint chutney and mayo.',
        price: 40,
      },
      {
        name: 'Tandoori Burger',
        description: 'Tandoori spiced mixed vegetable patty with smoky tandoori sauce and sliced onions.',
        price: 50,
      },
      {
        name: 'Aloo Corn Burger',
        description: 'Healthy and sweet sweet corn & potato patty burger, mild and comforting.',
        price: 60,
      },
      {
        name: 'Double Dekker Burger',
        description: 'Double decker layout with two classic veg patties and extra slice of cheese.',
        price: 70,
        tag: 'Bestseller',
      },
      {
        name: 'Mexican Burger',
        description: 'Tangy and zesty Mexican-spiced burger with tomato salsa and jalapeño mayo.',
        price: 70,
      },
      {
        name: '50-50 Burger',
        description: 'Half paneer and half vegetable patty, stacked together with cheese and spicy sauces.',
        price: 90,
        tag: 'Spicy',
      },
      {
        name: 'Paneer Burger',
        description: 'Thick crispy paneer slab patty, marinated in camp spices and cooked golden.',
        price: 90,
        tag: 'Bestseller',
      },
    ],
  },
  {
    id: 'non-veg-burgers',
    title: 'Non-Veg Burgers',
    blurb: 'Camp-style grilled chicken patties, stacked classic or jumbo.',
    image: '/images/chicken-burger.png',
    items: [
      {
        name: 'Chicken Burger Regular',
        description: 'Classic grilled camp-style chicken patty with fresh lettuce and signature burger spread.',
        price: 80,
      },
      {
        name: 'Chicken Burger Jumbo',
        description: 'Our ultimate stack: double chicken patty, double melted cheese, and extra loaded camp sauce.',
        price: 140,
      },
      {
        name: 'Chicken Salami Burger',
        description: 'Juicy camp chicken patty topped with premium sliced chicken salami, cheese, and spicy mayo.',
        price: 90,
      },
      {
        name: 'Fish Fillet Burger',
        description: 'Crispy golden fried fish fillet topped with fresh tartare sauce and camp sandwich spread.',
        price: 80,
      },
    ],
  },
  {
    id: 'bites',
    title: 'Bites',
    blurb: 'Golden fries, crinkle-cut shapes, loaded cheese fries, and crispy chicken snacks.',
    image: '/images/fries.png',
    items: [
      {
        name: 'Salted Fries',
        description: 'Classic golden french fries tossed in sea salt.',
        price: 70,
      },
      {
        name: 'Masala Fries',
        description: 'Golden fries dusted in hot and tangy camp masala seasoning.',
        price: 80,
        tag: 'Spicy',
      },
      {
        name: 'Peri Peri Fries',
        description: 'Crispy fries dusted with hot, fiery African peri-peri spice.',
        price: 90,
        tag: 'Spicy',
      },
      {
        name: 'Cheesy Fries',
        description: 'Golden fries smothered in rich, warm molten cheese sauce.',
        price: 110,
        tag: 'Bestseller',
      },
      {
        name: 'Peri Peri Cheese Fries',
        description: 'The ultimate fries: loaded cheese sauce meets hot peri-peri seasoning.',
        price: 120,
        tag: 'Bestseller',
      },
      {
        name: 'Chicken Nuggets',
        description: 'Golden, crunchy bite-sized minced chicken nuggets, served with dip.',
        price: 70,
      },
      {
        name: 'Chicken Strips',
        description: 'Crispy, hand-breaded chicken strips, fried golden and tender.',
        price: 80,
      },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverage Bliss',
    blurb: 'Thick, frothy cold coffees and ice-cold refreshing mojitos to clean your palate.',
    image: '/images/mojito.png',
    items: [
      {
        name: 'Cold Coffee',
        description: 'Thick, creamy, and chilled frothy cold coffee.',
        price: 50,
        tag: 'Bestseller',
      },
      {
        name: 'Cold Coffee with Crush',
        description: 'Rich cold coffee topped with a sweet chocolate or strawberry crush.',
        price: 60,
      },
      {
        name: 'Virgin Mojito',
        description: 'Classic muddled mint leaves, lime wedges, and bubbly soda fizz over ice.',
        price: 60,
      },
      {
        name: 'Blueberry Mojito',
        description: 'Sweet and tangy blueberry puree, fresh mint, and fizzy soda cooler.',
        price: 60,
        tag: 'New',
      },
      {
        name: 'Watermelon Mojito',
        description: 'Refreshing muddled watermelon, mint, lime, and cooling soda.',
        price: 60,
      },
      {
        name: 'Lime & Mint Mojito',
        description: 'Double refreshing extra zesty lime and fresh mint refresher.',
        price: 60,
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extra',
    blurb: 'Add-ons to custom stack any burger or meal.',
    image: '/images/combo.png',
    items: [
      {
        name: 'Veg Mayo',
        description: 'Extra portion of our signature vegetarian garlic mayo dip.',
        price: 20,
      },
      {
        name: 'Non-Veg Mayo',
        description: 'Extra portion of our egg-based camp chicken burger mayo dip.',
        price: 20,
      },
      {
        name: 'Cheese Slice',
        description: 'Add an extra slice of processed cheddar cheese.',
        price: 20,
      },
      {
        name: 'Cold Drink',
        description: 'Chilled assorted 250ml soft drink can.',
        price: 20,
      },
    ],
  },
]
