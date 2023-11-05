"use client";

import React, { useEffect, useState } from "react";

const MealIdeas = ({ item }) => {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMealIdeas(item.name);
      setMeals(result.meals);
    };

    fetchData().catch(console.error);
  }, [item]);

  async function getMealIdeas(name) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name.replace(/[^a-zA-Z0-9 ]/g, '')}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      alert(error);
      return null;
    }
  }

  return (
    <div className="bg-white font-sans rounded-md mx-6">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Meal Ideas</h1>
        <h2 className="font-bold text-gray-700">
          Here are some meal ideas using {item.name}
        </h2>
        {meals ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="mb-4">
              <div className="flex items-center justify-between w-full">
                <h2 className="font-bold text-orange-700">{meal.strMeal}</h2>
              </div>
            </div>
          ))
        ) : (
          <p1 className="font-bold text-gray-700">Not found</p1>
        )}
      </div>
    </div>
  );
};

export default MealIdeas;
