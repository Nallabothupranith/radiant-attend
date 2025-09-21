import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import RiskBadge from "@/components/RiskBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Trophy, 
  Target, 
  Calendar, 
  BookOpen, 
  AlertTriangle,
  MessageCircle,
  TrendingUp,
  Award,
  DollarSign
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: "Alex Johnson",
    rollNo: "CS21B1001",
    currentXP: 2450,
    level: 3,
    nextLevelXP: 3000,
    riskLevel: "medium" as const,
    riskPercentage: 65,
    overallAttendance: 78,
    cgpa: 7.8,
    badges: 12,
    streak: 7
  });

  const attendanceData = [
    { name: 'Present', value: 78, color: 'hsl(var(--success))' },
    { name: 'Absent', value: 22, color: 'hsl(var(--destructive))' }
  ];

  const performanceData = [
    { month: 'Jan', gpa: 7.2 },
    { month: 'Feb', gpa: 7.5 },
    { month: 'Mar', gpa: 7.8 },
    { month: 'Apr', gpa: 7.6 },
    { month: 'May', gpa: 7.8 }
  ];

  const recentBadges = [
    { name: "Attendance Star", description: "7 days perfect attendance", earned: true },
    { name: "Assignment Hero", description: "Submitted 5 assignments on time", earned: true },
    { name: "Test Master", description: "Scored >85% in 3 tests", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative h-48 bg-cover bg-center bg-gradient-primary"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-primary-foreground">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {studentData.name}!</h1>
            <p className="text-lg opacity-90">Roll No: {studentData.rollNo}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Risk Alert */}
        {studentData.riskLevel === "medium" && (
          <div className="p-4 rounded-lg bg-warning/10 border border-warning/20 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span className="font-medium text-warning">Risk Alert</span>
            </div>
            <p className="text-sm text-foreground mb-3">
              You're flagged at medium risk (65%) due to declining academic performance and irregular attendance patterns.
            </p>
            <Link to="/counseling">
              <Button variant="warning" size="sm">
                Request Counseling Now
              </Button>
            </Link>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatCard
            title="Overall Attendance"
            value={`${studentData.overallAttendance}%`}
            icon={<Calendar className="h-4 w-4" />}
            trend={{ value: "-2% this month", positive: false }}
            variant={studentData.overallAttendance >= 75 ? "success" : "warning"}
          />
          <StatCard
            title="Current CGPA"
            value={studentData.cgpa}
            icon={<BookOpen className="h-4 w-4" />}
            trend={{ value: "+0.2 this sem", positive: true }}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Risk Prediction Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Dropout Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                    className="opacity-20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="hsl(var(--warning))"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${65 * 2.83} 283`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning">65%</div>
                    <div className="text-xs text-muted-foreground">Risk</div>
                  </div>
                </div>
              </div>
              <RiskBadge level={studentData.riskLevel} className="mb-4" />
              <Link to="/risk-prediction">
                <Button variant="outline" className="w-full">
                  View Detailed Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Level Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Level {studentData.level}</div>
                  <div className="text-sm text-muted-foreground">Current Progress</div>
                </div>
                <Progress 
                  value={75} 
                  className="h-3"
                />
                <div className="text-center text-sm">
                  <span>🔥 {studentData.streak} day streak</span>
                </div>
                <Button variant="gradient" className="w-full">
                  View All Achievements
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Fees Structure */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Fees Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-success h-3 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">70% Paid</div>
                </div>
                
                {/* Fee Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">Total Fees:</span>
                    <div className="font-semibold">₹50,000</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">Paid:</span>
                    <div className="font-semibold text-success">₹35,000</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">Balance:</span>
                    <div className="font-semibold text-destructive">₹15,000</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm">Due Date:</span>
                    <div className="font-semibold">2025-10-15</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Pie Chart */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Trend */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle>GPA Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[6, 9]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="gpa" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/counseling">
                <Button variant="warning" className="w-full h-16 flex-col gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Request Counseling
                </Button>
              </Link>
              <Link to="/attendance">
                <Button variant="outline" className="w-full h-16 flex-col gap-2">
                  <Calendar className="h-5 w-5" />
                  View Attendance
                </Button>
              </Link>
              <Link to="/academic">
                <Button variant="outline" className="w-full h-16 flex-col gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Academic Progress
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;