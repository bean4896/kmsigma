import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import ImgQrcode from "@/assets/QrNew.png";
import BannerBg from "@/assets/banner_bg.png";

const Banner = () => {
  return (
    <div
      className="bannerContainer"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/detatjujs/image/upload/v1713507584/top_banner_zle1vn.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      <div className="qrcontainer flex items-center ml-10 p-4 min-h-[16vh] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center">
            <h3 className="text-white text-left text-xl lg:text-2xl leading-snug">
              Play the full list of
              <br />
              offerings on the
              <br />
              KingMidas website!
            </h3>
          </div>
          <div className="flex items-center">
            <Image
              src={ImgQrcode}
              alt="QR Code"
              width="0"
              height="0"
              sizes="6vw"
              className="w-full h-auto rounded-lg max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
