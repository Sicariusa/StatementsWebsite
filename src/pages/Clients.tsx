import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Card } from "@/components/ui/card";

const clients = [
  {
    name: 'Global Tech Solutions',
    industry: 'Technology',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop',
    description: 'Leading technology company with global operations.',
  },
  {
    name: 'Innovative Healthcare',
    industry: 'Healthcare',
    logo: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=300&h=300&fit=crop',
    description: 'Revolutionary healthcare provider focused on patient care.',
  },
  {
    name: 'Green Energy Corp',
    industry: 'Energy',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop',
    description: 'Sustainable energy solutions for a better future.',
  },
  {
    name: 'Financial Dynamics',
    industry: 'Finance',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=300&h=300&fit=crop',
    description: 'Investment management and financial advisory services.',
  },
  {
    name: 'Retail Innovations',
    industry: 'Retail',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
    description: 'Next-generation retail solutions and experiences.',
  },
  {
    name: 'Construction Excellence',
    industry: 'Construction',
    logo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop',
    description: 'Building the infrastructure of tomorrow.',
  },
];

const achievements = [
  'Successfully managed over $10B in client assets',
  'Achieved 25% average annual growth for clients',
  'Completed 150+ major corporate transactions',
  'Maintained 98% client retention rate',
  'Expanded operations to 15 countries',
  'Recognized as industry leader by Forbes',
];

export function Clients() {
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
            Our Clients
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by industry leaders across the globe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/50 border-gray-800 hover:border-amber-500 transition-all duration-300">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-amber-500">{client.industry}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{client.name}</h3>
                <p className="text-gray-400">{client.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/50 border border-gray-800 rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}