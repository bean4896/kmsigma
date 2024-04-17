import Image from "next/image";
import ImgQrcode from "@/assets/KingMidas.net.png";
import Refresh from "@/components/ui/refresh";


const QrCode = () => {
  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center">
        {/* <button
          className="bg-blue-500 px-4 py-2 rounded text-white mb-4"
          onClick={handleRefresh}
        >
          Refresh
        </button> */}
        <Refresh />
        <Image
          className="max-w-[150px] rounded-lg mt-4"
          src={ImgQrcode}
          alt="QR Code"
          width={300}
          height={300}
        />
        <div className="text-white mb-4 text-xl lg:text-2xl mt-6">
          Check out more next gen on the King Midas website!
        </div>
      </div>
    </div>
  );
};

export default QrCode;
