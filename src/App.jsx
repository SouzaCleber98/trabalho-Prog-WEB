import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import WebApplication from "./pages/WebApplication";
import Example from "./pages/Example";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/web-application" element={<WebApplication />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
