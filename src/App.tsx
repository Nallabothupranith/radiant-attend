import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Student Portal Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import RiskPrediction from "./pages/student/RiskPrediction";
import CounselingRequest from "./pages/student/CounselingRequest";
import Attendance from "./pages/student/Attendance";
import Academic from "./pages/student/Academic";
import Notifications from "./pages/student/Notifications";
import FeesStructure from "./pages/student/FeesStructure";

// Admin Portal Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import BranchAnalytics from "./pages/admin/BranchAnalytics";
import StudentManagement from "./pages/admin/StudentManagement";
import CounselorManagement from "./pages/admin/CounselorManagement";

// Counselor Portal Pages
import CounselorLayout from "./pages/counselor/CounselorLayout";
import CounselorDashboard from "./pages/counselor/CounselorDashboard";
import AttendanceAndAcademics from "./pages/counselor/AttendanceAndAcademics";
import CounselingRequests from "./pages/counselor/CounselingRequests";
import CounselorNotifications from "./pages/counselor/CounselorNotifications";
import CounselingSessions from "./pages/counselor/CounselingSessions";
import Analytics from "./pages/counselor/Analytics";
import CounselorSettings from "./pages/counselor/CounselorSettings";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/feedback"
          element={
            <PageTransition>
              <Feedback />
            </PageTransition>
          }
        />
        <Route
          path="/auth/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        {/* Student Portal Routes */}
        <Route
          path="/student"
          element={
            <PageTransition>
              <StudentDashboard />
            </PageTransition>
          }
        />
        <Route
          path="/student/profile"
          element={
            <PageTransition>
              <StudentProfile />
            </PageTransition>
          }
        />
        <Route
          path="/student/risk-prediction"
          element={
            <PageTransition>
              <RiskPrediction />
            </PageTransition>
          }
        />
        <Route
          path="/student/counseling"
          element={
            <PageTransition>
              <CounselingRequest />
            </PageTransition>
          }
        />
        <Route
          path="/student/attendance"
          element={
            <PageTransition>
              <Attendance />
            </PageTransition>
          }
        />
        <Route
          path="/student/academic"
          element={
            <PageTransition>
              <Academic />
            </PageTransition>
          }
        />
        <Route
          path="/student/notifications"
          element={
            <PageTransition>
              <Notifications />
            </PageTransition>
          }
        />
        <Route
          path="/student/fees"
          element={
            <PageTransition>
              <FeesStructure />
            </PageTransition>
          }
        />

        {/* Admin Portal Routes */}
        <Route
          path="/admin"
          element={
            <PageTransition>
              <AdminDashboard />
            </PageTransition>
          }
        />
        <Route
          path="/admin/branch-analytics"
          element={
            <PageTransition>
              <BranchAnalytics />
            </PageTransition>
          }
        />
        <Route
          path="/admin/students"
          element={
            <PageTransition>
              <StudentManagement />
            </PageTransition>
          }
        />
        <Route
          path="/admin/counselors"
          element={
            <PageTransition>
              <CounselorManagement />
            </PageTransition>
          }
        />

        {/* Counselor Portal Routes (nested under CounselorLayout) */}
        <Route
          path="/counselor"
          element={
            <PageTransition>
              <CounselorLayout />
            </PageTransition>
          }
        >
          <Route
            index
            element={
              <PageTransition>
                <CounselorDashboard />
              </PageTransition>
            }
          />
          <Route
            path="attendance-academics"
            element={
              <PageTransition>
                <AttendanceAndAcademics />
              </PageTransition>
            }
          />
          <Route
            path="counseling-requests"
            element={
              <PageTransition>
                <CounselingRequests />
              </PageTransition>
            }
          />
          <Route
            path="notifications"
            element={
              <PageTransition>
                <CounselorNotifications />
              </PageTransition>
            }
          />
          <Route
            path="sessions"
            element={
              <PageTransition>
                <CounselingSessions />
              </PageTransition>
            }
          />
          <Route
            path="analytics"
            element={
              <PageTransition>
                <Analytics />
              </PageTransition>
            }
          />
          <Route
            path="settings"
            element={
              <PageTransition>
                <CounselorSettings />
              </PageTransition>
            }
          />
        </Route>

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
