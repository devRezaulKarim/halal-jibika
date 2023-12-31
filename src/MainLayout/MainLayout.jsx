import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar";
import Footer from "../pages/SharedPages/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "68vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
