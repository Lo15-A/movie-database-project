function Home() {
  return (
    <div className="min-h-screen bg-purple-800 text-white font-bold">
      {/* Navbar */}
      <nav className="bg-purple-900 p-4 flex justify-between items-center">
        <h1 className="text-2xl">DiscoverNaijaMovies!</h1>
        <ul className="flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">DiscoverMe</li>
          <li className="hover:text-gray-200 cursor-pointer">Series</li>
          <li className="hover:text-gray-200 cursor-pointer">Character Review</li>
          <li className="hover:text-gray-200 cursor-pointer">Global Pick</li>
          <li className="hover:text-gray-200 cursor-pointer">About Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16">
        <h2 className="text-4xl">Discover free Naija Movies and More!</h2>
        <p className="mt-4 text-lg font-normal">All Found On YouTube</p>
      </header>

      {/* Continue Watching Section */}
      <section className="p-8">
        <h3 className="text-2xl mb-4">Continue Watching</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-purple-700 h-40 rounded-lg flex items-center justify-center hover:bg-purple-600"
            >
              <span className="text-white">Movie {id}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Watchlist Section */}
      <section className="p-8 bg-purple-900">
        <h3 className="text-2xl mb-4">Add to Your Watchlist</h3>
        <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200">
          + Add Watchlist
        </button>
      </section>

      {/* Channel Recommendation Section */}
      <section className="p-8">
        <h3 className="text-2xl mb-6">Channel Recommendations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-purple-700 rounded-lg p-4 flex flex-col items-center hover:bg-purple-600"
            >
              <div className="bg-purple-500 h-32 w-full rounded mb-4 flex items-center justify-center">
                <span className="text-white">Channel {id}</span>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-white text-black rounded font-bold hover:bg-gray-200">
                  Watch
                </button>
                <button className="px-4 py-2 bg-white text-black rounded font-bold hover:bg-gray-200">
                  Share
                </button>
                <button className="px-4 py-2 bg-white text-black rounded font-bold hover:bg-gray-200">
                  Like
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;