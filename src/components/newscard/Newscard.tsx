type Props = {
  article: any;
};

const Newscard = ({ article }: Props) => {
  const handleClick = () => {
    window.open(article.url, "_blank");
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-3 cursor-pointer hover:scale-[1.02] transition border h-[230px] flex flex-col"
      onClick={handleClick}
    >
      {/* Image */}
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
          className="w-[300px] h-[100px] object-cover rounded mx-auto"
        />
      )}

      {/* Title */}
      <h2 className="font-semibold text-sm mt-2 line-clamp-2">
        {article.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-xs mt-1 line-clamp-3">
        {article.description}
      </p>

      <span className="text-blue-600 text-xs underline mt-auto">
        Read more →
      </span>
    </div>
  );
};

export default Newscard;
