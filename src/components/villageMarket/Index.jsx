import newsImage from '../../assets/tent-2.jpg'

export default function VillageMarket() {
  return (
    <>
      <section className="relative overflow-hidden py-16 px-6 lg:px-16 bg-gradient-to-r from-red-500 to-gray-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
            <path fillOpacity="0.3" d="M0,128L1440,64L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Berita Terbaru Desa</h2>
            <p className="text-lg lg:text-xl mb-6 leading-relaxed">
              Tetap terinformasi dengan berita dan acara terbaru yang terjadi di desa kami. Dari acara lokal yang menarik hingga pengumuman komunitas yang penting, kami memastikan Anda selalu mendapatkan informasi tentang semua peristiwa penting di Braja Selebah.
            </p>
            <a
              href="#news"
              className="inline-block px-6 py-3 text-lg font-semibold text-red-700 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <img src={newsImage} alt="News Image" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src={newsImage}
              alt="News Image 1"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-gray-800 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Headline Berita 1</h3>
              <p className="text-base mb-4">
                A brief description of the news article that provides an engaging summary of the content.
              </p>
              <a href="#" className="text-red-500 font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src={newsImage}
              alt="News Image 2"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-gray-800 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Headline Berita 2</h3>
              <p className="text-base mb-4">
                A brief description of the news article that provides an engaging summary of the content.
              </p>
              <a href="#" className="text-red-500 font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src={newsImage}
              alt="News Image 3"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-gray-800 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Headline Berita 3</h3>
              <p className="text-base mb-4">
                A brief description of the news article that provides an engaging summary of the content.
              </p>
              <a href="#" className="text-red-500 font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
