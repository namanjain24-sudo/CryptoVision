import GridBackground from './GridBackground';
export default function Hero() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block bg-[#1a1a1a] rounded-full px-6 py-2 mb-8">
          <span className="text-[#4CAF50]">Next-Gen Crypto Analytics</span>
        </div>
        
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Your Edge in Crypto Analytics
        </h1>
        
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
        Track, analyze, and optimize your portfolio like a pro. Real-time data and smart tools give you control over every move.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg hover:bg-[#45a049] transition-colors flex items-center gap-2">
            Start for free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button className="border border-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
            Watch demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
      </div>
    );
  }