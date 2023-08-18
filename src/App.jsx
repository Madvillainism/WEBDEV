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

        <h2 className="chef-title">Be the Chef!</h2>

        <form className="form-box" onSubmit={setChef}>
          {/*USAR USE REF PARA CAPTURAR LOS DATOS DEL FORM*/}
          <label>Your name:</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Favorite meal:</label>
          <input
            type="text"
            placeholder="Fav Meal"
            onChange={(e) => setMeal(e.target.value)}
          ></input>
          <button type="submit">COOK</button>
        </form>

        {submit ? (
          <h3 className="user-info">
            Welcome {name}, here's a recipe to cook {""}
            {meal}
          </h3>
        ) : (
          ""
        )}

        <div className="recipe-header">
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

        <div>
          <h1>Recipe for X</h1>
          <h2>Ingredients</h2>
          <ul>
            <li>1 pizza base</li>
            <li>1 pizza sauce</li>
            <li>1 pizza cheese</li>
            <li>Lots of love </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
