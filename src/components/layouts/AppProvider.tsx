import { cn } from "@/lib/utils";
import { Providers } from "./providers/Providers";
import { GeistSans } from "geist/font/sans";
import { Toaster as Sooner } from "sonner";
import { Toaster } from "../ui/toaster";

type AppProviderProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <main className={cn(GeistSans.className)}>
      <Providers>{children}</Providers>
      <Toaster />
      <Sooner position="top-center" />
    </main>
  );
};
