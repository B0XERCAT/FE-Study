import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <nav>
          <h1>
            <Link to="/">Pokemon List</Link>
          </h1>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<PokemonList />}></Route>
            <Route path="/:detailIndex" element={<PokemonDetail />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
