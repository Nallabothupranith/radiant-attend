import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  UserCheck, 
  Shield, 
  Eye, 
  EyeOff, 
  LogIn,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam && ['student', 'counselor', 'admin'].includes(roleParam)) {
      setSelectedRole(roleParam);
      setFormData(prev => ({ ...prev, role: roleParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to continue.",
        variant: "destructive",
      });
      return;
    }

    const userData = {
      email: formData.email,
      role: formData.role,
      name: formData.email.split('@')[0],
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem('attendancePortalUser', JSON.stringify(userData));

    toast({
      title: "Login Successful!",
      description: `Welcome to your ${formData.role} portal.`,
    });

    setTimeout(() => {
      if (formData.role === 'student') {
        navigate('/student');
      } else if (formData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setFormData(prev => ({ ...prev, role }));
  };

  const roleConfigs = {
    student: {
      icon: Users,
      title: 'Student Portal',
      description: 'Access your attendance records and academic progress',
      gradient: 'bg-gradient-student',
    },
    counselor: {
      icon: UserCheck,
      title: 'Counselor Portal',
      description: 'Monitor students and provide targeted support',
      gradient: 'bg-gradient-counselor',
    },
    admin: {
      icon: Shield,
      title: 'Admin Portal',
      description: 'Comprehensive system management and oversight',
      gradient: 'bg-gradient-admin',
    },
  };

  const currentRole = selectedRole as keyof typeof roleConfigs;
  const roleConfig = currentRole ? roleConfigs[currentRole] : null;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-10 w-72 h-72 opacity-30" />
        <div className="blob absolute top-40 right-20 w-96 h-96 opacity-20" />
        <div className="blob absolute bottom-20 left-1/3 w-80 h-80 opacity-25" />
      </div>

      <main className="relative">
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Secure Portal Access
              </Badge>
              <h1 className="font-display text-4xl lg:text-6xl leading-tight text-foreground mb-4">
                Welcome Back to{' '}
                <span className="gradient-text">AttendancePortal</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sign in to access your personalized dashboard.
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <Card className="shadow-lifted">
                <CardHeader className="text-center">
                  <CardTitle className="font-display text-2xl text-foreground">
                    Sign In
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Enter your credentials to access your portal
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                          className="hover:border-primary/50 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Portal Type</Label>
                      <Select value={selectedRole} onValueChange={handleRoleSelect}>
                        <SelectTrigger className="hover:border-primary/50 focus:border-primary">
                          <SelectValue placeholder="Select your portal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student Portal</SelectItem>
                          <SelectItem value="counselor">Counselor Portal</SelectItem>
                          <SelectItem value="admin">Admin Portal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-student text-white shadow-lifted hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                    >
                      Sign In
                      <LogIn className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;