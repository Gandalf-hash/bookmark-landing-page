import React from "react";
import AppMobileNavbar from "./ui/mobile-navbar";
import AppDesktopNavbar from "./ui/desktop-navbar";

export default function AppNavBar() {
  const isMobile = window.innerWidth <= 767;

  return <div>{isMobile ? <AppMobileNavbar /> : <AppDesktopNavbar />}</div>;
}
