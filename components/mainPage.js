import React from "react";
import ResultsContainer from "./resultsContainer";

export default function MainPage() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-gradient-to-r from-red-500 to-blue-500">
      <ResultsContainer />
    </div>
  );
}
