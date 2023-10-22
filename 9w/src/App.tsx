import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>
          <Link to="/">Pokemon List</Link>
        </h1>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PokemonList />}></Route>
          <Route path="/:idx" element={<PokemonDetail />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
