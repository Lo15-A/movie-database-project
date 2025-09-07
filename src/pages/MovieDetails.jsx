import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY || "e366d9aa";

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        if (data?.Response === "True") {
          setMovie(data);
        } else {
          setMovie(null);
          setErrorMsg(data?.Error || "Movie not found.");
        }
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setErrorMsg("Network error. Please try again.");
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovie();
  }, [id, API_KEY]);

  // -When searching -
  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // - Error / Not Found State -
  if (!movie)
    return (
      <div className="min-h-screen bg-purple-100 flex items-center justify-center px-6 py-10">
        <div className="bg-purple-200 rounded-lg shadow-md p-6 text-center">
          <p className="text-lg font-semibold text-gray-900">
            {errorMsg || "Movie not found."}
          </p>
          <Link
            to="/"
            className="inline-block mt-4 text-purple-700 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );

  // - Movie Details -
  return (
    <div className="min-h-screen bg-purple-100 text-gray-900 px-6 py-10">
      <Link to="/" className="text-purple-600 hover:underline">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-purple-50 rounded-lg shadow-lg overflow-hidden mt-6 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Poster */}
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={`${movie.Title} poster`}
            className="w-full md:w-64 h-auto object-cover rounded-lg"
          />

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
              {movie.Title} {movie.Year ? `(${movie.Year})` : ""}
            </h1>

            <div className="text-sm text-gray-700 mb-3 space-y-1">
              <p>
                <strong>Genre:</strong> {movie.Genre || "N/A"}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.Runtime || "N/A"}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director || "N/A"}
              </p>
              <p>
                <strong>Cast:</strong> {movie.Actors || "N/A"}
              </p>
              <p>
                <strong>Language:</strong> {movie.Language || "N/A"}
              </p>
            </div>

            {/* Ratings */}
            <div className="mb-3">
              <strong className="block mb-1">Ratings</strong>
              {Array.isArray(movie.Ratings) && movie.Ratings.length > 0 ? (
                <ul className="text-sm text-gray-700 space-y-1">
                  {movie.Ratings.map((r) => (
                    <li key={r.Source}>
                      <span className="font-semibold">{r.Source}:</span>{" "}
                      {r.Value}
                    </li>
                  ))}
                  {movie.imdbRating && (
                    <li>
                      <span className="font-semibold">IMDb Rating:</span>{" "}
                      {movie.imdbRating}/10
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">No ratings available</p>
              )}
            </div>

            {/* Plot */}
            <div className="mt-4 text-gray-700">
              <strong className="block mb-1">Plot</strong>
              <p>{movie.Plot || "No plot available."}</p>
            </div>

            {/* External links */}
            <div className="mt-6 flex gap-3">
              {movie.imdbID && (
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 text-sm"
                >
                  Open on IMDb
                </a>
              )}
              {/* TODO: I intend to add YouTube trailer link so people can see a preview of the movies */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}