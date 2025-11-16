import React, { useState } from "react";
import { Star, ThumbsUp, MessageCircle, TrendingUp, Award, Users } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  likes: number;
  verified: boolean;
}

const Reviews: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      date: "2 days ago",
      title: "Best news platform I've used!",
      content: "Fast News delivers exactly what it promises - fast, reliable, and comprehensive news coverage. The interface is clean and the articles are well-written. Highly recommended!",
      likes: 42,
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      date: "5 days ago",
      title: "Keeps me informed daily",
      content: "I start my morning with Fast News every day. The breaking news alerts are timely and accurate. Love the mobile app too!",
      likes: 38,
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 4,
      date: "1 week ago",
      title: "Great content, easy to navigate",
      content: "The variety of news categories is impressive. I appreciate the unbiased reporting and the depth of analysis in feature articles.",
      likes: 29,
      verified: false
    },
    {
      id: 4,
      name: "David Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      date: "1 week ago",
      title: "Professional journalism at its finest",
      content: "Fast News has become my go-to source for world events. The investigative pieces are thorough and the breaking news coverage is unmatched.",
      likes: 51,
      verified: true
    },
    {
      id: 5,
      name: "Lisa Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rating: 4,
      date: "2 weeks ago",
      title: "Reliable and trustworthy",
      content: "In a world of misinformation, Fast News stands out for its commitment to factual reporting. The subscription is worth every penny.",
      likes: 33,
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 5,
      date: "3 weeks ago",
      title: "Exceeded my expectations",
      content: "The quality of journalism here is exceptional. I love the in-depth analysis and the variety of perspectives presented.",
      likes: 45,
      verified: false
    }
  ];

  const filteredReviews = selectedRating 
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    stars: rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">CUSTOMER REVIEWS</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our Readers Say
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied readers who trust Fast News for their daily updates
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <Award className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">{averageRating}</div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <p className="text-white/70 text-sm">Average Rating</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <Users className="w-10 h-10 text-blue-300 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">{totalReviews}K+</div>
            <p className="text-white/70 text-sm">Total Reviews</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <TrendingUp className="w-10 h-10 text-green-300 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-white/70 text-sm">Recommended</p>
          </div>
        </div>

        {/* Rating Distribution & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Rating Distribution */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Rating Distribution</h3>
              
              {ratingDistribution.map(({ stars, count, percentage }) => (
                <div key={stars} className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-medium text-sm w-6">{stars}</span>
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-linear-to-r from-yellow-400 to-orange-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-white/70 text-sm w-8">{count}</span>
                  </div>
                </div>
              ))}

              {/* Filter Buttons */}
              <div className="mt-8 space-y-2">
                <button
                  onClick={() => setSelectedRating(null)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedRating === null
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  All Reviews
                </button>
                {[5, 4].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedRating === rating
                        ? 'bg-white text-purple-600'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {rating} Stars Only
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
              >
                {/* Review Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-green-500/20 text-green-300 text-xs font-semibold px-2 py-1 rounded-full border border-green-500/30">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-4 h-4 ${
                              star <= review.rating 
                                ? 'fill-yellow-300 text-yellow-300' 
                                : 'text-white/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white/60 text-sm">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <h5 className="font-bold text-white text-lg mb-2">{review.title}</h5>
                <p className="text-white/80 leading-relaxed mb-4">{review.content}</p>

                {/* Review Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Helpful ({review.likes})</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-white/80 mb-6">
              Have you tried Fast News? We'd love to hear your thoughts!
            </p>
            <button className="bg-linear-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;