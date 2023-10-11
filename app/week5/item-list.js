"use client";

import { useState } from "react";
import Item from "./item"; // assuming Item is in the same directory
import items from "./items";

const SortBy = {
  NAME: "name",
  CATEGORY: "category",
};

const ItemList = () => {
  const [sortBy, setSortBy] = useState(SortBy.NAME);

  let sortedList = [];
  switch (sortBy) {
    case SortBy.NAME:
      sortedList = items.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case SortBy.CATEGORY:
      sortedList = items.sort((a, b) => (a.category > b.category ? 1 : -1));
      break;
    default:
      sortedList = items;
      break;
  }

  const handleSortByPressed = (event) => {
    event.preventDefault();
    const { param } = event.target.dataset;
    setSortBy(param)
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <p1 className="text-slate-950">Sort by: </p1>
        <button
          onClick={handleSortByPressed}
          data-param={SortBy.NAME}
          className={`${
            sortBy == SortBy.NAME ? "bg-orange-500" : "bg-white"
          } text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow`}
        >
          {SortBy.NAME}
        </button>
        <button
          onClick={handleSortByPressed}
          data-param={SortBy.CATEGORY}
          className={`${
            sortBy == SortBy.CATEGORY ? "bg-orange-500" : "bg-white"
          } text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow`}
        >
          {SortBy.CATEGORY}
        </button>
      </div>
      <div className="gap-4">
        {sortedList.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
