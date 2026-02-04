import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Submission from "./pages/Submission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
