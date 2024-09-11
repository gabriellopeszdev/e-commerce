import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  addToCart: (product: { name: string; price: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, addToCart }) => {
  return (
    <div className="bg-charcoal text-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>${price.toFixed(2)}</p>
        <button
          onClick={() => addToCart({ name, price })}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
