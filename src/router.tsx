import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Error404 = lazy(() => import("./pages/Error404"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Pokedex = lazy(() => import("./pages/Pokedex"));

export const Router = () => {
  return (
    <Suspense fallback={<div>Suspense</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
};
