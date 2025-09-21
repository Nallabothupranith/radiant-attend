import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  User,
  Trophy,
  AlertTriangle,
  MessageCircle,
  Calendar,
  GraduationCap,
  Bell,
  Clock,
  TrendingDown,
  Award,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Risk Analysis", href: "/risk-prediction", icon: AlertTriangle },
    { name: "Attendance", href: "/attendance", icon: Calendar },
    { name: "Academic", href: "/academic", icon: GraduationCap },
    { name: "Counseling", href: "/counseling", icon: MessageCircle },
  ];

  // Mock notifications data - in real app, this would come from API/state
  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Attendance Alert",
      message: "Your OS attendance is 65% - below required 75%",
      time: "2 hours ago",
      icon: Calendar,
      href: "/attendance"
    },
    {
      id: 2,
      type: "info",
      title: "New Achievement",
      message: "You've earned the 'Assignment Hero' badge!",
      time: "1 day ago",
      icon: Award,
      href: "/gamification"
    },
    {
      id: 3,
      type: "warning",
      title: "Risk Level Update",
      message: "Your dropout risk increased to Medium (65%)",
      time: "2 days ago",
      icon: AlertTriangle,
      href: "/risk-prediction"
    },
    {
      id: 4,
      type: "info",
      title: "Grade Update",
      message: "DBMS mid-exam results published - 85/100",
      time: "3 days ago",
      icon: GraduationCap,
      href: "/academic"
    },
    {
      id: 5,
      type: "success",
      title: "Counseling Update",
      message: "Your counseling request has been accepted",
      time: "1 week ago",
      icon: MessageCircle,
      href: "/counseling"
    }
  ];

  const unreadCount = notifications.filter(n => n.type === "warning" || n.type === "info").length;

  return (
    <nav className="bg-card border-b shadow-card sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduTrack
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-warning hover:text-warning-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {unreadCount > 9 ? '9+' : unreadCount}
                </Badge>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <DropdownMenuItem key={notification.id} asChild>
                      <Link 
                        to={notification.href}
                        className="flex items-start gap-3 p-3 cursor-pointer"
                      >
                        <div className={cn(
                          "rounded-full p-1.5 flex-shrink-0",
                          notification.type === "warning" && "bg-warning/10 text-warning",
                          notification.type === "info" && "bg-primary/10 text-primary",
                          notification.type === "success" && "bg-success/10 text-success"
                        )}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{notification.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center" asChild>
                <Link to="/notifications" className="text-sm text-muted-foreground">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;