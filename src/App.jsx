import "./App.scss";
import { useRef, useState } from "react";
import { mealList } from "./Recipes";

function App() {
  //let userName = useRef();
  //let favMeal = useRef();
  const [name, setName] = useState("");
  const [meal, setMeal] = useState("");
  const [submit, setSubmit] = useState(false);

  //funcion para imprimir en pantalla lo que envíe el form
  const setChef = (e) => {
    e.preventDefault();
    if (submit) {
      setSubmit(false);
    }
    console.log(name, meal);
    console.log(mealList);
    return setSubmit(true);
  };

  const bg1 = 'url("./src/assets/piksa.jpg")';

  return (
    <>
      <div className="main-container">
        <header className="header">
          <h1 className="header-title">AZUKA.</h1>
        </header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <h3>Recipes</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
            <li>
              <h3>Be the Chef</h3>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="contact-scroll"><h2 className="chef-title">Be the Chef!</h2></a>
        {/*<form className="form-box" onSubmit={setChef}>
          <div className="name-field">
            <label>Your name:</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="meal-field">
            <label>Your favorite recipe:</label>
            <input
              type="text"
              placeholder="Fav Recipe"
              onChange={(e) => setMeal(e.target.value)}
            ></input>
          </div>

          <button type="submit" className="cook">
            COOK
          </button>
        </form>*/}

        {submit ? (
          <h3 className="user-info">
            Welcome {name}, here's a recipe to cook {""}
            {meal}
          </h3>
        ) : (
          ""
        )}

        {mealList.map((meal) => {
          return (
            <>
              <div
                className="recipe-header"
                style={{
                  backgroundImage: meal.bgImage,
                }}
              >
                <h1 className="recipe-title">{meal.name}</h1>
                <article className="recipe-info">
                  <p>
                    <i className="fas fa-clock"></i>
                    {meal.timeToCook}
                  </p>
                  <p>
                    <i className="fas fa-user"></i>
                    {meal.servings}
                  </p>
                </article>
              </div>

              <div className="recipe">
                <h2>Ingredients</h2>
                <ul>
                  {meal.ingredients.map((ingredient) => {
                    return <li key={ingredient}><p className="ingredient"><i className="fas fa-bread-slice list-icon"></i>{ingredient}</p></li>;
                  })}
                </ul>
              </div>
            </>
          );
        })}

        <div
          className="recipe-header"
          style={{
            backgroundImage: bg1,
          }}
        >
          <h1 className="recipe-title">Pizza</h1>
          <article className="recipe-info">
            <p>
              <i className="fas fa-clock"></i>30 min
            </p>
            <p>
              <i className="fas fa-user"></i>2 servings
            </p>
          </article>
        </div>

        <div className="recipe">
          <h2>Ingredients</h2>
          <ul>
            <li>1 pizza base</li>
            <li>1 pizza sauce</li>
            <li>1 pizza cheese</li>
            <li>Lots of love </li>
          </ul>
        </div>

        <div className="contact" id="contact">
          <h1>Hungry?</h1>
          <h3>Phone: 123456789</h3>
          <h3>Address: 1234 Main St</h3>
        </div>
        <footer className="footer">
          <h2>© 2022 Azuka</h2>
        </footer>
      </div>
    </>
  );
}

export default App;
