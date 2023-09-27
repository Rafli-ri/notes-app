/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Navigate from "./components/Navigate";
import DetailPage from "./pages/DetailPage";
import ArchievPage from "./pages/ArchievPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPages from "./pages/NotFoundPages";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigate />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/archiev" element={<ArchievPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
