import { useEffect, useMemo, useRef, useState } from "react";
import { XIcon, SearchIcon, StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import timeFormat from "../lib/timeFormat";

const SearchModal = ({ onClose }) => {
  const { shows, image_base_url } = useAppContext();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const inputRef = useRef(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Collect all unique genres from shows
  const allGenres = useMemo(() => {
    const genreSet = new Set();
    shows.forEach((movie) =>
      movie.genres?.forEach((g) => genreSet.add(g.name))
    );
    return Array.from(genreSet).sort();
  }, [shows]);

  // Collect all unique years
  const allYears = useMemo(() => {
    const yearSet = new Set();
    shows.forEach((movie) => {
      const year = new Date(movie.release_date).getFullYear();
      if (!isNaN(year)) yearSet.add(year);
    });
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [shows]);

  // Filter logic
  const results = useMemo(() => {
    return shows.filter((movie) => {
      const q = query.toLowerCase().trim();
      const matchesTitle = !q || movie.title?.toLowerCase().includes(q);
      const matchesOverview = !q || movie.overview?.toLowerCase().includes(q);
      const matchesGenre =
        !selectedGenre ||
        movie.genres?.some((g) => g.name === selectedGenre);
      const matchesYear =
        !selectedYear ||
        new Date(movie.release_date).getFullYear() === Number(selectedYear);

      return (matchesTitle || matchesOverview) && matchesGenre && matchesYear;
    });
  }, [shows, query, selectedGenre, selectedYear]);

  const handleMovieClick = (id) => {
    onClose();
    navigate(`/movies/${id}`);
    scrollTo(0, 0);
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedGenre("");
    setSelectedYear("");
    inputRef.current?.focus();
  };

  const hasActiveFilters = query || selectedGenre || selectedYear;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-6 md:px-16 py-5 border-b border-white/10">
        <SearchIcon className="w-5 h-5 text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by movie title, overview..."
          className="flex-1 bg-transparent text-white text-lg placeholder-gray-500 outline-none"
        />
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
        >
          <XIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-16 py-4 border-b border-white/10 flex flex-wrap items-center gap-3">
        {/* Genre chips */}
        <div className="flex flex-wrap gap-2">
          {allGenres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                setSelectedGenre(selectedGenre === genre ? "" : genre)
              }
              className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer border ${
                selectedGenre === genre
                  ? "bg-primary border-primary text-white"
                  : "border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Year dropdown */}
        {allYears.length > 0 && (
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-1 rounded-full text-xs font-medium bg-transparent border border-white/20 text-gray-400 hover:border-white/40 transition cursor-pointer outline-none"
          >
            <option value="">All Years</option>
            {allYears.map((year) => (
              <option key={year} value={year} className="bg-gray-900">
                {year}
              </option>
            ))}
          </select>
        )}

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/40 hover:bg-primary/10 transition cursor-pointer"
          >
            Clear all
          </button>
        )}

        {/* Result count */}
        <span className="ml-auto text-xs text-gray-500">
          {results.length} {results.length === 1 ? "movie" : "movies"} found
        </span>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-6 md:px-16 py-6">
        {shows.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-gray-400 text-lg">No movies in database yet.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-3">
            <p className="text-4xl">🎬</p>
            <p className="text-white font-semibold text-lg">No results found</p>
            <p className="text-gray-500 text-sm">
              Try a different title, genre, or year.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map((movie) => (
              <div
                key={movie._id}
                onClick={() => handleMovieClick(movie._id)}
                className="flex gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-3 cursor-pointer transition group"
              >
                <img
                  src={image_base_url + movie.poster_path}
                  alt={movie.title}
                  className="w-16 h-24 object-cover rounded-lg shrink-0"
                />
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <p className="font-semibold text-sm text-white truncate group-hover:text-primary transition">
                      {movie.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(movie.release_date).getFullYear()} •{" "}
                      {timeFormat(movie.runtime)}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {movie.genres?.slice(0, 2).map((g) => (
                        <span
                          key={g.id}
                          className="text-[10px] px-2 py-0.5 bg-primary/15 text-primary rounded-full"
                        >
                          {g.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <StarIcon className="w-3 h-3 text-primary fill-primary" />
                    {movie.vote_average?.toFixed(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
