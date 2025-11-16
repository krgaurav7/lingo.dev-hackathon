import JoinUs from '../../components/joinus/Joinus';
const   HomeNews: React.FC = () => {
  return (
    <div className="max-w mx-auto bg-gray-300">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-blue-700">Welcome to Fast News</h1>
          <p className="text-gray-600 mt-3">
            Bringing you the latest updates from around the world 🌍
          </p>
        </div>
        <div className="flex justify-cente p-2 rounded-lg w-full h-full gap-3">
            <div id="mainnews" className="w-200 h-150 bg-white p-3 rounded-lg shadow-md">
                <img
                    src="https://th-i.thgim.com/public/incoming/owcdiv/article70276685.ece/alternates/LANDSCAPE_615/20251113150L.jpg"
                    alt="Join Fast News"
                    className="w-full h-auto rounded-lg shadow hover:scale-101 transition-transform duration-500"
                />
                <h1 
                    id="main"
                    className="text-3xl font-bold mb-4">Delhi blast LIVE updates: Association of Indian Universities suspends Al-Falah's membership; Professor, cardiology student detained
                </h1>
                <h2 
                    id=""
                    className=""> A college professor and medical student, both from Jammu and Kashmir, were detained in Uttar Pradesh's Hapur and Kanpur, respectively, in connection with the November 10 Delhi blast, officials say
                </h2>
            </div>
            <div id="2ndmainnews" className="w-200 h-150  bg-white p-3 rounded-lg shadow-md">
                <img
                    src="https://th-i.thgim.com/public/incoming/owcdiv/article70276685.ece/alternates/LANDSCAPE_615/20251113150L.jpg"
                    alt="Join Fast News"
                    className="w-full h-auto rounded-lg shadow hover:scale-101 transition-transform duration-500"
                />
                <h1 
                    id="main"
                    className="text-3xl font-bold mb-4">Delhi blast LIVE updates: Association of Indian Universities suspends Al-Falah's membership; Professor, cardiology student detained
                </h1>
                <h2 
                    id=""
                    className=""> A college professor and medical student, both from Jammu and Kashmir, were detained in Uttar Pradesh's Hapur and Kanpur, respectively, in connection with the November 10 Delhi blast, officials say
                </h2>
            </div>
        </div>
        <JoinUs />
    </div>
  );
};

export default HomeNews;