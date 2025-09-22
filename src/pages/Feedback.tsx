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
import { Star, Send, MessageSquare, ThumbsUp, Users, Award } from 'lucide-react';
import Header from '@/components/Header';

const Feedback = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a rating before submitting your feedback.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank You for Your Feedback!",
      description: "Your input helps us improve our platform for everyone.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      category: '',
      message: '',
    });
    setRating(0);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      role: 'Dean of Student Affairs',
      institution: 'Pacific University',
      rating: 5,
      comment: 'AttendancePortal has transformed how we identify and support at-risk students. The early intervention capabilities are game-changing.',
    },
    {
      name: 'Michael Chen',
      role: 'High School Counselor',
      institution: 'Lincoln High School',
      rating: 5,
      comment: 'The intuitive interface makes it easy to track student patterns and coordinate with teachers. Our student success rates have improved significantly.',
    },
    {
      name: 'Sarah Thompson',
      role: 'IT Administrator',
      institution: 'Metro Community College',
      rating: 5,
      comment: 'Implementation was smooth, and the support team was incredibly helpful. The platform integrates seamlessly with our existing systems.',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Institutions',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
    },
    {
      icon: ThumbsUp,
      value: '98%',
      label: 'Would Recommend',
    },
    {
      icon: Award,
      value: '50K+',
      label: 'Students Helped',
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
                Share Your Experience
              </Badge>
              <h1 className="font-display text-5xl lg:text-7xl leading-tight text-foreground mb-6">
                Your{' '}
                <span className="gradient-text">Feedback</span>{' '}
                Matters
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Help us improve AttendancePortal by sharing your thoughts, suggestions, and experiences. 
                Every piece of feedback helps us serve you better.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-student flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-display text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Feedback Form */}
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
                        Share Your Feedback
                      </h2>
                      <p className="text-muted-foreground">
                        Your insights help us create a better experience for everyone.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Rating Section */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Overall Rating *</Label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="p-1 transition-transform duration-200 hover:scale-110"
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              onClick={() => setRating(star)}
                            >
                              <Star
                                className={`h-8 w-8 transition-colors duration-200 ${
                                  star <= (hoveredRating || rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-3 text-muted-foreground">
                            {rating > 0 && (
                              <span className="text-foreground font-medium">
                                {rating === 1 && 'Poor'}
                                {rating === 2 && 'Fair'}
                                {rating === 3 && 'Good'}
                                {rating === 4 && 'Very Good'}
                                {rating === 5 && 'Excellent'}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name (Optional)</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="hover:border-primary/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email (Optional)</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="hover:border-primary/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Select onValueChange={(value) => handleInputChange('role', value)}>
                            <SelectTrigger className="hover:border-primary/50 focus:border-primary">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="counselor">Counselor</SelectItem>
                              <SelectItem value="administrator">Administrator</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="parent">Parent</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Feedback Category</Label>
                          <Select onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger className="hover:border-primary/50 focus:border-primary">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user-interface">User Interface</SelectItem>
                              <SelectItem value="features">Features</SelectItem>
                              <SelectItem value="performance">Performance</SelectItem>
                              <SelectItem value="support">Customer Support</SelectItem>
                              <SelectItem value="bug-report">Bug Report</SelectItem>
                              <SelectItem value="feature-request">Feature Request</SelectItem>
                              <SelectItem value="general">General Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Feedback *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your experience, suggestions for improvement, or any issues you've encountered..."
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
                        Submit Feedback
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Why Feedback Matters */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-counselor">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-display text-xl text-foreground">Why Your Feedback Matters</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Helps us prioritize new features and improvements
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Identifies areas where we can enhance user experience
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Ensures our platform meets your evolving needs
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Builds a better product for the entire education community
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feedback Guidelines */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300">
                  <CardContent className="space-y-4">
                    <h3 className="font-display text-xl text-foreground">Feedback Guidelines</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>To help us serve you better, please:</p>
                      <ul className="space-y-2 list-disc list-inside ml-2">
                        <li>Be specific about features or issues</li>
                        <li>Include steps to reproduce any problems</li>
                        <li>Suggest concrete improvements</li>
                        <li>Keep feedback constructive and professional</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="p-6 hover:shadow-lifted transition-all duration-300 border-l-4 border-l-primary">
                  <CardContent className="space-y-4">
                    <h3 className="font-display text-xl text-foreground">What Happens Next?</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>After you submit your feedback:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-student rounded-full" />
                          We review every submission within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-counselor rounded-full" />
                          Critical issues are addressed immediately
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-admin rounded-full" />
                          Feature requests are evaluated for future releases
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real feedback from educators who use AttendancePortal every day
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lifted transition-all duration-300 h-full">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                      </div>
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

export default Feedback;