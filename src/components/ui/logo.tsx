import { images } from "@/images";

type props = {
  size: string;
};

export default function AppLogo({ size }: props) {
  return (
    <>
      <div>
        <a href="/">
          <img src={images.logo.src} alt={images.logo.alt} width={size} />
        </a>
      </div>
    </>
  );
}
