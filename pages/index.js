import React from "react";
import Header from "../components/header";
import MainPage from "../components/mainPage";

export default function index() {
  return (
    <div className="flex flex-col bg-slate-600 h-screen">
      <Header />
      <MainPage />
    </div>
  );
}
