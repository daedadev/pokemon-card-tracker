import React from "react";

export default function ResultsContainer() {
  return (
    <div className="flex flex-col w-1280 min-h-fit bg-gray-500 h-full">
      <section className="flex flex-row bg-gray-100 h-2/4">
        <article>
          <h1>Card Clicked</h1>
        </article>
      </section>
      <section className="flex flex-row bg-gray-400 h-1/3">
        <h1>Card Holder</h1>
      </section>
      <section className="flex flex-row bg-gray-700 h-1/3">
        <h1>Eveelutions</h1>
      </section>
    </div>
  );
}
