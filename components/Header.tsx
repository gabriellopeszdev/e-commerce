import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import Link from "next/link";

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between relative">
        
        <nav className="flex space-x-8">
          <Link href="/">
            <a className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Home</a>
          </Link>
          <Link href="/">
            <a className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Sobre nós</a>
          </Link>
          <Link href="/">
            <a className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Contato</a>
          </Link>
        </nav>

        <div className="absolute inset-x-0 flex justify-center">
          <Link href="/">
            <a className="text-3xl font-bold hover:text-gray-300 transition duration-300 shadow-lg">
              Urban Style
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>

          <div className="relative top-1">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110"
            >
              <FaUserCircle size={28} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48">
                <Link href="/profile">
                  <a className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Perfil</a>
                </Link>
                <Link href="/orders">
                  <a className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Meus Pedidos</a>
                </Link>
                <Link href="/logout">
                  <a className="block px-4 py-2 hover:bg-gray-100 transition duration-300">Sair</a>
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <Link href="/cart">
              <a className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110">
                <FaShoppingCart size={28} />
              </a>
            </Link>
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
