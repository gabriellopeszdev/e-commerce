import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface CartItem {
  name: string;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const totalItems = cartItems.length;
  const totalPrice = cartItems
    .filter(item => item.price !== undefined)
    .reduce((acc, item) => acc + (item.price || 0), 0)
    .toFixed(2);

  return (
    <div className="bg-charcoal text-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
      {totalItems === 0 ? (
        <div className="text-center">
          <FaShoppingCart className="text-gray-300 mx-auto mb-4" size={48} />
          <p className="text-gray-300 text-lg">Seu carrinho está vazio.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2">
                <span className="font-semibold">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="mt-6">
            <button
              onClick={() => alert("Redirecionando para o checkout...")}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
