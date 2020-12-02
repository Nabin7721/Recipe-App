import React, { useEffect, useState } from "react";
import Home_img from "./Home_img";
import Recipe from "./Recipe";
import "./App.css";



function App(){
  const APP_ID = "3072b00a";
  const APP_KEY = "2446087c324df61c5fd9231e89b47db4";
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
 
  useEffect(() => {
    getRecipes();
  }, [query]);
 
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
 
  const updateSearch = e => {
    setSearch(e.target.value);
  };
 
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <div>
      <Home_img />
      </div>
      <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="search for any recipe"
          value={search}
          onChange={updateSearch}
          placeholder='Search for recipe'
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
      </div>
      
  );
}

export default App;

