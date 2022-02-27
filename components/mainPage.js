import React from "react";
import ResultsContainer from "./resultsContainer";
import SideBar from "./sidebar";

export default function MainPage() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-row h-full">
        <SideBar />
        <ResultsContainer />
      </div>
    </div>
  );
}
