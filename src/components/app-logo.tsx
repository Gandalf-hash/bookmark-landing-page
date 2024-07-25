import { images } from "@/images";

type props = {
  isNavbar?: boolean;
};

export default function AppLogo({ isNavbar = true }: props) {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex flex-row justify-between p-12">
      <div>
        <img
          className="tablet:w-60"
          src={images.logo.src}
          alt={images.logo.alt}
        />
      </div>

      {isNavbar && isMobile ? (
        <div>
          <img src={images.hamburger.src} alt="" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
