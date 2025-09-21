import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Search, 
  Plus,
  Edit,
  Mail,
  Users,
  UserCheck,
  Calendar,
  Award
} from "lucide-react";
import { getCounselors, updateCounselors, getMeetings, branches, type Counselor } from "@/data/adminData";
import { useToast } from "@/hooks/use-toast";

const CounselorManagement = () => {
  const [counselors, setCounselors] = useState<Counselor[]>([]);
  const [filteredCounselors, setFilteredCounselors] = useState<Counselor[]>([]);
  const [meetings, setMeetings] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const counselorData = getCounselors();
    const meetingData = getMeetings();
    setCounselors(counselorData);
    setFilteredCounselors(counselorData);
    setMeetings(meetingData);
  }, []);

  useEffect(() => {
    let filtered = counselors;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(counselor => 
        counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        counselor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        counselor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Branch filter
    if (branchFilter !== "all") {
      filtered = filtered.filter(counselor => counselor.branch === branchFilter);
    }

    setFilteredCounselors(filtered);
  }, [counselors, searchTerm, branchFilter]);

  const getCounselorMeetings = (counselorId: string) => {
    return meetings.filter(meeting => meeting.counselorId === counselorId);
  };

  const getCompletedMeetings = (counselorId: string) => {
    return meetings.filter(meeting => 
      meeting.counselorId === counselorId && meeting.status === 'completed'
    ).length;
  };

  const getScheduledMeetings = (counselorId: string) => {
    return meetings.filter(meeting => 
      meeting.counselorId === counselorId && meeting.status === 'scheduled'
    ).length;
  };

  const stats = {
    total: counselors.length,
    activeMeetings: meetings.filter(m => m.status === 'scheduled').length,
    completedMeetings: meetings.filter(m => m.status === 'completed').length,
    avgStudentsPerCounselor: counselors.length > 0 
      ? Math.round(counselors.reduce((acc, c) => acc + c.assignedStudents, 0) / counselors.length) 
      : 0
  };

  return (
    <div className="min-h-screen bg-background p-6">
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
            <h1 className="text-4xl font-bold gradient-text mb-2">Counselor Management</h1>
            <p className="text-muted-foreground">Manage counseling staff and their assignments</p>
          </div>
          
          <Button className="glass-elevated">
            <Plus className="mr-2 h-4 w-4" />
            Add Counselor
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
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
                <p className="text-muted-foreground text-sm">Total Counselors</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <UserCheck className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Meetings</p>
                <p className="text-2xl font-bold">{stats.activeMeetings}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Completed Sessions</p>
                <p className="text-2xl font-bold">{stats.completedMeetings}</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="prism-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg Students/Counselor</p>
                <p className="text-2xl font-bold">{stats.avgStudentsPerCounselor}</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search counselors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  {branches.map(branch => (
                    <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setBranchFilter("all");
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Counselors Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Counselors ({filteredCounselors.length})</span>
              <Badge variant="outline">{filteredCounselors.length} of {counselors.length} counselors</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Counselor Info</TableHead>
                    <TableHead>Branch & Specialization</TableHead>
                    <TableHead>Assigned Students</TableHead>
                    <TableHead>Meetings</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCounselors.map((counselor, index) => {
                    const completedMeetings = getCompletedMeetings(counselor.id);
                    const scheduledMeetings = getScheduledMeetings(counselor.id);
                    
                    return (
                      <motion.tr
                        key={counselor.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        className="row-highlight"
                      >
                        <TableCell>
                          <div>
                            <div className="font-medium">{counselor.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {counselor.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge variant="outline" className="mb-1">{counselor.branch}</Badge>
                            <div className="text-sm text-muted-foreground">{counselor.specialization}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-center">
                            <div className="text-lg font-semibold">{counselor.assignedStudents}</div>
                            <div className="text-xs text-muted-foreground">students</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <Badge variant="default" className="mr-1">
                                {scheduledMeetings} Scheduled
                              </Badge>
                            </div>
                            <div className="text-sm">
                              <Badge variant="secondary">
                                {completedMeetings} Completed
                              </Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-green-600">
                              {completedMeetings > 0 ? Math.round((completedMeetings / (completedMeetings + scheduledMeetings)) * 100) : 0}%
                            </div>
                            <div className="text-xs text-muted-foreground">completion rate</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  size="sm" 
                                  variant="ghost" 
                                  className="hover:scale-105"
                                  onClick={() => setSelectedCounselor(counselor)}
                                >
                                  <Users className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="glass-card">
                                <DialogHeader>
                                  <DialogTitle>Counselor Details - {selectedCounselor?.name}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Contact Information</h4>
                                    <p className="text-sm text-muted-foreground">{selectedCounselor?.email}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Assignment Details</h4>
                                    <p className="text-sm">Branch: {selectedCounselor?.branch}</p>
                                    <p className="text-sm">Specialization: {selectedCounselor?.specialization}</p>
                                    <p className="text-sm">Assigned Students: {selectedCounselor?.assignedStudents}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Recent Meetings</h4>
                                    <div className="space-y-2 max-h-40 overflow-y-auto">
                                      {getCounselorMeetings(selectedCounselor?.id || '').slice(0, 5).map(meeting => (
                                        <div key={meeting.id} className="text-sm p-2 bg-muted/50 rounded">
                                          <div className="font-medium">{meeting.agenda}</div>
                                          <div className="text-muted-foreground">{meeting.date} at {meeting.time}</div>
                                          <Badge variant={meeting.status === 'completed' ? 'default' : 'secondary'} className="mt-1">
                                            {meeting.status}
                                          </Badge>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button size="sm" variant="ghost" className="hover:scale-105">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </motion.tr>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            {filteredCounselors.length === 0 && (
              <div className="text-center py-12">
                <UserCheck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No counselors found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CounselorManagement;