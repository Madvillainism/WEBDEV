const meal = {
  name: "",
  timeToCook: "",
  servings: "",
  ingredients: [],
};

const patacon = {
  ...meal,
  name: "Patacon",
  timeToCook: "30 min",
  servings: "1 serving",
  ingredients: ["patacon", "cheese", "tomato"],
};

const pasta = {
  ...meal,
  name: "Pasta",
  timeToCook: "10 min",
  servings: "2 serving",
  ingredients: ["pasta", "salt", "oil", "cheese"],
};

const mealList = [patacon, pasta];

export { mealList };
