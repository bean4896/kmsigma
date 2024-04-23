import Image from "next/image";
import ImgQrcode from "@/assets/sale_QRcode.png";
import Refresh from "@/components/ui/refresh";

const QrCode = () => {
  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col justify-center items-center">
        {/* <button
          className="bg-blue-500 px-4 py-2 rounded text-white mb-4"
          onClick={handleRefresh}
        >
          Refresh
        </button> */}
        {/* <Refresh /> */}
        <Image
          className="qrcodeImg rounded-lg mt-10"
          src={ImgQrcode}
          alt="QR Code"
          width={2000}
          height={2000}
        />
        <div className="text-white title-banner mb-6">
          Speak with us for potential opportunities!
        </div>
      </div>
    </div>
  );
};

export default QrCode;
