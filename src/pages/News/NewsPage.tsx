import { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "../../components/newscard/Newscard";

const NewsPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 20;

  const fetchNews = async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`;

      const response = await axios.get(url);
      setArticles(response.data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-xl font-semibold">
        Loading news...
      </div>
    );
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedArticles = articles.slice(start, end);

  return (
    <div className="max-w-6xl mx-auto p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Blockchain News</h1>

      {paginatedArticles.length === 0 ? (
        <div>No news available.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-auto max-h-[80vh] p-2">
          {paginatedArticles.map((article, index) => (
            <Newscard key={index} article={article} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Previous
        </button>

        <p className="font-semibold">
          Page {page} / {Math.ceil(articles.length / ITEMS_PER_PAGE)}
        </p>

        <button
          disabled={end >= articles.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
