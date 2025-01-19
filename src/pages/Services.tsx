import { DollarSign, LineChart, Calculator } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management solutions tailored to your unique financial goals and aspirations.',
    icon: DollarSign,
    features: [
      'Portfolio Management',
      'Risk Assessment',
      'Estate Planning',
      'Tax Optimization'
    ],
    detailedDescription: `Our wealth management service takes a holistic approach to your financial well-being. We combine sophisticated investment strategies with comprehensive financial planning to help you achieve your long-term goals. Our team of experienced professionals works closely with you to understand your unique situation, risk tolerance, and objectives to create a customized wealth management strategy.`
  },
  {
    title: 'Investment Banking',
    description: 'Strategic financial advisory services for corporations, institutions, and high-net-worth individuals.',
    icon: LineChart,
    features: [
      'Mergers & Acquisitions',
      'Capital Markets',
      'Corporate Finance',
      'Strategic Advisory'
    ],
    detailedDescription: `Our investment banking team provides comprehensive financial advisory services to corporations, institutions, and high-net-worth individuals. We offer strategic guidance on mergers and acquisitions, capital raising, and corporate restructuring. Our experienced professionals leverage their deep industry knowledge and extensive network to help clients achieve their strategic objectives.`
  },
  {
    title: 'Tax Planning',
    description: 'Advanced tax strategies to optimize your financial position and minimize tax liability.',
    icon: Calculator,
    features: [
      'Tax Optimization',
      'Compliance',
      'International Tax',
      'Estate Tax Planning'
    ],
    detailedDescription: `Our tax planning services help individuals and businesses optimize their tax position while ensuring full compliance with applicable regulations. We take a proactive approach to tax planning, identifying opportunities for tax efficiency and implementing strategies to minimize your tax burden. Our team stays current with tax laws and regulations to provide you with the most effective tax planning solutions.`
  }
];

export function Services() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive financial solutions tailored to your unique needs and goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}