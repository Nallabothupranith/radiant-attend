import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Award, Target, Heart, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import teamImage from '@/assets/about-team-1.jpg';
import counselImage from '@/assets/about-counsel-1.jpg';
import studentImage from '@/assets/about-student-1.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const About = () => {
  const galleryImages = [
    { src: gallery1, alt: 'Students collaborating in modern classroom' },
    { src: gallery2, alt: 'Teacher mentoring student one-on-one' },
    { src: gallery3, alt: 'Students studying in library setting' },
    { src: gallery4, alt: 'Modern classroom with engaged students' },
    { src: teamImage, alt: 'Professional team meeting' },
    { src: counselImage, alt: 'Professional counseling session' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Every feature is designed with student success and well-being at its core.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in educational technology and support.',
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Making informed decisions through comprehensive analytics and insights.',
    },
    {
      icon: Heart,
      title: 'Compassionate',
      description: 'Understanding that behind every data point is a student who deserves support.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      image: teamImage,
      bio: 'Former Dean of Student Affairs with 15 years in educational leadership.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      image: studentImage,
      bio: 'EdTech veteran with expertise in scalable educational platforms.',
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Head of Student Success',
      image: counselImage,
      bio: 'Licensed counselor specializing in early intervention strategies.',
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
                About AttendancePortal
              </Badge>
              <h1 className="font-display text-5xl lg:text-7xl leading-tight text-foreground mb-6">
                Transforming Education Through{' '}
                <span className="gradient-text">Smart Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We believe every student deserves the support they need to succeed. Our platform bridges 
                the gap between attendance data and meaningful intervention, helping educators make a 
                real difference in students' lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-display text-student mb-2">500+</div>
                <div className="text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-counselor mb-2">50K+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-admin mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  To empower educational institutions with intelligent tools that transform 
                  attendance tracking into proactive student support, ensuring no student 
                  falls through the cracks.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-student/20 mt-1">
                      <div className="w-2 h-2 bg-student rounded-full" />
                    </div>
                    <p className="text-muted-foreground">
                      Early identification of at-risk students through pattern recognition
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-counselor/20 mt-1">
                      <div className="w-2 h-2 bg-counselor rounded-full" />
                    </div>
                    <p className="text-muted-foreground">
                      Streamlined communication between counselors, students, and administrators
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-admin/20 mt-1">
                      <div className="w-2 h-2 bg-admin rounded-full" />
                    </div>
                    <p className="text-muted-foreground">
                      Data-driven insights that lead to meaningful interventions
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={teamImage}
                  alt="Our dedicated team"
                  className="w-full h-auto rounded-3xl shadow-lifted hover:shadow-glow transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-student flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate educators and technologists working together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lifted transition-all duration-300">
                    <CardContent className="text-center space-y-4">
                      <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
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
                Our Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Moments that capture the positive change we're creating in education
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-student/5 via-counselor/5 to-admin/5">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join hundreds of educational institutions already using AttendancePortal 
                to improve student outcomes and create lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-student hover:bg-student-hover text-white shadow-lifted hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;