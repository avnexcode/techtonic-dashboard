import { cn } from "@/lib/utils";
import { Providers } from "./providers/Providers";
import { Inter } from "next/font/google";
import { Toaster as Sooner } from "sonner";
import { Toaster } from "../ui/toaster";

const inter = Inter({ subsets: ["latin"] });

type AppProviderProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <main className={cn(inter.className)}>
      <Providers>{children}</Providers>
      <Toaster />
      <Sooner position="top-center" />
    </main>
  );
};
