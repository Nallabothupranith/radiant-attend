import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, AlertTriangle, TrendingDown, TrendingUp, Clock, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from "framer-motion";

const Attendance = () => {
  const overallAttendance = 78;
  
  const subjectAttendance = [
    { subject: "DBMS", attendance: 85, present: 34, total: 40, status: "good" },
    { subject: "DSA", attendance: 72, present: 29, total: 40, status: "warning" },
    { subject: "OS", attendance: 65, present: 26, total: 40, status: "danger" },
    { subject: "CN", attendance: 88, present: 35, total: 40, status: "good" },
    { subject: "Web Dev", attendance: 90, present: 36, total: 40, status: "good" },
  ];

  const weeklyData = [
    { week: 'Week 1', attendance: 85 },
    { week: 'Week 2', attendance: 80 },
    { week: 'Week 3', attendance: 75 },
    { week: 'Week 4', attendance: 78 },
    { week: 'Week 5', attendance: 82 },
    { week: 'Week 6', attendance: 78 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "success";
      case "warning": return "warning";
      case "danger": return "destructive";
      default: return "secondary";
    }
  };

  const lowAttendanceSubjects = subjectAttendance.filter(s => s.attendance < 75);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Attendance Tracker
          </h1>
          <p className="text-muted-foreground">Monitor your attendance and stay on track</p>
        </motion.div>

        {/* Attendance Shortage Alert */}
        {lowAttendanceSubjects.length > 0 && (
          <motion.div 
            className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 shadow-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">Low Attendance Alert</span>
            </div>
            <p className="text-sm text-foreground">
              Attendance shortage alert: You have low attendance in {lowAttendanceSubjects.length} subject(s). Immediate action required to avoid academic issues.
            </p>
          </motion.div>
        )}

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              title: "Overall Attendance",
              value: `${overallAttendance}%`,
              icon: <Calendar className="h-4 w-4" />,
              trend: { value: "-2% this month", positive: false },
              variant: (overallAttendance >= 75 ? "success" : "warning") as "success" | "warning"
            },
            {
              title: "Classes Attended",
              value: "171",
              icon: <TrendingUp className="h-4 w-4" />,
              trend: { value: "+8 this week", positive: true },
              variant: "default" as const
            },
            {
              title: "Classes Missed",
              value: "29",
              icon: <TrendingDown className="h-4 w-4" />,
              trend: { value: "+3 this week", positive: false },
              variant: "warning" as const
            },
            {
              title: "Total Classes",
              value: "200",
              icon: <Clock className="h-4 w-4" />,
              variant: "default" as const
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Attendance Trend */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-primary/10">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Attendance Trend
                </CardTitle>
                <Select defaultValue="semester">
                  <SelectTrigger className="w-32 bg-card border-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="semester">This Semester</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[60, 100]} stroke="hsl(var(--muted-foreground))" />
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
                      dataKey="attendance" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Subject-wise Attendance */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-secondary/10">
              <CardHeader className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Subject-wise Attendance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectAttendance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar 
                      dataKey="attendance" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Detailed Subject Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="shadow-card mb-8 hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-accent/10">
            <CardHeader className="bg-gradient-to-r from-accent/5 to-muted/5 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                Subject Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {subjectAttendance.map((subject, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-gradient-to-r from-card to-muted/5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        subject.status === 'good' ? 'bg-success' :
                        subject.status === 'warning' ? 'bg-warning' :
                        'bg-destructive'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-foreground">{subject.subject}</h3>
                        <p className="text-sm text-muted-foreground">
                          {subject.present}/{subject.total} classes attended
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-semibold text-foreground">{subject.attendance}%</div>
                        {subject.attendance < 75 && (
                          <div className="text-xs text-destructive font-medium">
                            Need {Math.ceil(75 * subject.total / 100) - subject.present} more classes
                          </div>
                        )}
                      </div>
                      <Badge 
                        variant={getStatusColor(subject.status) as any}
                        className="text-xs font-medium px-2 py-1"
                      >
                        {subject.status === "good" && "✓ Good"}
                        {subject.status === "warning" && "⚠ Warning"}
                        {subject.status === "danger" && "⚠ Critical"}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-success/5 to-warning/5 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Recommendations & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {lowAttendanceSubjects.map((subject, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 rounded-lg bg-gradient-to-r from-warning/10 to-warning/5 border border-warning/30 shadow-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      📚 {subject.subject} - Action Required
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Attend at least <span className="font-medium text-warning">
                        {Math.ceil(75 * subject.total / 100) - subject.present} more classes
                      </span> to reach the minimum 75% requirement.
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      View Class Schedule
                    </Button>
                  </motion.div>
                ))}
                
                {lowAttendanceSubjects.length === 0 && (
                  <motion.div 
                    className="p-6 rounded-lg bg-gradient-to-r from-success/10 to-success/5 border border-success/30 text-center shadow-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <h4 className="font-semibold text-success mb-2 text-lg">
                      🎉 Excellent Attendance!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You're maintaining outstanding attendance across all subjects. Keep up the great work!
                    </p>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Attendance;