const dummyMenu = [
  {
    card: {
      info: {
        id: "1",
        name: "Margherita Pizza",
        price: 29900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/22/2a13ec06-bf36-484d-8038-fe49d54114e7_532a9161-85b9-41e6-b017-9924451bafbe.jpg",
        description: "Cheesy Margherita pizza with classic tomato sauce.",
        ratings: { aggregatedRating: { rating: "4.5" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "2",
        name: "Farmhouse Pizza",
        variantsV2: { pricingModels: [{ price: 39900 }] },
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/22/6827ba66-012d-4560-ba43-27a835adfc89_d64d974a-3b51-408f-9eb3-07fc7fa09b05.jpg",
        description: "Loaded with capsicum, onion, mushrooms, and cheese.",
        ratings: { aggregatedRating: { rating: "4.7" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "3",
        name: "Chicken Tandoori Pizza",
        price: 45900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/22/4065cdbd-f0fb-4455-9f9e-1dd72a4aa6b2_480fd6c1-0c77-4838-8864-5b086ceb541f.jpg",
        description: "Grilled spicy tandoori chicken chunks with cheese.",
        ratings: { aggregatedRating: { rating: "4.4" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "4",
        name: "Veg Biryani ",
        price: 24900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/8/6/6267a17b-9146-400d-9459-ea8596d0e56d_c3d05b39-872f-446e-ac49-8048ae93754e.jpeg",
        description: "Fragrant basmati rice cooked with veggies and spices.",
        ratings: { aggregatedRating: { rating: "4.3" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "5",
        name: "Chicken Biryani",
        price: 29900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/8/6/c7ab7cfb-8ad0-43d4-9b4d-b4f7d6c34179_99769c02-8633-410d-af7f-59fdecb1c459.jpeg",
        description: "Aromatic biryani with tender chicken pieces.",
        ratings: { aggregatedRating: { rating: "4.6" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "6",
        name: "Paneer Butter Masala",
        price: 21900,
        isVeg: 1,
        imageId: "25a27ca1b62525643decd7bbf4016e02",
        description: "Creamy tomato gravy with soft paneer cubes.",
        ratings: { aggregatedRating: { rating: "4.8" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "7",
        name: "Butter Chicken",
        price: 28900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/8/8/27c7f142-1606-4b5a-8058-e51b31ab0460_b9bf1664-d91b-44d4-85c2-6379f82137d3.jpeg",
        description: "North indian classic creamy chicken dish.",
        ratings: { aggregatedRating: { rating: "4.6" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "8",
        name: "Cold Coffee",
        variantsV2: { pricingModels: [{ price: 14900 }] },
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/1/23/3eab3ac0-6618-48ad-8aa9-4748ac697f4c_f288ec3b-80a0-4dfa-ad06-decb6fea3be0.jpg",
        description: "Strong iced coffee with cream.",
        ratings: { aggregatedRating: { rating: "4.7" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "9",
        name: "Masala Dosa",
        price: 15900,
        isVeg: 1,
        imageId: "y8s37meevi7ohnps4qgb",
        description: "Crispy dosa served with aloo masala & chutneys.",
        ratings: { aggregatedRating: { rating: "4.4" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "10",
        name: "Idli Sambar",
        price: 12900,
        isVeg: 1,
        imageId: "y9jtkk6uuj7qyckndlfk",
        description: "Soft idlis served with hot sambar & chutney.",
        ratings: { aggregatedRating: { rating: "4.3" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "11",
        name: "Chole Bhature",
        price: 17900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/2/23/0dd7267e-d278-487f-9896-2ef4383dcc4b_c7c3f5a2-f4b5-4e17-8f0e-1238525cf05f.jpg",
        description: "Punjabi style spicy chole with fluffy bhature.",
        ratings: { aggregatedRating: { rating: "4.7" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "12",
        name: "Chicken Momos",
        price: 15900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/9/15/490db5ed-1fa3-4802-afb6-aa4401fd5595_7bd03cd0-a624-4574-b199-e49072db989a.jpeg",
        description: "Steamed momos stuffed with minced chicken.",
        ratings: { aggregatedRating: { rating: "4.5" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "13",
        name: "Paneer Momos",
        variantsV2: { pricingModels: [{ price: 14900 }] },
        isVeg: 1,
        imageId: "y7mgjbbj2i0oqghpvmba",
        description: "Momos stuffed with soft paneer & veggies.",
        ratings: { aggregatedRating: { rating: "4.4" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "14",
        name: "French Fries",
        price: 12900,
        isVeg: 1,
        imageId: "o8m8a8gs9v95gfoygmpq",
        description: "Crispy potato fries with salt seasoning.",
        ratings: { aggregatedRating: { rating: "4.2" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "15",
        name: "Veg Wrap",
        price: 11900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/4/21/b457198d-e5ed-4c89-ad00-d4e301ca18d6_e8243183-b333-405f-8bad-d118cf519ccf.jpeg",
        description: "Light and healthy wrap with veggie stuffing.",
        ratings: { aggregatedRating: { rating: "4.1" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "16",
        name: "Chicken Wrap",
        price: 14900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/10/17/0932dc8d-d9ab-4601-a5b0-266a3612a9b5_25cfce09-fbe6-4330-b4cd-87cb45ba5967.jpg",
        description: "Soft wrap filled with grilled chicken.",
        ratings: { aggregatedRating: { rating: "4.3" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "17",
        name: "Veg Burger",
        price: 9900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
        description: "Crunchy veg patty with lettuce & sauces.",
        ratings: { aggregatedRating: { rating: "4.4" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "18",
        name: "Chicken Burger",
        price: 14900,
        isVeg: 0,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg",
        description: "Crispy chicken patty with mayo.",
        ratings: { aggregatedRating: { rating: "4.6" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "19",
        name: "Chocolate Shake",
        price: 17900,
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/16/6fae1d68-e572-467a-8035-1ca5e62294c1_d6856f87-988b-4955-8752-7eb5567bd149.jpeg",
        description: "Thick chocolate shake with choco chips.",
        ratings: { aggregatedRating: { rating: "4.8" } }
      }
    }
  },
  {
    card: {
      info: {
        id: "20",
        name: "Vanilla Ice Cream",
        variantsV2: { pricingModels: [{ price: 7900 }] },
        isVeg: 1,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2025/5/15/0992738f-e84e-4fe9-ab0d-07fd488009a1_e4cf322e-8d00-4bc9-a8d8-334319a2452a.png_compressed",
        description: "Classic vanilla scoop.",
        ratings: { aggregatedRating: { rating: "4.5" } }
      }
    }
  }
];

export default dummyMenu;
