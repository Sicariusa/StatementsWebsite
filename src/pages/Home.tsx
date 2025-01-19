import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react';

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

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

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



// Use environment variable for the token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

const clientCountries = ["Saudi Arabia", "United Arab Emirates", "Canada"];

export function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Check if token exists before initializing map
    if (!mapboxgl.accessToken) {
      console.warn('Mapbox token not found. Map will not be rendered.');
      return;
    }

    if (!map.current && mapContainer.current) {
      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [0, 30],
          zoom: 1.5,
          projection: 'mercator'
        });

        map.current.on('load', () => {
          // Add source for country boundaries
          map.current?.addSource('countries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1'
          });

          // Add fill layer for client countries
          map.current?.addLayer({
            id: 'country-fills',
            type: 'fill',
            source: 'countries',
            'source-layer': 'country_boundaries',
            paint: {
              'fill-color': '#3b82f6',
              'fill-opacity': [
                'case',
                ['in', ['get', 'name_en'], ['literal', clientCountries]],
                0.4,
                0
              ]
            }
          });

          // Add outline layer for client countries
          map.current?.addLayer({
            id: 'country-borders',
            type: 'line',
            source: 'countries',
            'source-layer': 'country_boundaries',
            paint: {
              'line-color': '#60a5fa',
              'line-width': [
                'case',
                ['in', ['get', 'name_en'], ['literal', clientCountries]],
                2,
                0
              ]
            }
          });

          // Add hover effect
          map.current?.on('mouseenter', 'country-fills', () => {
            if (map.current) {
              map.current.setPaintProperty('country-fills', 'fill-opacity', [
                'case',
                ['in', ['get', 'name_en'], ['literal', clientCountries]],
                0.7,
                0
              ]);
              map.current.getCanvas().style.cursor = 'pointer';
            }
          });

          map.current?.on('mouseleave', 'country-fills', () => {
            if (map.current) {
              map.current.setPaintProperty('country-fills', 'fill-opacity', [
                'case',
                ['in', ['get', 'name_en'], ['literal', clientCountries]],
                0.4,
                0
              ]);
              map.current.getCanvas().style.cursor = '';
            }
          });
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Client data for the legend
  const clientData = {
    "Saudi Arabia": 150,
    "United Arab Emirates": 120,
    "Canada": 200
  };

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
            className="object-cover w-full h-full opacity-40"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white"
          >
            Elevate Your Financial Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-gray-200"
          >
            Premium financial services tailored to your success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Performance Analytics
          </h2>
          
          <div className="grid gap-8 mb-16">
            <Card className="p-6 bg-black/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-white">Revenue Growth Analysis</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C084FC" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#C084FC" stopOpacity={0}/>
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
                      stroke="#60A5FA"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="growth"
                      stroke="#C084FC"
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
                    <Bar dataKey="stocks" fill="#60A5FA" />
                    <Bar dataKey="bonds" fill="#C084FC" />
                    <Bar dataKey="crypto" fill="#818CF8" />
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
                className="p-6 bg-black/50 border-gray-800 hover:border-blue-500 transition-colors"
              >
                <stat.icon className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Global Presence
          </h2>
          
          {mapboxgl.accessToken ? (
            <div 
              ref={mapContainer} 
              className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-800"
            />
          ) : (
            <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-800 flex items-center justify-center bg-black/50">
              <p className="text-gray-400">Map visualization temporarily unavailable</p>
            </div>
          )}

          {/* Client Country Legend */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* {Object.entries(clientData).map(([country, clients]) => ( */}
            {Object.entries(clientData).map(([country]) => (
              <div 
                key={country} 
                className="p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-white">{country}</h3>
                {/* <p className="text-blue-300">{clients} Clients</p> */}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our global network spans across multiple continents, serving clients in key financial markets. 
              With strong presence in the Middle East and North America, we continue to expand our reach 
              while maintaining excellence in service delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}