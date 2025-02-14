import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "../fragments/navbar-dashboard";
import { Sidebar } from "../fragments/sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
};
