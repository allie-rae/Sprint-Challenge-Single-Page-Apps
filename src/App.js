import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
    </main>
  );
}
