import React from 'react';
import useSWR from 'swr';
import {
  Area, AreaChart, ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import {
  Activity, TrendingUp, ArrowUpRight, ArrowDownRight, Users, BarChart2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ⬅️ added this

const fetcher = (url) => fetch(url).then(res => res.json());

function LiveDashboard() {
  const navigate = useNavigate(); // ⬅️ initialize useNavigate

  const { data: marketData } = useSWR(
    'https://api.coingecko.com/api/v3/global',
    fetcher,
    { refreshInterval: 60000 }
  );

  const { data: bitcoinData } = useSWR(
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily',
    fetcher,
    { refreshInterval: 60000 }
  );

  const { data: topCoins } = useSWR(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&sparkline=true',
    fetcher,
    { refreshInterval: 60000 }
  );

  const { data: volumeData } = useSWR(
    'https://api.coingecko.com/api/v3/exchanges?per_page=5',
    fetcher,
    { refreshInterval: 60000 }
  );

  const marketCap = marketData?.data?.total_market_cap?.usd || 0;
  const marketCapT = (marketCap / 1e12).toFixed(1);
  const marketCapChange = marketData?.data?.market_cap_change_percentage_24h_usd || 0;
  const totalVolume = marketData?.data?.total_volume?.usd || 0;
  const volumeChange = ((totalVolume / marketCap) * 100) - 100;

  const chartData = bitcoinData?.prices?.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    value: price
  })) || [];

  const volumeChartData = volumeData?.slice(0, 5)?.map((exchange) => ({
    name: exchange.name,
    volume: exchange.trade_volume_24h_btc
  })) || [];

  const dominanceData = [
    { name: 'Bitcoin', value: marketData?.data?.market_cap_percentage?.btc || 0 },
    { name: 'Ethereum', value: marketData?.data?.market_cap_percentage?.eth || 0 },
    {
      name: 'Others',
      value: 100 - ((marketData?.data?.market_cap_percentage?.btc || 0) +
        (marketData?.data?.market_cap_percentage?.eth || 0))
    }
  ];

  const COLORS = ['#10B981', '#6366F1', '#374151'];

  return (
    <section id="live-dashboard" className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-900 text-emerald-400">
              Live Dashboard
            </span>
            <Activity className="text-emerald-400 animate-pulse" />
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span>Auto-updating every minute</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful insights at a glance
          </h1>
          <p className="text-gray-400 text-lg">
            Monitor your portfolio performance and market trends with our comprehensive dashboard.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Market Cap" value={`$${marketCapT}T`} change={marketCapChange} isPositive={marketCapChange >= 0} icon={<BarChart2 className="w-5 h-5" />} />
          <StatCard title="24h Volume" value={`$${(totalVolume / 1e9).toFixed(1)}B`} change={volumeChange} isPositive={volumeChange >= 0} icon={<TrendingUp className="w-5 h-5" />} />
          <StatCard title="Active Markets" value={marketData?.data?.markets || 0} change={2.5} isPositive={true} icon={<Activity className="w-5 h-5" />} />
          <StatCard title="Active Traders" value={(marketData?.data?.active_cryptocurrencies || 0).toLocaleString()} change={5.8} isPositive={true} icon={<Users className="w-5 h-5" />} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Bitcoin Price */}
          <ChartCard title="Bitcoin Price" subtitle="Last 7 days">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#10B981" fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Trading Volume */}
          <ChartCard title="Trading Volume" subtitle="Top exchanges (24h)">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="volume" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Market Dominance */}
          <ChartCard title="Market Dominance" subtitle="Distribution by market cap">
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie data={dominanceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {dominanceData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#10B981', border: 'none', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-full mt-4 flex justify-center">
              <div className="flex items-center space-x-6">
                {dominanceData.map((item, index) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>

          {/* Top Coins Table */}
          <ChartCard title="Top Cryptocurrencies" subtitle="By market capitalization">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="pb-4 w-1/4">Name</th>
                    <th className="pb-4 w-1/4">Price</th>
                    <th className="pb-4 w-1/4">24h Change</th>
                    <th className="pb-4 w-1/4">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {topCoins?.map((coin) => (
                    <tr key={coin.id} className="border-t border-gray-800 text-sm">
                      <td className="py-4 w-1/4 truncate">
                        <div className="flex items-center space-x-2">
                          <img src={coin.image} alt={coin.name} className="w-4 h-4" />
                          <span className="truncate">{coin.name}</span>
                        </div>
                      </td>
                      <td className="py-4 w-1/4">${coin.current_price.toLocaleString()}</td>
                      <td className={`py-4 w-1/4 ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="py-4 w-1/4">${(coin.market_cap / 1e9).toFixed(2)}B</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View All Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => navigate('/all-crypto')}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
              >
                View All
              </button>
            </div>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value, change, isPositive, icon }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">{title}</span>
          {icon}
        </div>
        <span className="text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-400">Live</span>
      </div>
      <div className="flex items-baseline space-x-3">
        <span className="text-3xl font-bold">{value}</span>
        <div className={`flex items-center ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{Math.abs(change).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-400">Live</span>
      </div>
      <div className="h-[300px] w-full">
        {children}
      </div>
    </div>
  );
}

export default LiveDashboard;
