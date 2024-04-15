import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import ImgQrcode from "@/assets/KingMidas.net.png";

const Banner = () => {
  return (
    <div className="qrbanner bg-neutral-800 rounded-md flex justify-center items-center mb-4">
      <div className="qrcontainer flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center">
            <h3 className="text-white text-center text-xl lg:text-2xl leading-snug">
              Play the full list of
              <br />
              offerings on the
              <br />
              KingMidas website!
            </h3>
          </div>
          <div className="flex items-center py-2">
            <Image src={ImgQrcode} alt="QR Code" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
