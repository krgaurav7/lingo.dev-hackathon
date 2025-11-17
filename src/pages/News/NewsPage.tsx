import { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "../../components/newscard/Newscard";
import { Search, Filter, TrendingUp, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const NewsPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("bitcoin");

  const ITEMS_PER_PAGE = 20;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`;

      const response = await axios.get(url);
      setArticles(response.data.articles || []);
      setPage(1); // Reset to first page on new search
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchNews();
  };

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
          <Loader2 className="w-16 h-16 text-white animate-spin mx-auto mb-4" />
          <p className="text-2xl font-bold text-white">Loading news...</p>
          <p className="text-white/70 mt-2">Fetching the latest articles for you</p>
        </div>
      </div>
    );
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedArticles = articles.slice(start, end);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 mt-4">
        {/* Header Section */}
        <div className="mb-12">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2">
              <TrendingUp className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white text-sm font-semibold">TRENDING NEWS</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Blockchain <span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">News</span>
          </h1>
          <p className="text-center text-white/80 text-lg mb-8">
            Stay updated with the latest blockchain and cryptocurrency developments
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="flex gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news topics..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
              <span className="text-white/70 text-sm">Total Articles</span>
              <p className="text-white font-bold text-xl">{articles.length}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
              <span className="text-white/70 text-sm">Current Page</span>
              <p className="text-white font-bold text-xl">{page} / {totalPages}</p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
            <Filter className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No news available</h3>
            <p className="text-white/70">Try adjusting your search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {paginatedArticles.map((article, index) => (
              <Newscard 
                key={index} 
                article={article}
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {paginatedArticles.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/20 w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }

                return (
                  <button
                    key={i}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                      page === pageNum
                        ? 'bg-white text-purple-600 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              disabled={end >= articles.length}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/20 w-full sm:w-auto justify-center"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;