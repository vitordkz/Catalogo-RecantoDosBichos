import { useState } from "react"
import { useCart } from "../context/CartContext"

function Home() {
  const { addToCart } = useCart()

  const produtos = [
    { id: 1, nome: "Primogato Castrado", precoKg: 18, descricao: "32% proteína • Sabor frango" },
    { id: 2, nome: "Golden Special Cães", precoKg: 16, descricao: "Carne & Arroz • Adultos" },
    { id: 3, nome: "Magnus Todo Dia", precoKg: 14, descricao: "Nutrição completa diária" },
    { id: 4, nome: "Three Dogs Super Premium", precoKg: 22, descricao: "Alta digestibilidade" }
  ]

  const [valoresKg, setValoresKg] = useState({})
  const [valoresReais, setValoresReais] = useState({})

  function adicionarPorKg(produto, kg) {
    if (!kg || kg <= 0) return

    const subtotal = (kg * produto.precoKg).toFixed(2)

    addToCart({
      id: Date.now(),
      nome: produto.nome,
      quantidade: kg,
      subtotal: Number(subtotal)
    })
  }

  function adicionarPorValor(produto, valor) {
    if (!valor || valor <= 0) return

    const kg = (valor / produto.precoKg).toFixed(2)

    addToCart({
      id: Date.now(),
      nome: produto.nome,
      quantidade: Number(kg),
      subtotal: Number(valor)
    })
  }

  return (
    <div className="container">

      {/* BANNER PROFISSIONAL */}
      <div style={{
        background: "#f1f8e9",
        padding: "25px",
        borderRadius: "10px",
        marginBottom: "30px",
        textAlign: "center"
      }}>
        <h1>Recanto dos Bichos</h1>
        <p>Rações de qualidade com entrega rápida</p>
        <p><strong>Entregamos em Porto Alegre e região</strong></p>
        <p>Pagamento via PIX na entrega</p>
      </div>

      <h2>Rações Disponíveis</h2>

      <div className="grid">
        {produtos.map(produto => (
          <div key={produto.id} className="card">
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p><strong>R$ {produto.precoKg.toFixed(2)} por kg</strong></p>

            <h4>Comprar por kg:</h4>
            <input
              type="number"
              placeholder="Quantidade em kg"
              step="0.1"
              min="0"
              value={valoresKg[produto.id] || ""}
              onChange={(e) =>
                setValoresKg(prev => ({ ...prev, [produto.id]: e.target.value }))
              }
            />
            <button onClick={() =>
              adicionarPorKg(produto, Number(valoresKg[produto.id]))
            }>
              Adicionar por Kg
            </button>

            <h4>Comprar por valor (R$):</h4>
            <input
              type="number"
              placeholder="Valor em reais"
              min="0"
              value={valoresReais[produto.id] || ""}
              onChange={(e) =>
                setValoresReais(prev => ({ ...prev, [produto.id]: e.target.value }))
              }
            />
            <button onClick={() =>
              adicionarPorValor(produto, Number(valoresReais[produto.id]))
            }>
              Adicionar por Valor
            </button>

            <h4>Sacos fechados:</h4>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {[7, 10, 15, 20, 25].map(kg => (
                <button key={kg} onClick={() => adicionarPorKg(produto, kg)}>
                  {kg}kg
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home