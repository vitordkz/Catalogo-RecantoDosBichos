import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Header() {
  const { cart, getTotal } = useCart()
  const total = getTotal()

  return (
    <header
      style={{
        background: "#2e7d32",
        padding: "15px",
        color: "white"
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "auto",
          alignItems: "center"
        }}
      >
        <h2 style={{ margin: 0 }}>Recanto dos Bichos</h2>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>

          <Link
            to="/checkout"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            🛒 Checkout ({cart.length}) • R$ {total.toFixed(2)}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header