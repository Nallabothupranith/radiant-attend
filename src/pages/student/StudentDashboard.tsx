import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Award, 
  AlertTriangle,
  Brain,
  Target,
  Clock,
  Users,
  Trophy
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const studentData = {
    name: "Alex Johnson",
    studentId: "ST2024001",
    semester: "6th",
    cgpa: 7.8,
    attendance: 78,
    xpPoints: 1250,
    badges: 8,
    level: 12,
    riskLevel: "Medium"
  };

  const quickStats = [
    { title: "CGPA", value: studentData.cgpa, icon: BookOpen, trend: { value: "+0.2 this sem", positive: true }, variant: "success" },
    { title: "Attendance", value: `${studentData.attendance}%`, icon: Calendar, trend: { value: "-5% this month", positive: false }, variant: "warning" },
    { title: "Total Subjects", value: 6, icon: BookOpen, trend: { value: "Current semester", positive: true }, variant: "default" },
    { title: "Assignments", value: 12, icon: Award, trend: { value: "3 pending", positive: false }, variant: "warning" }
  ];

  const weeklyPerformance = [
    { week: 'Week 1', performance: 85, attendance: 90 },
    { week: 'Week 2', performance: 78, attendance: 85 },
    { week: 'Week 3', performance: 82, attendance: 75 },
    { week: 'Week 4', performance: 88, attendance: 80 },
    { week: 'Week 5', performance: 85, attendance: 78 },
    { week: 'Week 6', performance: 90, attendance: 85 }
  ];

  const recentActivities = [
    { type: "assignment", title: "DBMS Assignment 3 submitted", time: "2 hours ago", status: "success" },
    { type: "achievement", title: "Earned 'Study Streak' badge", time: "1 day ago", status: "success" },
    { type: "alert", title: "OS attendance below 75%", time: "2 days ago", status: "warning" },
    { type: "grade", title: "Web Dev quiz score: 85/100", time: "3 days ago", status: "info" }
  ];

  const upcomingEvents = [
    { title: "Database Management Mid-Exam", date: "Feb 15, 2024", type: "exam" },
    { title: "Counseling Session", date: "Feb 12, 2024", type: "meeting" },
    { title: "Assignment Due: Data Structures", date: "Feb 10, 2024", type: "assignment" }
  ];

  const riskData = [
    { name: 'Low Risk', value: 25, color: 'hsl(var(--success))' },
    { name: 'Medium Risk', value: 45, color: 'hsl(var(--warning))' },
    { name: 'High Risk', value: 30, color: 'hsl(var(--destructive))' }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low": return "success";
      case "Medium": return "warning";
      case "High": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {studentData.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your academic progress overview for {studentData.semester} semester
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="transform-gpu"
            >
              <StatCard
                title={stat.title}
                value={stat.value}
                icon={<stat.icon className="h-4 w-4" />}
                trend={stat.trend}
                variant={stat.variant as any}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Performance Chart */}
          <motion.div 
            className="lg:col-span-2"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-primary/10">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Weekly Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.3)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="performance" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Performance"
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attendance" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      name="Attendance"
                      dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: 'hsl(var(--secondary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Assessment Pie Chart */}
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-warning/10">
              <CardHeader className="bg-gradient-to-r from-warning/5 to-destructive/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-warning" />
                  Risk Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`text-sm px-3 py-1 ${
                      studentData.riskLevel === 'Medium' 
                        ? 'bg-warning/10 text-warning border-warning/20' 
                        : ''
                    }`}
                  >
                    {studentData.riskLevel} Risk Student
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2">
                    Current academic risk analysis
                  </p>
                </div>
                
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="space-y-2 mt-4">
                  {riskData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/student/risk-prediction">
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300" variant="default">
                    <Brain className="h-4 w-4 mr-2" />
                    Detailed Risk Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Recent Activities */}
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-success/10">
              <CardHeader className="bg-gradient-to-r from-success/5 to-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-success" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-muted/10 to-muted/5 border border-muted/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${
                          activity.status === 'success' ? 'bg-success' :
                          activity.status === 'warning' ? 'bg-warning' :
                          activity.status === 'info' ? 'bg-primary' : 'bg-muted-foreground'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-primary/10">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-muted/10 to-muted/5 border border-muted/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: -5, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className={`p-2 rounded-md transition-all duration-300 ${
                          event.type === 'exam' ? 'bg-destructive/10 text-destructive border border-destructive/20' :
                          event.type === 'meeting' ? 'bg-primary/10 text-primary border border-primary/20' :
                          'bg-success/10 text-success border border-success/20'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {event.type === 'exam' ? <AlertTriangle className="h-4 w-4" /> :
                         event.type === 'meeting' ? <Users className="h-4 w-4" /> :
                         <Target className="h-4 w-4" />}
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;