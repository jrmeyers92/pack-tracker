"use client";

import GearList from "./components/GearList";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center p-24">
        <GearList />
      </main>
    </Provider>
  );
}
