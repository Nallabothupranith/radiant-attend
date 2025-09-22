import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navigation from "@/components/student/Navigation";
import StatCard from "@/components/student/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

type SubjectRow = {
  subject: string;
  attendance: number;
  present: number;
  total: number;
  status: "good" | "warning" | "danger" | string;
};

type WeeklyRow = {
  week: string;
  attendance: number;
};

const Attendance = () => {
  const [subjectAttendance, setSubjectAttendance] = useState<SubjectRow[]>([]);
  const [weeklyData, setWeeklyData] = useState<WeeklyRow[]>([]);
  const [overallAttendance, setOverallAttendance] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Fetch subject-wise attendance
      const { data: subjectData, error: subjectError } = await supabase
        .from("subject_attendance")
        .select("subject, attendance, present, total, status")
        .eq("email", user.email);

      if (subjectError) {
        console.error("Subject fetch error:", subjectError);
        return;
      }

      // Fetch weekly attendance
      const { data: weeklyDataRaw, error: weeklyError } = await supabase
        .from("weekly_attendance")
        .select("week, attendance")
        .eq("email", user.email)
        .order("week", { ascending: true });

      if (weeklyError) {
        console.error("Weekly fetch error:", weeklyError);
        return;
      }

      setSubjectAttendance(subjectData as SubjectRow[]);
      setWeeklyData(weeklyDataRaw as WeeklyRow[]);

      // Calculate overall attendance
      if (subjectData && subjectData.length > 0) {
        const totalClasses = subjectData.reduce((sum, s) => sum + s.total, 0);
        const attendedClasses = subjectData.reduce(
          (sum, s) => sum + s.present,
          0
        );
        setOverallAttendance(
          Math.round((attendedClasses / totalClasses) * 100)
        );
      }

      setLoading(false);
    };

    fetchAttendance();
  }, []);

  const getStatusColor = (
    status: SubjectRow["status"]
  ): "destructive" | "secondary" | "default" | "outline" => {
    switch (status) {
      case "good":
        return "default";
      case "warning":
        return "outline";
      case "danger":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const lowAttendanceSubjects = subjectAttendance.filter(
    (s) => s.attendance < 75
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading attendance...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Attendance Tracker</h1>
          <p className="text-muted-foreground">
            Monitor your attendance and stay on track
          </p>
        </div>

        {/* Low Attendance Alert */}
        {lowAttendanceSubjects.length > 0 && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">
                Low Attendance Alert
              </span>
            </div>
            <p className="text-sm text-foreground">
              Attendance shortage alert: You have low attendance in{" "}
              {lowAttendanceSubjects.length} subject(s). Immediate action
              required.
            </p>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Overall Attendance"
            value={`${overallAttendance}%`}
            icon={<Calendar className="h-4 w-4" />}
            trend={{
              value: overallAttendance >= 75 ? "+Good" : "-Low",
              positive: overallAttendance >= 75,
            }}
            variant={overallAttendance >= 75 ? "success" : "warning"}
          />
          <StatCard
            title="Classes Attended"
            value={String(
              subjectAttendance.reduce((sum, s) => sum + s.present, 0)
            )}
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: "+ this week", positive: true }}
          />
          <StatCard
            title="Classes Missed"
            value={String(
              subjectAttendance.reduce(
                (sum, s) => sum + (s.total - s.present),
                0
              )
            )}
            icon={<TrendingDown className="h-4 w-4" />}
            trend={{ value: "+ this week", positive: false }}
            variant="warning"
          />
          <StatCard
            title="Total Classes"
            value={String(
              subjectAttendance.reduce((sum, s) => sum + s.total, 0)
            )}
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject-wise Attendance */}
          <Card>
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

        {/* Subject Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Subject Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectAttendance.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-semibold">{subject.subject}</h3>
                    <p className="text-sm text-muted-foreground">
                      {subject.present}/{subject.total} classes attended
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold">
                        {subject.attendance}%
                      </div>
                      {subject.attendance < 75 && (
                        <div className="text-xs text-destructive">
                          Need{" "}
                          {Math.ceil((75 * subject.total) / 100) -
                            subject.present}{" "}
                          more classes
                        </div>
                      )}
                    </div>
                    <Badge variant={getStatusColor(subject.status)}>
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
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowAttendanceSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-warning/5 border border-warning/20"
                >
                  <h4 className="font-semibold text-warning-foreground mb-2">
                    📚 {subject.subject} - Action Required
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Attend at least{" "}
                    {Math.ceil((75 * subject.total) / 100) - subject.present}{" "}
                    more classes to reach the minimum 75% requirement.
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
                    You're maintaining good attendance across all subjects. Keep
                    it up!
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
