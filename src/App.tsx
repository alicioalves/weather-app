import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Carregando...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<div> 404 - PAGE NOT FOUND </div>} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
