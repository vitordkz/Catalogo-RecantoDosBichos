import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Home from "./pages/Home"
import Produto from "./pages/Produto"

import CartPanel from "./components/CartPanel"

import { CartProvider, useCart } from "./context/CartContext"

function Header({ openCart }) {

const { cart } = useCart()

return (

<header className="header">

  <div className="logo">
    Recanto dos Bichos
  </div>

  <nav className="menu">

    <a href="/">Home</a>

    <button
      className="cart-button"
      onClick={openCart}
    >
      🛒 Carrinho ({cart.length})
    </button>

  </nav>

</header>

)
}

function AppContent() {

const [cartOpen, setCartOpen] = useState(false)

return (

<>

  <Header openCart={() => setCartOpen(true)} />

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/produto/:id" element={<Produto />} />

  </Routes>

  <CartPanel
    isOpen={cartOpen}
    setIsOpen={setCartOpen}
  />

  <footer className="footer">

    <p>Recanto dos Bichos © 2026</p>

    <p>Rações a granel • Entrega rápida • Novo Hamburgo</p>

  </footer>

</>

)
}

function App() {

return (

<CartProvider>

  <BrowserRouter>

    <AppContent />

  </BrowserRouter>

</CartProvider>

)
}

export default App
