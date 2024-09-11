import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-darkBlue text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="/" className="hover:text-gray-300 transition">
            Shop
          </a>
          <a href="/" className="hover:text-gray-300 transition">
            Sobre nós
          </a>
          <a href="/" className="hover:text-gray-300 transition">
            Contato
          </a>
        </nav>

        <div className="text-3xl font-bold">
          <a href="/" className="hover:text-gray-300 transition">
            Urban Style
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="bg-graphite text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-2 text-gray-300" />
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:text-gray-300 transition focus:outline-none"
            >
              <FaUserCircle size={28} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Perfil
                </a>
                <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  Meus Pedidos
                </a>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Sair
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <a href="/cart" className="text-white hover:text-gray-300 transition">
              <FaShoppingCart size={28} />
            </a>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
