

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex flex-col justify-center items-center font-bold text-9xl text-black">
        anand raj singh
      </div>
      <div className="h-screen py-16 px-16  text-black flex justify-between items-center h-full">
        {/* Left Text */}
        <div className="text-[5vw] font-bold leading-none">
          <p>I&apos;m</p>
          <p>anand</p>
          <p className="text-[4vw]">a software</p>
          <p>developer</p>
        </div>

        {/* Right Image */}
        <div className="w-1/3 flex flex-col items-center">
          {/* <img src="/golden-art.png" alt="Golden Art" className="rounded-lg shadow-lg" /> */}
          <p className="mt-4 text-gray-600 text-center text-sm">
            Crafting exceptional websites tailored to your vision, we blend creativity with functionality to deliver stunning digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
