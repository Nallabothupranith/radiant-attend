import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navigation from "@/components/student/Navigation";
import StatCard from "@/components/student/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Calendar,
  Award,
  AlertTriangle,
  Brain,
  Target,
  Clock,
  Users,
  Trophy,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type DashboardRow = {
  name: string;
  student_id: string;
  semester: string;
  cgpa: number;
  attendance: number;
  xp_points: number;
  badges: number;
  level: number;
  risk_level: string;
  email: string;
};

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState<DashboardRow | null>(null);
  const [loading, setLoading] = useState(true);

  // Fake performance chart data (you can later make a table for it if needed)
  const weeklyPerformance = [
    { week: "Week 1", performance: 85, attendance: 90 },
    { week: "Week 2", performance: 78, attendance: 85 },
    { week: "Week 3", performance: 82, attendance: 75 },
    { week: "Week 4", performance: 88, attendance: 80 },
    { week: "Week 5", performance: 85, attendance: 78 },
    { week: "Week 6", performance: 90, attendance: 85 },
  ];

  const recentActivities = [
    {
      type: "assignment",
      title: "DBMS Assignment 3 submitted",
      time: "2 hours ago",
      status: "success",
    },
    {
      type: "achievement",
      title: "Earned 'Study Streak' badge",
      time: "1 day ago",
      status: "success",
    },
    {
      type: "alert",
      title: "OS attendance below 75%",
      time: "2 days ago",
      status: "warning",
    },
    {
      type: "grade",
      title: "Web Dev quiz score: 85/100",
      time: "3 days ago",
      status: "info",
    },
  ];

  const upcomingEvents = [
    {
      title: "Database Management Mid-Exam",
      date: "Feb 15, 2024",
      type: "exam",
    },
    { title: "Counseling Session", date: "Feb 12, 2024", type: "meeting" },
    {
      title: "Assignment Due: Data Structures",
      date: "Feb 10, 2024",
      type: "assignment",
    },
  ];

  useEffect(() => {
    const fetchDashboard = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("student_dashboard")
        .select("*")
        .eq("email", user.email)
        .single();

      if (error) {
        console.error("Error fetching dashboard:", error);
        return;
      }

      setStudentData(data as DashboardRow);
      setLoading(false);
    };

    fetchDashboard();
  }, []);

  if (loading || !studentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  const quickStats = [
    {
      title: "CGPA",
      value: studentData.cgpa,
      icon: BookOpen,
      trend: { value: "+0.2 this sem", positive: true },
      variant: "success",
    },
    {
      title: "Attendance",
      value: `${studentData.attendance}%`,
      icon: Calendar,
      trend: { value: "-5% this month", positive: false },
      variant: "warning",
    },
    {
      title: "XP Points",
      value: studentData.xp_points,
      icon: Trophy,
      trend: { value: "+120 this week", positive: true },
      variant: "default",
    },
    {
      title: "Current Level",
      value: studentData.level,
      icon: Award,
      trend: { value: "Next: 1350 XP", positive: true },
      variant: "success",
    },
  ];

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
            Here's your academic progress overview for {studentData.semester}{" "}
            semester
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Chart */}
          <Card className="lg:col-span-2 shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Performance"
                  />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                    name="Attendance"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Badge variant="secondary" className="text-sm">
                  {studentData.risk_level} Risk
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Based on attendance and performance patterns
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Attendance Impact</span>
                  <span>{studentData.attendance}%</span>
                </div>
                <Progress value={studentData.attendance} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Academic Performance</span>
                  <span>{studentData.cgpa * 10}%</span>
                </div>
                <Progress value={studentData.cgpa * 10} className="h-2" />
              </div>

              <Link to="/student/risk-prediction">
                <Button className="w-full mt-4" variant="outline">
                  View Detailed Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/20"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-500"
                          : activity.status === "warning"
                          ? "bg-yellow-500"
                          : activity.status === "info"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/20"
                  >
                    <div
                      className={`p-2 rounded-md ${
                        event.type === "exam"
                          ? "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
                          : event.type === "meeting"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                          : "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400"
                      }`}
                    >
                      {event.type === "exam" ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : event.type === "meeting" ? (
                        <Users className="h-4 w-4" />
                      ) : (
                        <Target className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
