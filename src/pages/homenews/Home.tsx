import { homeNewsData } from "../../data/homenews";
import HomeNewsCard from "../../components/homeNewsCard"
import JoinUs from "../../components/joinus/Joinus";

const HomeNews: React.FC = () => {
  return (
    <div className="max-w mx-auto bg-gray-300 min-h-screen">
      
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to Fast News</h1>
        <p className="text-gray-600 mt-3">
          Bringing you the latest updates from around the world 🌍
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 pb-10">
        {homeNewsData.map((item, index) => (
          <HomeNewsCard key={index} item={item} />
        ))}
      </div>

      <JoinUs />
    </div>
  );
};

export default HomeNews;
