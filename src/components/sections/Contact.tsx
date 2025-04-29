
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="text-portfolio-teal" size={24} />, title: 'Email', content: 'alex.chen@example.com' },
    { icon: <Phone className="text-portfolio-teal" size={24} />, title: 'Phone', content: '+1 (555) 123-4567' },
    { icon: <MapPin className="text-portfolio-teal" size={24} />, title: 'Location', content: 'San Francisco, CA' },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-portfolio-gray font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="max-w-2xl text-portfolio-gray">
            Whether you have a project idea, job opportunity, or just want to connect,
            I'm always open to discussing new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-effect p-8 rounded-xl shadow-card">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-portfolio-gray/20 focus:border-portfolio-teal focus:ring focus:ring-portfolio-teal/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-portfolio-gray/20 focus:border-portfolio-teal focus:ring focus:ring-portfolio-teal/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-portfolio-gray/20 focus:border-portfolio-teal focus:ring focus:ring-portfolio-teal/20 transition-all duration-200"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-portfolio-gray/20 focus:border-portfolio-teal focus:ring focus:ring-portfolio-teal/20 transition-all duration-200 resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse-light">Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl shadow-card">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-portfolio-navy/5 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-portfolio-gray">{info.title}</h4>
                      <p className="font-medium">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-xl shadow-card">
              <h3 className="text-xl font-semibold mb-4">Available For</h3>
              
              <ul className="space-y-3">
                {['Freelance Projects', 'Full-time Positions', 'Collaborations', 'Speaking Engagements'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-portfolio-teal mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
