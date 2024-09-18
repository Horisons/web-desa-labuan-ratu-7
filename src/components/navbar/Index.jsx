import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-red-600 text-white shadow-md">
      <div className="flex items-center justify-between w-full p-4">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-200">Logo Instansi</a>
        </div>

        {/* Menu Button */}
        <div className="hidden lg:text-2xl cursor-pointer lg:hidden" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#rent" className="hover:text-gray-200">Aparat Desa</a>
          </li>
          <li>
            <a href="#ride" className="hover:text-gray-200">Berita Desa</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">UMKM Desa</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">Kegiatan Desa</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
