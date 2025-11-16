import { homeNewsData } from "../../data/homenews";
import HomeNewsCard from "../../components/homeNewsCard"
import JoinUs from "../../components/joinus/Joinus";
import Homeland from "./homeland.tsx"
import Reviews from "../../pages/review/Review.tsx"

const HomeNews: React.FC = () => {
  return (
    <div className="max-w mx-auto bg-gray-300 min-h-screen">
      
      {/* Header */}
      <Homeland />

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 pb-10 mt-10">
        {homeNewsData.map((item, index) => (
          <HomeNewsCard key={index} item={item} />
        ))}
      </div>
      <Reviews />
      <JoinUs />
    </div>
  );
};

export default HomeNews;
