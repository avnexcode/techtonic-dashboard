import { Icon } from "@/components/ui/icon";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { type icons } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

type SidebarItemProps = {
  url: string;
  title: string;
  icon: string;
};

export const SidebarItem = (props: SidebarItemProps) => {
  const { theme } = useTheme();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={props.url}>
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
