import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // my API key
  const API_KEY = "e366d9aa";

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-200 text-gray-900 font-sans">
      {/* Navbar */}
<nav className="bg-purple-400 p-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold">DiscoverNaijaMovies!</h1>
  <div className="flex space-x-3 font-medium">
    <Link to="/" className="hover:text-purple-700">Home</Link>
    <Link to="/discover" className="hover:text-purple-700">DiscoverMe</Link>
    <Link to="/series" className="hover:text-purple-700">Series</Link>
    <Link to="/reviews" className="hover:text-purple-700">Character Review</Link>
    <Link to="/global" className="hover:text-purple-700">Global Pick</Link>
    <Link to="/about" className="hover:text-purple-700">About Us</Link>
  </div>
</nav>

      {/* Hero Section */}
      <header className="text-center py-2">
        <h2 className="text-4xl font-bold">Discover free Naija Movies and More!</h2>
        <p className="mt-3 text-lg font-normal">
          Found On YouTube and other streaming platform
        </p>
      </header>

      {/* Search Bar */}
<section className="px-6">
  <form onSubmit={searchMovies} className="flex justify-center items-center mb-6 max-w-md mx-auto">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a movie..."
      className="flex-1 px-4 py-2 rounded-l-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-purple-500 text-white rounded-r-lg font-semibold hover:bg-purple-600"
    >
      Search
    </button>
  </form>
</section>

      {/* Movies Grid */}
      <section className="px-6 pb-6">
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/movie/${movie.imdbID}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition block"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.Title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-lg">{movie.Title}</h3>
                  <p className="text-gray-600">{movie.Year}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            
          </p>
        )}
      </section>
    </div>
  );
}

export default Home;

  //My goal is to make this a movie database for great nigeria movies on YouTube (the hidden gems)and also make it a streaming platform for some original works in the nearest future//
// I plan to remove the OMDb API  and replace it with a YouTube API integration (search Nigerian movies only) or learn to intergrate both to co-exist//  