import React, { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'SOLUSDT', 'DOGEUSDT', 'DOTUSDT'];

export default function PriceTicker() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch current prices
        const priceResponse = await fetch(
          'https://api.binance.com/api/v3/ticker/price?symbols=' + JSON.stringify(SYMBOLS)
        );
        const priceData = await priceResponse.json();

        // Fetch 24h price changes
        const statsResponse = await fetch(
          'https://api.binance.com/api/v3/ticker/24hr?symbols=' + JSON.stringify(SYMBOLS)
        );
        const statsData = await statsResponse.json();

        const formattedPrices = priceData.map((item, index) => ({
          symbol: item.symbol.replace('USDT', ''),
          price: parseFloat(item.price),
          changePercent: parseFloat(statsData[index].priceChangePercent)
        }));
        
        setPrices(formattedPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 120000); // Update every 2 minutes

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-black text-white p-2 overflow-hidden">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black text-white p-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex space-x-8">
        {[...prices, ...prices].map((crypto, index) => (
          <div key={`${crypto.symbol}-${index}`} className="inline-flex items-center space-x-2">
            <span className="font-medium">{crypto.symbol}</span>
            <span className="font-bold">
              ${crypto.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </span>
            <span className={`flex items-center ${crypto.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {crypto.changePercent >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {Math.abs(crypto.changePercent).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
