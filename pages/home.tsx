import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/Product";
import Cart from "../components/Cart";

interface CartItem {
  name: string;
  price: number;
}

const products = [
  { id: 1, name: 'Casual T-Shirt', price: 29.99, image: '/images/tshirt.jpg' },
  { id: 2, name: 'Denim Jeans', price: 49.99, image: '/images/jeans.jpg' },
  { id: 3, name: 'White Sneakers', price: 79.99, image: '/images/sneakers.jpg' },
  { id: 4, name: 'Leather Bag', price: 99.99, image: '/images/bag.jpg' },
];

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header cartCount={cartItems.length} />

      <div className="container mx-auto py-8 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12">Moda Casual</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
