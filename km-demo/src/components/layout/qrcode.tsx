import Image from "next/image";
import ImgQrcode from "@/assets/KingMidas.net.png";

const QrCode = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="max-w-[150px] rounded-lg"
          src={ImgQrcode}
          alt="QR Code"
          width={300}
          height={300}
        />
                <div className="text-white mb-4 text-xl lg:text-2xl mt-6">
          Check out more next gen on the kingmidas website!
        </div>
      </div>
    </div>
  );
};

export default QrCode;
