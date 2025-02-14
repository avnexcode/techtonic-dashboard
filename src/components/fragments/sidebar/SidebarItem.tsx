import { Icon } from "@/components/ui/icon";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type icons } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  url: string;
  title: string;
  icon: string;
};

export const SidebarItem = (props: SidebarItemProps) => {
  const { theme } = useTheme();
  const pathName = usePathname();
  const activeLinnk = pathName === props.url;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={props.url}
          className={cn(activeLinnk && "bg-zinc-200 dark:bg-zinc-800")}
        >
          <Icon
            name={props.icon as keyof typeof icons}
            size={40}
            color={theme === "dark" ? "white" : "black"}
            className="mr-1"
          />
          <span>{props.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
