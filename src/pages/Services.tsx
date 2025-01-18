import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calculator, ChartBar, DollarSign, FileText, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management solutions tailored to your unique financial goals and aspirations.',
    icon: DollarSign,
    features: ['Portfolio Management', 'Risk Assessment', 'Estate Planning', 'Tax Optimization'],
  },
  {
    title: 'Investment Banking',
    description: 'Strategic financial advisory services for corporations, institutions, and high-net-worth individuals.',
    icon: ChartBar,
    features: ['Mergers & Acquisitions', 'Capital Markets', 'Corporate Finance', 'Strategic Advisory'],
  },
  {
    title: 'Tax Planning',
    description: 'Advanced tax strategies to optimize your financial position and minimize tax liability.',
    icon: Calculator,
    features: ['Tax Optimization', 'Compliance', 'International Tax', 'Estate Tax Planning'],
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and management strategies to protect your assets.',
    icon: Shield,
    features: ['Insurance Solutions', 'Risk Assessment', 'Hedging Strategies', 'Compliance'],
  },
  {
    title: 'Corporate Services',
    description: 'Full-service corporate financial solutions for businesses of all sizes.',
    icon: Briefcase,
    features: ['Business Planning', 'Cash Management', 'Credit Solutions', 'Treasury Services'],
  },
  {
    title: 'Financial Planning',
    description: 'Personalized financial planning services to help you achieve your life goals.',
    icon: FileText,
    features: ['Retirement Planning', 'Education Planning', 'Investment Strategy', 'Succession Planning'],
  },
];

export function Services() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-black/50 border-gray-800 hover:border-amber-500 transition-all duration-300">
                <service.icon className="w-12 h-12 mb-4 text-amber-500" />
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}