import { MenuItem, QawwaliNightEvent, GalleryItem, OfficialPoster } from '../types';

// Contact & Location Details from Official Menu Posters
export const cafeDetails = {
  name: 'Chai Mehfil Cafe',
  nameUrdu: 'چائے محفل کیفے',
  tagline: 'Good Conversations Happen Over a Cup of Chai!',
  taglineUrdu: 'آپ کی محفل، آپ کی چائے اور دیسی باتیں',
  secondaryTagline: 'Dosto Ki Mehfil, Swad Ka Tufaan!',
  address: 'Opposite Alrehman Garden Phase II, Gate No. 2, Main Sharaqpur Road, Lahore',
  addressUrdu: 'المحفل بالمقابل الرحمٰن گارڈن فیز 2، گیٹ نمبر 2، مین شرقپور روڈ، لاہور',
  phone1: '0321-9597119',
  phone2: '0323-9017091',
  whatsappNumber: '923219597119',
  whatsappNumberSecondary: '923239017091',
  timings: 'Daily 5:00 PM – 4:00 AM (Open Late Night)',
  googleMapsUrl: 'https://maps.google.com/?q=Alrehman+Garden+Phase+2+Lahore'
};

// Official Digital Posters & Deal Cards
export const officialPostersData: OfficialPoster[] = [
  {
    id: 'poster-washi-deal',
    title: 'Washi Mega Deal',
    titleUrdu: 'واشی میگا ڈیل',
    subtitle: 'Full Taste, Full Maza! Dosto Ki Mehfil, Swad Ka Tufaan!',
    priceTag: 'Rs. 2300/-',
    category: 'deal',
    tagline: 'Sirf Rs. 2300 - Full Family & Friends Feast',
    highlights: [
      '1x Small Pizza (Your Favorite Flavour)',
      '1x Crispy Zinger Burger',
      '1x Flame Grilled Burger',
      '1x Classic Patty Burger',
      '1x Crispy Grill Paratha Roll',
      '6x Crispy Hot Shots',
      '2x Chilled Mint Margarita Drinks'
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },
  {
    id: 'poster-pizza-deal',
    title: '2 Medium Pizza Deal',
    titleUrdu: '2 میڈیم پیزا ڈیل',
    subtitle: 'Fresh Ingredients • Perfectly Baked • Best Value in Town',
    priceTag: 'Rs. 1500/-',
    category: 'deal',
    tagline: '2 Medium Pizzas + 1 Liter Cold Drink',
    highlights: [
      '2x Medium 11-inch Pizzas (Tikka, Fajita, Sausage, or Stuff Crust)',
      '1x 1-Liter Original Cold Drink Bottle',
      'Fresh Dough & Loaded Mozzarella Cheese'
    ],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },
  {
    id: 'poster-mauj-mela',
    title: 'Mauj Mela Deal',
    titleUrdu: 'موج میلہ ڈیل',
    subtitle: 'Mauj Bhi, Swad Bhi! Perfect for Friends & Family',
    priceTag: 'Rs. 2350/-',
    category: 'deal',
    tagline: 'Half Saji + Large Pizza + Fries + 1.5L Drink',
    highlights: [
      '1x Traditional Half Roasted Saji with Rice',
      '1x 14-inch Large Pizza',
      '1x Jumbo Portion Crispy French Fries',
      '1x 1.5 Liter Chilled Soft Drink'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },
  {
    id: 'poster-double-fun',
    title: 'Double Fun Deal',
    titleUrdu: 'ڈبل فن ڈیل',
    subtitle: 'Double Maza, Double Khushi!',
    priceTag: 'Rs. 1200/-',
    category: 'deal',
    tagline: 'Quarter Saji + 2 Zingers + 1L Drink',
    highlights: [
      '1x Quarter Roasted Saji',
      '2x Crispy Zinger Burgers with Mayo',
      '1x 1-Liter Cold Drink'
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },
  {
    id: 'poster-shawarma-deal',
    title: 'Shawarma & Platter Deals',
    titleUrdu: 'شوارما و پلَیٹر ڈیلز',
    subtitle: 'A Mehfil of Flavors — Fresh Garlic Mayo & Pickles',
    priceTag: 'From Rs. 550/-',
    category: 'deal',
    tagline: '2 Chicken Shawarmas + Drink for Rs. 550 | Platter for Rs. 600',
    highlights: [
      'Shawarma Deal: 2x Chicken Shawarmas + 500ml Drink (Rs. 550)',
      'Shawarma Platter: Loaded Platter + Garlic Sauce + 500ml Drink (Rs. 600)',
      'Chilled Lemon Soda Masala: Only Rs. 120'
    ],
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },
  {
    id: 'poster-vintage-menu',
    title: 'Chai Mehfil Heritage Menu Board',
    titleUrdu: 'چائے محفل مکمل مینو کارڈ',
    subtitle: 'Opposite Alrehman Garden Phase 2, Lahore • 0321-9597119',
    priceTag: 'Full Card',
    category: 'menu_board',
    tagline: 'Chai Specialist • Burgers • Pizzas • Paratha Rolls • Italian Corner',
    highlights: [
      'Chai Specialist & Matka Chai starting at Rs. 170',
      'Stuffed & Crust Pizzas starting at Rs. 400',
      'Italian Doner, Polo Chicken & Dynamite Chicken',
      'Mint Margarita, Lemonades & Specialty Brews'
    ],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape'
  }
];

// All Menu Items extracted from Official Pictures & Flyers
export const menuItemsData: MenuItem[] = [
  // ==========================================
  // 1. MEGA DEALS & SPECIAL COMBOS
  // ==========================================
  {
    id: 'deal-washi',
    name: 'Washi Mega Deal',
    nameUrdu: 'واشی میگا ڈیل',
    category: 'deals',
    price: 2300,
    description: 'Small Pizza + Zinger Burger + Grill Burger + Patty Burger + Grill Paratha + 6 Hot Shots + 2 Mint Margarita drinks.',
    descriptionUrdu: '1 سمال پیزا + 1 زنگر برگر + 1 گرل برگر + 1 پیٹی برگر + 1 گرل پراٹھا + 6 ہاٹ شاٹس + 2 منٹ مارگریٹا۔',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    badge: '👑 Mega Super Deal',
    isSignature: true,
    isDeal: true,
    dealInclusions: ['Small Pizza', 'Zinger Burger', 'Grill Burger', 'Patty Burger', 'Grill Paratha', '6 Hot Shots', '2 Mint Margarita'],
    preparationTime: '15-18 Mins'
  },
  {
    id: 'deal-mauj-mela',
    name: 'Mauj Mela Deal',
    nameUrdu: 'موج میلہ ڈیل',
    category: 'deals',
    price: 2350,
    description: 'Half Roasted Saji + 14" Large Pizza + Crispy Fries + 1.5 Liter Drink.',
    descriptionUrdu: 'ہاف سجی + لارج پیزا 14 انچ + کرسپی فرائز + 1.5 لٹر کولڈ ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    badge: '🔥 Family Bestseller',
    isDeal: true,
    dealInclusions: ['Half Saji', 'Large Pizza 14"', 'Jumbo Fries', '1.5L Drink'],
    preparationTime: '15 Mins'
  },
  {
    id: 'deal-double-fun',
    name: 'Double Fun Deal',
    nameUrdu: 'ڈبل فن ڈیل',
    category: 'deals',
    price: 1200,
    description: 'Quarter Saji + 2 Zinger Burgers + 1 Liter Cold Drink Bottle.',
    descriptionUrdu: 'کوارٹر سجی + 2 زنگر برگر + 1 لٹر کولڈ ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: '⚡ Double Maza',
    isDeal: true,
    dealInclusions: ['Quarter Saji', '2x Zinger Burgers', '1L Cold Drink'],
    preparationTime: '12 Mins'
  },
  {
    id: 'deal-2medium-pizza',
    name: '2 Medium Pizza Deal',
    nameUrdu: '2 میڈیم پیزا ڈیل',
    category: 'deals',
    price: 1500,
    description: '2 Medium 11-inch Pizzas (Any Flavors) + 1 Liter Cold Drink Bottle.',
    descriptionUrdu: '2 عدد میڈیم پیزا (کوئی بھی فلیور) بمع 1 لٹر کولڈ ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    badge: '🍕 Best Pizza Value',
    isDeal: true,
    dealInclusions: ['2x Medium 11" Pizzas', '1L Cold Drink'],
    preparationTime: '15 Mins'
  },
  {
    id: 'deal-shawarma-combo',
    name: 'Shawarma Deal (2 Pcs)',
    nameUrdu: 'شوارما ڈیل',
    category: 'deals',
    price: 550,
    description: '2 Loaded Chicken Shawarmas + 500ml Cold Drink.',
    descriptionUrdu: '2 چکن شوارما مع 500 ملی لیٹر ٹھنڈی بوتل۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    badge: '⚡ Budget Special',
    isDeal: true,
    dealInclusions: ['2x Chicken Shawarmas', '500ml Soft Drink'],
    preparationTime: '8 Mins'
  },
  {
    id: 'deal-shawarma-platter-combo',
    name: 'Shawarma Platter Deal',
    nameUrdu: 'شوارما پلیٹر ڈیل',
    category: 'deals',
    price: 600,
    description: 'Loaded Shawarma Platter with Shredded Chicken, Pickles, Pita & Tahini + 500ml Drink.',
    descriptionUrdu: 'اسپیشل شوارما پلیٹر مع ساس، اچار، پیٹا بریڈ اور 500 ملی لیٹر ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80',
    badge: 'Arabian Style',
    isDeal: true,
    dealInclusions: ['Loaded Shawarma Platter', 'Tahini & Garlic Sauces', '500ml Soft Drink'],
    preparationTime: '10 Mins'
  },
  {
    id: 'deal-1',
    name: 'Deal 1 (Single Zinger)',
    nameUrdu: 'ڈیل 1 (سنگل زنگر)',
    category: 'deals',
    price: 400,
    description: '1 Zinger Burger + Crispy Fries + 345ml Cold Drink.',
    descriptionUrdu: '1 زنگر برگر + فرائز + 345 ملی لیٹر ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    isDeal: true,
    preparationTime: '8 Mins'
  },
  {
    id: 'deal-2',
    name: 'Deal 2 (3 Zingers & 1L Drink)',
    nameUrdu: 'ڈیل 2 (3 زنگر برگر)',
    category: 'deals',
    price: 1100,
    description: '3 Zinger Burgers + Masala Fries + 1 Liter Cold Drink.',
    descriptionUrdu: '3 زنگر برگر + مصالحہ فرائز + 1 لٹر ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    isDeal: true,
    preparationTime: '10 Mins'
  },
  {
    id: 'deal-3',
    name: 'Deal 3 (Grill Burger & Paratha Roll)',
    nameUrdu: 'ڈیل 3 (گرل برگر و پراٹھا)',
    category: 'deals',
    price: 800,
    description: '1 Grill Burger + 1 Grill Paratha Roll + 345ml Cold Drink.',
    descriptionUrdu: '1 گرل برگر + 1 گرل پراٹھا رول + 345 ملی لیٹر بوتل۔',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    isDeal: true,
    preparationTime: '10 Mins'
  },
  {
    id: 'deal-4',
    name: 'Deal 4 (2 Italian Doners)',
    nameUrdu: 'ڈیل 4 (2 اٹالین ڈونر)',
    category: 'deals',
    price: 999,
    description: '2 Italian Doners with White & Red Sauces + 345ml Drink.',
    descriptionUrdu: '2 عدد اٹالین ڈونر مع اسپیشل ساسز + 345 ملی لیٹر ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    isDeal: true,
    preparationTime: '10 Mins'
  },
  {
    id: 'deal-student',
    name: 'Student Special Deal',
    nameUrdu: 'اسٹوڈنٹ اسپیشل ڈیل',
    category: 'deals',
    price: 1900,
    description: '2 Grill Burgers + 2 Zinger Burgers + 1 Club Sandwich + 1 Liter Drink.',
    descriptionUrdu: '2 گرل برگر + 2 زنگر برگر + 1 کلب سینڈوچ + 1 لٹر ڈرنک۔',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    badge: '🎓 Student Favorite',
    isDeal: true,
    preparationTime: '12 Mins'
  },
  {
    id: 'deal-economy',
    name: 'Economy Meal Deal',
    nameUrdu: 'اکانومی ڈیل',
    category: 'deals',
    price: 1250,
    description: '1 Zinger Burger + 1 Patty Burger + 1 Small Pizza + Small Fries + 1L Drink.',
    descriptionUrdu: '1 زنگر برگر + 1 پیٹی برگر + 1 سمال پیزا + فرائز + 1 لٹر بوتل۔',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isDeal: true,
    preparationTime: '12 Mins'
  },
  {
    id: 'deal-family-grand',
    name: 'Grand Family Feast Deal',
    nameUrdu: 'گرینڈ فیملی ڈیل',
    category: 'deals',
    price: 3599,
    description: '14" Large Pizza + 12 Hot Shots + 5 Zinger Burgers + 1.5 Liter Drink.',
    descriptionUrdu: '1 عدد لارج پیزا + 12 ہاٹ شاٹس + 5 زنگر برگر + 1.5 لٹر بوتل۔',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    badge: '👨‍👩‍👧‍👦 Jumbo Feast',
    isDeal: true,
    preparationTime: '18 Mins'
  },

  // ==========================================
  // 2. CHAI SPECIALIST & HOT BREWS
  // ==========================================
  {
    id: 'c-doodh-pati',
    name: 'Special Doodh Pati',
    nameUrdu: 'خاص کڑک دودھ پتی',
    category: 'chai',
    price: 170,
    description: 'Pure thick buffalo milk slow-simmered with top quality tea leaves and cracked green cardamom.',
    descriptionUrdu: 'خالص گاڑھے دودھ، چھوٹی الائچی اور اعلیٰ قسم کی پتی کا کڑک دم۔',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    badge: 'Mehfil Classic',
    isSignature: true,
    preparationTime: '5 Mins'
  },
  {
    id: 'c-karak-chai',
    name: 'Karak Chai',
    nameUrdu: 'کڑک کڑک چائے',
    category: 'chai',
    price: 170,
    description: 'Strong, rich, and intensely aromatic tea brewed to perfection for true tea connoisseurs.',
    descriptionUrdu: 'تیز پتی اور بھرپور ذائقے والی کڑک چائے۔',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    preparationTime: '5 Mins'
  },
  {
    id: 'c-matka-kulhad',
    name: 'Tandoori Matka / Kulhad Chai',
    nameUrdu: 'تندوری مٹکا چائے',
    category: 'chai',
    price: 250,
    description: 'Piping hot spiced tea poured into a red-hot clay cup fresh from live tandoor embers.',
    descriptionUrdu: 'دہکتے کوئلوں میں پکے مٹی کے مٹکے میں دھوئیں دار خوشبودار چائے۔',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    badge: 'Smoky Charcoal',
    isSignature: true,
    preparationTime: '7 Mins'
  },
  {
    id: 'c-kashmiri-chai',
    name: 'Shahi Kashmiri Gulabi Chai',
    nameUrdu: 'شاہی کشمیری گلابی چائے',
    category: 'chai',
    price: 200,
    description: 'Authentic pink tea infused with crushed cardamom, sea salt, garnished with slivered pistachios and almonds.',
    descriptionUrdu: 'پستہ، بادام اور خوشبودار مصالحہ جات سے سجی روایتی گلابی کشمیری چائے۔',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80',
    badge: 'Royal Blend',
    preparationTime: '6 Mins'
  },
  {
    id: 'c-masala-chai',
    name: 'Special Masala Chai',
    nameUrdu: 'اسپیشل مصالحہ چائے',
    category: 'chai',
    price: 200,
    description: 'Brewed with crushed cinnamon, clove, ginger, black pepper, and cardamom for a warming spiced aroma.',
    descriptionUrdu: 'دار چینی، لونگ، ادرک اور الائچی کے عرق سے تیار کردہ خوشبودار مصالحہ چائے۔',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    preparationTime: '5 Mins'
  },
  {
    id: 'c-elaichi-chai',
    name: 'Elaichi Chai',
    nameUrdu: 'الائچی چائے',
    category: 'chai',
    price: 200,
    description: 'Fresh tea infused with aromatic crushed green cardamoms.',
    descriptionUrdu: 'چھوٹی سبز الائچی کی قدرتی خوشبو سے مہکتی چائے۔',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    preparationTime: '5 Mins'
  },
  {
    id: 'c-adrak-chai',
    name: 'Adrak Chai (Ginger Tea)',
    nameUrdu: 'ادرک چائے',
    category: 'chai',
    price: 200,
    description: 'Fresh crushed organic ginger simmered in milk tea for a rejuvenating kick.',
    descriptionUrdu: 'تازہ پسی ہوئی ادرک سے تیار کردہ ہاضمہ دار چائے۔',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    preparationTime: '5 Mins'
  },
  {
    id: 'c-green-tea',
    name: 'Green Tea / Peshawari Qahwa',
    nameUrdu: 'سبز قہوہ / گرین ٹی',
    category: 'chai',
    price: 200,
    description: 'Fresh green tea leaves steeped with cardamom, lemon hint, and served hot.',
    descriptionUrdu: 'سبز پتی اور الائچی سے تیار کردہ ہلکا اور ہاضمہ دار قہوہ۔',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80',
    preparationTime: '4 Mins'
  },
  {
    id: 'c-social-mehfil-chai',
    name: 'Social Mehfil Special Chai',
    nameUrdu: 'سوشل محفل اسپیشل چائے',
    category: 'chai',
    price: 300,
    description: 'Chef signature saffron and pistachio milk tea served in a royal double portion cup.',
    descriptionUrdu: 'زعفران، پستہ اور بالائی کے ساتھ تیار کردہ اسپیشل محفل چائے۔',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Signature',
    preparationTime: '6 Mins'
  },

  // ==========================================
  // 3. PIZZAS (Stuff Crust, Malai Boti, Fajita, etc.)
  // ==========================================
  {
    id: 'p-stuff-crust',
    name: 'Stuff Crust Pizza',
    nameUrdu: 'اسٹف کرسٹ پیزا',
    category: 'pizza',
    price: 800,
    description: 'Oozing cheese-filled outer crust with spicy chicken chunks, olives, bell peppers, and special herb sauce.',
    descriptionUrdu: 'کناروں میں پگھلی ہوئی پنیر سے بھرا ہوا ذائقے دار پیزا۔',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    badge: 'Cheese Loaded Crust',
    sizes: [
      { size: 'Small (8")', price: 500 },
      { size: 'Medium (11")', price: 800 },
      { size: 'Large (14")', price: 1300 }
    ],
    preparationTime: '15 Mins'
  },
  {
    id: 'p-malai-boti',
    name: 'Malai Boti Pizza',
    nameUrdu: 'ملائی بوٹی پیزا',
    category: 'pizza',
    price: 850,
    description: 'Tender creamy grilled malai boti chicken chunks, white sauce, onions, and rich mozzarella cheese.',
    descriptionUrdu: 'نرم ملائی بوٹی چکن اور کریمی ساس کے ساتھ تیار کردہ لاجواب پیزا۔',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small (8")', price: 550 },
      { size: 'Medium (11")', price: 850 },
      { size: 'Large (14")', price: 1250 }
    ],
    preparationTime: '15 Mins'
  },
  {
    id: 'p-chicken-fajita',
    name: 'Chicken Fajita Pizza',
    nameUrdu: 'چکن فجیتا پیزا',
    category: 'pizza',
    price: 800,
    description: 'Mexican style spicy fajita chicken, sweet bell peppers, onions, and spicy tomato marinara.',
    descriptionUrdu: 'فجیتا چکن اور شملہ مرچ کے ساتھ کلاسیک پیزا۔',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small (8")', price: 400 },
      { size: 'Medium (11")', price: 800 },
      { size: 'Large (14")', price: 1000 }
    ],
    preparationTime: '15 Mins'
  },
  {
    id: 'p-chicken-mushroom',
    name: 'Chicken Mushroom Pizza',
    nameUrdu: 'چکن مشروم پیزا',
    category: 'pizza',
    price: 900,
    description: 'Smoked chicken cubes, fresh sliced button mushrooms, black olives, and Italian herbs.',
    descriptionUrdu: 'چکن، تازہ مشروم اور زیتون کے ساتھ لذیذ پیزا۔',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small (8")', price: 450 },
      { size: 'Medium (11")', price: 900 },
      { size: 'Large (14")', price: 1250 }
    ],
    preparationTime: '15 Mins'
  },
  {
    id: 'p-four-flavour',
    name: 'Four Flavour Supreme Pizza',
    nameUrdu: 'فور فلیور سپریم پیزا',
    category: 'pizza',
    price: 1050,
    description: '4 different gourmet quarters in 1 pizza: Malai Boti, Fajita, Tikka, and Sausage.',
    descriptionUrdu: 'ایک پیزا میں 4 شاندار ذائقے: ملائی بوٹی، فجیتا، تکہ اور ساسیج۔',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    badge: '4 Flavours in 1',
    sizes: [
      { size: 'Small (8")', price: 750 },
      { size: 'Medium (11")', price: 1050 },
      { size: 'Large (14")', price: 1450 }
    ],
    preparationTime: '18 Mins'
  },
  {
    id: 'p-kabab-crust',
    name: 'Kabab Crust Pizza',
    nameUrdu: 'کباب کرسٹ پیزا',
    category: 'pizza',
    price: 850,
    description: 'Filled with juicy seekh kabab wrapped into the pizza edge with melted cheese.',
    descriptionUrdu: 'کناروں میں نرم سیخ کباب اور پگھلی ہوئی چیز سے بھرا ہوا۔',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small (8")', price: 500 },
      { size: 'Medium (11")', price: 850 },
      { size: 'Large (14")', price: 1350 }
    ],
    preparationTime: '16 Mins'
  },

  // ==========================================
  // 4. BURGERS & SANDWICHES
  // ==========================================
  {
    id: 'b-zinger-burger',
    name: 'Crispy Zinger Burger',
    nameUrdu: 'کرسپی زنگر برگر',
    category: 'burgers',
    price: 300,
    description: 'Whole crispy fried chicken fillet topped with fresh lettuce and signature spicy garlic mayo.',
    descriptionUrdu: 'کرسپی فرائیڈ چکن فلے، تازہ سلاد پتہ اور اسپیشل مایو۔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Bestseller',
    preparationTime: '8 Mins'
  },
  {
    id: 'b-patty-burger',
    name: 'Classic Patty Burger',
    nameUrdu: 'کلاسک پیٹی برگر',
    category: 'burgers',
    price: 200,
    description: 'Golden shallow fried spiced chicken patty with crisp onions, cucumber slices, and burger sauce.',
    descriptionUrdu: 'چکن پیٹی، پیاز کے قتلے اور مزیدار ساس۔',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    preparationTime: '7 Mins'
  },
  {
    id: 'b-grill-burger',
    name: 'Flame Grill Burger',
    nameUrdu: 'فلیم گرل برگر',
    category: 'burgers',
    price: 400,
    description: 'Charcoal grilled smokey chicken breast patty with melted cheese slice and BBQ glaze.',
    descriptionUrdu: 'کوئلوں پر گرل کیا ہوا اسموکی چکن اور پگھلی ہوئی چیز سلائس۔',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    badge: 'Smoked BBQ',
    preparationTime: '10 Mins'
  },
  {
    id: 'b-mehfil-special-burger',
    name: 'Mehfil Special Monster Burger',
    nameUrdu: 'محفل اسپیشل مانسٹر برگر',
    category: 'burgers',
    price: 600,
    description: 'Double layer Zinger + Grilled patty with double cheddar melt, fried egg, and bacon glaze.',
    descriptionUrdu: 'ڈبل زنگر اور گرل پیٹی، دوہری چیز اور انڈے کے ساتھ اسپیشل بڑا برگر۔',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    badge: 'Double Loaded',
    preparationTime: '12 Mins'
  },
  {
    id: 's-club-sandwich',
    name: 'Tri-Deck Club Sandwich',
    nameUrdu: 'ٹرپل ڈیک کلب سینڈوچ',
    category: 'sandwiches',
    price: 450,
    description: 'Three toasted bread layers stuffed with shredded chicken, fried egg, cheese, lettuce, and cucumber, served with fries.',
    descriptionUrdu: 'چکن، انڈہ، چیز اور سلاد کے ساتھ تین تہوں والا لذیذ سینڈوچ۔',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    preparationTime: '10 Mins'
  },
  {
    id: 's-grill-sandwich',
    name: 'Cheesy Grill Sandwich',
    nameUrdu: 'چیزی گرل سینڈوچ',
    category: 'sandwiches',
    price: 500,
    description: 'Pressed and toasted with seasoned chicken tikka, sweet corn, mozzarella, and herb butter.',
    descriptionUrdu: 'تکہ چکن، پگھلی ہوئی پنیر اور کارن سے بھرا گرل سینڈوچ۔',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80',
    preparationTime: '10 Mins'
  },
  {
    id: 's-mehfil-special-sandwich',
    name: 'Mehfil Special Supreme Sandwich',
    nameUrdu: 'محفل اسپیشل سپریم سینڈوچ',
    category: 'sandwiches',
    price: 600,
    description: 'Smoked chicken chunks, salami, double cheese pull, and signature spicy dip.',
    descriptionUrdu: 'اسموکڈ چکن اور دوہری چیز کے ساتھ شاہی سینڈوچ۔',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    preparationTime: '12 Mins'
  },

  // ==========================================
  // 5. PARATHA ROLLS & STUFFED PARATHAS
  // ==========================================
  {
    id: 'pr-grill-paratha-roll',
    name: 'Grill Paratha Roll',
    nameUrdu: 'گرل چکن پراٹھا رول',
    category: 'parathas',
    price: 350,
    description: 'Crispy flaky lacha paratha rolled with smokey grilled chicken, sliced onions, and garlic mayo chutney.',
    descriptionUrdu: 'کرسپی لچھا پراٹھا میں لپٹا گرل چکن، پیاز اور چٹنی۔',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular Roll',
    preparationTime: '8 Mins'
  },
  {
    id: 'pr-zinger-paratha-roll',
    name: 'Zinger Paratha Roll',
    nameUrdu: 'زنگر پراٹھا رول',
    category: 'parathas',
    price: 350,
    description: 'Crisp fried zinger strips wrapped in golden butter paratha with spicy thousand island sauce.',
    descriptionUrdu: 'کرسپی زنگر سٹرپس اور دیسی مکھن والے پراٹھے کا زبردست رول۔',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    preparationTime: '8 Mins'
  },
  {
    id: 'pr-kabab-paratha-roll',
    name: 'Kabab Paratha Roll',
    nameUrdu: 'کباب پراٹھا رول',
    category: 'parathas',
    price: 300,
    description: 'Tender beef/chicken seekh kabab rolled with mint raita and pickled onion rings.',
    descriptionUrdu: 'نرم سیخ کباب، پودینہ رائتہ اور پیاز کے ساتھ گرما گرم رول۔',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    preparationTime: '7 Mins'
  },
  {
    id: 'pr-malai-boti-roll',
    name: 'Malai Boti Paratha Roll',
    nameUrdu: 'ملائی بوٹی پراٹھا رول',
    category: 'parathas',
    price: 350,
    description: 'Creamy BBQ malai boti rolled in flaky paratha with subtle green chutney.',
    descriptionUrdu: 'باربی کیو ملائی بوٹی اور کریمی ساس کے ساتھ پراٹھا رول۔',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    preparationTime: '8 Mins'
  },
  {
    id: 'pr-smoked-cheese-paratha',
    name: 'Smoked Chicken Cheese Paratha',
    nameUrdu: 'اسموکڈ چکن چیز پراٹھا',
    category: 'parathas',
    price: 450,
    description: 'Loaded with shredded BBQ chicken, melted mozzarella, and green chilli mint chutney.',
    descriptionUrdu: 'باربی کیو چکن اور بھرپور پگھلی ہوئی پنیر سے بھرا خستہ پراٹھا۔',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Favorite',
    preparationTime: '10 Mins'
  },
  {
    id: 'pr-nutella-paratha',
    name: 'Nutella Banana Paratha',
    nameUrdu: 'نیوٹیلا بنانا میٹھا پراٹھا',
    category: 'parathas',
    price: 460,
    description: 'Crispy hot paratha filled with warm hazelnut Nutella chocolate and sliced bananas.',
    descriptionUrdu: 'گرم خستہ پراٹھا، نیوٹیلا چاکلیٹ اور کیلے۔ چائے کے ساتھ بہترین میٹھا۔',
    image: 'https://images.unsplash.com/photo-1588701979313-9844874251df?auto=format&fit=crop&w=600&q=80',
    badge: 'Sweet Delight',
    preparationTime: '8 Mins'
  },

  // ==========================================
  // 6. SHAWARMA & ARABIC CORNER
  // ==========================================
  {
    id: 'sh-classic',
    name: 'Classic Chicken Shawarma',
    nameUrdu: 'کلاسیک چکن شوارما',
    category: 'shawarma',
    price: 250,
    description: 'Thinly shaved spiced chicken from the vertical rotisserie with homemade garlic toum sauce and pickles.',
    descriptionUrdu: 'شوارما چکن، عربی گارلک ساس اور اچار کے ساتھ۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    preparationTime: '6 Mins'
  },
  {
    id: 'sh-platter',
    name: 'Special Shawarma Platter',
    nameUrdu: 'اسپیشل شوارما پلیٹر',
    category: 'shawarma',
    price: 500,
    description: 'Generous platter of sliced rotisserie chicken, 2 warm pita breads, pickled cucumbers, hummus, and garlic dip.',
    descriptionUrdu: 'شوارما چکن کا بڑا پلیٹر، پیٹا بریڈ، حمص اور لہسن ساس۔',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80',
    badge: 'Arabic Special',
    preparationTime: '10 Mins'
  },
  {
    id: 'sh-mehfil-wrap',
    name: 'Chai Mehfil Special Wrap',
    nameUrdu: 'چائے محفل اسپیشل ریپ',
    category: 'shawarma',
    price: 600,
    description: 'Jumbo tortilla rolled with grilled chicken tenders, crispy fries, cheese melt, and chipotle sauce.',
    descriptionUrdu: 'گرلڈ چکن، فرائز اور پگھلی ہوئی پنیر کے ساتھ جمبو ریپ۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    preparationTime: '10 Mins'
  },
  {
    id: 'sh-falafel-wrap',
    name: 'Crispy Falafel Wrap',
    nameUrdu: 'فلافل ریپ (عربی)',
    category: 'shawarma',
    price: 450,
    description: 'Golden fried chickpea falafels with tahini sauce, tomato, mint, and pickled turnip.',
    descriptionUrdu: 'کرسپی فلافل اور طحینہ ساس کے ساتھ عربی ریپ۔',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    preparationTime: '8 Mins'
  },
  {
    id: 'sh-hummus-plate',
    name: 'Traditional Hummus with Olive Oil',
    nameUrdu: 'حمص زیتون کے تیل کے ساتھ',
    category: 'shawarma',
    price: 600,
    description: 'Velvety smooth chickpea dip drizzled with extra virgin olive oil and paprika, served with warm pita.',
    descriptionUrdu: 'زیتون کے تیل سے سجا روایتی ہموار حمص اور پیٹا بریڈ۔',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Half Plate', price: 600 },
      { size: 'Full Plate', price: 1200 }
    ],
    preparationTime: '5 Mins'
  },

  // ==========================================
  // 7. SNACKS & SAVORY (Fries, Samosas, Hot Shots)
  // ==========================================
  {
    id: 'sn-french-fries',
    name: 'Crispy French Fries',
    nameUrdu: 'کرسپی فرینچ فرائز',
    category: 'snacks',
    price: 200,
    description: 'Golden cut potatoes salted and fried to crisp perfection.',
    descriptionUrdu: 'کرسپی اور سنہرے تلے ہوئے آلو کے فرائز۔',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small', price: 150 },
      { size: 'Medium', price: 200 },
      { size: 'Large', price: 300 }
    ],
    preparationTime: '5 Mins'
  },
  {
    id: 'sn-masala-fries',
    name: 'Mehfil Masala Fries',
    nameUrdu: 'محفل مصالحہ فرائز',
    category: 'snacks',
    price: 300,
    description: 'Tossed in special secret chaat masala with a tangy kick.',
    descriptionUrdu: 'چٹپٹے مصالحے میں ڈوبے ہوئے مصالحہ فرائز۔',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: 'Small', price: 200 },
      { size: 'Medium', price: 300 },
      { size: 'Large', price: 400 }
    ],
    preparationTime: '5 Mins'
  },
  {
    id: 'sn-loaded-fries',
    name: 'Loaded Cheese & Chicken Fries',
    nameUrdu: 'لوڈڈ چیز و چکن فرائز',
    category: 'snacks',
    price: 600,
    description: 'Hot fries smothered in cheddar cheese sauce, jalapeños, crispy chicken chunks, and mayo drizzle.',
    descriptionUrdu: 'پگھلی ہوئی پنیر، چکن کے تکڑے اور ہلاپینو سے بھرپور فرائز۔',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    badge: 'Monster Cheese Pull',
    sizes: [
      { size: 'Small', price: 300 },
      { size: 'Medium', price: 600 },
      { size: 'Large', price: 800 }
    ],
    preparationTime: '8 Mins'
  },
  {
    id: 'sn-samosa',
    name: 'Crispy Punjabi Samosas (6 Pcs)',
    nameUrdu: 'کرسپی سموسے (6 عدد)',
    category: 'snacks',
    price: 300,
    description: 'Flaky pastry pockets stuffed with spiced potatoes, cumin seeds, green peas, served with sweet and spicy chutneys.',
    descriptionUrdu: 'آلو، مٹر اور زیرے سے بھرے ہوئے گرما گرم خستہ سموسے۔',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: '6 Pieces', price: 300 },
      { size: '12 Pieces', price: 600 }
    ],
    preparationTime: '5 Mins'
  },
  {
    id: 'sn-hot-shots',
    name: 'Crispy Hot Shots (6 Pcs)',
    nameUrdu: 'ہاٹ شاٹس چکن (6 عدد)',
    category: 'snacks',
    price: 600,
    description: 'Bite-sized chicken nuggets with crunchy spicy crust, served with garlic dip.',
    descriptionUrdu: 'کرسپی مسالے دار چکن کے ہاٹ شاٹس۔',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    sizes: [
      { size: '6 Pieces', price: 600 },
      { size: '12 Pieces', price: 800 }
    ],
    preparationTime: '7 Mins'
  },
  {
    id: 'sn-pizza-bar',
    name: 'Cheesy Pizza Bar',
    nameUrdu: 'چیزی پیزا بار',
    category: 'snacks',
    price: 250,
    description: 'Crispy baked baguette bread bar topped with pizza sauce, shredded chicken, and mozzarella melt.',
    descriptionUrdu: 'پیزا ساس اور چیز سے پکا ہوا کرسپی بریڈ بار۔',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    preparationTime: '6 Mins'
  },

  // ==========================================
  // 8. ITALIAN & CHINESE CORNER
  // ==========================================
  {
    id: 'it-italian-doner',
    name: 'Italian Doner Kebab',
    nameUrdu: 'اٹالین ڈونر کباب',
    category: 'italian_chinese',
    price: 650,
    description: 'Tender seasoned chicken gyro wrapped in artisan Italian flatbread with signature white garlic and spicy red sauces.',
    descriptionUrdu: 'اٹالین بریڈ میں لپٹا چکن ڈونر مع وائٹ و ریڈ ساس۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Choice',
    preparationTime: '10 Mins'
  },
  {
    id: 'it-mehfil-doner',
    name: 'Mehfil Special Doner',
    nameUrdu: 'محفل اسپیشل ڈونر',
    category: 'italian_chinese',
    price: 750,
    description: 'Loaded with extra chicken meat, mozzarella cheese melt, roasted capsicum, and herbs.',
    descriptionUrdu: 'اضافی چکن، پگھلی ہوئی پنیر اور خوشبودار مصالحوں کے ساتھ شاہی ڈونر۔',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    preparationTime: '12 Mins'
  },
  {
    id: 'it-polo-chicken',
    name: 'Polo Chicken (White & Red Sauce)',
    nameUrdu: 'پولو چکن بمع ساسز',
    category: 'italian_chinese',
    price: 999,
    description: 'Pan-seared tender chicken breast served with velvety Italian white sauce, spicy red sauce, and buttered vegetables.',
    descriptionUrdu: 'سفید و سرخ ساس کے ساتھ تیار کردہ لذیذ پولو چکن۔',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80',
    badge: 'Italian Gourmet',
    preparationTime: '15 Mins'
  },
  {
    id: 'it-dynamite-chicken',
    name: 'Dynamite Chicken Bites',
    nameUrdu: 'ڈائنامائٹ چکن باؤل',
    category: 'italian_chinese',
    price: 800,
    description: 'Crispy golden fried chicken bites tossed in rich creamy sweet-spicy dynamite mayo sauce.',
    descriptionUrdu: 'کرسپی چکن اور کریمی ڈائنامائٹ ساس کا زبردست ملاپ۔',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    badge: 'Fiery & Creamy',
    sizes: [
      { size: 'Half Bowl', price: 800 },
      { size: 'Full Bowl', price: 1400 }
    ],
    preparationTime: '10 Mins'
  },
  {
    id: 'ch-shashlik-rice',
    name: 'Chicken Shashlik with Fried Rice',
    nameUrdu: 'چکن شاشلک مع فرائیڈ رائس',
    category: 'italian_chinese',
    price: 550,
    description: 'Tender chicken cubes with onions and bell peppers in tangy sweet-sour gravy, served over aromatic egg fried rice.',
    descriptionUrdu: 'کھٹی میٹھی گریوی، شملہ مرچ اور ایگ فرائیڈ رائس کے ساتھ۔',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    preparationTime: '12 Mins'
  },
  {
    id: 'ch-black-pepper-rice',
    name: 'Chicken Black Pepper with Rice',
    nameUrdu: 'چکن بلیک پیپر مع رائس',
    category: 'italian_chinese',
    price: 550,
    description: 'Wok-tossed chicken in cracked black peppercorn sauce served with fragrant vegetable rice.',
    descriptionUrdu: 'کالی مرچ ساس اور سبزیوں والے چاولوں کے ساتھ۔',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    preparationTime: '12 Mins'
  },
  {
    id: 'ch-chowmein',
    name: 'Chicken Vegetable Chowmein',
    nameUrdu: 'چکن ویجیٹیبل چاؤمین',
    category: 'italian_chinese',
    price: 650,
    description: 'Stir-fried egg noodles with shredded chicken, crunchy cabbage, carrots, and savory soy sauce.',
    descriptionUrdu: 'کرسپی سبزیوں، چکن اور نوڈلز سے بنی لذت دار چاؤمین۔',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    preparationTime: '10 Mins'
  },
  {
    id: 'it-alfredo-pasta',
    name: 'Creamy Chicken Alfredo Pasta',
    nameUrdu: 'کریمی الفریڈو پاستا',
    category: 'italian_chinese',
    price: 700,
    description: 'Fettuccine or penne pasta coated in rich parmesan garlic cream sauce with grilled chicken breast and herbs.',
    descriptionUrdu: 'پامیزان چیز، سفید مکھن ساس اور گرلڈ چکن سے تیار کردہ پاستا۔',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
    preparationTime: '12 Mins'
  },

  // ==========================================
  // 9. BEVERAGES & DESSERTS
  // ==========================================
  {
    id: 'bv-mint-margarita',
    name: 'Chilled Mint Margarita',
    nameUrdu: 'منٹ مارگریٹا',
    category: 'beverages_desserts',
    price: 399,
    description: 'Crushed ice blended with fresh garden mint, lemon juice, black salt, and bubbling soda fizz.',
    descriptionUrdu: 'تازہ پودینہ، لیموں اور ٹھنڈے سوڈے کا فرحت بخش شربت۔',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    badge: 'Customer Favorite',
    preparationTime: '3 Mins'
  },
  {
    id: 'bv-lemon-soda',
    name: 'Masala Lemon Soda',
    nameUrdu: 'لیموں مصالحہ سوڈا',
    category: 'beverages_desserts',
    price: 120,
    description: 'Freshly squeezed lemon with rock salt and fizzy chilled soda.',
    descriptionUrdu: 'تازہ لیموں، کالا نمک اور ٹھنڈا سوڈا۔',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    badge: 'Super Chilled (Rs. 120)',
    preparationTime: '2 Mins'
  },
  {
    id: 'bv-lemonade',
    name: 'Fresh Lemonade',
    nameUrdu: 'تازہ لیمونیڈ',
    category: 'beverages_desserts',
    price: 300,
    description: 'Sweet and tangy fresh squeezed lemonade over crushed ice.',
    descriptionUrdu: 'ٹھنڈا میٹھا لیموں کا رس۔',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    preparationTime: '3 Mins'
  },
  {
    id: 'bv-ice-latte',
    name: 'Iced Latte Coffee',
    nameUrdu: 'آئسڈ لاٹے کافی',
    category: 'beverages_desserts',
    price: 499,
    description: 'Chilled espresso poured over iced whole milk with sweet vanilla hint.',
    descriptionUrdu: 'ٹھنڈی کافی اور دودھ کا شاہی بلینڈ۔',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    preparationTime: '4 Mins'
  },
  {
    id: 'bv-mocca-coffee',
    name: 'Mocca Coffee',
    nameUrdu: 'موکا کافی',
    category: 'beverages_desserts',
    price: 499,
    description: 'Rich dark chocolate syrup blended with fresh espresso shot and steamed milk froth.',
    descriptionUrdu: 'چاکلیٹ اور کافی کا زبردست امتزاج۔',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    preparationTime: '4 Mins'
  },
  {
    id: 'bv-hazelnut-coffee',
    name: 'Hazelnut Coffee',
    nameUrdu: 'ہیزل نٹ کافی',
    category: 'beverages_desserts',
    price: 499,
    description: 'Aromatic roasted hazelnut infused rich coffee with a creamy foam crown.',
    descriptionUrdu: 'ہیزل نٹ کے شاندار ذائقے سے بھرپور کافی۔',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    preparationTime: '4 Mins'
  },
  {
    id: 'ds-gulab-jamun',
    name: 'Garam Gulab Jamun (2 Pcs)',
    nameUrdu: 'گرما گرم گلاب جامن',
    category: 'beverages_desserts',
    price: 200,
    description: 'Warm soft khoya dumplings soaked in fragrant cardamom rose sugar syrup.',
    descriptionUrdu: 'شیرہ میں ڈوبے ہوئے تازہ اور نرم گرما گرم گلاب جامن۔',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    badge: 'Chai Mehfil Sweet',
    preparationTime: '2 Mins'
  },
  {
    id: 'ds-brownie-icecream',
    name: 'Sizzling Brownie with Ice Cream',
    nameUrdu: 'براؤنی مع ونیلا آئس کریم',
    category: 'beverages_desserts',
    price: 550,
    description: 'Warm gooey Belgian chocolate brownie served with a scoop of vanilla ice cream and hot fudge sauce.',
    descriptionUrdu: 'گرم چاکلیٹ براؤنی، ٹھنڈی ونیلا آئس کریم اور گرم چاکلیٹ ساس۔',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80',
    badge: 'Decadent',
    preparationTime: '4 Mins'
  },
  {
    id: 'ds-icecream-scoop',
    name: 'Premium Ice Cream Scoop',
    nameUrdu: 'آئس کریم اسکوپ',
    category: 'beverages_desserts',
    price: 120,
    description: 'Rich creamy scoop available in Vanilla, Chocolate, Mango, or Kulfa flavors.',
    descriptionUrdu: 'ونیلا، چاکلیٹ، مینگو یا کلفہ فلیور۔',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    preparationTime: '2 Mins'
  }
];

