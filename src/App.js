import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setFoods(data.meals))
  }, [search]);
  console.log(foods);
  return (
    <div className="App">
      <h1>Search food</h1>
      <input type="text" onChange={handleChange} placeholder="Search food" />
      <h2>Search Value: {search}</h2>
      {
        foods?.map(food => <div>
          <img style={{ width: "200px" }} src={food.strMealThumb} />
        </div>)
      }
    </div>
  );
}

export default App;
