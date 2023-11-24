"use client";

import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const [displayIdeasItem, setDisplayIdeasItem] = useState(null);
  const [items, setItems] = useState([]);

  const fetchData = async (userId) => {
    const result = await getItems(userId);
    setItems(result);
  };

  useEffect(() => {
    if (user != null) {
      fetchData(user.uid).catch(console.error);
    }
  }, [user]);

  const addItemPressed = async (item) => {
    if (user != null) {
      await addItem(user.uid, item);
      fetchData(user.uid);
    }
  };

  if (user == null) {
    return (
      <main className="min-h-screen bg-gray-100 py-8">
        <p className="text-3xl font-bold mb-6 text-black">
          Please do the authentication first
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Shopping List</h1>
        <NewItem onAddItem={(item) => addItemPressed(item)} />
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
