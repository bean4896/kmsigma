import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
        <div className="flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/detatjujs/image/upload/v1712826702/kingmidas-logo-gold_2k_d7maa0.png"
            alt="Logo"
            width={500}
            height={500}
            className="h-12 w-auto"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
