import { Calculator, Scale, Landmark, TrendingUp, Users, DollarSign, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import StatsCard from "@/components/StatsCard";

const mockSavingsData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 1000000) + 500000,
}));

const mockClientsData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 100) + 50,
}));

const mockReturnData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 30) + 15,
}));

const mockSuccessData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 100) + 90,
}));

const mockGrowthData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 40) + 20,
}));

const mockProjectionsData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 2000000) + 1000000,
}));

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 animate-slide-up">
            Financial Excellence, Delivered
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            Expert financial, tax, and legal services tailored to your success
          </p>
          <Button size="lg" className="animate-slide-up delay-300 hover:scale-105 transition-transform">
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary/20">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in delay-100">
            <ServiceCard
              title="Financial Services"
              description="Comprehensive financial planning and wealth management solutions"
              Icon={Calculator}
            />
          </div>
          <div className="animate-fade-in delay-200">
            <ServiceCard
              title="Tax Services"
              description="Expert tax planning and preparation for individuals and businesses"
              Icon={Landmark}
            />
          </div>
          <div className="animate-fade-in delay-300">
            <ServiceCard
              title="Legal Services"
              description="Professional legal counsel for business and personal matters"
              Icon={Scale}
            />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Impact</h2>
        <div className="grid gap-8">
          {/* Primary Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in delay-100">
              <StatsCard 
                title="Client Savings" 
                value="$2.5M+" 
                data={mockSavingsData} 
              />
            </div>
            <div className="animate-fade-in delay-200">
              <StatsCard 
                title="Active Clients" 
                value="250+" 
                data={mockClientsData} 
              />
            </div>
            <div className="animate-fade-in delay-300">
              <StatsCard 
                title="Average Return" 
                value="22%" 
                data={mockReturnData} 
              />
            </div>
            <div className="animate-fade-in delay-400">
              <StatsCard 
                title="Success Rate" 
                value="95%" 
                data={mockSuccessData} 
              />
            </div>
          </div>
          
          {/* Secondary Metrics */}
          <div className="grid sm:grid-cols-2 gap-8 mt-8">
            <div className="animate-fade-in delay-500">
              <StatsCard 
                title="Annual Growth Rate" 
                value="35%" 
                data={mockGrowthData} 
              />
            </div>
            <div className="animate-fade-in delay-600">
              <StatsCard 
                title="Future Projections" 
                value="$3.8M+" 
                data={mockProjectionsData} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;