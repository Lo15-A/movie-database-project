import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

// my API key//
  const API_KEY = "e366d9aa"; // 

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
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-purple-700 cursor-pointer">Home</li>
          <li className="hover:text-purple-700 cursor-pointer">DiscoverMe</li>
          <li className="hover:text-purple-700 cursor-pointer">Series</li>
          <li className="hover:text-purple-700 cursor-pointer">Character Review</li>
          <li className="hover:text-purple-700 cursor-pointer">Global Pick</li>
          <li className="hover:text-purple-700 cursor-pointer">About Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-12">
        <h2 className="text-4xl font-bold">Discover free Naija Movies and More!</h2>
        <p className="mt-3 text-lg font-normal">Found On YouTube and other streaming platform</p>
      </header>

      {/* Search Bar */}
      <section className="px-6">
        <form onSubmit={searchMovies} className="flex justify-center gap-2 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600"
          >
            Search
          </button>
        </form>
      </section>

      {/* Movies Grid */}
      <section className="px-6 pb-12">
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                  alt={movie.Title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-lg">{movie.Title}</h3>
                  <p className="text-gray-600">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Any specific request? Try searching for a title!
          </p>
        )}
      </section>
    </div>
  );
}

export default Home;

//My goal is to make this a movie database for great nigeria movies on YouTube (the hidden gems)and also make it a streaming platform for some original works in the nearest future//
// I plan to remove the OMDb API  and replace it with a YouTube API integration (search Nigerian movies only) or learn to intergrate both to co-exist//
