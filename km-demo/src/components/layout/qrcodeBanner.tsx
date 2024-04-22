import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import ImgQrcode from "@/assets/kingmidasgamewebsite_QRcode.png";
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
      <div className="qrcontainer flex items-center ml-10 p-4 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center">
            <h3 className="text-white text-left text-xl lg:text-[3rem] leading-snug">
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
              width="4000"
              height="4000"
              className="rounded-lg mt-4 w-[8vh] ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
