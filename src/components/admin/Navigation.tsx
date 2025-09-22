import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  BarChart3, 
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  Building2,
  AlertTriangle,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { UserButton } from "@clerk/clerk-react";

const AdminNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin portal.",
    });
    navigate('/auth/login');
  };

  const navigationItems = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      path: "/admin",
      description: "Dashboard overview"
    },
    {
      title: "Branch Analytics",
      icon: BarChart3,
      path: "/admin/branch-analytics",
      description: "Branch-wise statistics"
    },
    {
      title: "Student Management",
      icon: Users,
      path: "/admin/students",
      description: "Manage students"
    },
    {
      title: "Counselor Management",
      icon: UserCheck,
      path: "/admin/counselors",
      description: "Manage counseling staff"
    },
    {
      title: "Meetings & Sessions",
      icon: Calendar,
      path: "/admin/meetings",
      description: "Counseling sessions"
    }
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'bg-primary/10 text-primary border border-primary/20' 
        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
    }`;

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="glass-elevated"
        >
          {isCollapsed ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isCollapsed ? -300 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed lg:relative top-0 left-0 h-screen w-80 bg-card border-r z-40 ${
          isCollapsed ? 'lg:w-20' : 'lg:w-80'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo & Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              {!isCollapsed && (
                <div>
                  <h2 className="text-xl font-bold">SchoolHub</h2>
                  <p className="text-sm text-muted-foreground">Admin Portal</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Admin Profile */}
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-4 mb-6 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Admin User</p>
                    <p className="text-sm text-muted-foreground">System Administrator</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    5 High Risk Students
                  </Badge>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/admin"}
                  className={getNavLinkClass}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-2 mt-6">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <NavLink
                  to="/admin/settings"
                  className={getNavLinkClass}
                >
                  <Settings className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">Settings</div>
                    <div className="text-xs text-muted-foreground">System configuration</div>
                  </div>
                </NavLink>
              </motion.div>
            )}

            <UserButton showName />

            {/* <Button
              variant="ghost"
              onClick={handleLogout}
              className={`w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10 ${
                isCollapsed ? 'px-3' : ''
              }`}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Logout</span>}
            </Button> */}
          </div>

          {/* Collapse Toggle (Desktop) */}
          <div className="hidden lg:block mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full"
            >
              {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default AdminNavigation;