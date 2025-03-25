

export default function Home() {
  return (
    <div className="text-black">
      <div className="h-screen flex flex-col justify-center items-center font-bold text-9xl">
        anand raj singh
      </div>
      <div className="h-screen py-16 px-16 flex justify-between items-center h-full">
        {/* Left Text */}
        <div className="text-[5vw] font-bold leading-none">
          <p>I&apos;m</p>
          <p>anand</p>
          <p className="text-[4vw]">a software</p>
          <p>developer</p>
        </div>

        {/* Right Image */}
        <div className="w-1/3 flex flex-col items-center">
          <img src="/Stars.jpeg" alt="Galaxy" className="rounded-lg shadow-lg" />
          <p className="mt-4 text-gray-600 text-center text-sm">
            Crafting exceptional websites tailored to your vision, we blend creativity with functionality to deliver stunning digital experiences.
          </p>
        </div>
      </div>
      <div className="h-screen py-35 px-16 flex flex-col items-center ">
        <div className="py-10">You need it? I do it</div>
        <div className="text-8xl font-bold py">android</div>
        <div className="text-8xl font-bold py">devops</div>
        <div className="text-8xl font-bold py">frontend</div>
        <div className="text-8xl font-bold py">marketing</div>
        <div className="text-8xl font-bold py">backend</div>
      </div>
      <div className="h-screen pt-40 pb-15 px-25 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>Github</div>
          <div>LinkedIn</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl">Ready to work together?</div>
          <div className="font-bold text-6xl">singhpariharanandraj@gmail.com</div>
        </div>
        <div className="flex justify-between">
          <div >Twitter</div>
          <div>Notion</div>
        </div>
      </div>
    </div>
  );
}
