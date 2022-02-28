import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row w-full bg-yellow-300 justify-center align-center text-black-500">
      <section className="flex flex-row w-1280 justify-between align-center">
        <a className="flex flex-col items-center justify-center bg-yellow-400 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-yellow-300">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-gray-400 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-gray-300">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-emerald-600 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-emerald-500">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-slate-500 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-slate-400">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-black text-gray-400 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-gray-900">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-green-700 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-green-600">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-amber-700 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-amber-600">
            <h1>Gen</h1>
          </div>
        </a>
        <a className="flex flex-col items-center justify-center bg-pink-700 w-full h-28 hover:cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-white w-11/12 h-24 hover:cursor-pointer hover:bg-pink-600">
            <h1>Gen</h1>
          </div>
        </a>
      </section>
    </header>
  );
}
