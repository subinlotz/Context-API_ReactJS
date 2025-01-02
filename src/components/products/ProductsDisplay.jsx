import React, { useContext } from "react";
import "./ProductsDisplay.css";
import cartContext, { CartContext } from "../../context/CartContext";

function ProductsDisplay() {
  const {products, cart, setCart} = useContext(CartContext)

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => 
      item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
  };
  
  return (
          <div className="wrapper">
        {products.map((product) => (
          <div key={product.id} className="shoe">
            <div className="image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="productDetails">
              <p>{product.name}</p>
              <p id="price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div> 
  
  );
}

export default ProductsDisplay;
