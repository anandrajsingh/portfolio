import Image from "next/image";

const ContactButton = () => {
  return (
    <button
      className="group flex items-center px-4 rounded-full border-2 border-black transition-all duration-300 
      bg-transparent text-black overflow-hidden w-[110px] hover:w-[150px] hover:bg-black hover:text-white"
    >
      <span className="text-lg font-medium whitespace-nowrap transition-all duration-300">
        Let`&apos;`s Talk
      </span>

      <div
        className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full ml-2
        transition-all duration-300 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
      >
        <Image src="/right-arrow.png" alt="Arrow" width={16} height={16} />
      </div>
    </button>
  );
};

export default ContactButton;
