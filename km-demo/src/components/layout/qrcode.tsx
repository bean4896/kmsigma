import Image from "next/image";
import ImgQrcode from "@/assets/KingMidas.net.png";

const QrCode = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white mb-4 text-xl lg:text-2xl">
          Check out more next gen on the kingmidas website!
        </div>
        <Image src={ImgQrcode} alt="QR Code" width={300} height={300} />
      </div>
    </div>
  );
};

export default QrCode;
