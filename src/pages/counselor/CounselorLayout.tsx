import { Outlet, NavLink } from "react-router-dom";

const CounselorLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Counselor Portal</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/counselor" end>Dashboard</NavLink>
          <NavLink to="/counselor/attendance-academics">Attendance & Academics</NavLink>
          <NavLink to="/counselor/counseling-requests">Counseling Requests</NavLink>
          <NavLink to="/counselor/sessions">Sessions</NavLink>
          <NavLink to="/counselor/analytics">Analytics</NavLink>
          <NavLink to="/counselor/notifications">Notifications</NavLink>
          <NavLink to="/counselor/settings">Settings</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default CounselorLayout;
