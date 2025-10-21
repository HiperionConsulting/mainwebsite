import {
  Database,
  Cloud,
  Shield,
  Cpu,
  Code,
  BarChart3,
  Lock,
  Zap,
  Server,
  GitBranch,
  Container,
  Activity,
} from 'lucide-react';

export default function Technology() {
  const techStack = [
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      technologies: [
        { name: 'Amazon Web Services', description: 'Scalable cloud computing platform' },
        { name: 'Microsoft Azure', description: 'Enterprise cloud solutions' },
        { name: 'Google Cloud Platform', description: 'Modern cloud infrastructure' },
        { name: 'Kubernetes', description: 'Container orchestration' },
      ],
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced relational database' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'Apache Kafka', description: 'Real-time data streaming' },
        { name: 'Elasticsearch', description: 'Search and analytics engine' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      technologies: [
        { name: 'TensorFlow', description: 'Deep learning framework' },
        { name: 'PyTorch', description: 'ML research and production' },
        { name: 'Scikit-learn', description: 'Machine learning library' },
        { name: 'OpenAI GPT', description: 'Advanced language models' },
      ],
    },
    {
      category: 'Development',
      icon: Code,
      technologies: [
        { name: 'React', description: 'Modern UI development' },
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'Python', description: 'Versatile programming language' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
      ],
    },
    {
      category: 'DevOps & CI/CD',
      icon: GitBranch,
      technologies: [
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Jenkins', description: 'Automation server' },
        { name: 'GitHub Actions', description: 'CI/CD workflows' },
        { name: 'Terraform', description: 'Infrastructure as code' },
      ],
    },
    {
      category: 'Security',
      icon: Shield,
      technologies: [
        { name: 'OAuth 2.0', description: 'Authorization framework' },
        { name: 'SSL/TLS', description: 'Encrypted communications' },
        { name: 'Vault', description: 'Secrets management' },
        { name: 'WAF', description: 'Web application firewall' },
      ],
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized architectures delivering sub-second response times.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption and compliance standards.',
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling systems that grow with your business needs.',
    },
    {
      icon: Container,
      title: 'Microservices',
      description: 'Modular architecture for flexibility and maintainability.',
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Comprehensive observability and alerting systems.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Advanced analytics and business intelligence solutions.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Technology</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and industry best practices to build robust, scalable, and secure solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade tools and platforms powering next-generation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-400 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                        <p className="text-slate-600 text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
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
              Technical Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on modern principles for reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-200"
                >
                  <div className="bg-slate-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
              Our Development Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Discovery & Planning
                  </h3>
                  <p className="text-slate-600">
                    We analyze your requirements, assess technical constraints, and design a comprehensive solution architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Agile Development
                  </h3>
                  <p className="text-slate-600">
                    Iterative development with continuous integration, automated testing, and regular stakeholder feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive testing including unit tests, integration tests, security audits, and performance optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Deployment & Support
                  </h3>
                  <p className="text-slate-600">
                    Seamless deployment with zero downtime, comprehensive documentation, and ongoing maintenance support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our technical experts help you choose the right technology stack for your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
