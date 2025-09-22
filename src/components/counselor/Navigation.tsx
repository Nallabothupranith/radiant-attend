import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  Home, 
  Users, 
  MessageSquare, 
  Calendar, 
  Bell, 
  BarChart3, 
  BookOpen, 
  LogOut, 
  Menu, 
  X,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { 
    title: "Dashboard", 
    href: "/counselor", 
    icon: Home 
  },
  { 
    title: "Attendance & Academics", 
    href: "/counselor/attendance-academics", 
    icon: BarChart3 
  },
  { 
    title: "Counseling Requests", 
    href: "/counselor/counseling-requests", 
    icon: MessageSquare 
  },
  { 
    title: "Notifications", 
    href: "/counselor/notifications", 
    icon: Bell 
  },
];

export default function CounselorNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-card border-r border-border">
        <div className="flex flex-col flex-1">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-border">
            <h1 className="text-xl font-bold text-primary">Counselor Portal</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/counselor"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  <IconComponent className="h-5 w-5" />
                  {item.title}
                </NavLink>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Counselor
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Faculty Portal
                </p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-4 bg-card border-b border-border">
          <h1 className="text-lg font-bold text-primary">Counselor Portal</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-card border-b border-border">
            <nav className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/counselor"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )
                    }
                  >
                    <IconComponent className="h-5 w-5" />
                    {item.title}
                  </NavLink>
                );
              })}
              
              {/* Mobile Logout */}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 mt-4"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}