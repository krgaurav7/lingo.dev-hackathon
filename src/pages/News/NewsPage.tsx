import { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "../../components/newscard/Newscard";

const NewsPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`;

      const response = await axios.get(url);

      // NewsAPI returns articles under "articles"
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


  return (
    <div id="news" className="max-w-5xl mx-auto bg-gray-300 p-0 mt-2">
      {articles.length === 0 ? (
        <div>No news available.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {articles.map((article, index) => (
            <Newscard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
