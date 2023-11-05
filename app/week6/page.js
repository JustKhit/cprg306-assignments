"use client";

import { useState } from "react";
import itemsData from "./items.json"
import ItemList from "./item-list";
import NewItem from "./new-item";

const Page = () => {
  const [items, setItems] = useState(itemsData)
  console.log(items)

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Shopping List</h1>
        <NewItem onAddItem={(item) => setItems([...items, item])}/>
        <ItemList items={items}/>
      </div>
    </main>
  );
};

export default Page;
