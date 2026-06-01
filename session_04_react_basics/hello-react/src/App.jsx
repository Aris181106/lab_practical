import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import React from "react";
import UserProfile from "./components/UserProfile";
import ProductInfo from "./components/ProductInfo";
import LifecycleDemo from "./components/LifecycleDemo";
import GoodCounter from "./components/GoodCounter";
import BadCounter from "./components/BadCounter";
import FlowDemo from "./components/FlowDemo";
import SimpleVariables from "./components/SimpleVariables";
import TernaryDemo from "./components/TernaryDemo";

function App() {
  return (
    <>
      <UserProfile />
      <ProductInfo />
      <LifecycleDemo />
      <GoodCounter />
      <BadCounter />
      <FlowDemo />
      <SimpleVariables/>
      <TernaryDemo/>
    </>
  );
}
export default App;
