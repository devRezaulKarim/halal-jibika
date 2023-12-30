import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
