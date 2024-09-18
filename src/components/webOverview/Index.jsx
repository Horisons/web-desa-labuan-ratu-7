import React from 'react';

export default function WebsiteOverview() {
  return (
    <section className="relative mb-10 px-6 bg-white text-gray-800">
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Highlighted Feature 1 */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 px-4">
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Berita dan Informasi</h3>
            <svg className="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 18H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V6h12v2z" />
            </svg>
          </div>
        </div>

        {/* Highlighted Feature 2 */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 px-4">
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">UMKM Desa</h3>
            <svg className="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4a4 4 0 0 0-4 4v1H6v2h2v1a4 4 0 0 0 8 0v-1h2v-2h-2V8a4 4 0 0 0-4-4zm0 6a2 2 0 0 1-2-2v-1a2 2 0 0 1 4 0v1a2 2 0 0 1-2 2zM6 10h12v10H6V10zm1 2v8h10v-8H7z" />
            </svg>
          </div>
        </div>

        {/* Highlighted Feature 3 */}
        <div className="lg:w-1/3 px-4">
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Kegiatan dan Acara</h3>
            <svg className="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 4h-2V2h-2v2H7V2H5v2H3v16h18V4zm-1 14H4v-8h16v8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};


