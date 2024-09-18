import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-red-500 text-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Heading dan CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sudah Siap Menjadi Bagian dari Kawal Desa?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Bergabunglah dengan kami dalam upaya membangun dan mengembangkan desa kami. Dapatkan informasi lebih lanjut dan mulai berkontribusi hari ini!
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Hubungi Kami
          </a>
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
            <p className="text-gray-300">Jl. Contoh No.123, Desa Contoh, Kode Pos 12345</p>
            <p className="text-gray-300 mt-2">Telp: (021) 123-4567</p>
            <p className="text-gray-300">Email: info@kawaldesa.com</p>
          </div>
          {/* Ikuti Kami */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ikuti Kami</h3>
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300"><i className="fab fa-instagram"></i></a></li>
            </ul>
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
          <p className="text-white text-sm">© 2024 Kawal Desa. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

