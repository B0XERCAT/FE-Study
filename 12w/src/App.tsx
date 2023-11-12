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
        <nav className="flex justify-center items-center w-full h-16 border-b border-solid border-[theme(colors.primary-color)]">
          <h1 className="w-full max-w-5xl px-4">
            <Link
              to="/"
              className="text-[theme(colors.primary-color)] text-2xl no-underline font-bold hover:opacity-80"
            >
              Pokemon List
            </Link>
          </h1>
        </nav>
        <main className="flex flex-col items-center p-8 gap-8">
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
