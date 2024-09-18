import landscape from '../../assets/tent-1.jpg'


export default function VillageActivities() {
  return (
    <section className="relative py-20 px-6 lg:px-16 bg-gradient-to-r from-red-600 via-white to-red-600 text-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path fillOpacity="0.1" d="M0,256L1440,192L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-center lg:text-left">
            Produk UMKM Desa
          </h2>
          <p className="text-base lg:text-lg mb-6 leading-relaxed text-center lg:text-left">
            Temukan berbagai usaha mikro, kecil, dan menengah (UMKM) yang ada di desa kami. Temukan
            produk-produk lokal yang berkualitas dan dukung para pengusaha lokal yang berperan penting dalam
            ekonomi desa. Dari kerajinan tangan hingga makanan khas, setiap UMKM menawarkan sesuatu yang unik
            dan menarik.
          </p>
          <a
            href="#explore"
            className="inline-block px-6 py-3 text-lg font-semibold text-red-600 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore More
          </a>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <div className="relative w-full h-64 bg-white rounded-lg shadow-xl border border-red-600 overflow-hidden">
            <img
              src={landscape}
              alt="Landscape 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Scenic Views</h3>
              <p className="text-sm">Enjoy breathtaking landscapes.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative w-full h-64 bg-white rounded-lg shadow-xl border border-red-600 overflow-hidden">
            <img
              src={landscape}
              alt="Landscape 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Cultural Heritage</h3>
              <p className="text-sm">Immerse yourself in local traditions.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative w-full h-64 bg-white rounded-lg shadow-xl border border-red-600 overflow-hidden">
            <img
              src={landscape}
              alt="Landscape 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Local Cuisine</h3>
              <p className="text-sm">Savor delicious local dishes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

