// import AdminSidebar from "./AdminSidebar";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}
