const recipes = [
  // South Indian 
  {
    id: 1,
    name: "Dosa",
    category: "south-indian",
    image: "./Images/dosa.webp",
    ingredients: ["Rice", "Lentils", "Salt", "Water"],
    preparation_time: "12-14 hours (including fermentation)",
    cooking_time: "5 minutes per dosa",
    best_season: "All seasons",
    instructions: [
      "Soak rice and lentils for 6 hours.",
      "Grind to a smooth batter and ferment overnight.",
      "Spread batter on a hot pan and cook until crispy.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    id: 2,
    name: "Idli",
    category: "south-indian",
    image: "./Images/idli.jpg",
    ingredients: ["Rice", "Urad Dal", "Salt", "Water"],
    preparation_time: "12-14 hours (including fermentation)",
    cooking_time: "10-15 minutes",
    best_season: "All seasons",
    instructions: [
      "Soak rice and urad dal separately for 6 hours.",
      "Grind to a smooth batter and ferment overnight.",
      "Pour batter into idli molds and steam for 10-15 minutes.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    "id": 3,
    "name": "Pongal",
    "category": "south-indian",
    "image": "./Images/pongal.jpg",
    "ingredients": ["Rice", "Moong Dal", "Ghee", "Pepper", "Cashews"],
    "preparation_time": "10 minutes",
    "cooking_time": "20 minutes",
    "best_season": "Winter (especially during Pongal festival)",
    "instructions": [
      "Roast moong dal until fragrant.",
      "Cook rice and dal together with water until soft.",
      "Temper with ghee, pepper, cashews, and curry leaves.",
      "Serve hot with coconut chutney."
    ]
  },
  {
    "id": 4,
    "name": "Upma",
    "category": "south-indian",
    "image": "./Images/upma.jpg",
    "ingredients": ["Semolina", "Vegetables", "Mustard Seeds", "Curry Leaves"],
    "preparation_time": "10 minutes",
    "cooking_time": "15 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Roast semolina until slightly golden.",
      "Sauté mustard seeds, curry leaves, and vegetables.",
      "Add water and slowly mix in the roasted semolina.",
      "Cook until thick and serve hot."
    ]
  },
  {
    "id": 5,
    "name": "Sambar",
    "category": "south-indian",
    "image": "./Images/sambar.jpg",
    "ingredients": ["Toor Dal", "Mixed Vegetables", "Sambar Powder", "Tamarind"],
    "preparation_time": "10 minutes",
    "cooking_time": "30 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Pressure cook toor dal until soft.",
      "Cook vegetables with tamarind extract and sambar powder.",
      "Add cooked dal and simmer for 10 minutes.",
      "Temper with mustard seeds and curry leaves."
    ]
  },
  {
    "id": 6,
    "name": "Vada",
    "category": "south-indian",
    "image": "/Images/vada.jpg",
    "ingredients": ["Urad Dal", "Onions", "Green Chilies", "Curry Leaves"],
    "preparation_time": "4 hours (soaking dal)",
    "cooking_time": "20 minutes",
    "best_season": "Monsoon and winter",
    "instructions": [
      "Soak urad dal for 4 hours and grind to a thick paste.",
      "Mix in onions, green chilies, and curry leaves.",
      "Shape into small rings and deep fry until golden brown.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    "id": 7,
    "name": "Uttapam",
    "category": "south-indian",
    "image": "/Images/uttapm.jpg",
    "ingredients": ["Rice", "Urad Dal", "Onions", "Tomatoes"],
    "preparation_time": "12-14 hours (including fermentation)",
    "cooking_time": "10 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Prepare dosa batter and ferment overnight.",
      "Spread batter on a pan and top with onions and tomatoes.",
      "Cook on low heat until golden brown.",
      "Serve hot with chutney."
    ]
  },
  {
    "id": 8,
    "name": "Rasam",
    "category": "south-indian",
    "image": "/Images/rasam.jpg",
    "ingredients": ["Tomatoes", "Tamarind", "Pepper", "Garlic"],
    "preparation_time": "10 minutes",
    "cooking_time": "15 minutes",
    "best_season": "Winter (good for colds and digestion)",
    "instructions": [
      "Boil tamarind extract with tomatoes and spices.",
      "Simmer for 10 minutes until flavors blend.",
      "Temper with mustard seeds and curry leaves.",
      "Serve hot with rice."
    ]
  },
  {
    "id": 9,
    "name": "Lemon Rice",
    "category": "south-indian",
    "image": "/Images/lemon_rice.jpg",
    "ingredients": ["Rice", "Lemon", "Peanuts", "Curry Leaves"],
    "preparation_time": "5 minutes",
    "cooking_time": "10 minutes",
    "best_season": "Summer",
    "instructions": [
      "Cook rice and let it cool slightly.",
      "Sauté mustard seeds, peanuts, and curry leaves.",
      "Mix in cooked rice and squeeze fresh lemon juice.",
      "Serve fresh and warm."
    ]
  },
  {
    "id": 10,
    "name": "Appam",
    "category": "south-indian",
    "image": "/Images/appam.jpg",
    "ingredients": ["Rice", "Coconut Milk", "Yeast"],
    "preparation_time": "12 hours (fermentation)",
    "cooking_time": "5 minutes per appam",
    "best_season": "All seasons",
    "instructions": [
      "Grind rice with coconut milk and ferment overnight.",
      "Pour batter onto a hot appam pan and swirl.",
      "Cook until edges are crispy and center is soft.",
      "Serve with coconut milk or curry."
    ]
  },
  {
    "id": 11,
    "name": "Poriyal",
    "category": "south-indian",
    "image": "/Images/poriya.jpg",
    "ingredients": ["Vegetables", "Coconut", "Mustard Seeds"],
    "preparation_time": "5 minutes",
    "cooking_time": "15 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Sauté mustard seeds and curry leaves in oil.",
      "Add chopped vegetables and cook until tender.",
      "Mix in grated coconut and stir well.",
      "Serve as a side dish with rice."
    ]
  },

  {
    "id": 12,
    "name": "Payasam",
    "category": "south-indian",
    "image": "/Images/payasam.jpg",
    "ingredients": ["Milk", "Rice", "Sugar", "Cardamom"],
    "preparation_time": "5 minutes",
    "cooking_time": "20 minutes",
    "best_season": "Festive occasions",
    "instructions": [
      "Boil milk and cook rice in it until soft.",
      "Add sugar and crushed cardamom for flavor.",
      "Simmer for a few minutes until thickened.",
      "Serve warm or chilled with nuts."
    ]
  },
  

  // North Indian 
  {
    id: 13,
    name: "Butter Chicken",
    category: "north-indian",
    image: "./Images/Butter Chicken.jpg",
    ingredients: ["Chicken", "Butter", "Tomatoes", "Cream"],
    preparation_time: "15 minutes",
    cooking_time: "30 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook chicken in a tomato-based gravy.",
      "Add butter and cream for richness.",
      "Simmer until the flavors meld together.",
      "Serve hot with naan or rice."
    ]
  },
  {
    id: 14,
    name: "Paneer Tikka",
    category: "north-indian",
    image: "./Images/Paneer Tikka.jpg",
    ingredients: ["Paneer", "Yogurt", "Spices"],
    preparation_time: "20 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Marinate paneer in yogurt and spices.",
      "Grill until golden and slightly charred.",
      "Serve hot with mint chutney."
    ]
  },
  
  {
    "id": 15,
    "name": "Rogan Josh",
    "category": "north-indian",
    "image": "./Images/Rogan Josh.jpg",
    "ingredients": ["Lamb", "Yogurt", "Spices"],
    "preparation_time": "20 minutes",
    "cooking_time": "2 hours",
    "best_season": "Winter",
    "instructions": [
      "Slow-cook lamb in a rich, spicy gravy.",
      "Add yogurt for tenderness and flavor.",
      "Simmer until the meat is tender.",
      "Serve hot with rice or naan."
    ]
  },
  {
    "id": 16,
    "name": "Chole Bhature",
    "category": "north-indian",
    "image": "./Images/Chole Bhature.webp",
    "ingredients": ["Chickpeas", "Flour", "Spices"],
    "preparation_time": "10 minutes",
    "cooking_time": "1 hour",
    "best_season": "All seasons",
    "instructions": [
      "Cook chickpeas with spices until tender.",
      "Prepare dough for bhature and fry until puffed.",
      "Serve hot chickpeas with fried bhature."
    ]
  },
  {
    "id": 17,
    "name": "Dal Makhani",
    "category": "north-indian",
    "image": "./Images/Dal Makhani.avif",
    "ingredients": ["Black Lentils", "Kidney Beans", "Cream", "Butter"],
    "preparation_time": "10 minutes",
    "cooking_time": "2 hours",
    "best_season": "All seasons",
    "instructions": [
      "Slow cook black lentils and kidney beans.",
      "Add cream and butter for richness.",
      "Simmer until the dal is creamy.",
      "Serve hot with naan or rice."
    ]
  },
  {
    "id": 18,
    "name": "Palak Paneer",
    "category": "north-indian",
    "image": "./Images/Palak Paneer.jpg",
    "ingredients": ["Spinach", "Paneer", "Spices", "Cream"],
    "preparation_time": "15 minutes",
    "cooking_time": "30 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Puree spinach and cook with spices.",
      "Add paneer cubes and cream.",
      "Simmer until the flavors meld together.",
      "Serve hot with naan or rice."
    ]
  },
  {
    "id": 19,
    "name": "Biryani",
    "category": "north-indian",
    "image": "./Images/Biryani.jpg",
    "ingredients": ["Basmati Rice", "Meat/Vegetables", "Saffron", "Spices"],
    "preparation_time": "30 minutes",
    "cooking_time": "1 hour",
    "best_season": "All seasons",
    "instructions": [
      "Layer cooked basmati rice with cooked meat or vegetables.",
      "Add saffron and spices for flavor.",
      "Steam together until the flavors meld.",
      "Serve hot with raita."
    ]
  },
  {
    "id": 20,
    "name": "Malai Kofta",
    "category": "north-indian",
    "image": "./Images/Malai Kofta.jfif",
    "ingredients": ["Paneer", "Potatoes", "Cream", "Spices"],
    "preparation_time": "30 minutes",
    "cooking_time": "45 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Make kofta balls from paneer and potatoes.",
      "Cook in a creamy and spiced gravy.",
      "Simmer until the koftas are soft and the gravy is rich.",
      "Serve hot with naan or rice."
    ]
  },
  {
    "id": 21,
    "name": "Naan",
    "category": "north-indian",
    "image": "./Images/Naan.jpg",
    "ingredients": ["Flour", "Yogurt", "Butter"],
    "preparation_time": "20 minutes",
    "cooking_time": "10 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Make dough with flour and yogurt.",
      "Roll out and cook in a tandoor or on a griddle.",
      "Brush with butter before serving.",
      "Serve hot with curry or dal."
    ]
  },
  {
    "id": 22,
    "name": "Rajma",
    "category": "north-indian",
    "image": "./Images/Rajma.jpg",
    "ingredients": ["Kidney Beans", "Onions", "Tomatoes", "Spices"],
    "preparation_time": "10 minutes",
    "cooking_time": "1 hour",
    "best_season": "All seasons",
    "instructions": [
      "Cook kidney beans with onion-tomato gravy.",
      "Add spices for flavor.",
      "Simmer until the beans are tender and the gravy is thick.",
      "Serve hot with rice."
    ]
  },
  {
    "id": 23,
    "name": "Aloo Paratha",
    "category": "north-indian",
    "image": "./Images/aloo-paratha.jpg",
    "ingredients": ["Wheat Flour", "Potatoes", "Spices", "Butter"],
    "preparation_time": "20 minutes",
    "cooking_time": "15 minutes",
    "best_season": "All seasons",
    "instructions": [
      "Prepare dough with wheat flour.",
      "Stuff with spiced potato mixture.",
      "Cook on a griddle until golden.",
      "Serve hot with yogurt or pickle."
    ]
  },
  {
    "id": 24,
    "name": "Kheer",
    "category": "north-indian",
    "image": "./Images/Kheer.jpg",
    "ingredients": ["Milk", "Rice", "Sugar", "Nuts"],
    "preparation_time": "5 minutes",
    "cooking_time": "30 minutes",
    "best_season": "Festive occasions",
    "instructions": [
      "Cook rice in milk until soft.",
      "Add sugar and nuts for sweetness and crunch.",
      "Simmer until thickened.",
      "Serve warm or chilled."
    ]
  },
  

  // Chinese
  {
    id: 25,
    name: "Fried Rice",
    category: "chinese",
    image: "./Images/Fried Rice.jpg",
    ingredients: ["Rice", "Vegetables", "Soy Sauce"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook rice and let it cool.",
      "Heat oil in a wok and stir-fry vegetables.",
      "Add cooked rice and soy sauce.",
      "Stir-fry until everything is well combined and heated through.",
      "Serve hot."
    ]
  },
  {
    id: 26,
    name: "Manchurian",
    category: "chinese",
    image: "./Images/Manchurian.jpg",
    ingredients: ["Vegetables", "Cornflour", "Soy Sauce"],
    preparation_time: "15 minutes",
    cooking_time: "20 minutes",
    best_season: "All seasons",
    instructions: [
      "Chop vegetables and mix with cornflour to form balls.",
      "Deep fry the vegetable balls until golden brown.",
      "Prepare a tangy sauce with soy sauce, vinegar, and spices.",
      "Toss the fried balls in the sauce.",
      "Serve hot."
    ]
  },
  {
    id: 27,
    name: "Hakka Noodles",
    category: "chinese",
    image: "./Images/Hakka Noodles.jfif",
    ingredients: ["Noodles", "Vegetables", "Soy Sauce"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Boil noodles until al dente and drain.",
      "Heat oil in a wok and stir-fry vegetables.",
      "Add cooked noodles and soy sauce.",
      "Toss everything together until well combined.",
      "Serve hot."
    ]
  },
  {
    id: 28,
    name: "Spring Rolls",
    category: "chinese",
    image: "./Images/Spring Rolls.jfif",
    ingredients: ["Wrappers", "Vegetables", "Oil"],
    preparation_time: "20 minutes",
    cooking_time: "10 minutes",
    best_season: "All seasons",
    instructions: [
      "Chop vegetables finely and sauté them.",
      "Place the sautéed vegetables on a wrapper and roll tightly.",
      "Seal the edges with a flour-water paste.",
      "Deep fry until golden and crispy.",
      "Serve hot with dipping sauce."
    ]
  },
  {
    id: 29,
    name: "Kung Pao Chicken",
    category: "chinese",
    image: "./Images/Kung Pao Chicken.jfif",
    ingredients: ["Chicken", "Peanuts", "Dried Chilies", "Soy Sauce"],
    preparation_time: "15 minutes",
    cooking_time: "20 minutes",
    best_season: "All seasons",
    instructions: [
      "Marinate chicken in soy sauce and cornstarch.",
      "Stir-fry chicken until cooked.",
      "Add dried chilies, peanuts, and sauce.",
      "Cook until the sauce thickens.",
      "Serve hot with rice."
    ]
  },
  {
    id: 30,
    name: "Mapo Tofu",
    category: "chinese",
    image: "./Images/Mapo Tofu.jfif",
    ingredients: ["Tofu", "Ground Pork", "Doubanjiang", "Sichuan Peppercorns"],
    preparation_time: "10 minutes",
    cooking_time: "20 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook ground pork in a wok until browned.",
      "Add doubanjiang and Sichuan peppercorns.",
      "Add tofu cubes and simmer in the sauce.",
      "Garnish with green onions.",
      "Serve hot with rice."
    ]
  },
  {
    id: 31,
    name: "Dim Sum",
    category: "chinese",
    image: "./Images/Dim Sum.jpg",
    ingredients: ["Flour", "Various Fillings", "Soy Sauce"],
    preparation_time: "30 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Prepare dough and fillings.",
      "Shape dumplings with the fillings.",
      "Steam the dumplings until cooked.",
      "Serve hot with soy sauce or chili oil."
    ]
  },
  {
    id: 32,
    name: "Hot Pot",
    category: "chinese",
    image: "./Images/Hot Pot.jfif",
    ingredients: ["Broth", "Meat", "Vegetables", "Noodles"],
    preparation_time: "20 minutes",
    cooking_time: "30 minutes",
    best_season: "Winter",
    instructions: [
      "Prepare a flavorful broth and bring it to a boil.",
      "Add meat, vegetables, and noodles to the broth.",
      "Cook ingredients at the table.",
      "Serve hot with dipping sauces."
    ]
  },
  {
    id: 33,
    name: "Sweet and Sour Pork",
    category: "chinese",
    image: "./Images/Sweet and Sour Pork.jfif",
    ingredients: ["Pork", "Pineapple", "Bell Peppers", "Sweet and Sour Sauce"],
    preparation_time: "20 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Coat pork pieces in batter and deep fry until crispy.",
      "Prepare sweet and sour sauce with pineapple and bell peppers.",
      "Toss fried pork in the sauce.",
      "Serve hot with rice."
    ]
  },
  {
    id: 34,
    name: "Chow Mein",
    category: "chinese",
    image: "./Images/Chow Mein.jfif",
    ingredients: ["Noodles", "Vegetables", "Soy Sauce"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Boil noodles until al dente and drain.",
      "Stir-fry vegetables in a wok.",
      "Add cooked noodles and soy sauce.",
      "Toss everything together until well combined.",
      "Serve hot."
    ]
  },
  {
    id: 35,
    name: "Wonton Soup",
    category: "chinese",
    image: "./Images/Wonton Soup.jpg",
    ingredients: ["Wonton Wrappers", "Pork", "Broth", "Vegetables"],
    preparation_time: "20 minutes",
    cooking_time: "15 minutes",
    best_season: "Winter",
    instructions: [
      "Prepare wonton filling with pork and seasonings.",
      "Wrap the filling in wonton wrappers.",
      "Boil wontons in broth until cooked.",
      "Add vegetables and simmer.",
      "Serve hot."
    ]
  },
  {
    id: 36,
    name: "Peking Duck",
    category: "chinese",
    image: "./Images/Peking Duck.jpg",
    ingredients: ["Duck", "Hoisin Sauce", "Pancakes", "Cucumber"],
    preparation_time: "30 minutes",
    cooking_time: "2 hours",
    best_season: "Festive occasions",
    instructions: [
      "Roast duck until the skin is crispy.",
      "Slice the duck and serve with hoisin sauce.",
      "Wrap duck slices in pancakes with cucumber strips.",
      "Serve hot."
    ]
  },

  // Italian 
  {
    id: 37,
    name: "Pasta",
    category: "italian",
    image: "./Images/Pasta.jfif",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Boil pasta in salted water until al dente.",
      "Heat tomato sauce in a pan.",
      "Mix cooked pasta with the sauce.",
      "Top with grated cheese and serve."
    ]
  },
  {
    id: 38,
    name: "Pizza",
    category: "italian",
    image: "./Images/Pizza.jfif",
    ingredients: ["Dough", "Tomato Sauce", "Cheese", "Toppings"],
    preparation_time: "20 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Roll out pizza dough and spread tomato sauce.",
      "Add cheese and your favorite toppings.",
      "Bake in a preheated oven until the crust is golden.",
      "Slice and serve hot."
    ]
  },
  {
    id: 39,
    name: "Risotto",
    category: "italian",
    image: "./Images/Risotto.jpg",
    ingredients: ["Rice", "Broth", "Cheese"],
    preparation_time: "10 minutes",
    cooking_time: "30 minutes",
    best_season: "All seasons",
    instructions: [
      "Sauté rice in butter until translucent.",
      "Add broth gradually, stirring constantly.",
      "Cook until the rice is creamy and tender.",
      "Stir in cheese and serve immediately."
    ]
  },
  {
    id: 40,
    name: "Tiramisu",
    category: "italian",
    image: "./Images/Tiramisu.jpg",
    ingredients: ["Ladyfingers", "Coffee", "Mascarpone"],
    preparation_time: "30 minutes",
    cooking_time: "0 minutes",
    best_season: "All seasons",
    instructions: [
      "Dip ladyfingers in coffee and layer in a dish.",
      "Spread a layer of mascarpone mixture.",
      "Repeat layers and dust with cocoa powder.",
      "Chill for at least 4 hours before serving."
    ]
  },
  {
    id: 41,
    name: "Lasagna",
    category: "italian",
    image: "./Images/lasagna.avif",
    ingredients: ["Pasta Sheets", "Meat Sauce", "Bechamel", "Cheese"],
    preparation_time: "30 minutes",
    cooking_time: "45 minutes",
    best_season: "All seasons",
    instructions: [
      "Layer pasta sheets with meat sauce and bechamel.",
      "Top with cheese and repeat layers.",
      "Bake in the oven until golden and bubbly.",
      "Let it rest before serving."
    ]
  },
  {
    id: 42,
    name: "Carbonara",
    category: "italian",
    image: "./Images/Carbonara.jpg",
    ingredients: ["Spaghetti", "Eggs", "Pecorino", "Guanciale"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook spaghetti until al dente.",
      "Sauté guanciale until crispy.",
      "Mix eggs and cheese, then toss with hot pasta.",
      "Serve immediately with black pepper."
    ]
  },
  {
    id: 43,
    name: "Osso Buco",
    category: "italian",
    image: "./Images/Osso Buco.jpg",
    ingredients: ["Veal Shanks", "Wine", "Broth", "Gremolata"],
    preparation_time: "20 minutes",
    cooking_time: "2 hours",
    best_season: "Winter",
    instructions: [
      "Brown veal shanks in a pan.",
      "Deglaze with wine and add broth.",
      "Simmer until the meat is tender.",
      "Serve with gremolata and risotto."
    ]
  },
  {
    id: 44,
    name: "Pesto Pasta",
    category: "italian",
    image: "./Images/Pesto Pasta.jfif",
    ingredients: ["Basil", "Pine Nuts", "Garlic", "Olive Oil"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "Summer",
    instructions: [
      "Blend basil, pine nuts, garlic, and olive oil into a paste.",
      "Cook pasta until al dente.",
      "Toss pasta with pesto sauce.",
      "Serve with grated cheese."
    ]
  },
  {
    id: 45,
    name: "Minestrone",
    category: "italian",
    image: "./Images/Minestrone.jpg",
    ingredients: ["Vegetables", "Beans", "Pasta", "Broth"],
    preparation_time: "15 minutes",
    cooking_time: "45 minutes",
    best_season: "Winter",
    instructions: [
      "Sauté vegetables in olive oil.",
      "Add beans, broth, and pasta.",
      "Simmer until everything is tender.",
      "Serve hot with grated cheese."
    ]
  },
  {
    id: 46,
    name: "Gnocchi",
    category: "italian",
    image: "./Images/Gnocchi.jfif",
    ingredients: ["Potatoes", "Flour", "Eggs"],
    preparation_time: "30 minutes",
    cooking_time: "10 minutes",
    best_season: "All seasons",
    instructions: [
      "Boil and mash potatoes.",
      "Mix with flour and eggs to form a dough.",
      "Shape into small dumplings and boil until they float.",
      "Serve with your favorite sauce."
    ]
  },
  {
    id: 47,
    name: "Cannoli",
    category: "italian",
    image: "./Images/Cannoli.jpg",
    ingredients: ["Ricotta", "Sugar", "Chocolate", "Pastry Shells"],
    preparation_time: "30 minutes",
    cooking_time: "0 minutes",
    best_season: "Festive occasions",
    instructions: [
      "Mix ricotta with sugar and chocolate.",
      "Fill pastry shells with the mixture.",
      "Dust with powdered sugar and serve."
    ]
  },
  {
    id: 48,
    name: "Bruschetta",
    category: "italian",
    image: "./Images/ruschetta.jfif",
    ingredients: ["Bread", "Tomatoes", "Basil", "Olive Oil"],
    preparation_time: "10 minutes",
    cooking_time: "5 minutes",
    best_season: "Summer",
    instructions: [
      "Toast slices of bread.",
      "Top with diced tomatoes, basil, and olive oil.",
      "Season with salt and pepper.",
      "Serve immediately."
    ]
  },
  
  //mexican

  {
    id: 49,
    name: "Tacos",
    category: "mexican",
    image: "./Images/Tacos.jfif",
    ingredients: ["Tortilla", "Meat", "Salsa"],
    preparation_time: "10 minutes",
    cooking_time: "10 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook and season the meat.",
      "Warm tortillas on a skillet.",
      "Fill tortillas with meat and salsa.",
      "Fold and serve immediately."
    ]
  },
  {
    id: 50,
    name: "Burritos",
    category: "mexican",
    image: "./Images/Burritos.webp",
    ingredients: ["Tortilla", "Rice", "Beans", "Meat"],
    preparation_time: "15 minutes",
    cooking_time: "10 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook rice, beans, and meat.",
      "Warm tortillas on a skillet.",
      "Layer rice, beans, and meat on the tortilla.",
      "Roll tightly and serve."
    ]
  },
  {
    id: 51,
    name: "Guacamole",
    category: "mexican",
    image: "./Images/Guacamole.jfif",
    ingredients: ["Avocado", "Lime", "Onion", "Tomato"],
    preparation_time: "10 minutes",
    cooking_time: "0 minutes",
    best_season: "All seasons",
    instructions: [
      "Mash avocados in a bowl.",
      "Add lime juice, chopped onions, and diced tomatoes.",
      "Mix well and season with salt.",
      "Serve with tortilla chips."
    ]
  },
  {
    id: 52,
    name: "Enchiladas",
    category: "mexican",
    image: "./Images/Enchiladas.jfif",
    ingredients: ["Tortilla", "Chicken", "Cheese", "Sauce"],
    preparation_time: "20 minutes",
    cooking_time: "30 minutes",
    best_season: "All seasons",
    instructions: [
      "Cook and shred chicken.",
      "Fill tortillas with chicken and cheese.",
      "Roll and place in a baking dish.",
      "Top with sauce and bake until bubbly."
    ]
  },
  {
    id: 53,
    name: "Chiles Rellenos",
    category: "mexican",
    name: "Chiles Rellenos",
    image: "./Images/Chiles Rellenos.jpg",
    ingredients: ["Poblano Peppers", "Cheese", "Eggs", "Sauce"],
    preparation_time: "20 minutes",
    cooking_time: "20 minutes",
    best_season: "All seasons",
    instructions: [
      "Roast and peel poblano peppers.",
      "Stuff peppers with cheese.",
      "Dip in egg batter and fry until golden.",
      "Serve with sauce."
    ]
  },
  {
    id: 54,
    name: "Pozole",
    category: "mexican",
    image: "./Images/Pozole.jpg",
    ingredients: ["Hominy", "Pork", "Chiles", "Garnishes"],
    preparation_time: "20 minutes",
    cooking_time: "2 hours",
    best_season: "Winter",
    instructions: [
      "Simmer pork with hominy and spices.",
      "Add chiles for flavor.",
      "Serve with garnishes like lettuce, radishes, and lime."
    ]
  },
  {
    id: 55,
    name: "Mole",
    category: "mexican",
    image: "./Images/Mole.jfif",
    ingredients: ["Chocolate", "Chiles", "Spices", "Chicken"],
    preparation_time: "30 minutes",
    cooking_time: "1 hour",
    best_season: "Festive occasions",
    instructions: [
      "Prepare mole sauce with chocolate, chiles, and spices.",
      "Cook chicken in the sauce until tender.",
      "Serve with rice and tortillas."
    ]
  },
  {
    id: 56,
    name: "Tamales",
    category: "mexican",
    image: "./Images/Tamales.jpg",
    ingredients: ["Masa", "Meat Filling", "Corn Husks"],
    preparation_time: "1 hour",
    cooking_time: "2 hours",
    best_season: "Festive occasions",
    instructions: [
      "Prepare masa dough and meat filling.",
      "Spread masa on corn husks and add filling.",
      "Fold and steam until cooked.",
      "Serve warm."
    ]
  },
  {
    id: 57,
    name: "Chilaquiles",
    category: "mexican",
    image: "./Images/Chilaquiles.jfif",
    ingredients: ["Tortillas", "Salsa", "Eggs", "Cheese"],
    preparation_time: "10 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Cut tortillas into triangles and fry until crispy.",
      "Toss with salsa and cook until softened.",
      "Top with fried eggs and cheese.",
      "Serve immediately."
    ]
  },
  {
    id: 58,
    name: "Fajitas",
    category: "mexican",
    image: "./Images/Fajitas.jfif",
    ingredients: ["Meat", "Peppers", "Onions", "Tortillas"],
    preparation_time: "15 minutes",
    cooking_time: "15 minutes",
    best_season: "All seasons",
    instructions: [
      "Slice meat, peppers, and onions.",
      "Stir-fry in a hot skillet with spices.",
      "Serve with warm tortillas."
    ]
  },
  {
    id: 59,
    name: "Quesadilla",
    category: "mexican",
    image: "./Images/Quesadill.jpg",
    ingredients: ["Tortilla", "Cheese", "Fillings"],
    preparation_time: "5 minutes",
    cooking_time: "10 minutes",
    best_season: "All seasons",
    instructions: [
      "Place cheese and fillings on a tortilla.",
      "Fold and cook on a skillet until cheese melts.",
      "Serve hot with salsa or guacamole."
    ]
  },
  {
    id: 60,
    name: "Horchata",
    category: "mexican",
    image: "./Images/Horchata.jfif",
    ingredients: ["Rice", "Cinnamon", "Sugar", "Milk"],
    preparation_time: "10 minutes",
    cooking_time: "0 minutes",
    best_season: "Summer",
    instructions: [
      "Blend rice, cinnamon, and water until smooth.",
      "Strain and mix with milk and sugar.",
      "Serve chilled over ice."
    ]
  },
];

