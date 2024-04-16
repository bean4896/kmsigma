import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import ImgQrcode from "@/assets/KingMidas.net.png";

const Banner = () => {
  return (
    <div className="mt-14 bg-neutral-800 rounded-md flex mb-4 h-[10em] py-10">
      <div className="qrcontainer flex justify-center items-center ml-10">
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
