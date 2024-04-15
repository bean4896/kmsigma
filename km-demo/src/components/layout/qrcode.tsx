import Image from "next/image";
import ImgQrcode from "@/assets/KingMidas.net.png";

const QrCode = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white mb-4">
          Check out more next gen on the kingmidas website!
        </div>
        <Image src={ImgQrcode} alt="QR Code" width={300} height={300} />
      </div>
    </div>
  );
};

export default QrCode;
