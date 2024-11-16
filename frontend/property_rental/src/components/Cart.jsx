import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fifa 19",
      category: "PS4",
      price: 44.0,
      image: '/images/recent1.jpg', 
    },
    {
      id: 2,
      name: "Glacier White 500GB",
      category: "PS4",
      price: 249.99,
      image: '/images/recent1.jpg', 
    },
    {
      id: 3,
      name: "Platinum Headset",
      category: "PS4",
      price: 119.99,
      image: '/images/recent1.jpg', 
    },{
      id: 4,
      name: "Platinum Headset",
      category: "PS4",
      price: 119.99,
      image: '/images/recent1.jpg', 
    },
  ]);

 
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="mb-4 text-lg">Items: {cartItems.length}</div>
      <div className="border-t">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-purple-700 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-lg">Rs. {item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Rs. {(item.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/home">
        <button className="text-purple-700 hover:underline">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