export const qawwaliEventsData: QawwaliNightEvent[] = [
  {
    id: 'e1',
    title: 'Sufi Rang & Rang-e-Qawwali Mehfil',
    titleUrdu: 'صوفی رنگ و رنگِ قوالی محفل',
    artist: 'Ustad Shaukat Ali & Humnawa',
    genre: 'Qawwali Night',
    dayName: 'Every Friday Night',
    dateStr: 'This Friday (Kal Sham)',
    time: '9:30 PM – 2:00 AM',
    description: 'Experience timeless verses of Amir Khusro, Bulleh Shah & Nusrat Fateh Ali Khan under the glowing night sky.',
    status: 'Filling Fast',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    coverCharge: 0
  },
  {
    id: 'e2',
    title: 'Ghazal & Acoustic Mehfil-e-Khaas',
    titleUrdu: 'غزل اور دھیمی شامِ موسیقی',
    artist: 'Farhan Sabri & Classical Ensemble',
    genre: 'Sufi & Ghazal',
    dayName: 'Saturday Special',
    dateStr: 'This Saturday Night',
    time: '10:00 PM – 3:00 AM',
    description: 'Soulful harmonium, tabla rhythm and acoustic guitars paired with endless cups of piping hot Karak Doodh Patti.',
    status: 'Open for Booking',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    coverCharge: 0
  },
  {
    id: 'e3',
    title: 'Folk Fusion & Dholak Beats Night',
    titleUrdu: 'لوک دھنیں اور ڈھولک بیٹس نائٹ',
    artist: 'The Mystic Strings & Folk Troupe',
    genre: 'Folk Classical',
    dayName: 'Sunday Weekend Wrap',
    dateStr: 'Sunday Night Special',
    time: '9:00 PM – 1:30 AM',
    description: 'Traditional Punjabi and Sindhi folk poetry merged with contemporary rhythms to wrap up the weekend in high spirits.',
    status: 'Open for Booking',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    coverCharge: 0
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g-logo-emblem',
    title: 'Official Chai Mehfil Emblem & Calligraphy',
    titleUrdu: 'چائے محفل آفیشل لوگو و سلوگن',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    caption: 'Official golden calligraphy: "آپ کی محفل، آپ کی چائے اور دیسی باتیں"',
    isOfficialPoster: true
  },
  {
    id: 'g-washi-deal-poster',
    title: 'Official Poster: Washi Mega Deal (Rs. 2300)',
    titleUrdu: 'آفیشل پوسٹر: واشی میگا ڈیل 2300 روپے',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    caption: 'Full Taste, Full Maza! Small Pizza + Burgers + Paratha + Hot Shots + Margaritas.',
    isOfficialPoster: true
  },
  {
    id: 'g-pizza-poster',
    title: 'Official Poster: 2 Medium Pizzas for Rs. 1500',
    titleUrdu: 'آفیشل پوسٹر: 2 میڈیم پیزا بمع بوتل 1500 روپے',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    caption: 'Best Deal in Town: 2 Medium 11-inch Pizzas + 1L Drink for Rs. 1500.',
    isOfficialPoster: true
  },
  {
    id: 'g-green-menu',
    title: 'Official Green Board Menu (Opp. Alrehman Garden)',
    titleUrdu: 'آفیشل گرین بورڈ مینو (بالمقابل الرحمٰن گارڈن فیز 2)',
    category: 'posters',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    caption: 'Pizzas, Paratha Rolls, Beverages & Coffee Menu with phone 0323-9017091 / 0321-9597119.',
    isOfficialPoster: true
  },
  {
    id: 'g1',
    title: 'Rooftop Open Sky Ambience',
    titleUrdu: 'کھلے آسمان تلے دلکش شام',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Fairy lights twinkling above woven cane chairs and mosaic tables.'
  },
  {
    id: 'g2',
    title: 'Live Qawwal Performers',
    titleUrdu: 'لائیو قوالی اور صوفی فنکار',
    category: 'qawwali',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    caption: 'Harmonium and dholak creating pure magic on our illuminated wooden stage.'
  },
  {
    id: 'g3',
    title: 'Steaming Karak Chai in Glass',
    titleUrdu: 'گرما گرم دھواں دار کڑک چائے',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    caption: 'Freshly pulled doodh patti served boiling hot with rich creamy froth.'
  },
  {
    id: 'g4',
    title: 'Friends & Family Mehfil Moments',
    titleUrdu: 'دوستوں اور فیملی کی محفلیں',
    category: 'crowd',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    caption: 'Laughter, tea toasts, and heartfelt conversations under the night stars.'
  },
  {
    id: 'g5',
    title: 'Tandoori Matka Charcoal Oven',
    titleUrdu: 'تندوری مٹکے دہکتے کوئلوں میں',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    caption: 'Clay cups baked red hot in live embers for authentic earthiness.'
  },
  {
    id: 'g6',
    title: 'Gourmet Stuffed Cheese Paratha',
    titleUrdu: 'بھرپور چیزی اور کرسپی پراٹھا',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    caption: 'Crisped golden on heavy cast-iron tawa with melted cheese pull.'
  }
];

export const reviewsData = [
  {
    name: 'Daniyal Qureshi',
    city: 'Alrehman Garden Phase 2',
    rating: 5,
    comment: 'SubhanAllah! Washi Mega Deal is unbeatable in taste and value. The Matka Chai and live music make this the best cafe in Lahore.',
    date: 'Yesterday'
  },
  {
    name: 'Ayesha & Bilal',
    city: 'Main Sharaqpur Road',
    rating: 5,
    comment: 'The family section is very comfortable and peaceful. 2 Medium Pizza deal for 1500 is super fresh and delicious. Highly recommended!',
    date: '3 days ago'
  },
  {
    name: 'Shahzaib Malik',
    city: 'Chai Lover',
    rating: 5,
    comment: 'Best Doodh Patti and Grill Paratha Roll in town. Fast delivery on WhatsApp (0321-9597119). 10/10 experience!',
    date: 'Last week'
  }
];
