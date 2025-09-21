import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Mail, Phone, MapPin, Calendar, BookOpen, Save, X, User, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "Arjun Reddy Goud",
    rollNo: "CS21B1001",
    email: "arjun.reddy@university.edu",
    phone: "+91 9876543210",
    department: "Computer Science",
    year: "3rd Year",
    address: "123 Jubilee Hills, Hyderabad, Telangana",
    joinDate: "August 2021",
    avatar: "/placeholder.svg",
    parentPhone: "+91 9123456789",
    parentEmail: "ramesh.goud@email.com",
    eapcetRank: "12345",
    caste: "BC-A",
    income: "₹8,00,000",
    fatherWork: "Government Employee",
    fatherName: "Ramesh Goud",
    dateOfBirth: "15/08/2003",
    motherName: "Lakshmi Goud",
    motherOccupation: "Housewife"
  });

  const handleInputChange = (field: string, value: string) => {
    setStudentInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Student Profile
          </h1>
          <p className="text-muted-foreground">Manage your personal and academic information</p>
        </motion.div>

        {/* Student Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="shadow-card hover:shadow-glow/30 transition-all duration-500 backdrop-blur-sm border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Avatar className="w-16 h-16 border-2 border-primary/20 shadow-lg">
                  <AvatarImage src={studentInfo.avatar} alt={studentInfo.name} />
                  <AvatarFallback className="text-xl bg-gradient-primary text-primary-foreground">
                    {studentInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  {studentInfo.name}
                </CardTitle>
                <div className="text-muted-foreground font-medium">{studentInfo.rollNo}</div>
                <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-primary/20">
                  {studentInfo.department}
                </Badge>
              </div>
            </div>
            {!isEditing ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 hover:from-primary/20 hover:to-secondary/20"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </motion.div>
            ) : (
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="default" 
                    onClick={handleSave}
                    className="bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" onClick={handleCancel}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </motion.div>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-8 pt-8">
            {/* Basic Information */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input 
                    id="name" 
                    value={studentInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <span>{studentInfo.name}</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input 
                    id="email" 
                    type="email"
                    value={studentInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input 
                    id="phone" 
                    value={studentInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.phone}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Input 
                    id="address" 
                    value={studentInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.address}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Academic Year</Label>
                {isEditing ? (
                  <Input 
                    id="year" 
                    value={studentInfo.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.year}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="joinDate">Join Date</Label>
                <div className="flex items-center gap-2 text-sm p-2 border rounded-md bg-muted">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{studentInfo.joinDate}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentphone">Parent Phone Number</Label>
                {isEditing ? (
                  <Input 
                    id="parentphone" 
                    value={studentInfo.parentPhone}
                    onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.parentPhone}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentemail">Parent Email ID</Label>
                {isEditing ? (
                  <Input 
                    id="parentemail" 
                    type="email"
                    value={studentInfo.parentEmail}
                    onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.parentEmail}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="eapcetrank">EAPCET Rank</Label>
                {isEditing ? (
                  <Input 
                    id="eapcetrank" 
                    value={studentInfo.eapcetRank}
                    onChange={(e) => handleInputChange('eapcetRank', e.target.value)}
                  />
                ) : (
                  <div className="text-sm p-2 border rounded-md">
                    <span>{studentInfo.eapcetRank}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="caste">Caste</Label>
                {isEditing ? (
                  <Input 
                    id="caste" 
                    value={studentInfo.caste}
                    onChange={(e) => handleInputChange('caste', e.target.value)}
                  />
                ) : (
                  <div className="text-sm p-2 border rounded-md">
                    <span>{studentInfo.caste}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">Family Income (Annual)</Label>
                {isEditing ? (
                  <Input 
                    id="income" 
                    value={studentInfo.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                  />
                ) : (
                  <div className="text-sm p-2 border rounded-md">
                    <span>{studentInfo.income}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateofbirth">Date of Birth</Label>
                {isEditing ? (
                  <Input 
                    id="dateofbirth" 
                    value={studentInfo.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.dateOfBirth}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fathername">Father's Name</Label>
                {isEditing ? (
                  <Input 
                    id="fathername" 
                    value={studentInfo.fatherName}
                    onChange={(e) => handleInputChange('fatherName', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.fatherName}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fatherwork">Father's Occupation</Label>
                {isEditing ? (
                  <Input 
                    id="fatherwork" 
                    value={studentInfo.fatherWork}
                    onChange={(e) => handleInputChange('fatherWork', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.fatherWork}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mothername">Mother's Name</Label>
                {isEditing ? (
                  <Input 
                    id="mothername" 
                    value={studentInfo.motherName}
                    onChange={(e) => handleInputChange('motherName', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.motherName}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="motheroccupation">Mother's Occupation</Label>
                {isEditing ? (
                  <Input 
                    id="motheroccupation" 
                    value={studentInfo.motherOccupation}
                    onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm p-2 border rounded-md">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{studentInfo.motherOccupation}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Profile Photo Upload */}
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div className="space-y-2">
                <Label htmlFor="photo">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  <Input id="photo" type="file" accept="image/*" />
                  <Button variant="outline">Upload</Button>
                </div>
              </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default StudentProfile;