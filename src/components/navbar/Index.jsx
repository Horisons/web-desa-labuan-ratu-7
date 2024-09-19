import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVillageProfile } from '../../hooks/useAPI';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile, loading, error } = useVillageProfile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-red-600 text-white shadow-md">
      <div className="flex items-center justify-between w-full p-4">        
        <div className="text-2xl font-bold flex items-center space-x-4">
          <Link to="/" className="flex items-center hover:text-gray-200">
            <img
              src={profile.logo ? `https://bucket-2.nos.wjv-1.neo.id/${profile.logo}` : 'Default'}
              alt="Logo Instansi"
              className="w-12 h-12 object-cover"
            />
            <div className="flex flex-col ml-2">
              <span className="text-xl">{profile.name || 'Default Name'}</span>
              <span className="text-sm">{profile.district || 'Default District'}</span>
            </div>
          </Link>
        </div>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          id="menu-btn"
          onClick={toggleMobileMenu}
        >
          <i className="ri-menu-line"></i>
        </div>

        <ul
          className={`lg:flex items-center space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/aparatur" className="hover:text-gray-200">Aparat Desa</Link>
          </li>
          <li>
            <Link to="/berita" className="hover:text-gray-200">Berita Desa</Link>
          </li>
          <li>
            <Link to="/umkm" className="hover:text-gray-200">UMKM Desa</Link>
          </li>
          <li>
            <Link to="/kegiatan" className="hover:text-gray-200">Kegiatan Desa</Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center">
          <Link to="https://kawal-desa.pptik.id/login" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
