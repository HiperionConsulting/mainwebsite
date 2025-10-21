import {
  TrendingUp,
  Shield,
  LineChart,
  Briefcase,
  Database,
  Cloud,
  Lock,
  Cpu,
  Code,
  Server,
  Smartphone,
  Globe,
} from 'lucide-react';

export default function Services() {
  const financialServices = [
    {
      icon: TrendingUp,
      title: 'Investment Strategy',
      description:
        'Develop comprehensive investment strategies aligned with your risk tolerance and financial goals. Our team analyzes market trends and creates diversified portfolios for optimal returns.',
    },
    {
      icon: LineChart,
      title: 'Financial Analysis',
      description:
        'In-depth financial modeling, forecasting, and performance analysis. We provide actionable insights to improve profitability and operational efficiency.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description:
        'Identify, assess, and mitigate financial risks. Our comprehensive risk management framework protects your assets and ensures business continuity.',
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description:
        'Expert guidance through mergers, acquisitions, and corporate restructuring. We handle due diligence, valuation, and deal structuring.',
    },
    {
      icon: Database,
      title: 'Capital Optimization',
      description:
        'Optimize your capital structure and working capital management. We help you make strategic decisions about debt, equity, and asset allocation.',
    },
    {
      icon: Lock,
      title: 'Compliance & Audit',
      description:
        'Ensure regulatory compliance and financial transparency. Our audit services identify areas of improvement and maintain stakeholder confidence.',
    },
  ];

  const technologyServices = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Migrate to cloud infrastructure with AWS, Azure, or Google Cloud. We design scalable, secure, and cost-effective cloud architectures.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description:
        'Implement AI-driven analytics, predictive modeling, and automation. Transform data into actionable intelligence for competitive advantage.',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description:
        'Build tailored software solutions that address your unique business challenges. From web applications to enterprise systems.',
    },
    {
      icon: Server,
      title: 'Infrastructure Modernization',
      description:
        'Upgrade legacy systems and implement modern DevOps practices. Improve reliability, performance, and maintainability.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description:
        'Develop native and cross-platform mobile applications. Create seamless user experiences across iOS and Android devices.',
    },
    {
      icon: Globe,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions. Penetration testing, security audits, and incident response.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting services that bridge the gap between financial strategy and technological innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Financial Consulting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic financial guidance to maximize value and minimize risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service, index) => {
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technology Consulting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions that drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-200 p-8 rounded-xl hover:shadow-2xl hover:border-blue-400 transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-slate-700" />
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

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Tailored Solutions for Your Business
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every business is unique. We work closely with you to understand your specific challenges and create customized solutions that deliver measurable results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
