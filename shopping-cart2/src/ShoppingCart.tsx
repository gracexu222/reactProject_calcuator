import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.79 },
  { id: 3, name: "Orange", price: 1.29 },
];

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const calculateTotalPrice = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const fakeCheckout = () => {
    alert("Checkout successful! Total: $${calculateTotalPrice().toFixed(2)}");
    emptyCart();
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x{item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p> Your cart is empty.</p>
      )}

      <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>

      <button onClick={emptyCart} disabled={cart.length === 0}>
        Empty Cart
      </button>

      <button onClick={fakeCheckout} disabled={cart.length === 0}>
        Fake Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
