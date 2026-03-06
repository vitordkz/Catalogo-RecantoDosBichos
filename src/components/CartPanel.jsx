import { useCart } from "../context/CartContext";

export default function CartPanel({ isOpen, setIsOpen }) {

  const { cart, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce(
    (acc, item) => acc + Number(item.subtotal || 0),
    0
  );

  function fecharCarrinho() {
    setIsOpen(false);
  }

  return (
    <div className="cart-overlay" onClick={fecharCarrinho}>

      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>

        <div className="cart-header">
          <h2>Carrinho</h2>

          <button className="btn-close" onClick={fecharCarrinho}>
            ✕
          </button>
        </div>

        <div>

          {cart.length === 0 && (
            <p>Carrinho vazio</p>
          )}

          {cart.map((item) => (

            <div key={item.id} className="cart-item">

              <div className="cart-info">

                <strong>
                  {item.name || "Produto"}
                </strong>

                <p>
                  {Number(item.subtotal || 0).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

              </div>

              <button
                className="btn-remove"
                onClick={() => removeFromCart(item.id)}
              >
                remover
              </button>

            </div>

          ))}

        </div>

        <div className="cart-total">

          Total: {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}

        </div>

        <div className="cart-actions">

          <button className="btn-clear" onClick={clearCart}>
            Limpar Carrinho
          </button>

        </div>

      </div>

    </div>
  );
}