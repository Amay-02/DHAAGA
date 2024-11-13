import React, { useEffect, useState } from 'react';
import artist from '../assets/Artist.mp4';

const DiscoverArtisansPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Once the video has loaded, set isVideoLoaded to true to trigger fade-in
    const video = document.getElementById('hero-video');
    video.onloadeddata = () => {
      setIsVideoLoaded(true);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section with Blurred Background Video */}
      <section className="relative w-full h-[70vh] text-white flex justify-center items-center">
        {/* Background Video */}
        <video
          id="hero-video"
          className={`absolute top-0 left-0 w-full h-full object-cover filter blur-sm transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
        >
          <source src={artist} type="video/mp4" />
        </video>

        {/* Overlay for Darkening */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover the Handcrafted Legacy of India</h1>
          <button className="mt-4 px-6 py-3 bg-orange-600 rounded-full text-white text-lg hover:bg-orange-500 transition-colors">
            Explore Artisans
          </button>
        </div>
      </section>

      {/* Artisan Profiles Section */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Artisans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Artisan Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img
              src="/path-to-artisan-image.jpg"
              alt="Artisan"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Ravi Kumar – Banarasi Saree Weaver</h3>
            <p className="text-gray-700 mt-2">Master in traditional Banarasi weaving</p>
            <button className="mt-4 text-blue-500 hover:text-blue-700">Read Story</button>
          </div>

          {/* More cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img
              src="/path-to-artisan-image2.jpg"
              alt="Artisan"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Sita Devi – Pottery Artisan</h3>
            <p className="text-gray-700 mt-2">Creating beautiful handmade pottery</p>
            <button className="mt-4 text-blue-500 hover:text-blue-700">Read Story</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img
              src="/path-to-artisan-image3.jpg"
              alt="Artisan"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Amit Sharma – Wooden Craft</h3>
            <p className="text-gray-700 mt-2">Mastering the art of traditional wood carving</p>
            <button className="mt-4 text-blue-500 hover:text-blue-700">Read Story</button>
          </div>
        </div>
      </section>

      {/* Artisan Stories & Videos Section */}
      <section className="px-8 py-16 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-8">Artisan Stories</h2>
        <div className="flex overflow-x-auto space-x-8">
          {/* Video 1 */}
          <div className="flex-none w-64 mx-2 bg-white p-4 rounded-lg shadow-lg">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
            <h3 className="text-xl font-semibold mt-2">The Making of a Banarasi Saree</h3>
          </div>

          {/* Video 2 */}
          <div className="flex-none w-64 mx-2 bg-white p-4 rounded-lg shadow-lg">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
            <h3 className="text-xl font-semibold mt-2">The Pottery Journey</h3>
          </div>

          {/* More video items */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white text-center py-12">
        <h2 className="text-3xl font-semibold">Support Local Artisans and Their Crafts</h2>
        <button className="mt-4 px-6 py-3 bg-white text-orange-600 rounded-full hover:bg-orange-100 transition-colors">
          Shop Handcrafted Products
        </button>
      </section>
    </div>
  );
};

export default DiscoverArtisansPage;
