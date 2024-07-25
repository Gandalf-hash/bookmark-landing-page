import { images } from "@/images";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useState } from "react";

export default function AppNavbar() {
  const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);

  const burgerOnClick = () => {
    setIsBurgerClicked(!isBurgerClicked);
  };
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex items-center flex-row justify-between">
      <div>
        <a href="/">
          <img
            className="desktop:w-60"
            src={images.logo.src}
            alt={images.logo.alt}
          />
        </a>
      </div>

      {isMobile ? (
        <div>
          <button onClick={burgerOnClick}>
            {isBurgerClicked ? (
              <img src={images.mobileMenuClose.src} alt="Close menu" />
            ) : (
              <img src={images.hamburger.src} alt="Open menu" />
            )}
          </button>
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
