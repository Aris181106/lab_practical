  import { useState } from "react";
  import reactLogo from "./assets/react.svg";
  import viteLogo from "./assets/vite.svg";
  import heroImg from "./assets/hero.png";
  import "./App.css";
  import React from "react";
  import UserProfile from "./components/UserProfile";
  import ProductInfo from "./components/ProductInfo";
  import LifecycleDemo from "./components/LifecycleDemo";

function App(){
  return(
      <>
      <UserProfile />
      <ProductInfo />
      <LifecycleDemo />
      </>
  );
}
export default App;