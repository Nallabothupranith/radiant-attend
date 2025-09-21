import Navigation from "@/components/student/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Brain, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  Shield, 
  Target,
  BookOpen,
  Calendar,
  Users,
  Lightbulb
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const RiskPrediction = () => {
  const riskData = {
    currentRisk: 65,
    riskLevel: "Medium",
    trend: "increasing",
    lastUpdated: "2 days ago"
  };

  const riskFactors = [
    { factor: "Attendance", score: 65, impact: "High", status: "warning" },
    { factor: "Academic Performance", score: 78, impact: "Medium", status: "good" },
    { factor: "Assignment Submission", score: 85, impact: "Medium", status: "good" },
    { factor: "Engagement Level", score: 60, impact: "High", status: "warning" },
    { factor: "Financial Status", score: 90, impact: "Low", status: "good" }
  ];

  const riskTrend = [
    { month: "Aug", risk: 45 },
    { month: "Sep", risk: 52 },
    { month: "Oct", risk: 58 },
    { month: "Nov", risk: 62 },
    { month: "Dec", risk: 65 },
    { month: "Jan", risk: 67 }
  ];

  const comparisonData = [
    { subject: 'Attendance', student: 65, average: 82, fullMark: 100 },
    { subject: 'Performance', student: 78, average: 75, fullMark: 100 },
    { subject: 'Engagement', student: 60, average: 70, fullMark: 100 },
    { subject: 'Assignments', student: 85, average: 78, fullMark: 100 },
    { subject: 'Participation', student: 55, average: 65, fullMark: 100 },
  ];

  const recommendations = [
    {
      category: "Attendance",
      priority: "High",
      suggestion: "Attend at least 5 more classes this month to improve your attendance percentage",
      action: "View Schedule"
    },
    {
      category: "Engagement",
      priority: "High", 
      suggestion: "Participate more actively in class discussions and group activities",
      action: "Join Study Group"
    },
    {
      category: "Study Habits",
      priority: "Medium",
      suggestion: "Establish a consistent daily study routine with regular breaks",
      action: "Create Schedule"
    },
    {
      category: "Support",
      priority: "Medium",
      suggestion: "Consider meeting with your academic advisor or counselor",
      action: "Book Session"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low": return "success";
      case "Medium": return "warning";
      case "High": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "success";
      case "warning": return "warning";
      case "danger": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Risk Prediction Analysis</h1>
          <p className="text-muted-foreground">
            AI-powered insights to help you stay on track with your academic goals
          </p>
        </motion.div>

        {/* Risk Alert */}
        {riskData.riskLevel !== "Low" && (
          <Alert className="mb-6 border-warning bg-warning/10">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Your current dropout risk is <strong>{riskData.riskLevel} ({riskData.currentRisk}%)</strong>. 
              Review the recommendations below to improve your academic standing.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Risk Status */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Current Risk Level
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="relative">
                <div className="w-24 h-24 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--warning))"
                      strokeWidth="2"
                      strokeDasharray={`${riskData.currentRisk}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{riskData.currentRisk}%</span>
                  </div>
                </div>
              </div>
              
            <Badge variant="secondary" className="text-sm">
              {riskData.riskLevel} Risk
            </Badge>
              
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                {riskData.trend === "increasing" ? (
                  <TrendingUp className="h-4 w-4 text-red-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                )}
                <span className={riskData.trend === "increasing" ? "text-red-500" : "text-green-500"}>
                  {riskData.trend === "increasing" ? "Increasing" : "Decreasing"}
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Last updated {riskData.lastUpdated}
              </p>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="lg:col-span-2 shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Risk Factors Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskFactors.map((factor, index) => (
                  <motion.div
                    key={factor.factor}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{factor.factor}</span>
                      <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {factor.impact} Impact
                    </Badge>
                        <span className="text-sm font-bold">{factor.score}%</span>
                      </div>
                    </div>
                    <Progress value={factor.score} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Risk Trend */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Risk Trend (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={riskTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="risk" 
                    stroke="hsl(var(--warning))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Comparison Radar */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Performance vs Class Average</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={comparisonData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar
                    name="You"
                    dataKey="student"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.2}
                  />
                  <Radar
                    name="Class Average"
                    dataKey="average"
                    stroke="hsl(var(--muted-foreground))"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity={0.1}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Personalized Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{rec.category}</h4>
              <Badge 
                variant={rec.priority === "High" ? "destructive" : "secondary"}
                className="text-xs"
              >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.suggestion}
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    {rec.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskPrediction;