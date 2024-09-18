import activityImage from '../../assets/tent-1.jpg'
import craftCenterImage  from '../../assets/tent-1.jpg'

 


export default function News () {
  return (
    <>
    <section className="relative overflow-hidden py-16 px-6 lg:px-16 bg-gradient-to-r from-red-700 to-gray-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path fillOpacity="0.3" d="M0,128L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Kegiatan Desa Terbaru</h2>
          <p className="text-lg lg:text-xl mb-6 leading-relaxed">
            Jelajahi berbagai kegiatan dan acara komunitas yang berlangsung di desa kami. Mulai dari festival
            budaya hingga pertemuan lokal, temukan apa yang membuat Braja Selebah menjadi tempat yang hidup dan
            menarik untuk dikunjungi.
          </p>
          <a
            href="#activities"
            className="inline-block px-6 py-3 text-lg font-semibold text-red-700 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Lihat Detail
          </a>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img src={activityImage} alt="Activity Image" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    <section className="relative py-20 px-6 bg-red-100 text-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path fillOpacity="0.1" d="M0,64L1440,160L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={craftCenterImage} alt="Pusat Kerajinan Tangan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pusat Kerajinan Tangan</h3>
                <p className="text-base text-gray-700 mb-4">
                  Temukan berbagai produk kerajinan tangan lokal yang unik dan berkualitas. Dukungan Anda
                  membantu memajukan para pengrajin lokal.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={craftCenterImage} alt="Café Tradisional" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Café Tradisional</h3>
                <p className="text-base text-gray-700 mb-4">
                  Nikmati kopi dan makanan khas desa di café kami. Suasana yang nyaman dan cita rasa yang
                  tak terlupakan.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={craftCenterImage} alt="Taman Buah Lokal" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Taman Buah Lokal</h3>
                <p className="text-base text-gray-700 mb-4">
                  Jelajahi kebun buah lokal kami dan nikmati hasil bumi segar langsung dari sumbernya.
                  Pengalaman berbelanja yang menyenangkan dan sehat.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={craftCenterImage} alt="Pasar Seni Lokal" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pasar Seni Lokal</h3>
                <p className="text-base text-gray-700 mb-4">
                  Kunjungi pasar seni kami untuk menemukan karya seni dan kerajinan tangan yang luar
                  biasa. Dukungan Anda memberikan dorongan kepada para seniman lokal.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

