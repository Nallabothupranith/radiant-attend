import Navigation from "@/components/student/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Calendar, 
  Award, 
  AlertTriangle, 
  GraduationCap, 
  MessageCircle,
  Clock,
  Filter,
  Check
} from "lucide-react";

const Notifications = () => {
  const allNotifications = [
    {
      id: 1,
      type: "warning",
      title: "Attendance Alert - Operating Systems",
      message: "Your OS attendance is 65% - below required 75%. Attend at least 5 more classes to meet the minimum requirement.",
      time: "2 hours ago",
      icon: Calendar,
      isRead: false,
      priority: "high"
    },
    {
      id: 2,
      type: "info",
      title: "New Achievement Unlocked",
      message: "Congratulations! You've earned the 'Assignment Hero' badge for submitting 10 assignments on time.",
      time: "1 day ago",
      icon: Award,
      isRead: false,
      priority: "medium"
    },
    {
      id: 3,
      type: "warning",
      title: "Risk Level Update",
      message: "Your dropout risk has increased to Medium (65%) based on recent attendance and performance patterns.",
      time: "2 days ago",
      icon: AlertTriangle,
      isRead: true,
      priority: "high"
    },
    {
      id: 4,
      type: "success",
      title: "Grade Update - Database Management",
      message: "DBMS mid-exam results have been published. You scored 85/100. Great improvement from last exam!",
      time: "3 days ago",
      icon: GraduationCap,
      isRead: true,
      priority: "medium"
    },
    {
      id: 5,
      type: "info",
      title: "Counseling Session Scheduled",
      message: "Your counseling request has been accepted. Session scheduled for tomorrow at 2:00 PM in Room 201.",
      time: "4 days ago",
      icon: MessageCircle,
      isRead: false,
      priority: "medium"
    },
    {
      id: 6,
      type: "warning", 
      title: "Fee Payment Reminder",
      message: "Semester fee payment due in 5 days. Please complete the payment to avoid late fees.",
      time: "5 days ago",
      icon: Bell,
      isRead: true,
      priority: "high"
    },
    {
      id: 7,
      type: "info",
      title: "New Course Material Available",
      message: "Computer Networks - Unit 3 study materials have been uploaded to the portal.",
      time: "1 week ago",
      icon: GraduationCap,
      isRead: true,
      priority: "low"
    },
    {
      id: 8,
      type: "success",
      title: "XP Points Earned",
      message: "You've earned 50 XP points for maintaining good attendance this week!",
      time: "1 week ago",
      icon: Award,
      isRead: true,
      priority: "low"
    }
  ];

  const unreadCount = allNotifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your academic progress and important alerts
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{allNotifications.length}</div>
              <div className="text-sm text-muted-foreground">Total Notifications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">{unreadCount}</div>
              <div className="text-sm text-muted-foreground">Unread</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Button variant="outline" className="w-full">
                <Check className="h-4 w-4 mr-2" />
                Mark All as Read
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                All Notifications
              </CardTitle>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allNotifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border transition-colors ${
                      !notification.isRead 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'bg-muted/20 border-border'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`rounded-full p-2 flex-shrink-0 ${
                        notification.type === "warning" && "bg-warning/10 text-warning",
                        notification.type === "info" && "bg-primary/10 text-primary",
                        notification.type === "success" && "bg-success/10 text-success"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-foreground">
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Badge variant="default" className="text-xs">New</Badge>
                            )}
                            <Badge 
                              variant={
                                notification.priority === "high" ? "destructive" :
                                notification.priority === "medium" ? "secondary" : "outline"
                              }
                              className="text-xs"
                            >
                              {notification.priority}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {notification.time}
                          </div>
                          {!notification.isRead && (
                            <Button variant="ghost" size="sm" className="text-xs">
                              Mark as read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;