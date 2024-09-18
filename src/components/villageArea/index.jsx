import React from 'react';

export default function VillageArea() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wilayah Desa Kami</h2>
          <p className="text-lg text-gray-600">
            Jelajahi peta interaktif dan lihat detail penting wilayah desa kami di sini.
          </p>
        </div>

        {/* Grid Layout untuk Peta dan Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Peta */}
          <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.761964457871!2d105.28104781536248!3d-5.4454182397412565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40b05c0f4e7a17%3A0x1f65d51f12cfd7b7!2sKota%20Lampung!5e0!3m2!1sid!2sid!4v1685013797212!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Detail Wilayah */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Detail Wilayah</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Perbatasan</h4>
              <p className="text-gray-600 mt-2">
                Wilayah desa kami berbatasan dengan desa-desa berikut: Desa A di utara, Desa B di timur, dan Desa C di selatan. Perbatasan ini ditandai dengan batas-batas alam seperti sungai dan hutan.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Fasilitas Umum</h4>
              <p className="text-gray-600 mt-2">
                Di desa kami terdapat beberapa fasilitas umum, seperti pusat kesehatan masyarakat, sekolah, dan balai desa. Semua fasilitas ini terletak di lokasi strategis untuk kemudahan akses.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Peta Perencanaan</h4>
              <p className="text-gray-600 mt-2">
                Kami juga memiliki peta perencanaan yang menunjukkan rencana pengembangan desa ke depannya, termasuk lokasi untuk pembangunan infrastruktur baru dan pengembangan kawasan hijau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
