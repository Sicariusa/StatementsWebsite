import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import { Card } from "@/components/ui/card";

const team = [
  {
    name: 'Sarah Anderson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    bio: 'Over 20 years of experience in financial services and investment banking.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Investment Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    bio: 'Former Wall Street executive with expertise in global markets.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Client Relations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    bio: 'Dedicated to delivering exceptional client experiences and solutions.',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, setting the highest standards in the industry.',
    icon: Award,
  },
  {
    title: 'Client Focus',
  
    description: 'Our clients success is our primary focus, driving every decision we make and every solution we provide.',
    icon: Users,
  },
  {
    title: 'Global Perspective',
    description: 'We leverage our global network and expertise to provide comprehensive financial solutions.',
    icon: Globe,
  },
  {
    title: 'Innovation',
    description: 'We continuously innovate and adapt to meet the evolving needs of our clients.',
    icon: Target,
  },
];

export function About() {
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
            About Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A legacy of excellence in financial services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 1995, CapitalEdge has grown from a boutique financial advisory firm to a global leader in comprehensive financial services. Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a deep understanding of our clients' needs.
              </p>
              <p>
                Over the years, we have successfully navigated through various market cycles, helping our clients protect and grow their wealth while achieving their financial objectives. Our experience and expertise have earned us the trust of individuals, corporations, and institutions worldwide.
              </p>
              <p>
                Today, we continue to evolve and adapt to the changing financial landscape, leveraging cutting-edge technology and innovative solutions to provide our clients with superior service and results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=800&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 bg-black/50 border-gray-800 hover:border-amber-500 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 mb-4 text-amber-500" />
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="p-6 bg-black/50 border-gray-800 hover:border-amber-500 transition-all duration-300"
              >
                <div className="aspect-square mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-amber-500 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}