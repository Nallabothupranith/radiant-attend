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
  GraduationCap,
  Sparkles,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import Header from '@/components/Header';
import GeometricShapes from '@/components/GeometricShapes';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import ParallaxImage from '@/components/ParallaxImage';
import heroDashboard from '@/assets/hero-dashboard-dark.jpg';
import teamImage from '@/assets/team-modern-dark.jpg';
import counselImage from '@/assets/counseling-dark.jpg';
import studentImage from '@/assets/students-modern-dark.jpg';
import classroomImage from '@/assets/classroom-dark.jpg';
import techImage from '@/assets/tech-workspace-dark.jpg';

const Home = () => {
  const portalCards = [
    {
      title: 'Student Portal',
      description: 'Track your academic journey with intelligent insights and personalized support.',
      icon: Users,
      gradient: 'student',
      role: 'student',
      features: ['Real-time Analytics', 'Smart Notifications', 'Progress Tracking'],
      stats: '15K+ Active Students',
    },
    {
      title: 'Counselor Portal',
      description: 'Empower early intervention with AI-driven student risk detection and support tools.',
      icon: UserCheck,
      gradient: 'counselor',
      role: 'counselor',
      features: ['Risk Detection', 'Intervention Tools', 'Student Insights'],
      stats: '2K+ Counselors',
    },
    {
      title: 'Admin Portal',
      description: 'Comprehensive oversight with advanced analytics and system-wide management.',
      icon: Shield,
      gradient: 'admin',
      role: 'admin',
      features: ['System Analytics', 'User Management', 'Custom Reports'],
      stats: '500+ Institutions',
    },
  ];

  const howItWorksSteps = [
    {
      icon: Upload,
      title: 'Smart Data Integration',
      description: 'Seamlessly connect with existing systems and import attendance data with intelligent mapping and validation.',
    },
    {
      icon: UserCog,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze patterns, predict risks, and automatically assign support resources.',
    },
    {
      icon: MessageSquare,
      title: 'Proactive Intervention',
      description: 'Enable targeted support with real-time alerts, automated workflows, and outcome tracking.',
    },
  ];

  const galleryImages = [
    { src: classroomImage, alt: 'Modern classroom with sophisticated technology', title: 'Smart Classrooms' },
    { src: techImage, alt: 'Advanced educational technology workspace', title: 'Tech Integration' },
    { src: studentImage, alt: 'Students engaged in modern learning environment', title: 'Student Success' },
    { src: counselImage, alt: 'Professional counseling in modern setting', title: 'Support Systems' },
    { src: teamImage, alt: 'Professional team collaboration', title: 'Expert Team' },
    { src: heroDashboard, alt: 'Advanced dashboard interface', title: 'Analytics Platform' },
  ];

  const features = [
    { icon: Zap, text: 'Real-time attendance tracking' },
    { icon: Target, text: 'AI-powered risk detection' },
    { icon: Users, text: 'Automated counselor assignment' },
    { icon: BarChart3, text: 'Advanced analytics dashboard' },
    { icon: Sparkles, text: 'Predictive intervention alerts' },
    { icon: TrendingUp, text: 'Outcome measurement tools' },
  ];

  const stats = [
    { number: '500+', label: 'Educational Institutions', color: 'text-student' },
    { number: '50K+', label: 'Students Supported', color: 'text-counselor' },
    { number: '95%', label: 'Success Rate', color: 'text-admin' },
    { number: '24/7', label: 'Platform Availability', color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <GeometricShapes />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Column - Content */}
              <div className="space-y-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Badge className="mb-6 glass border-primary/30 text-primary bg-primary/10 backdrop-blur-lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Trusted by 500+ Educational Institutions
                  </Badge>
                  <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl leading-tight text-foreground text-shadow">
                    Transform{' '}
                    <span className="shimmer-text neon-glow">Student Success</span>{' '}
                    Through Intelligent Insights
                  </h1>
                </motion.div>

                <motion.p
                  className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Empower educators with AI-driven attendance analytics, predictive intervention tools, 
                  and comprehensive student support platforms that make a real difference.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-student hover:shadow-glow-intense text-white px-8 py-4 text-lg hover-glow group relative overflow-hidden ripple-effect press-down"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-primary/30 hover:border-primary/50 text-foreground px-8 py-4 text-lg hover-glow group ripple-effect press-down"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 glass p-3 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm text-foreground font-medium">{feature.text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Hero Visual */}
              <motion.div
                className="relative lg:ml-12"
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-student rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700" />
                  <ParallaxImage
                    src={heroDashboard}
                    alt="Advanced Attendance Portal Dashboard"
                    className="relative w-full h-auto rounded-3xl shadow-floating hover:shadow-glow-intense transition-all duration-700 hover-glow border border-primary/20"
                    parallaxStrength={0.15}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  {/* Floating stats cards */}
                  <motion.div
                    className="absolute -top-6 -left-6 glass p-4 rounded-xl border border-primary/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-counselor" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          <AnimatedCounter end={95} suffix="%" />
                        </div>
                        <div className="text-xs text-muted-foreground">Intervention Rate</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-8 glass p-4 rounded-xl border border-primary/20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-admin" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          <AnimatedCounter end={50000} suffix="+" />
                        </div>
                        <div className="text-xs text-muted-foreground">Actively Supported</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <motion.div 
                  className={`text-4xl lg:text-5xl font-display ${stat.color} mb-2`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.number.includes('+') ? (
                    <>
                      <AnimatedCounter end={parseInt(stat.number.replace(/[^0-9]/g, ''))} />
                      <span>+</span>
                    </>
                  ) : (
                    <AnimatedCounter 
                      end={stat.number.includes('%') ? parseInt(stat.number) : parseInt(stat.number)} 
                      suffix={stat.number.includes('%') ? '%' : ''}
                    />
                  )}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
            </motion.div>
          </div>
        </section>

        {/* Portal Selection Cards */}
        <section className="py-24 px-6 relative">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 glass border-counselor/30 text-counselor bg-counselor/10">
                <Target className="w-4 h-4 mr-2" />
                Choose Your Experience
              </Badge>
              <h2 className="font-display text-4xl lg:text-6xl text-foreground mb-6 text-shadow">
                Tailored Portals for Every Role
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Access specialized dashboards and tools designed specifically for your role in the educational ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {portalCards.map((card, index) => (
                <ScrollReveal
                  key={card.role}
                  direction="up"
                  delay={index * 0.2}
                  className="group floating-card"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: 3
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    className="h-full"
                  >
                    <Card className={`portal-card ${card.gradient} border-0 shadow-floating h-full relative overflow-hidden press-down`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                      <CardContent className="p-8 relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                          <motion.div 
                            className="w-16 h-16 rounded-2xl glass border border-white/20 flex items-center justify-center"
                            whileHover={{ 
                              scale: 1.15, 
                              rotateY: 180,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <card.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <Badge className="bg-white/20 text-white border-0 text-xs">
                            {card.stats}
                          </Badge>
                        </div>
                        
                        <div>
                          <h3 className="font-display text-2xl text-white mb-3">
                            {card.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed text-lg">
                            {card.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {card.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-center gap-3 text-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-4 w-4 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Link to={`/auth/login?role=${card.role}`} className="block">
                          <Button 
                            className="w-full glass border border-white/20 hover:bg-white/20 text-white hover:scale-105 transition-all duration-300 group mt-6 ripple-effect"
                          >
                            Access Portal
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 glass opacity-30" />
          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 glass border-admin/30 text-admin bg-admin/10">
                <Zap className="w-4 h-4 mr-2" />
                How It Works
              </Badge>
              <h2 className="font-display text-4xl lg:text-6xl text-foreground mb-6 text-shadow">
                Three Steps to Transformation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our intelligent platform streamlines the entire process from data integration to actionable insights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="relative mb-8">
                    <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-student flex items-center justify-center shadow-floating group-hover:shadow-glow-intense hover-glow">
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 animate-pulse" />
                    {index < howItWorksSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary via-counselor to-transparent" />
                    )}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery & Impact */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <Badge className="mb-6 glass border-primary/30 text-primary bg-primary/10">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Our Impact
                  </Badge>
                  <h2 className="font-display text-4xl lg:text-6xl text-foreground mb-6 text-shadow">
                    Transforming Education Through{' '}
                    <span className="gradient-text">Advanced Technology</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our platform combines cutting-edge AI with educational expertise to create 
                    meaningful change in institutions worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="glass p-6 rounded-2xl border border-primary/10 hover-glow"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className={`text-3xl font-display ${stat.color} mb-2`}>{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/about">
                  <Button 
                    variant="outline" 
                    className="glass border-primary/30 hover:border-primary/50 text-foreground hover-glow group"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {galleryImages.map((image, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={index * 0.15}
                    className="relative group overflow-hidden rounded-2xl aspect-square image-zoom"
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.6, ease: "easeOut" }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-white font-semibold text-sm">{image.title}</h4>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact & Feedback CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 glass opacity-20" />
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass p-8 hover-glow h-full border border-primary/20">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-student">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground">Get In Touch</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Ready to transform your institution? Our team is here to help you get started with a personalized demo.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>hello@attendanceportal.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-student hover:shadow-glow text-white hover-glow">
                        Schedule Demo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Feedback Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass p-8 hover-glow h-full border border-counselor/20">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-counselor">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground">Share Feedback</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Help us improve by sharing your experience and suggestions for our platform.
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="text-muted-foreground ml-3">
                        4.9/5 from 500+ reviews
                      </span>
                    </div>
                    <Link to="/feedback">
                      <Button className="w-full bg-gradient-counselor hover:shadow-glow text-white hover-glow">
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
        <footer className="py-20 px-6 relative border-t border-border/20">
          <div className="absolute inset-0 glass opacity-10" />
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-student">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-display text-xl text-foreground">
                    AttendancePortal
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Transforming student success through intelligent attendance analytics and proactive support systems.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                    <div className="w-4 h-4 bg-primary rounded" />
                  </div>
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                    <div className="w-4 h-4 bg-counselor rounded" />
                  </div>
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                    <div className="w-4 h-4 bg-admin rounded" />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  {['Home', 'About', 'Contact', 'Feedback'].map((link) => (
                    <li key={link}>
                      <Link
                        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-display text-lg text-foreground mb-6">Resources</h4>
                <ul className="space-y-4">
                  {['Documentation', 'API Reference', 'Support', 'Status'].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Socials */}
              <div>
                <h4 className="font-display text-lg text-foreground mb-6">Connect</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>hello@attendanceportal.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/20 mt-12 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2024 AttendancePortal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;