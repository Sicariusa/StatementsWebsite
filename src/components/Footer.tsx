import { Facebook, Linkedin, Mail, Users, BriefcaseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Statements.financial',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/statement-for-financial-services/',
    icon: Linkedin,
  },
];

const quickLinks = [
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail,
    external: false
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    external: false
  },
  {
    name: 'Careers',
    href: 'https://www.linkedin.com/company/statement-for-financial-services/jobs/',
    icon: BriefcaseIcon,
    external: true
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} STATEMENTS CONSULTINGS. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {/* Quick Links */}
            <div className="flex items-center gap-4">
              {quickLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-1 text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-1 text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                )
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 