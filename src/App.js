import React from "react";
import Product from "./Product";
import productsData from "./vschoolProducts";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const todoItems = todosData.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  const productComponents = productsData.map((item) => (
    <Product key={item.id} product={item} />
  ));

  const jokeComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div>
      {todoItems}

      <div className="product">{productComponents}</div>
      {jokeComponents}
    </div>
  );
}

export default App;

/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/
