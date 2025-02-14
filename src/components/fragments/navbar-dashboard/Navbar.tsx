import { ThemeToggle } from "@/components/actions/ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-2 py-3">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="" />
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <span>axnvee18@gmail.com</span>
        <ThemeToggle />
      </div>
    </nav>
  );
};
