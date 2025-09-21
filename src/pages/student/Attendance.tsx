import Navigation from "@/components/student/Navigation";
import StatCard from "@/components/student/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, AlertTriangle, TrendingDown, TrendingUp, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Attendance Tracker</h1>
          <p className="text-muted-foreground">Monitor your attendance and stay on track</p>
        </div>

        {/* Attendance Shortage Alert */}
        {lowAttendanceSubjects.length > 0 && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">Low Attendance Alert</span>
            </div>
            <p className="text-sm text-foreground">
              Attendance shortage alert: You have low attendance in {lowAttendanceSubjects.length} subject(s). Immediate action required to avoid academic issues.
            </p>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Overall Attendance"
            value={`${overallAttendance}%`}
            icon={<Calendar className="h-4 w-4" />}
            trend={{ value: "-2% this month", positive: false }}
            variant={overallAttendance >= 75 ? "success" : "warning"}
          />
          <StatCard
            title="Classes Attended"
            value="171"
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: "+8 this week", positive: true }}
          />
          <StatCard
            title="Classes Missed"
            value="29"
            icon={<TrendingDown className="h-4 w-4" />}
            trend={{ value: "+3 this week", positive: false }}
            variant="warning"
          />
          <StatCard
            title="Total Classes"
            value="200"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Trend */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Attendance Trend</CardTitle>
              <Select defaultValue="semester">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="semester">This Semester</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject-wise Attendance */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle>Subject-wise Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectAttendance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar 
                    dataKey="attendance" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Subject Breakdown */}
        <Card className="shadow-card mb-8 hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
          <CardHeader>
            <CardTitle>Subject Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectAttendance.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-button-hover transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold">{subject.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {subject.present}/{subject.total} classes attended
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold">{subject.attendance}%</div>
                      {subject.attendance < 75 && (
                        <div className="text-xs text-destructive">
                          Need {Math.ceil(75 * subject.total / 100) - subject.present} more classes
                        </div>
                      )}
                    </div>
                    <Badge variant={getStatusColor(subject.status) as any}>
                      {subject.status === "good" && "✓ Good"}
                      {subject.status === "warning" && "⚠ Warning"}
                      {subject.status === "danger" && "⚠ Critical"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowAttendanceSubjects.map((subject, index) => (
                <div key={index} className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                  <h4 className="font-semibold text-warning-foreground mb-2">
                    📚 {subject.subject} - Action Required
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Attend at least {Math.ceil(75 * subject.total / 100) - subject.present} more classes 
                    to reach the minimum 75% requirement.
                  </p>
                  <Button size="sm" variant="outline">
                    View Class Schedule
                  </Button>
                </div>
              ))}
              
              {lowAttendanceSubjects.length === 0 && (
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <h4 className="font-semibold text-success-foreground mb-2">
                    🎉 Great Job!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You're maintaining good attendance across all subjects. Keep it up!
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;