import React from "react";

export default function Header() {
  return (
    <div className="flex w-full bg-indigo-400 justify-between align-center">
      <div>
        <h1>Pokemon Card Tracker</h1>
        <p>powered by tcg-API</p>
      </div>
      <nav>
        <a>login</a>
        <a>signup</a>
        <a>Your Cards</a>
      </nav>
    </div>
  );
}
