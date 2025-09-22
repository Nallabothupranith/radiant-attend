import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import Navigation from "@/components/student/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Mail, Phone, MapPin, Edit, Camera } from "lucide-react";
import { motion } from "framer-motion";

const StudentProfile = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [academicInfo, setAcademicInfo] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("student_profile")
        .select("*")
        .eq("email", user.email)
        .single();

      if (error) {
        console.error(error);
      } else {
        setStudentInfo({
          name: data.name,
          email: data.email,
          phone: data.ph_number,
          address: data.address,
          studentId: data.student_id,
          department: data.department,
          semester: data.current_semester,
          batch: "2021-2025",
          mentor: data.faculty_mentor,
        });

        setAcademicInfo({
          cgpa: data.current_cgpa,
          sgpa: data.current_sgpa,
          creditsCompleted: data.credits,
          totalCredits: 160,
          rank: data.class_rank,
          totalStudents: 120,
        });
      }
    };

    fetchProfile();
  }, []);

  if (!studentInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and track your academic journey
          </p>
        </motion.div>

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
              <p className="text-sm text-muted-foreground">
                {studentInfo.studentId}
              </p>
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
            {academicInfo && (
              <>
                <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium">
                            Student ID
                          </Label>
                          <Input value={studentInfo.studentId} disabled />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">
                            Department
                          </Label>
                          <Input value={studentInfo.department} disabled />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">
                            Current Semester
                          </Label>
                          <Input value={studentInfo.semester} disabled />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium">Batch</Label>
                          <Input value={studentInfo.batch} disabled />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">
                            Faculty Mentor
                          </Label>
                          <Input value={studentInfo.mentor} disabled />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">
                            Current CGPA
                          </Label>
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
                        <div className="text-2xl font-bold text-primary">
                          {academicInfo.cgpa}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          CGPA
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {academicInfo.sgpa}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Current SGPA
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {academicInfo.creditsCompleted}/
                          {academicInfo.totalCredits}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Credits
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {academicInfo.rank}/{academicInfo.totalStudents}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Class Rank
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Credit Completion</span>
                        <span>
                          {Math.round(
                            (academicInfo.creditsCompleted /
                              academicInfo.totalCredits) *
                              100
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          (academicInfo.creditsCompleted /
                            academicInfo.totalCredits) *
                          100
                        }
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
