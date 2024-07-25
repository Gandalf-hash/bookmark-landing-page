import { images } from "@/images";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

type props = {
  isNavbar?: boolean;
};

export default function AppLogo({ isNavbar = true }: props) {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex items-center flex-row justify-between">
      <div>
        <img
          className="desktop:w-60"
          src={images.logo.src}
          alt={images.logo.alt}
        />
      </div>

      {isNavbar && isMobile ? (
        <div className="text-xl">
          <img src={images.hamburger.src} alt="" />
        </div>
      ) : (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Features</MenubarTrigger>
            <MenubarTrigger>Pricing</MenubarTrigger>
            <MenubarTrigger>Contact</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      )}

    </div>
  );
}
