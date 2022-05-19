import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { LandingPage } from "./pages/LandingPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/1" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
