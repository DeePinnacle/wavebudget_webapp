import Image from "next/image"

export const LogoScreen = () => {
  return (
    // logo screen
    <div
      className={`bg-white flex flex-col items-center justify-center w-full min-h-screen`}
    >
      <div className="relative overflow-hidden w-1/2 h-32">
        <Image
          src={"/wave-logo-green.png"}
          alt="wavebudget-logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};
