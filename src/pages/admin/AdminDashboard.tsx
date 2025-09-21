import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  AlertTriangle,
  Calendar,
  BookOpen,
  BarChart3,
  UserCheck
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getStudents, getCounselors, getMeetings, initializeDummyData, branches } from "@/data/adminData";

interface DashboardStats {
  totalStudents: number;
  totalCounselors: number;
  highRiskStudents: number;
  completedMeetings: number;
  averageAttendance: number;
  feeDefaulters: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 0,
    totalCounselors: 0,
    highRiskStudents: 0,
    completedMeetings: 0,
    averageAttendance: 0,
    feeDefaulters: 0
  });

  const [riskData, setRiskData] = useState([
    { name: 'Low Risk', value: 0, color: 'hsl(var(--risk-low))' },
    { name: 'Medium Risk', value: 0, color: 'hsl(var(--risk-medium))' },
    { name: 'High Risk', value: 0, color: 'hsl(var(--risk-high))' }
  ]);

  const [branchData, setBranchData] = useState<any[]>([]);

  useEffect(() => {
    initializeDummyData();
    
    const students = getStudents();
    const counselors = getCounselors();
    const meetings = getMeetings();

    // Calculate dashboard statistics
    const totalStudents = students.length;
    const highRiskStudents = students.filter(s => s.riskLevel === 'high').length;
    const mediumRiskStudents = students.filter(s => s.riskLevel === 'medium').length;
    const lowRiskStudents = students.filter(s => s.riskLevel === 'low').length;
    const completedMeetings = meetings.filter(m => m.status === 'completed').length;
    const averageAttendance = students.reduce((acc, s) => acc + s.attendance, 0) / totalStudents;
    const feeDefaulters = students.filter(s => !s.feePaid).length;

    setStats({
      totalStudents,
      totalCounselors: counselors.length,
      highRiskStudents,
      completedMeetings,
      averageAttendance: Math.round(averageAttendance * 100) / 100,
      feeDefaulters
    });

    setRiskData([
      { name: 'Low Risk', value: lowRiskStudents, color: 'hsl(var(--risk-low))' },
      { name: 'Medium Risk', value: mediumRiskStudents, color: 'hsl(var(--risk-medium))' },
      { name: 'High Risk', value: highRiskStudents, color: 'hsl(var(--risk-high))' }
    ]);

    // Calculate branch-wise statistics
    const branchStats = branches.map(branch => {
      const branchStudents = students.filter(s => s.branch === branch);
      const avgAttendance = branchStudents.reduce((acc, s) => acc + s.attendance, 0) / branchStudents.length;
      const highRisk = branchStudents.filter(s => s.riskLevel === 'high').length;
      
      return {
        branch,
        students: branchStudents.length,
        attendance: Math.round(avgAttendance),
        highRisk
      };
    });

    setBranchData(branchStats);
  }, []);

  const statCards = [
    {
      title: "Total Students",
      value: stats.totalStudents,
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Total Counselors",
      value: stats.totalCounselors,
      icon: UserCheck,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "High Risk Students",
      value: stats.highRiskStudents,
      icon: AlertTriangle,
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Completed Sessions",
      value: stats.completedMeetings,
      icon: Calendar,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Average Attendance",
      value: `${stats.averageAttendance}%`,
      icon: TrendingUp,
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Fee Defaulters",
      value: stats.feeDefaulters,
      icon: BookOpen,
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6 aurora-bg">
      <div className="light-rays"></div>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to SchoolHub Administrative Portal</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {statCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="prism-card hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">{card.title}</p>
                    <p className="text-3xl font-bold">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${card.bgColor}`}>
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Risk Assessment Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Risk Assessment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      className="chart-pie"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                {riskData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Branch Analytics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Branch-wise Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={branchData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="hsl(var(--aurora-primary))" className="chart-bar" />
                    <Bar dataKey="attendance" fill="hsl(var(--aurora-secondary))" className="chart-bar" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="prism-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="glass-elevated hover:scale-105 transition-transform">
                <Users className="mr-2 h-4 w-4" />
                Manage Students
              </Button>
              <Button className="glass-elevated hover:scale-105 transition-transform">
                <UserCheck className="mr-2 h-4 w-4" />
                Manage Counselors
              </Button>
              <Button className="glass-elevated hover:scale-105 transition-transform">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button className="glass-elevated hover:scale-105 transition-transform">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;