import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  Users,
  HeadphonesIcon
} from 'lucide-react';
import Header from '@/components/Header';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      institution: '',
      role: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@attendanceportal.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Innovation Drive, San Francisco, CA 94105',
      description: 'Our headquarters',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'Average response time',
    },
  ];

  const faqs = [
    {
      question: 'How does the implementation process work?',
      answer: 'Our implementation team will work closely with your IT department to ensure a smooth transition. Most institutions are up and running within 2-4 weeks.',
    },
    {
      question: 'Do you offer training for staff?',
      answer: 'Yes! We provide comprehensive training sessions for all user roles, along with ongoing support and resources.',
    },
    {
      question: 'What data security measures do you have in place?',
      answer: 'We use enterprise-grade encryption, comply with FERPA regulations, and undergo regular security audits to protect student data.',
    },
    {
      question: 'Can the platform integrate with our existing systems?',
      answer: 'Absolutely. Our platform offers API integrations with most major student information systems and can be customized to fit your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Floating Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-10 w-72 h-72 opacity-30" />
        <div className="blob absolute top-40 right-20 w-96 h-96 opacity-20" />
        <div className="blob absolute bottom-20 left-1/3 w-80 h-80 opacity-25" />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Get In Touch
              </Badge>
              <h1 className="font-display text-5xl lg:text-7xl leading-tight text-foreground mb-6">
                Let's Start a{' '}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Have questions about AttendancePortal? Ready to transform your institution's 
                approach to student support? We're here to help you get started.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lifted transition-all duration-300 text-center h-full">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-student flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-foreground mb-2">
                          {info.title}
                        </h3>
                        <p className="font-medium text-primary">
                          {info.content}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form & Info */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 shadow-lifted">
                  <CardContent>
                    <div className="mb-8">
                      <h2 className="font-display text-3xl text-foreground mb-3">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="hover:border-primary/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="hover:border-primary/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution Name</Label>
                          <Input
                            id="institution"
                            type="text"
                            placeholder="Your institution"
                            value={formData.institution}
                            onChange={(e) => handleInputChange('institution', e.target.value)}
                            className="hover:border-primary/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Select onValueChange={(value) => handleInputChange('role', value)}>
                            <SelectTrigger className="hover:border-primary/50 focus:border-primary">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="administrator">Administrator</SelectItem>
                              <SelectItem value="counselor">Counselor</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="it-staff">IT Staff</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="What can we help you with?"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                          className="hover:border-primary/50 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your needs..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          className="hover:border-primary/50 focus:border-primary resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-student hover:bg-student-hover text-white shadow-lifted hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Office Hours */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-counselor">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-display text-xl text-foreground">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground">8:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground">9:00 AM - 3:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Options */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-admin">
                        <HeadphonesIcon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-display text-xl text-foreground">Support Options</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Live Chat Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Phone Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Email Support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300 border-l-4 border-l-destructive">
                  <CardContent className="space-y-4">
                    <h3 className="font-display text-xl text-foreground">Emergency Support</h3>
                    <p className="text-sm text-muted-foreground">
                      For urgent technical issues affecting student safety or critical operations:
                    </p>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-destructive" />
                      <span className="font-medium text-foreground">+1 (555) 911-HELP</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      24/7 emergency hotline
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <Card className="p-6 hover:shadow-lifted transition-all duration-300 h-full">
                    <CardContent className="space-y-4">
                      <h3 className="font-display text-lg text-foreground">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;