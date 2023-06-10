"use client";

import GearList from "./components/GearList";
import ChartData from "./components/ChartData";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [store]);

  return (
    mounted && (
      <Provider store={store}>
        <main className="flex min-h-screen flex-col items-center pt-20">
          <ChartData />
          <GearList />
        </main>
      </Provider>
    )
  );
}
