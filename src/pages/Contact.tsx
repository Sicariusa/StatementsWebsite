import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import Swal from 'sweetalert2';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@capitaledge.com', 'support@capitaledge.com'],
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Financial District', 'New York, NY 10004'],
  },
];

// Input validation functions
const validateName = (name: string): boolean => {
  return /^[a-zA-Z\s]{2,50}$/.test(name.trim());
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

const validatePhone = (phone: string): boolean => {
  return /^\+?[\d\s-]{10,}$/.test(phone.trim());
};

const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.trim().length <= 1000;
};

const validateFile = (file: File | null): boolean => {
  if (!file) return true; // Optional file
  const validTypes = ['application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  return validTypes.includes(file.type) && file.size <= maxSize;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  // Anti-spam: Allow only one submission per minute
  // Anti-spam: Allow only one submission per 2 days
  const canSubmit = (): boolean => {
    const now = Date.now();
    const twoDays = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
    if (now - lastSubmissionTime < twoDays) {
      Swal.fire({
        icon: 'error',
        title: 'Please wait',
        text: 'You can only submit once every 2 days',
        timer: 3000,
        showConfirmButton: false
      });
      return false;
    }
    return true;
  };


  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, ''); // Basic XSS prevention
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!validateName(firstName)) {
      newErrors.firstName = 'Please enter a valid first name (2-50 characters, letters only)';
    }
    if (!validateName(lastName)) {
      newErrors.lastName = 'Please enter a valid last name (2-50 characters, letters only)';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!validateMessage(message)) {
      newErrors.message = 'Message must be between 10 and 1000 characters';
    }
    if (!validateFile(selectedFile)) {
      newErrors.file = 'Please upload a PDF file under 5MB';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    
    if (file) {
      if (!validateFile(file)) {
        setErrors(prev => ({
          ...prev,
          file: 'Please upload a PDF file under 5MB'
        }));
      } else {
        // Convert file to base64
        const base64 = await convertFileToBase64(file);
        setSelectedFile(file);
        // Store base64 string in a hidden input for EmailJS
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'pdf_attachment';
        hiddenInput.value = base64;
        formRef.current?.appendChild(hiddenInput);
        
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.file;
          return newErrors;
        });
      }
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSubmit()) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setLastSubmissionTime(Date.now());
      
      await Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully',
        timer: 3000,
        showConfirmButton: false,
        background: '#1a1a1a',
        color: '#fff',
        customClass: {
          popup: 'bg-gray-900 text-white',
          title: 'text-white',
          htmlContainer: 'text-gray-300'
        }
      });

      formRef.current?.reset();
      setSelectedFile(null);
      setErrors({});
      
      // Remove hidden input if exists
      const hiddenInput = formRef.current?.querySelector('input[name="pdf_attachment"]');
      if (hiddenInput) {
        hiddenInput.remove();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again.',
        background: '#1a1a1a',
        color: '#fff',
        customClass: {
          popup: 'bg-gray-900 text-white',
          title: 'text-white',
          htmlContainer: 'text-gray-300'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our team of financial experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-black/50 border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <form 
                ref={formRef}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="John"
                      className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Tell us About yourself</label>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                    rows={4}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300"> (PDF, max 5MB)</label>
                  <Input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-black/30 border-gray-700 text-white file:bg-amber-500 file:text-black file:border-0 file:px-4 file:py-2 file:rounded-md file:hover:bg-amber-600 file:cursor-pointer"
                  />
                  {errors.file && (
                    <p className="text-red-500 text-sm">{errors.file}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid gap-8">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="p-6 bg-black/50 border-gray-800 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <info.icon className="w-6 h-6 text-amber-500" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-black/50 border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-white">Office Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}