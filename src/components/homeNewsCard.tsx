import { ExternalLink, Clock, ArrowRight } from "lucide-react";


type Props = {
  item: {
    title: string;
    description: string;
    image: string;
    url: string;
    category?: string;
    readTime?: string;
  };
};

const HomeNewsCard = ({ item }: Props) => {
  return (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-gray-100"
      onClick={() => window.open(item.url, "_blank")}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        {item.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
              {item.category}
            </span>
          </div>
        )}

        {/* External Link Icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ExternalLink className="w-4 h-4 text-gray-800" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta Info */}
        {item.readTime && (
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Clock className="w-3 h-3" />
            <span>{item.readTime} read</span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          <span>Read more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default HomeNewsCard;