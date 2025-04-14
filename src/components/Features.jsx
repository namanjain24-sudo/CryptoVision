import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Real-time Analytics",
    description: "Get instant insights with our real-time data processing and analytics engine."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Market Data",
    description: "Access comprehensive data from all major exchanges and markets worldwide."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Portfolio",
    description: "Your data is encrypted and secured with enterprise-grade protection."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Private Insights",
    description: "Get personalized insights without compromising your privacy."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Custom Alerts",
    description: "Set up custom alerts for price movements, volume changes, and more."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-black relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1a1a1a] rounded-full px-5 py-1.5 mb-6">
            <span className="text-[#4CAF50] text-sm font-medium">Powerful Features</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Everything you need to<br />master crypto
          </h3>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our platform combines powerful analytics with an intuitive interface to help you make better decisions.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* First 3 features */}
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#4CAF50]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4CAF50]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-[#4CAF50]/10 text-[#4CAF50] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4CAF50] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          {/* Centered row with last 2 features */}
          <div className="lg:col-span-3 flex justify-center gap-6 flex-wrap">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="group relative w-full max-w-sm bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#4CAF50]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4CAF50]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-[#4CAF50]/10 text-[#4CAF50] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4CAF50] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
