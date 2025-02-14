import React from 'react';

export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <div className="flex items-center mb-4">
      <input 
        type="text" 
        className="flex-grow p-2 border border-gray-300 rounded-l box-border" 
        placeholder="Digite o nome do produto" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        onClick={onSearch} 
        disabled={loading} 
        className="p-2 bg-blue-600 text-white rounded-r cursor-pointer disabled:opacity-50"
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
}