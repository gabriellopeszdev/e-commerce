import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  addToCart: (product: { name: string; price: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, addToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative">
      
      <svg>
        
      <image href={image} className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80" />
      
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-xl font-semibold mb-4">{formatPrice(price)}</p>
        <button
          onClick={() => addToCart({ name, price })}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
