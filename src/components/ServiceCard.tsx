import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ServiceDetails {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  detailedDescription: string;
}

interface ServiceCardProps {
  service: ServiceDetails;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card-premium hover-float p-6">
        <service.icon className="w-12 h-12 text-[hsl(var(--accent-primary))] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <span className="mr-2">→</span>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          onClick={() => setIsOpen(true)}
          className="btn-premium w-full"
        >
          Learn More
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-black/95 border-gray-800 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold flex items-center gap-3">
              <service.icon className="w-8 h-8 text-[#4A7B5A]" />
              {service.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              {service.detailedDescription}
            </p>
            <div className="border-t border-gray-800 pt-4">
              <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2 text-[#4A7B5A]">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 