let favorites = [];

// Get Modal Elements
const modal = document.getElementById("recipeModal");
const modalRecipeName = document.getElementById("modalRecipeName");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");
const closeBtn = document.querySelector(".close-btn");

// Display default category (South Indian) when page loads
document.addEventListener('DOMContentLoaded', () => {
  displayRecipes('south-indian');
});

// Display Recipes by Category
function displayRecipes(category) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  const filteredRecipes = recipes.filter(recipe => recipe.category === category);
  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <button class="favorite-btn" onclick="addToFavorites(${recipe.id})">Add to Favorites</button>
    `;
    
    // Add click event to the card itself, excluding the favorite button
    recipeCard.addEventListener("click", (e) => {
      if (!e.target.classList.contains('favorite-btn')) {
        showRecipeDetails(recipe);
      }
    });
    
    recipeList.appendChild(recipeCard);
  });
}

// Add to Favorites
function addToFavorites(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!favorites.includes(recipe)) {
    favorites.push(recipe);
    updateFavorites();
  }
}

// Remove from Favorites
function removeFromFavorites(recipeId) {
  favorites = favorites.filter(recipe => recipe.id !== recipeId);
  updateFavorites();
}

// Update Favorites List
function updateFavorites() {
  const favoriteList = document.getElementById("favoriteList");
  favoriteList.innerHTML = "";

  favorites.forEach(recipe => {
    const favoriteCard = document.createElement("div");
    favoriteCard.className = "recipe-card";
    favoriteCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <button onclick="removeFromFavorites(${recipe.id})">Remove from Favorites</button>
    `;
    favoriteCard.addEventListener("click", () => showRecipeDetails(recipe));
    favoriteList.appendChild(favoriteCard);
  });
}

