const meal = {
  name: "",
  timeToCook: "",
  servings: "",
  ingredients: [],
  bgImage: "",
};

const patacon = {
  ...meal,
  name: "Patacon",
  timeToCook: "30 min",
  servings: "1 serving",
  ingredients: ["patacon", "cheese", "tomato"],
  bgImage: "url(./src/assets/patacon.jpg)",
};

const pasta = {
  ...meal,
  name: "Pasta",
  timeToCook: "10 min",
  servings: "2 servings",
  ingredients: ["pasta", "salt", "oil", "cheese"],
  bgImage: "url(./src/assets/pasta.jpg)",
};

const mealList = [patacon, pasta];

export { mealList };
