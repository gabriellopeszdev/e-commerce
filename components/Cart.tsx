import React from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

interface CartItem {
  name: string;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveItem = (indexToRemove: number) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="bg-white text-gray-800 p-6 shadow-lg rounded-lg max-w-md mx-auto">
      {totalItems === 0 ? (
        <div className="text-center">
          <FaShoppingCart className="text-gray-400 mx-auto mb-4" size={48} />
          <p className="text-gray-400 text-lg">Seu carrinho está vazio.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
          <ul className="space-y-4 max-h-64 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2">
                <span className="font-semibold">{item.name}</span>
                <span className="flex items-center">
                  <span className="mr-2">{formatPrice(item.price)}</span>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500 hover:text-red-400 transition duration-300"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="mt-6">
            <button
              onClick={() => alert("Redirecionando para o checkout...")}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
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
