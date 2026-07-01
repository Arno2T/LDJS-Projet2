import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";

// Anti-pattern 11 — Routing dans App.tsx — idéalement : module dédié.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
