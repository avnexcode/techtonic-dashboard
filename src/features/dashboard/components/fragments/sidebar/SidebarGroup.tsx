import {
  SidebarGroup as SidebarGroupComponent,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SidebarItem } from "./SidebarItem";
import { renderElements } from "@/utils/render-elements";

type SidebarGroupProps = {
  label: string;
  menu: {
    title: string;
    url: string;
    icon: string;
  }[];
};

export const SidebarGroup = (props: SidebarGroupProps) => {
  return (
    <SidebarGroupComponent>
      <SidebarGroupLabel>{props.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {renderElements({
            of: props.menu,
            keyExtractor: (menu) => menu.title,
            render: (menu) => (
              <SidebarItem icon={menu.icon} title={menu.title} url={menu.url} />
            ),
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroupComponent>
  );
};
