import {  Calculator, Briefcase, FileText, Hourglass, Lightbulb, PieChart, Shield, TrendingUp } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';


const services = [
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
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive strategies to grow, protect, and transfer your wealth effectively.',
    icon: Briefcase,
    features: [
      'Investment Planning',
      'Retirement Planning',
      'Risk Management',
      'Wealth Transfer Strategies'
    ],
    detailedDescription: `Our wealth management services are tailored to help you achieve your long-term financial goals. We create personalized plans that combine investment strategies, retirement planning, and risk management to protect and grow your wealth. Our experts work closely with you to ensure your wealth is effectively transferred to the next generation.`
  },
  {
    title: 'Financial Advisory',
    description: 'Personalized financial advice for individuals and businesses to achieve their goals.',
    icon: PieChart,
    features: [
      'Budget Analysis',
      'Strategic Planning',
      'Debt Management',
      'Cash Flow Optimization'
    ],
    detailedDescription: `Our financial advisory services are designed to provide actionable insights and recommendations for managing your finances effectively. Whether you're an individual or a business, we assist with budgeting, debt management, and strategic planning to ensure you meet your financial objectives.`
  },
  {
    title: 'Risk Assessment',
    description: 'Identify, evaluate, and mitigate risks to safeguard your assets and investments.',
    icon: Shield,
    features: [
      'Risk Identification',
      'Contingency Planning',
      'Business Continuity',
      'Insurance Analysis'
    ],
    detailedDescription: `Our risk assessment services focus on protecting your assets by identifying potential threats and implementing effective mitigation strategies. From contingency planning to business continuity and insurance analysis, we ensure you're prepared for unforeseen events that may impact your financial stability.`
  },
  {
    title: 'Business Consulting',
    description: 'Tailored solutions to improve operational efficiency and drive business growth.',
    icon: Lightbulb,
    features: [
      'Operational Strategy',
      'Cost Optimization',
      'Market Analysis',
      'Growth Planning'
    ],
    detailedDescription: `Our business consulting services help organizations streamline operations and achieve sustainable growth. We offer tailored strategies that focus on cost optimization, market positioning, and long-term growth planning. Let us guide your business toward success with actionable insights and solutions.`
  },
  {
    title: 'Investment Strategies',
    description: 'Customized investment plans to maximize returns and minimize risks.',
    icon: TrendingUp,
    features: [
      'Portfolio Management',
      'Stock Analysis',
      'Real Estate Investment',
      'Diversification Strategies'
    ],
    detailedDescription: `Our investment strategies are designed to help you build a diversified portfolio that aligns with your financial goals. Whether you're investing in stocks, real estate, or other assets, we provide expert guidance to maximize your returns while minimizing risks.`
  },
  {
    title: 'Retirement Planning',
    description: 'Plan your retirement to ensure financial stability and peace of mind.',
    icon: Hourglass,
    features: [
      'Pension Planning',
      'Income Projections',
      'Savings Optimization',
      'Tax-Advantaged Accounts'
    ],
    detailedDescription: `Our retirement planning services ensure that you can enjoy financial security in your golden years. We help you project income needs, optimize savings, and explore tax-advantaged accounts to secure your future. Let us guide you toward a stress-free retirement.`
  },
  {
    title: 'Corporate Tax Solutions',
    description: 'Customized tax strategies for corporations to improve compliance and savings.',
    icon: FileText,
    features: [
      'Tax Compliance',
      'Audit Support',
      'Corporate Tax Filing',
      'International Tax Strategies'
    ],
    detailedDescription: `Our corporate tax solutions provide businesses with the tools and strategies needed to manage tax obligations effectively. From compliance to audit support, we ensure your business is equipped to handle tax complexities while maximizing savings.`
  }
];

export function Services() {
  return (
    <div className="relative min-h-screen">
    
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient-premium">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}