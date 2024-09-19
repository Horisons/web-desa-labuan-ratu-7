import React from 'react';
import { useVillageProfile } from '../../hooks/useAPI';
import { Link } from 'react-router-dom';


export default function Footer() {
  const { profile, loading, error } = useVillageProfile();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  const {
    name,
    address,
    email,
    logo
  } = profile || {};

  return (
    <footer className="bg-red-500 text-gray-100 py-12">
      <div className="container mx-auto px-6">

        {/* Footer Logo */}
        <div className="text-2xl font-bold flex items-center space-x-4 mb-6">
          <Link to="/" className="flex items-center hover:text-gray-200">
            <img
              src={logo ? `https://bucket-2.nos.wjv-1.neo.id/${logo}` : 'Default'}
              alt="Logo Instansi"
              className="w-12 h-12 object-cover"
            />
            <div className="flex flex-col ml-2">
              <span className="text-xl">{name || 'Default Name'}</span>
              <span className="text-sm">{address || 'Default District'}</span>
            </div>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Beranda</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition duration-300">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition duration-300">Layanan</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Kontak</a></li>
            </ul>
          </div>
          {/* Alamat */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Alamat</h3>
            {address ? (
              <p className="text-gray-300">{address}</p>
            ) : (
              <p className="text-gray-300">Alamat belum tersedia</p>
            )}
            {email ? (
              <p className="text-gray-300 mt-2">Email: <a href={`mailto:${email}`} className="hover:text-yellow-400">{email}</a></p>
            ) : (
              <p className="text-gray-300 mt-2">Email belum tersedia</p>
            )}
          </div>          
          {/* Kebijakan */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kebijakan</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-yellow-400 transition duration-300">Kebijakan Privasi</a></li>
              <li><a href="#terms" className="hover:text-yellow-400 transition duration-300">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-white text-sm">© 2024 {name || "Kawal Desa"}. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
