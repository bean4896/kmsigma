import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed overflow-hidden top-0 h-[3.5%] w-full bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/detatjujs/image/upload/v1712826702/kingmidas-logo-gold_2k_d7maa0.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="h-10 w-auto"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
