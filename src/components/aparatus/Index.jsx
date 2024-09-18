import React, { useEffect, useRef, useState } from 'react';

import logUser from '../../assets/user.jpeg'


export default function Apparatus() {
  const scrollContainerRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(3); 
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const containerWidth = container.scrollWidth / 2; 
      const viewportWidth = container.offsetWidth;
      const scrollAmount = containerWidth;
      let scrollPosition = 0;

      function scroll() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollAmount) {
          scrollPosition = 0; 
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scroll);
      }

      scroll();
    }
  }, [scrollSpeed]); 

  return (
    <section className="flex flex-col md:flex-row items-center p-10 gap-8">      

      {/* Content */}
      <div className="flex-1 flex flex-col items-start text-left max-w-4xl">
        <p className="text-lg font-semibold text-gray-600 mb-2">Aparat Desa</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Memperkenalkan <span className="text-primary-color">Aparat Desa</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Jelajahi inovasi dalam pengelolaan desa melalui aplikasi web desa yang dirancang khusus untuk memenuhi kebutuhan administratif dan komunikasi desa.
        </p>
      </div>

      {/* Image Wrapper */}
      <div 
        className="relative overflow-hidden flex-1"
        onMouseEnter={() => setScrollSpeed(1)}  
        onMouseLeave={() => setScrollSpeed(3)}  
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-4 whitespace-nowrap"
          style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        >
          {/* Duplicate Cards */}
          {[...Array(2).keys()].map(index => (
            <React.Fragment key={index}>
              {/* Card 1 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 1" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 1</h4>
                  <p className="text-gray-600">Jabatan 1</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 2" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 2</h4>
                  <p className="text-gray-600">Jabatan 2</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 3" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 3</h4>
                  <p className="text-gray-600">Jabatan 3</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 4" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 4</h4>
                  <p className="text-gray-600">Jabatan 4</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 5" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 5</h4>
                  <p className="text-gray-600">Jabatan 5</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="flex flex-col items-center w-[200px] h-[300px] shadow-lg p-4 bg-white">
                <img className="w-full h-full object-cover mb-2" src={logUser} alt="Aparat Desa 6" />
                <div className="flex flex-col items-center h-1/3 justify-center">
                  <h4 className="text-xl font-semibold text-gray-900">Nama Aparat 6</h4>
                  <p className="text-gray-600">Jabatan 6</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
