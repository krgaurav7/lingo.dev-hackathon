import axios from "axios";

export const fetchHomeNewsData = async () => {
  try {
    const url = `https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&pageSize=10&apiKey=${
      import.meta.env.VITE_VERCEL_NEWS_API_KEY
    }`;

    const response = await axios.get(url);
    const articles = response.data.articles || [];

    return articles.map((article: any) => ({
      title: article.title,
      description: article.description || "No description available",
      image: article.urlToImage || "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=60",
      url: article.url,
      category: "Sports",
      readTime: "5 min"
    }));
  } catch (error) {
    console.error("Error fetching sports news:", error);
    return [];
  }
};