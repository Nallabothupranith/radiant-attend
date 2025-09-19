import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserCheck, 
  Shield, 
  Upload, 
  UserCog, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Star,
  Play,
  Mail,
  Phone,
  MapPin,
  GraduationCap
} from 'lucide-react';
import Header from '@/components/Header';
import heroDashboard from '@/assets/hero-dashboard-1.jpg';
import teamImage from '@/assets/about-team-1.jpg';
import counselImage from '@/assets/about-counsel-1.jpg';
import studentImage from '@/assets/about-student-1.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const Home = () => {
  const portalCards = [
    {
      title: 'Student Portal',
      description: 'Access your attendance records, submit requests, and track your academic progress.',
      icon: Users,
      gradient: 'student',
      role: 'student',
      features: ['View Attendance', 'Submit Requests', 'Track Progress'],
    },
    {
      title: 'Counselor Portal',
      description: 'Monitor student attendance, identify patterns, and provide timely support.',
      icon: UserCheck,
      gradient: 'counselor',
      role: 'counselor',
      features: ['Student Monitoring', 'Pattern Analysis', 'Support Tools'],
    },
    {
      title: 'Admin Portal',
      description: 'Comprehensive dashboard for managing users, settings, and system overview.',
      icon: Shield,
      gradient: 'admin',
      role: 'admin',
      features: ['User Management', 'System Settings', 'Analytics'],
    },
  ];

  const howItWorksSteps = [
    {
      icon: Upload,
      title: 'Upload Data',
      description: 'Seamlessly import attendance records from your existing systems or manual entry.',
    },
    {
      icon: UserCog,
      title: 'Assign & Monitor',
      description: 'Automatically assign counselors and set up monitoring rules for early intervention.',
    },
    {
      icon: MessageSquare,
      title: 'Counsel & Support',
      description: 'Enable targeted counseling sessions and track student improvement over time.',
    },
  ];

  const galleryImages = [
    { src: gallery1, alt: 'Students collaborating in modern classroom' },
    { src: gallery2, alt: 'Teacher mentoring student one-on-one' },
    { src: gallery3, alt: 'Students studying in library setting' },
    { src: gallery4, alt: 'Modern classroom with engaged students' },
  ];

  const features = [
    'Real-time attendance tracking',
    'AI-powered risk detection',
    'Automated counselor assignment',
    'Comprehensive reporting dashboard',
    'Mobile-friendly interface',
    'Secure data encryption',
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
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    ✨ Trusted by 500+ Educational Institutions
                  </Badge>
                  <h1 className="font-display text-5xl lg:text-7xl leading-tight text-foreground">
                    Transform{' '}
                    <span className="gradient-text">Student Attendance</span>{' '}
                    Into Academic Success
                  </h1>
                </motion.div>

                <motion.p
                  className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  Empower counselors and administrators with intelligent attendance tracking, 
                  early intervention alerts, and comprehensive student support tools.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-student hover:bg-student-hover text-white shadow-lifted hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-student" />
                      {feature}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Hero Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-student rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                  <img
                    src={heroDashboard}
                    alt="Attendance Portal Dashboard"
                    className="relative w-full h-auto rounded-3xl shadow-floating hover:shadow-glow transition-all duration-500 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portal Selection Cards */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
                Choose Your Portal
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access the tools and insights tailored to your role in the educational ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {portalCards.map((card, index) => (
                <motion.div
                  key={card.role}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group"
                >
                  <Card className={`portal-card ${card.gradient} border-0 shadow-lifted hover:shadow-glow transition-all duration-500 h-full`}>
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="mx-auto w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <card.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="font-display text-2xl text-white mb-3">
                          {card.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-white/80 text-sm">
                            <CheckCircle className="h-4 w-4" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Link to={`/auth/login?role=${card.role}`}>
                        <Button 
                          className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
                        >
                          Access Portal
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-card/50">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to transform your attendance management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-student flex items-center justify-center shadow-lifted group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    {index < howItWorksSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview & Gallery */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <Badge className="mb-4 bg-counselor/10 text-counselor border-counselor/20">
                    About Our Platform
                  </Badge>
                  <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                    Empowering Educational Excellence Through{' '}
                    <span className="gradient-text">Smart Insights</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our platform combines cutting-edge technology with educational expertise 
                    to help institutions identify at-risk students early and provide targeted support.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-display text-student mb-2">500+</div>
                    <div className="text-muted-foreground">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display text-counselor mb-2">50K+</div>
                    <div className="text-muted-foreground">Students Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display text-admin mb-2">95%</div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>

                <Link to="/about">
                  <Button variant="outline" className="hover:bg-primary/5 hover:border-primary group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover rounded-2xl shadow-soft group-hover:shadow-lifted transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact & Feedback CTA */}
        <section className="py-20 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-lifted transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-student">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground">Get In Touch</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Have questions about our platform? Our team is here to help you get started.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        +1 (555) 123-4567
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        hello@attendanceportal.com
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        San Francisco, CA
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-student hover:bg-student-hover text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Feedback Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-lifted transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-counselor">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground">Share Feedback</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Help us improve by sharing your experience and suggestions for our platform.
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        4.9/5 average rating
                      </span>
                    </div>
                    <Link to="/feedback">
                      <Button className="w-full bg-gradient-counselor hover:bg-counselor-hover text-white">
                        Leave Feedback
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-student">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-display text-xl text-foreground">
                    AttendancePortal
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Transforming student attendance into academic success through intelligent monitoring and support.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Contact', 'Feedback'].map((link) => (
                    <li key={link}>
                      <Link
                        to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portals */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Portals</h4>
                <ul className="space-y-2">
                  {['Student Portal', 'Counselor Portal', 'Admin Portal'].map((portal) => (
                    <li key={portal}>
                      <Link
                        to="/auth/login"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {portal}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2">
                  {['Help Center', 'Documentation', 'Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 AttendancePortal. All rights reserved. Built with ❤️ for education.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;