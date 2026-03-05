import { useCart } from "../context/CartContext"

function Checkout() {
  const { cart, removeFromCart, clearCart, getTotal } = useCart()
const total = getTotal()

  function enviarWhatsApp() {
    if (cart.length === 0) return

    const mensagem = cart
      .map(item =>
        `${item.nome} - ${item.quantidade}kg - R$ ${item.subtotal}`
      )
      .join("%0A")

    const numero = "+5551992834356"

    const url = `https://wa.me/${numero}?text=Pedido:%0A${mensagem}%0A%0ATotal: R$ ${total}`

    window.open(url, "_blank")
  }

  return (
    <div className="container">
      <h1>Checkout</h1>

      {cart.length === 0 && <p>Carrinho vazio</p>}

      {cart.map(item => (
        <div key={item.id} className="checkout-item">
          <span>
            {item.nome} - {item.quantidade}kg
          </span>
          <span>R$ {item.subtotal}</span>
          <button onClick={() => removeFromCart(item.id)}>
            Remover
          </button>
        </div>
      ))}

      <h2>Total: R$ {total}</h2>

      {cart.length > 0 && (
        <>
          <button className="finalizar" onClick={enviarWhatsApp}>
            Finalizar Pedido no WhatsApp
          </button>

          <button
            style={{ marginTop: "10px", background: "#c62828" }}
            onClick={clearCart}
          >
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  )
}

export default Checkout