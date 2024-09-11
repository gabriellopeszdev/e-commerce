import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/Product";
import Cart from "../components/Cart";

const products = [
  { id: 1, name: 'Casual T-Shirt', price: 29.99, image: '/images/casual-t-shirts.jpg' },
  { id: 2, name: 'Midi Skirt', price: 49.99, image: '/images/midi-skirt.avif' },
  { id: 3, name: 'White Sneakers', price: 79.99, image: '/images/white-sneaker.webp' },
  { id: 4, name: 'Leather Bag', price: 99.99, image: '/images/Luppi.webp' },
];

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ name: string; price: number }[]>([]);

  const addToCart = (product: { name: string; price: number }) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Header cartCount={cartItems.length} />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-5xl font-extrabold text-center mb-12">Moda Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
