import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const performanceData = [
  { month: 'Jan', revenue: 1000, growth: 800, expenses: 600 },
  { month: 'Feb', revenue: 1200, growth: 900, expenses: 650 },
  { month: 'Mar', revenue: 1100, growth: 950, expenses: 700 },
  { month: 'Apr', revenue: 1400, growth: 1100, expenses: 750 },
  { month: 'May', revenue: 1300, growth: 1200, expenses: 800 },
  { month: 'Jun', revenue: 1600, growth: 1400, expenses: 850 },
];

const marketData = [
  { name: 'Q1', stocks: 4000, bonds: 2400, crypto: 2400 },
  { name: 'Q2', stocks: 3000, bonds: 1398, crypto: 2210 },
  { name: 'Q3', stocks: 2000, bonds: 9800, crypto: 2290 },
  { name: 'Q4', stocks: 2780, bonds: 3908, crypto: 2000 },
];

const stats = [
  { label: 'Assets Under Management', value: '$2.5B', icon: BarChart3 },
  { label: 'Annual Growth Rate', value: '27%', icon: TrendingUp },
  { label: 'Investment Returns', value: '21%', icon: PieChart },
  { label: 'Client Satisfaction', value: '98%', icon: LineChart },
];

export function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-a-business-graph-going-up-2741/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Elevate Your Financial Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-gray-300"
          >
            Premium financial services tailored to your success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Performance Analytics</h2>
          
          <div className="grid gap-8 mb-16">
            <Card className="p-6 bg-black/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-white">Revenue Growth Analysis</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderRadius: '4px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#FFD700"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="growth"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#colorGrowth)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-white">Market Performance</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderRadius: '4px',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="stocks" fill="#FFD700" />
                    <Bar dataKey="bonds" fill="#10B981" />
                    <Bar dataKey="crypto" fill="#6366F1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="p-6 bg-black/50 border-gray-800 hover:border-amber-500 transition-colors"
              >
                <stat.icon className="w-8 h-8 mb-4 text-amber-500" />
                <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}