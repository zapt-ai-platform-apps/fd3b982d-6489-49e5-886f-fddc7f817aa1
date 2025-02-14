import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import MadeOnZapt from './components/MadeOnZapt';

export default function App() {
  const [query, setQuery] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setErro("");
    console.log("Iniciando busca por:", query);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Erro na busca");
      }
      const data = await response.json();
      console.log("Resultados obtidos:", data);
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      import('@sentry/browser').then(Sentry => {
         Sentry.captureException(error);
      });
      setErro("Ocorreu um erro na busca. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 p-4 text-white text-center text-xl">
        wpreco - Encontre Produtos Mais Baratos
      </header>
      <main className="flex-grow p-4">
        <SearchBar 
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          loading={loading}
        />
        {erro && (
          <div className="mt-4 p-2 bg-red-200 text-red-800 rounded">
            {erro}
          </div>
        )}
        <ProductList produtos={produtos} loading={loading} />
      </main>
      <footer className="p-4 bg-gray-200 text-center">
        <MadeOnZapt />
      </footer>
    </div>
  );
}