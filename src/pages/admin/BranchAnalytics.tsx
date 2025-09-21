import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  GraduationCap,
  Target,
  Award,
  BookOpen
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { getStudents, branches, subjects } from "@/data/adminData";
import AdminLayout from "@/components/admin/AdminLayout";

interface BranchStats {
  branch: string;
  totalStudents: number;
  averageAttendance: number;
  averageMarks: number;
  highRiskCount: number;
  mediumRiskCount: number;
  lowRiskCount: number;
  feeDefaulters: number;
  topPerformers: number;
}

const BranchAnalytics = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("all");
  const [branchStats, setBranchStats] = useState<BranchStats[]>([]);
  const [subjectPerformance, setSubjectPerformance] = useState<any[]>([]);
  const [yearWiseData, setYearWiseData] = useState<any[]>([]);

  useEffect(() => {
    const students = getStudents();
    
    // Calculate branch-wise statistics
    const stats = branches.map(branch => {
      const branchStudents = students.filter(s => s.branch === branch);
      const totalStudents = branchStudents.length;
      
      if (totalStudents === 0) {
        return {
          branch,
          totalStudents: 0,
          averageAttendance: 0,
          averageMarks: 0,
          highRiskCount: 0,
          mediumRiskCount: 0,
          lowRiskCount: 0,
          feeDefaulters: 0,
          topPerformers: 0
        };
      }

      const avgAttendance = branchStudents.reduce((acc, s) => acc + s.attendance, 0) / totalStudents;
      
      // Calculate average marks across all subjects for each student
      const avgMarks = branchStudents.reduce((acc, s) => {
        const studentAvg = Object.values(s.marks).reduce((sum: number, mark) => sum + (mark as number), 0) / Object.values(s.marks).length;
        return acc + studentAvg;
      }, 0) / totalStudents;

      return {
        branch,
        totalStudents,
        averageAttendance: Math.round(avgAttendance * 100) / 100,
        averageMarks: Math.round(avgMarks * 100) / 100,
        highRiskCount: branchStudents.filter(s => s.riskLevel === 'high').length,
        mediumRiskCount: branchStudents.filter(s => s.riskLevel === 'medium').length,
        lowRiskCount: branchStudents.filter(s => s.riskLevel === 'low').length,
        feeDefaulters: branchStudents.filter(s => !s.feePaid).length,
        topPerformers: branchStudents.filter(s => {
          const studentAvg = Object.values(s.marks).reduce((sum: number, mark) => sum + (mark as number), 0) / Object.values(s.marks).length;
          return studentAvg >= 85;
        }).length
      };
    });

    setBranchStats(stats);

    // Calculate subject-wise performance for selected branch or all
    let targetStudents = students;
    if (selectedBranch !== "all") {
      targetStudents = students.filter(s => s.branch === selectedBranch);
    }

    // Get all unique subjects from all branches
    const allSubjects = new Set<string>();
    Object.values(subjects).forEach(branchSubjects => {
      branchSubjects.forEach(subject => allSubjects.add(subject));
    });

    const subjectPerf = Array.from(allSubjects).map(subject => {
      const studentsWithSubject = targetStudents.filter(s => s.marks[subject] !== undefined);
      if (studentsWithSubject.length === 0) return null;
      
      const avgMark = studentsWithSubject.reduce((acc, s) => acc + s.marks[subject], 0) / studentsWithSubject.length;
      return {
        subject: subject.length > 15 ? subject.substring(0, 12) + '...' : subject,
        fullSubject: subject,
        average: Math.round(avgMark * 100) / 100,
        students: studentsWithSubject.length
      };
    }).filter(Boolean);

    setSubjectPerformance(subjectPerf.slice(0, 8)); // Show top 8 subjects

    // Year-wise distribution
    const yearData = [1, 2, 3, 4].map(year => {
      const yearStudents = targetStudents.filter(s => s.year === year);
      const avgAttendance = yearStudents.length > 0 
        ? yearStudents.reduce((acc, s) => acc + s.attendance, 0) / yearStudents.length 
        : 0;
      
      return {
        year: `Year ${year}`,
        students: yearStudents.length,
        attendance: Math.round(avgAttendance),
        highRisk: yearStudents.filter(s => s.riskLevel === 'high').length
      };
    });

    setYearWiseData(yearData);
  }, [selectedBranch]);

  const getCurrentBranchData = () => {
    if (selectedBranch === "all") {
      const totalStats = branchStats.reduce((acc, branch) => ({
        totalStudents: acc.totalStudents + branch.totalStudents,
        averageAttendance: acc.averageAttendance + (branch.averageAttendance * branch.totalStudents),
        averageMarks: acc.averageMarks + (branch.averageMarks * branch.totalStudents),
        highRiskCount: acc.highRiskCount + branch.highRiskCount,
        mediumRiskCount: acc.mediumRiskCount + branch.mediumRiskCount,
        lowRiskCount: acc.lowRiskCount + branch.lowRiskCount,
        feeDefaulters: acc.feeDefaulters + branch.feeDefaulters,
        topPerformers: acc.topPerformers + branch.topPerformers
      }), {
        totalStudents: 0,
        averageAttendance: 0,
        averageMarks: 0,
        highRiskCount: 0,
        mediumRiskCount: 0,
        lowRiskCount: 0,
        feeDefaulters: 0,
        topPerformers: 0
      });

      if (totalStats.totalStudents > 0) {
        totalStats.averageAttendance = Math.round((totalStats.averageAttendance / totalStats.totalStudents) * 100) / 100;
        totalStats.averageMarks = Math.round((totalStats.averageMarks / totalStats.totalStudents) * 100) / 100;
      }

      return totalStats;
    }

    return branchStats.find(b => b.branch === selectedBranch) || branchStats[0];
  };

  const currentData = getCurrentBranchData();
  const riskData = [
    { name: 'Low Risk', value: currentData?.lowRiskCount || 0, color: 'hsl(var(--risk-low))' },
    { name: 'Medium Risk', value: currentData?.mediumRiskCount || 0, color: 'hsl(var(--risk-medium))' },
    { name: 'High Risk', value: currentData?.highRiskCount || 0, color: 'hsl(var(--risk-high))' }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="aurora-bg"></div>
        <div className="light-rays"></div>

        {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Branch Analytics</h1>
            <p className="text-muted-foreground">Comprehensive analytics across all academic branches</p>
          </div>
          
          <Select value={selectedBranch} onValueChange={setSelectedBranch}>
            <SelectTrigger className="w-48 glass-elevated">
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              {branches.map(branch => (
                <SelectItem key={branch} value={branch}>{branch}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
      >
        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Students</p>
                <p className="text-2xl font-bold">{currentData?.totalStudents || 0}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg Attendance</p>
                <p className="text-2xl font-bold">{currentData?.averageAttendance || 0}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg Marks</p>
                <p className="text-2xl font-bold">{currentData?.averageMarks || 0}</p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Top Performers</p>
                <p className="text-2xl font-bold">{currentData?.topPerformers || 0}</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subject Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Subject-wise Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectPerformance} margin={{ bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="subject" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value} marks`,
                        `Average (${props.payload.students} students)`
                      ]}
                      labelFormatter={(label) => {
                        const item = subjectPerformance.find(s => s.subject === label);
                        return item?.fullSubject || label;
                      }}
                    />
                    <Bar 
                      dataKey="average" 
                      fill="hsl(var(--aurora-primary))"
                      className="chart-bar"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Risk Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Risk Level Distribution</CardTitle>
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
      </div>

      {/* Year-wise Analysis & Branch Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Year-wise Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Year-wise Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearWiseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="hsl(var(--aurora-secondary))" name="Students" />
                    <Bar dataKey="attendance" fill="hsl(var(--aurora-accent))" name="Avg Attendance" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Branch Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Branch Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {branchStats.slice(0, 6).map((branch, index) => (
                  <motion.div
                    key={branch.branch}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-hover-soft-blue transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold">{branch.branch}</h4>
                      <p className="text-sm text-muted-foreground">
                        {branch.totalStudents} students
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-2">
                        <Badge 
                          variant={branch.averageAttendance >= 80 ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {branch.averageAttendance}% Att.
                        </Badge>
                        <Badge 
                          variant={branch.highRiskCount === 0 ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {branch.highRiskCount} High Risk
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BranchAnalytics;