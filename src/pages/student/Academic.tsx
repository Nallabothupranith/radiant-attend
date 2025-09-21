import Navigation from "@/components/student/Navigation";
import StatCard from "@/components/student/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, BookOpen, Target, Award, Download, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Academic = () => {
  const academicStats = {
    currentCGPA: 7.80,
    currentSGPA: 8.10,
    creditsCompleted: 120,
    totalCredits: 160,
    rank: 15,
    totalStudents: 120
  };

  const semesterData = [
    { semester: "Sem 1", sgpa: 7.2, cgpa: 7.2 },
    { semester: "Sem 2", sgpa: 7.5, cgpa: 7.35 },
    { semester: "Sem 3", sgpa: 7.8, cgpa: 7.5 },
    { semester: "Sem 4", sgpa: 7.6, cgpa: 7.52 },
    { semester: "Sem 5", sgpa: 8.1, cgpa: 7.64 },
    { semester: "Sem 6", sgpa: 8.0, cgpa: 7.70 }
  ];

  const subjectMarks = [
    {
      subject: "DBMS",
      mid1: 85,
      mid2: 88,
      internal: 92,
      external: 78,
      total: 343,
      grade: "A"
    },
    {
      subject: "DSA",
      mid1: 78,
      mid2: 82,
      internal: 85,
      external: 80,
      total: 325,
      grade: "A-"
    },
    {
      subject: "OS",
      mid1: 72,
      mid2: 75,
      internal: 78,
      external: 72,
      total: 297,
      grade: "B+"
    },
    {
      subject: "CN",
      mid1: 88,
      mid2: 85,
      internal: 90,
      external: 85,
      total: 348,
      grade: "A"
    },
    {
      subject: "Web Dev",
      mid1: 95,
      mid2: 92,
      internal: 98,
      external: 88,
      total: 373,
      grade: "A+"
    }
  ];

  const strengthsWeaknesses = [
    { subject: 'Web Dev', score: 95 },
    { subject: 'DBMS', score: 86 },
    { subject: 'CN', score: 87 },
    { subject: 'DSA', score: 81 },
    { subject: 'OS', score: 74 },
  ];

  const predictedGrades = [
    { subject: "DBMS", predicted: "A", confidence: 85 },
    { subject: "DSA", predicted: "A-", confidence: 78 },
    { subject: "OS", predicted: "B+", confidence: 92 },
    { subject: "CN", predicted: "A", confidence: 88 },
    { subject: "Web Dev", predicted: "A+", confidence: 95 }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+": return "success";
      case "A": return "success";
      case "A-": return "default";
      case "B+": return "warning";
      case "B": return "warning";
      default: return "destructive";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Academic Progress</h1>
          <p className="text-muted-foreground">Track your academic performance and achievements</p>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Current CGPA"
            value={academicStats.currentCGPA}
            icon={<BookOpen className="h-4 w-4" />}
            trend={{ value: "+0.06 this sem", positive: true }}
            variant="success"
          />
          <StatCard
            title="Current SGPA"
            value={academicStats.currentSGPA}
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: "+0.10 from last", positive: true }}
            variant="success"
          />
          <StatCard
            title="Class Rank"
            value={`${academicStats.rank}/${academicStats.totalStudents}`}
            icon={<Award className="h-4 w-4" />}
            trend={{ value: "↑3 positions", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* GPA Trend */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>GPA Progression</CardTitle>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="recent">Recent 3</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={semesterData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis domain={[6, 9]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sgpa" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="SGPA"
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cgpa" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={3}
                    name="CGPA"
                    dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Performance Radar */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle>Subject Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={strengthsWeaknesses}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={45} domain={[0, 100]} />
                  <Radar
                    name="Performance"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                <div className="text-sm">
                  <span className="font-medium text-success">Strengths:</span> Web Development, Computer Networks
                </div>
                <div className="text-sm">
                  <span className="font-medium text-warning">Focus Areas:</span> Operating Systems, DSA
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Semester Details */}
        <Card className="shadow-card mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Current Semester Breakdown</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                // Create a simple marksheet export
                const marksheetData = {
                  student: "Alex Johnson",
                  rollNo: "CS21B1001",
                  semester: "6th Semester",
                  subjects: subjectMarks,
                  cgpa: academicStats.currentCGPA,
                  sgpa: academicStats.currentSGPA
                };
                
                const dataStr = JSON.stringify(marksheetData, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'marksheet_sem6.json';
                link.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Export Marksheet
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Subject</th>
                    <th className="text-center p-3 font-semibold">Mid-1</th>
                    <th className="text-center p-3 font-semibold">Mid-2</th>
                    <th className="text-center p-3 font-semibold">Internal</th>
                    <th className="text-center p-3 font-semibold">External</th>
                    <th className="text-center p-3 font-semibold">Total</th>
                    <th className="text-center p-3 font-semibold">Sem</th>
                    <th className="text-center p-3 font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectMarks.map((subject, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="p-3 font-medium">{subject.subject}</td>
                      <td className="p-3 text-center">{subject.mid1}</td>
                      <td className="p-3 text-center">{subject.mid2}</td>
                      <td className="p-3 text-center">{subject.internal}</td>
                      <td className="p-3 text-center">{subject.external}</td>
                      <td className="p-3 text-center font-semibold">{subject.total}</td>
                      <td className="p-3 text-center">6th</td>
                      <td className="p-3 text-center">
                        <Badge variant={getGradeColor(subject.grade) as any}>
                          {subject.grade}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Predicted Performance */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                AI Grade Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictedGrades.map((pred, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-button-hover transition-all duration-300">
                    <div>
                      <div className="font-medium">{pred.subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {pred.confidence}% confidence
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={getGradeColor(pred.predicted) as any}>
                        {pred.predicted}
                      </Badge>
                      <Progress 
                        value={pred.confidence} 
                        className="w-20 h-2 mt-1" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300 hover:bg-button-hover">
            <CardHeader>
              <CardTitle>Academic Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <h4 className="font-semibold text-success mb-2">🎉 Strengths</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Excellent performance in Web Development</li>
                    <li>• Consistent improvement in CGPA</li>
                    <li>• Strong practical implementation skills</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2">📚 Focus Areas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Improve OS conceptual understanding</li>
                    <li>• Practice more DSA problem-solving</li>
                    <li>• Attend additional help sessions</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">🎯 Goals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Target 8.0+ CGPA by year-end</li>
                    <li>• Improve class ranking to top 10</li>
                    <li>• Maintain current performance level</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Tracking */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Degree Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <div className="text-sm text-muted-foreground mb-3">Degree Completion</div>
                <Progress value={75} className="h-3" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">120/160</div>
                <div className="text-sm text-muted-foreground mb-3">Credits Earned</div>
                <Progress value={(120/160) * 100} className="h-3" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6/8</div>
                <div className="text-sm text-muted-foreground mb-3">Semesters Complete</div>
                <Progress value={(6/8) * 100} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Academic;