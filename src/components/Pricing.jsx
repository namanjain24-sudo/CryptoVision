import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    price: "19",
    features: [
      "Basic portfolio tracking",
      "Market data access",
      "5 custom alerts",
      "Email support"
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-[#2A2A2A] hover:bg-[#333333]"
  },
  {
    name: "Pro",
    description: "For serious traders",
    price: "49",
    features: [
      "Advanced portfolio analytics",
      "Real-time market data",
      "Unlimited custom alerts",
      "AI-powered insights",
      "Priority support"
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-[#22C55E] hover:bg-[#1EA34D]",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For institutions",
    price: "199",
    features: [
      "Full API access",
      "Custom integrations",
      "Advanced security features",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom reporting"
    ],
    buttonText: "Contact Sales",
    buttonStyle: "bg-[#2A2A2A] hover:bg-[#333333]"
  }
];

function FeatureItem({ children }) {
  return (
    <li className="flex items-center space-x-1 text-[15px] text-gray-300 group">
      <Check size={18} className="text-[#22C55E] flex-shrink-0 transition-transform group-hover:scale-110" />
      <span className="group-hover:text-white transition-colors">{children}</span>
    </li>
  );
}

function PricingCard({ plan }) {
  return (
    <div className={`rounded-2xl ${plan.popular ? 'bg-gradient-dark' : 'bg-[#1C1C1C]'} p-8 relative group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#22C55E]/10`}>
      {/* Glow effect for popular plan */}
      {plan.popular && (
        <div className="absolute inset-0 rounded-2xl bg-[#22C55E] opacity-[0.03] blur-xl group-hover:opacity-[0.06] transition-opacity" />
      )}

      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-[#22C55E] text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
            <Sparkles size={14} className="animate-pulse" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}

      <div className="space-y-6 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22C55E] transition-colors">{plan.name}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{plan.description}</p>
        </div>
        
        <div>
          <div className="flex items-baseline">
            <span className="text-6xl font-bold text-white group-hover:text-[#22C55E] transition-colors">${plan.price}</span>
            <span className="ml-2 text-gray-400">per month</span>
          </div>
        </div>

        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </ul>

        <button 
          className={`w-full py-4 px-4 rounded-lg text-white font-medium transition-all duration-200 
            flex items-center justify-center space-x-2 ${plan.buttonStyle}
            transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#22C55E]/20`}
        >
          <span>{plan.buttonText}</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id="pricing" className="min-h-screen bg-black pt-6 pb-24 px-4 relative overflow-hidden scroll-mt-20">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22C55E] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.015] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22C55E] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.015] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#0A2A1B] text-[#22C55E] px-6 py-2 rounded-full text-sm font-medium mb-6 border border-[#22C55E]/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            Pricing
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}