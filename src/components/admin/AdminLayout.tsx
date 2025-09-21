import AdminNavigation from "./Navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminNavigation />
      <main className="flex-1 lg:ml-80">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;