import { BrowserRouter, Route, Routes } from "react-router";
import { ScrollToHash } from "./components/ScrollToHash";
import { DatenschutzPage } from "./pages/DatenschutzPage";
import { HomePage } from "./pages/HomePage";
import { ImpressumPage } from "./pages/ImpressumPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </BrowserRouter>
  );
}
