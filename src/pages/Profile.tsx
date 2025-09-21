import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Trophy,
  Target,
  BookOpen,
  Edit,
  Camera
} from "lucide-react";

const Profile = () => {
  const studentInfo = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    address: "123 College Street, University City, UC 12345",
    studentId: "CS21B1001",
    department: "Computer Science",
    semester: "6th",
    batch: "2021-2025",
    mentor: "Dr. Sarah Wilson"
  };

  const academicInfo = {
    cgpa: 7.8,
    sgpa: 8.1,
    creditsCompleted: 120,
    totalCredits: 160,
    rank: 15,
    totalStudents: 120
  };

  const achievements = [
    { name: "Dean's List", description: "Top 10% of class", date: "Fall 2023", icon: Trophy },
    { name: "Perfect Attendance", description: "100% attendance for 2 months", date: "Oct 2023", icon: Calendar },
    { name: "Assignment Hero", description: "Submitted 10 assignments on time", date: "Sep 2023", icon: Target },
    { name: "Study Streak", description: "7 days continuous learning", date: "Aug 2023", icon: BookOpen }
  ];

  const skillProgress = [
    { skill: "Programming", progress: 85 },
    { skill: "Database Management", progress: 78 },
    { skill: "Web Development", progress: 92 },
    { skill: "Data Structures", progress: 75 },
    { skill: "Operating Systems", progress: 68 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and track your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                >
                  <Camera className="h-3 w-3" />
                </Button>
              </div>
              <CardTitle className="text-xl">{studentInfo.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{studentInfo.studentId}</p>
              <Badge variant="secondary" className="mt-2">
                {studentInfo.department} - {studentInfo.semester} Semester
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{studentInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{studentInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{studentInfo.address}</span>
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Student ID</Label>
                      <Input value={studentInfo.studentId} disabled />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Department</Label>
                      <Input value={studentInfo.department} disabled />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Current Semester</Label>
                      <Input value={studentInfo.semester} disabled />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Batch</Label>
                      <Input value={studentInfo.batch} disabled />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Faculty Mentor</Label>
                      <Input value={studentInfo.mentor} disabled />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Current CGPA</Label>
                      <Input value={academicInfo.cgpa} disabled />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{academicInfo.cgpa}</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{academicInfo.sgpa}</div>
                    <div className="text-sm text-muted-foreground">Current SGPA</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {academicInfo.creditsCompleted}/{academicInfo.totalCredits}
                    </div>
                    <div className="text-sm text-muted-foreground">Credits</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {academicInfo.rank}/{academicInfo.totalStudents}
                    </div>
                    <div className="text-sm text-muted-foreground">Class Rank</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Credit Completion</span>
                    <span>{Math.round((academicInfo.creditsCompleted / academicInfo.totalCredits) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(academicInfo.creditsCompleted / academicInfo.totalCredits) * 100} 
                    className="h-2" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.skill}</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements & Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={achievement.name}
                        className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.name}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;