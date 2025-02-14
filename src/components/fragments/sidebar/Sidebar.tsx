import {
  Sidebar as SidebarComponent,
  SidebarContent,
} from "@/components/ui/sidebar";
import { renderElements } from "@/utils/render-elements";
import { sidebarMenu } from "./sidebar-menu";
import { SidebarGroup } from "./SidebarGroup";

export function Sidebar() {
  return (
    <SidebarComponent collapsible="icon">
      <SidebarContent>
        {renderElements({
          of: sidebarMenu,
          keyExtractor: (sidebar) => sidebar.label,
          render: (sidebar) => (
            <SidebarGroup label={sidebar.label} menu={sidebar.menu} />
          ),
        })}
      </SidebarContent>
    </SidebarComponent>
  );
}
