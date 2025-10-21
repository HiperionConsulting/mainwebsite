import {
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  LineChart,
  Target,
  Shield,
  Globe,
  Briefcase,
  Activity,
  Percent,
  Building2,
} from 'lucide-react';

export default function CapitalMarkets() {
  const marketServices = [
    {
      icon: TrendingUp,
      title: 'Equity Capital Markets',
      description:
        'IPO advisory, secondary offerings, and private placements. Strategic guidance through the entire equity raising process with institutional investor networks.',
    },
    {
      icon: Percent,
      title: 'Debt Capital Markets',
      description:
        'Bond issuance, corporate debt structuring, and fixed-income securities. Access to debt markets with optimal pricing and terms for your capital needs.',
    },
    {
      icon: PieChart,
      title: 'Structured Finance',
      description:
        'Asset-backed securities, securitization, and complex financial instruments. Innovative structures to unlock value and optimize capital efficiency.',
    },
    {
      icon: Building2,
      title: 'Real Estate Capital',
      description:
        'Commercial real estate financing, REITs, and property investment strategies. Comprehensive solutions for real estate capital requirements.',
    },
    {
      icon: Globe,
      title: 'Global Markets Access',
      description:
        'Cross-border transactions, international capital raising, and foreign exchange solutions. Navigate global markets with confidence.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description:
        'Hedging strategies, derivatives, and portfolio protection. Sophisticated risk management tools to safeguard your investments.',
    },
  ];

  const moneyMarketServices = [
    {
      icon: DollarSign,
      title: 'Treasury Management',
      description:
        'Short-term cash management, liquidity optimization, and working capital solutions. Maximize returns while maintaining flexibility.',
    },
    {
      icon: Activity,
      title: 'Money Market Instruments',
      description:
        'Commercial paper, treasury bills, certificates of deposit, and repos. Access to high-quality short-term investment vehicles.',
    },
    {
      icon: BarChart3,
      title: 'Cash Flow Optimization',
      description:
        'Daily liquidity management, cash forecasting, and payment solutions. Efficient systems to manage operational cash needs.',
    },
    {
      icon: Target,
      title: 'Yield Enhancement',
      description:
        'Strategies to maximize returns on idle cash while preserving capital. Balance safety, liquidity, and yield objectives.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Treasury Services',
      description:
        'Banking relationships, account management, and transaction services. Streamline your corporate treasury operations.',
    },
    {
      icon: LineChart,
      title: 'Interest Rate Advisory',
      description:
        'Rate forecasting, duration management, and interest rate risk mitigation. Expert insights on monetary policy and rate movements.',
    },
  ];

  // const marketInsights = [
  //   {
  //     metric: '$50B+',
  //     label: 'Capital Raised',
  //     description: 'For clients across equity and debt markets',
  //   },
  //   {
  //     metric: '200+',
  //     label: 'Transactions',
  //     description: 'Successfully executed capital market deals',
  //   },
  //   {
  //     metric: '35+',
  //     label: 'Countries',
  //     description: 'Global market access and expertise',
  //   },
  //   {
  //     metric: '24/7',
  //     label: 'Market Coverage',
  //     description: 'Round-the-clock monitoring and support',
  //   },
  // ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Capital & Money Markets
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Strategic access to capital markets and sophisticated money market solutions to fuel your growth and optimize liquidity.
          </p>
        </div>
      </section>

      {/*<section className="py-16 bg-white">*/}
      {/*  <div className="container mx-auto px-6">*/}
      {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">*/}
      {/*      {marketInsights.map((insight, index) => (*/}
      {/*        <div key={index} className="text-center">*/}
      {/*          <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">*/}
      {/*            {insight.metric}*/}
      {/*          </div>*/}
      {/*          <div className="text-lg font-semibold text-slate-900 mb-1">*/}
      {/*            {insight.label}*/}
      {/*          </div>*/}
      {/*          <div className="text-sm text-slate-600">{insight.description}</div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Capital Markets Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive advisory and execution capabilities across all capital market segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-200 p-8 rounded-xl hover:shadow-2xl hover:border-blue-400 transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Money Market Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert management of short-term liquidity and working capital optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moneyMarketServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 border-2 border-slate-200 p-8 rounded-xl hover:shadow-2xl hover:border-green-400 transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Market Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  Market Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Leverage real-time market data, advanced analytics, and proprietary research to make informed capital allocation decisions.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Real-time pricing and execution
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Comprehensive market research
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Competitive market positioning
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  Global Network
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Access extensive networks of institutional investors, banks, and market makers across major financial centers worldwide.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Institutional investor relationships
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Multi-currency capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Cross-border expertise
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  Risk Management
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sophisticated risk assessment and mitigation strategies to protect your capital while optimizing returns.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Credit risk assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Market risk hedging
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Regulatory compliance
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  Strategic Advisory
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Tailored strategies aligned with your corporate objectives, risk tolerance, and market conditions.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Capital structure optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Timing and pricing strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Long-term planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Access Capital Markets?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you need to raise capital, optimize liquidity, or execute complex transactions, our team is ready to help you navigate the markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Request Market Insights
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
