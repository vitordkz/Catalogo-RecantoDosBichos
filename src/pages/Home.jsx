import { Link } from "react-router-dom"

import primogato from "../assets/PrimogatoCast.jpg"
import golden from "../assets/GoldenSpecial.jpg"
import monello from "../assets/MonelloTrad.jpg"

function Home() {

  const produtos = [
    {
      id: 1,
      nome: "Primogato Castrado",
      precoKg: 18,
      descricao: "32% proteína • Sabor frango",
      imagem: primogato
    },
    {
      id: 2,
      nome: "Golden Special Cães",
      precoKg: 16,
      descricao: "Carne & Arroz • Adultos",
      imagem: golden
    },
    {
      id: 3,
      nome: "Monello Tradicional",
      precoKg: 14,
      descricao: "Nutrição completa diária",
      imagem: monello
    }
  ]

  return (
    <div className="container">

      <h1>Rações Disponíveis</h1>

      <div className="grid">

        {produtos.map(produto => (

          <Link
            key={produto.id}
            to={`/produto/${produto.id}`}
            className="card"
          >

            <img
              src={produto.imagem}
              alt={produto.nome}
            />

            <h2>{produto.nome}</h2>

            <p>{produto.descricao}</p>

            <p className="preco">
              R$ {produto.precoKg} / kg
            </p>

          </Link>

        ))}

      </div>

    </div>
  )
}

export default Home