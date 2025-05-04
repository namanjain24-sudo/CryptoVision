import React, { useEffect, useState } from "react";
import {
  Newspaper,
  ArrowRight,
  TrendingUp,
  Clock,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const LatestNews = () => {
  const [newsData, setNewsData] = useState({
    status: "loading",
    error: null,
    items: [],
  });

  useEffect(() => {
    const processNewsData = (rawData) => {
      return rawData.slice(0, 6).map((item, index) => ({
        id: item.id,
        categories: item.categories
          .split("|")
          .slice(0, 2)
          .map((cat) => ({
            name: cat.trim(),
            color: "green",
          })),
        title: item.title,
        body: item.body,
        published_on: item.published_on,
        url: item.url,
        imageurl: item.imageurl,
        isTrending: index < 3,
      }));
    };

    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;
        if (!apiKey) {
          throw new Error(
            "CryptoCompare API key not found in environment variables."
          );
        }
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news. Please try again later.");
        }

        const data = await response.json();
        setNewsData({
          status: "success",
          error: null,
          items: processNewsData(data.Data),
        });
      } catch (err) {
        setNewsData({
          status: "error",
          error: err.message || "An unknown error occurred.",
          items: [],
        });
      }
    };

    fetchNews();
  }, []);

  const renderHeader = () => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Newspaper className="w-8 h-8 text-green-500" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">
            Latest Crypto News
          </h2>
          <p className="text-gray-400 text-sm">
            Stay updated with the latest trends and updates
          </p>
        </div>
      </div>
      <a
        href="https://www.cryptocompare.com/news/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors bg-green-500/10 hover:bg-green-500/20 px-4 py-2 rounded-full"
      >
        <span>View All News</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );

  const renderNewsCard = (item) => (
    <article
      key={item.id}
      className="bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 group backdrop-blur-sm border border-gray-800/50 hover:border-green-500/30 shadow-xl hover:shadow-green-500/10"
    >
      {item.imageurl && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.imageurl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.isTrending && (
            <div className="absolute top-3 right-3 flex items-center gap-1 text-orange-500 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/30">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">Trending</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {item.categories.map((category, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full"
            >
              {category.name}
            </span>
          ))}
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link block"
        >
          <h3 className="text-xl font-semibold text-white mb-3 group-hover/link:text-green-500 transition-colors line-clamp-2 flex items-start gap-2">
            {item.title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </h3>
        </a>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {item.body}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500 bg-black/30 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span>
              {formatDistanceToNow(new Date(item.published_on * 1000), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );

  if (newsData.status === "loading") {
    return (
      <section id="LatestNews" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
            <p className="text-gray-400">Loading latest crypto news...</p>
          </div>
        </div>
      </section>
    );
  }

  if (newsData.status === "error") {
    return (
      <section id="LatestNews" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
            <p className="text-red-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {newsData.error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="LatestNews" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        {renderHeader()}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.items.map(renderNewsCard)}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
