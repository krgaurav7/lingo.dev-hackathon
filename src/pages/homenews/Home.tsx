import { useState, useEffect } from "react";
import { fetchHomeNewsData } from "../../api/homenews.tsx";
import HomeNewsCard from "../../components/homeNewsCard";
import JoinUs from "../../components/joinus/Joinus";
import Homeland from "./homeland.tsx";
import Reviews from "../../pages/review/Review.tsx";

const HomeNews: React.FC = () => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHomeNewsData();
        setNewsData(data);
      } catch (err) {
        console.error("Error loading news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="max-w mx-auto bg-gray-300 min-h-screen">
      {/* Header */}
      <Homeland />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-10">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* News Grid */}
      {!loading && !error && newsData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 pb-10 mt-10">
          {newsData.map((item, index) => (
            <HomeNewsCard key={index} item={item} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && newsData.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">No news articles found.</p>
        </div>
      )}

      <Reviews />
      <JoinUs />
    </div>
  );
};

export default HomeNews;