// Show Recipe Details in Modal
function showRecipeDetails(recipe) {
  modalRecipeName.textContent = recipe.name;
  
  // Handle ingredients display
  const ingredientsList = Array.isArray(recipe.ingredients) 
    ? recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')
    : recipe.ingredients.split(',').map(ing => `<li>${ing.trim()}</li>`).join('');
  
  modalIngredients.innerHTML = `
    <ul class="ingredients-list">
      ${ingredientsList}
    </ul>
  `;

  // Add preparation details if available
  const prepDetails = `
    ${recipe.preparation_time ? `<p><strong>Preparation Time:</strong> ${recipe.preparation_time}</p>` : ''}
    ${recipe.cooking_time ? `<p><strong>Cooking Time:</strong> ${recipe.cooking_time}</p>` : ''}
    ${recipe.best_season ? `<p><strong>Best Season:</strong> ${recipe.best_season}</p>` : ''}
  `;

  // Handle instructions display
  const instructionsList = Array.isArray(recipe.instructions)
    ? recipe.instructions.map(inst => `<li>${inst}</li>`).join('')
    : recipe.instructions.split('.').filter(inst => inst.trim()).map(inst => `<li>${inst.trim()}.</li>`).join('');

  modalInstructions.innerHTML = `
    ${prepDetails}
    <strong>Instructions:</strong>
    <ol class="instructions-list">
      ${instructionsList}
    </ol>
  `;

  modal.style.display = "flex";
}

// Close Modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Modal When Clicking Outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Search Functionality
document.getElementById("searchBar").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
  displayRecipesBySearch(filteredRecipes);
});

function displayRecipesBySearch(filteredRecipes) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <button onclick="addToFavorites(${recipe.id})">Add to Favorites</button>
    `;
    recipeCard.addEventListener("click", () => showRecipeDetails(recipe));
    recipeList.appendChild(recipeCard);
  });
}

// Event Listeners for Category Buttons
document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    displayRecipes(category);
  });
});