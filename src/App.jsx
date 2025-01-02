import './App.css'
import Header from './components/header/Header'
import ProductsDisplay from './components/products/ProductsDisplay'
import Cart from './components/cart/Cart'
import CartProvider from './context/CartContext';
import {BrowserRouter, Routes, Route} from 'react-router' 
import Payment from './pages/Payment';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route path="/" element={
            <>
              <ProductsDisplay />
              <Cart />
            </>
          } />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
