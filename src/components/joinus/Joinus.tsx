import React, { useState } from "react";
import { Mail, CheckCircle, TrendingUp, Bell, Users } from "lucide-react";

const JoinUs: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 px-6 w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Icon Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2">
            <Bell className="w-4 h-4 text-white animate-pulse" />
            <span className="text-white text-sm font-semibold">NEWSLETTER</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join the{" "}
            <span className="bg-linear-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Fast News
            </span>{" "}
            Community
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the headlines! Subscribe to our newsletter and never
            miss the latest stories, breaking news, or insights from around the
            world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Breaking News First</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <Mail className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Daily Digest</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <Users className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white text-sm font-medium">50K+ Subscribers</p>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="max-w-2xl mx-auto">
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-linear-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-300 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
              <p className="text-white/90">Check your inbox for a confirmation email.</p>
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-white/70 mt-6 max-w-xl mx-auto">
          By subscribing, you agree to receive updates from Fast News. You can
          unsubscribe anytime. We respect your privacy. 🔒
        </p>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-8 mt-10 flex-wrap">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">50K+</p>
            <p className="text-sm text-white/70">Active Readers</p>
          </div>
          <div className="h-12 w-px bg-white/30 hidden sm:block"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">Daily</p>
            <p className="text-sm text-white/70">Updates</p>
          </div>
          <div className="h-12 w-px bg-white/30 hidden sm:block"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-white/70">Free</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;