import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="bg-gray-400 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Join the <span className="text-white">Fast News</span> Community
        </h2>
        <p className="mb-8 text-lg text-white">
          Stay ahead of the headlines! Subscribe to our newsletter and never
          miss the latest stories, breaking news, or insights from around the
          world.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>

        {/* Bottom Note */}
        <p className="text-sm mt-6">
          By subscribing, you agree to receive updates from Fast News. You can
          unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
