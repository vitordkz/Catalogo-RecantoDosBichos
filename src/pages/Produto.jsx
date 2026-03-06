import { useParams } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"

import primogato from "../assets/PrimogatoCast.jpg"
import golden from "../assets/GoldenSpecial.jpg"
import monello from "../assets/MonelloTrad.jpg"

function Produto(){

const { id } = useParams()
const { addToCart } = useCart()

const produtos = [

{
id:"1",
nome:"Primogato Castrado",
precoKg:18,
descricao:"Ração premium para gatos castrados • 32% proteína",
imagem:primogato
},

{
id:"2",
nome:"Golden Special Cães",
precoKg:16,
descricao:"Carne e arroz • Alta digestibilidade",
imagem:golden
},

{
id:"3",
nome:"Monello Tradicional",
precoKg:14,
descricao:"Nutrição completa diária",
imagem:monello
}

]

const produto = produtos.find(p=>p.id===id)

const [modoCompra,setModoCompra]=useState("")
const [valor,setValor]=useState("")

if(!produto){
return <h2>Produto não encontrado</h2>
}

function adicionarAoCarrinho(){

if(!valor) return

let kg=0
let subtotal=0

if(modoCompra==="reais"){
subtotal=Number(valor)
kg=(subtotal/produto.precoKg).toFixed(2)
}

if(modoCompra==="kg"){
kg=Number(valor)
subtotal=(kg*produto.precoKg).toFixed(2)
}

if(modoCompra==="saco"){
kg=Number(valor)
subtotal=(kg*produto.precoKg).toFixed(2)
}

addToCart({
id: Date.now(),
name: produto.nome,
quantity: Number(kg),
subtotal: Number(subtotal)
})

setValor("")
}

return(

<div className="container">

<div className="produto-page">

<img src={produto.imagem} alt={produto.nome}/>

<div className="produto-info">

<h1>{produto.nome}</h1>

<p>{produto.descricao}</p>

<p className="preco">
R$ {produto.precoKg} / kg
</p>

<h3>Forma de compra</h3>

<div className="botoes-compra">

<button onClick={()=>setModoCompra("reais")}>
Por valor
</button>

<button onClick={()=>setModoCompra("kg")}>
Por kg
</button>

<button onClick={()=>setModoCompra("saco")}>
Sacos
</button>

</div>

{modoCompra==="reais" && (

<input
type="number"
placeholder="Valor em R$"
value={valor}
onChange={(e)=>setValor(e.target.value)}
/>

)}

{modoCompra==="kg" && (

<input
type="number"
placeholder="Quantidade em kg"
value={valor}
onChange={(e)=>setValor(e.target.value)}
/>

)}

{modoCompra==="saco" && (

<select
value={valor}
onChange={(e)=>setValor(e.target.value)}
>

<option value="">Escolha o saco</option>
<option value="7">7kg</option>
<option value="10">10kg</option>
<option value="15">15kg</option>
<option value="20">20kg</option>
<option value="25">25kg</option>

</select>

)}

<button
className="btn-carrinho"
onClick={adicionarAoCarrinho}
>

Adicionar ao Carrinho

</button>

</div>

</div>

</div>

)

}

export default Produto