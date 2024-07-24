import { images } from "@/images";


type props = {
  isNavbar?: boolean;
};

export default function AppLogo({ isNavbar = true }: props) {
  return (
    <div className="mobile_nav_wrapper">
      <div>
        <img src={images.logo.src} alt={images.logo.alt} />
      </div>

      {isNavbar && (
        <div>
          <img src={images.hamburger.src} alt="" />
        </div>
      )}
    </div>
  );
}
