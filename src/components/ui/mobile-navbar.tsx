import { images } from "@/images";
import { useState } from "react";
import AppLogo from "./logo";

export default function AppMobileNavbar() {
  const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);

  const burgerOnClick = () => {
    setIsBurgerClicked(!isBurgerClicked);
  };

  return (
    <div className="flex items-center flex-row justify-between">
      <AppLogo size="160" />

      <div>
        <button onClick={burgerOnClick}>
          {isBurgerClicked ? (
            <img src={images.mobileMenuClose.src} alt="" />
          ) : (
            <img src={images.hamburger.src} alt="" />
          )}
        </button>
      </div>
    </div>
  );
}
