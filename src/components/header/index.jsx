
import header from '../../assets/tent-1.jpg';
import log from '../../assets/tent-2.jpg';
import bgHeader from '../../assets/header-bg.png';
import {fetchVillageProfile} from '../../helpers/service';
import { useEffect, useState } from 'react';


export default function Header() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {        

        const [profileData] = await Promise.all([
          fetchVillageProfile()
        ]);
        
        console.log('Profile Data:', profileData);

        setProfile(profileData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <header 
      className="relative bg-cover bg-center bg-no-repeat h-screen" 
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div 
        className="relative isolate overflow-hidden pt-20 h-[90vh] flex items-center justify-between px-6" 
        id="home"
      >
        {/* Teks */}
        <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-12 z-10">
          {/* Region Header */}
          <h1 className="text-3xl lg:text-2xl font-semibold text-gray-800 mb-2 relative">
            Lampung
          </h1>

          {/* Main Title */}
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-header relative">
            Braja Kencana
            <span className="block w-12 h-1 bg-red-600 mt-2 mx-auto"></span>
          </h2>

          <p className="text-sm font-semibold text-gray-800 mb-2 relative inline-block">
            Desa Braja Kencana
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
            Braja Kencana adalah sebuah kecamatan di Kabupaten Lampung Timur, Provinsi Lampung, Indonesia. Desa ini memiliki pemandangan alam yang indah dan budaya lokal yang kaya.
          </p>
        </div>

        {/* Gambar Keindahan Desa */}
        <div className="relative flex-1 max-w-md flex items-center justify-center z-0 bg-red-600">
          <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
            <img src={log} alt="Desa Image" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Gambar Balai Desa */}
          <div className="absolute bottom-[-60px] left-[20px] w-[100px] h-auto overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 transform -translate-y-1/4">
            <img src={header} alt="Balai Desa" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-2xl p-2 text-white bg-red-600 rounded-full border-4 border-white"
      >
        <i className="ri-arrow-down-line"></i>
      </a>
    </header>
  );
}
