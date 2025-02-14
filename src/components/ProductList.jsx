import React from 'react';

export default function ProductList({ produtos, loading }) {
  if (loading && produtos.length === 0) {
    return <div className="text-center mt-4">Carregando resultados...</div>;
  }
  if (!loading && produtos.length === 0) {
    return <div className="text-center mt-4">Nenhum produto encontrado.</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      {produtos.map((produto) => (
        <div key={produto.id} className="bg-white rounded shadow p-4 flex items-center">
          <img src={produto.imagem} alt={produto.nome} className="w-16 h-16 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{produto.nome}</h3>
            <p className="text-gray-700">Loja: {produto.loja}</p>
            <p className="text-blue-600 font-bold">R$ {produto.preco.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}