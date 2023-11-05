"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [displayIdeasItem, setDisplayIdeasItem] = useState(null);
  const [items, setItems] = useState(itemsData);
  console.log(items);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Shopping List</h1>
        <NewItem onAddItem={(item) => setItems([...items, item])} />
        <div class="flex flex-row mb-2">
          <ItemList
            items={items}
            onItemPressed={(item) => setDisplayIdeasItem(item)}
          />
          {displayIdeasItem ? <MealIdeas item={displayIdeasItem} /> : null}
        </div>
      </div>
    </main>
  );
};

export default Page;
