import React from "react";
import Header from "../components/header";
import MainPage from "../components/mainPage";

export default function index() {
  return (
    <div className="flex flex-col bg-gray-600 h-screen">
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/pokemon-solid"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <MainPage />
    </div>
  );
}
