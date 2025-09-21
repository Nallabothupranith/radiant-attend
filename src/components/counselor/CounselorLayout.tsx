import { ReactNode } from "react";
import CounselorNavigation from "./Navigation";

interface CounselorLayoutProps {
  children: ReactNode;
}

export default function CounselorLayout({ children }: CounselorLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <CounselorNavigation />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="flex-1">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}