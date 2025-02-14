import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID,
    },
  },
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }
  
  try {
    const { query } = req.query;
    console.log("API: Pesquisando por:", query);
    
    // Simula um atraso na resposta e define resultados fictícios
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const resultados = [
      { id: 1, nome: "Produto A", preco: 49.9, loja: "Loja 1", imagem: "https://via.placeholder.com/150" },
      { id: 2, nome: "Produto B", preco: 59.9, loja: "Loja 2", imagem: "https://via.placeholder.com/150" },
      { id: 3, nome: "Produto C", preco: 39.9, loja: "Loja 3", imagem: "https://via.placeholder.com/150" }
    ];
    
    const filtrados = resultados.filter(produto =>
      produto.nome.toLowerCase().includes((query || "").toLowerCase())
    );
    
    console.log("API: Resultados filtrados:", filtrados);
    res.status(200).json(filtrados);
  } catch (error) {
    console.error("Erro na API de busca:", error);
    Sentry.captureException(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}