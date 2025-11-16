type Props = {
  item: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
};

const HomeNewsCard = ({ item }: Props) => {
  return (
    <div
      className="bg-white rounded-lg shadow p-3 cursor-pointer hover:scale-[1.02] transition"
      onClick={() => window.open(item.url, "_blank")}
    >
      <img
        src={item.image}
        alt="news"
        className="w-full h-[180px] object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-3 line-clamp-2">{item.title}</h2>

      <p className="text-gray-600 mt-1 text-sm line-clamp-3">
        {item.description}
      </p>

      <span className="text-blue-600 mt-2 block text-sm">Read more →</span>
    </div>
  );
};

export default HomeNewsCard;
