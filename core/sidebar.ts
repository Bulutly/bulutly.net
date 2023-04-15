// icons list https://icones.js.org/

interface SidebarItem {
  name: string;
  icon: string;
  childern?: SidebarItem[];
  counts?: number;
  breakdown?: boolean;
}

export default <SidebarItem[]>[
  {
    name: "Overview",
    icon: "mdi:desktop-mac-dashboard",
  },
  {
    name: "Pages",
    icon: "mdi:format-page-split",
    childern: [{ name: "Settings" }, { name: "Kanban" }],
  },
  {
    name: "Sales",
    icon: "mdi:point-of-sale",
    childern: [{ name: "Products" }, { name: "Billing" }],
  },
  {
    name: "Messages",
    icon: "mdi:android-messages",
    counts: 69,
  },
  {
    name: "Docs",
    icon: "mdi:file-code-outline",
    breakdown: true,
  },
  {
    name: "Components",
    icon: "mdi:video-input-component",
  },
];
