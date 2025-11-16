type Props = {
  article: any;
};

const Newscard = ({ article }: Props) => {

    const handleClick = ( () => {
        window.open(article.url,"_blank")
    }) 


  return (
    <div className="p-4 bg-white shadow rounded w-200 h-200"
    onClick={handleClick}>

      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
          className="rounded w-full my-3 object-cover"
        />
      )}
      
      <h2 className="font-bold text-lg">{article.title}</h2>
      <p className="text-gray-700">{article.description}</p>

      <a
        href={article.url}
        target="_blank"
        className="text-blue-600 underline mt-2 block"
      >
       Click to read more...→
      </a>
    </div>
  );
};

export default Newscard;
