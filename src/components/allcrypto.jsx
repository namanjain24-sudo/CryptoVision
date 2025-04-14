import React, { useEffect, useState, useRef } from 'react';

import {
  Search,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

export default function CryptoSearch() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  // track retry delay for exponential backoff
  const retryDelayRef = useRef(30000);
  // avoid state updates after unmount
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
  
    const fetchCryptoData = async () => {
      try {
        if (!isMountedRef.current) return;
  
        setLoading(true); // set loading true only on manual/initial fetch
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?' +
            new URLSearchParams({
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: '100',
              sparkline: 'false',
            })
        );
  
        if (!response.ok) {
          const body = await response.text();
          console.error('[Coingecko]', response.status, body);
          throw new Error(`API returned ${response.status}`);
        }
  
        const data = await response.json();
        if (!isMountedRef.current) return;
  
        setCryptoData(data);
        setError(null);
        retryDelayRef.current = 30000; // reset delay on success
      } catch (err) {
        console.error('Fetch error:', err);
        if (!isMountedRef.current) return;
  
        setError(`Failed to load data: ${err.message}`);
        retryDelayRef.current = Math.min(retryDelayRef.current * 2, 5 * 60 * 1000);
      } finally {
        if (!isMountedRef.current) return;
        setLoading(false);
      }
    };
  
    let timeoutId;
  
    const scheduleFetch = async () => {
      await fetchCryptoData();
      if (!isMountedRef.current) return;
      timeoutId = setTimeout(scheduleFetch, retryDelayRef.current);
    };
  
    // Immediately fetch and then start recurring fetch
    scheduleFetch();
  
    return () => {
      isMountedRef.current = false;
      clearTimeout(timeoutId);
    };
  }, []);
  

  const formatPrice = (price) =>
    price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const formatMarketCap = (mc) => {
    if (mc >= 1e12) return `$${(mc / 1e12).toFixed(2)}T`;
    if (mc >= 1e9) return `$${(mc / 1e9).toFixed(2)}B`;
    if (mc >= 1e6) return `$${(mc / 1e6).toFixed(2)}M`;
    return `$${mc.toLocaleString()}`;
  };

  const filteredCryptos = cryptoData.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: 'Market Leaders',
              icon: <TrendingUp className="text-green-500" size={20} />,
              value: cryptoData.length,
              subtitle: 'Top cryptocurrencies tracked',
            },
            {
              title: 'Real-time Updates',
              icon: <Clock className="text-blue-500" size={20} />,
              value: '30s',
              subtitle: 'Price refresh rate',
            },
            {
              title: 'Total Market Cap',
              icon: <DollarSign className="text-yellow-500" size={20} />,
              value:
                cryptoData.length > 0
                  ? formatMarketCap(
                      cryptoData.reduce((a, c) => a + c.market_cap, 0)
                    )
                  : '$0',
              subtitle: 'Combined market value',
            },
            {
              title: '24h Volume',
              icon: <BarChart3 className="text-purple-500" size={20} />,
              value:
                cryptoData.length > 0
                  ? formatMarketCap(
                      cryptoData.reduce((a, c) => a + c.total_volume, 0)
                    )
                  : '$0',
              subtitle: 'Total trading volume',
            },
          ].map((stat) => (
            <div
              key={stat.title}
              className="bg-[#1C2635]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#2E3D54]/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">{stat.title}</h3>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-green-500" size={24} />
            </div>
            <input
              type="text"
              placeholder="Search by name or symbol..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1C2635]/80 backdrop-blur-sm border-2 border-[#2E3D54]/50 rounded-2xl py-4 pl-14 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-lg shadow-xl"
            />
          </div>
        </div>

        {/* Results */}
        {error ? (
          <div className="text-center py-12 text-red-400 bg-red-500/10 rounded-2xl border border-red-500/20">
            <p>{error}</p>
          </div>
        ) : loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-green-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-400">Loading cryptocurrency data...</p>
          </div>
        ) : (
          <div className="bg-[#1C2635]/50 backdrop-blur-sm rounded-2xl border border-[#2E3D54]/30 overflow-hidden shadow-xl">
            {filteredCryptos.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-gray-400 border-b border-[#2E3D54]/30">
                      <th className="text-left py-4 px-6 font-medium">Asset</th>
                      <th className="text-right py-4 px-6 font-medium">Price</th>
                      <th className="text-right py-4 px-6 font-medium">24h Change</th>
                      <th className="text-right py-4 px-6 font-medium">Market Cap</th>
                      <th className="text-right py-4 px-6 font-medium">Volume (24h)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCryptos.map((crypto) => (
                      <tr
                        key={crypto.id}
                        className="border-b border-[#2E3D54]/30 hover:bg-[#232F43]/50 transition-colors duration-200"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <img
                              src={crypto.image}
                              alt={crypto.name}
                              className="w-10 h-10 rounded-full bg-white/5 p-1"
                            />
                            <div>
                              <div className="font-medium">{crypto.name}</div>
                              <div className="text-sm text-gray-400">
                                {crypto.symbol.toUpperCase()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right py-4 px-6 font-medium">
                          {formatPrice(crypto.current_price)}
                        </td>
                        <td className="text-right py-4 px-6">
                          <span
                            className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-sm ${
                              crypto.price_change_percentage_24h >= 0
                                ? 'text-green-500 bg-green-500/10'
                                : 'text-red-500 bg-red-500/10'
                            }`}
                          >
                            {crypto.price_change_percentage_24h >= 0 ? (
                              <ArrowUpRight size={16} />
                            ) : (
                              <ArrowDownRight size={16} />
                            )}
                            <span>
                              {Math.abs(
                                crypto.price_change_percentage_24h
                              ).toFixed(2)}
                              %
                            </span>
                          </span>
                        </td>
                        <td className="text-right py-4 px-6 text-gray-300">
                          {formatMarketCap(crypto.market_cap)}
                        </td>
                        <td className="text-right py-4 px-6 text-gray-300">
                          {formatMarketCap(crypto.total_volume)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                No cryptocurrencies found matching your search.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
