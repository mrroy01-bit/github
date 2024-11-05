
function Welcome() {
  return (
    <>
    <div className="text-center mt-10 justify-center mb-10">
      <h1 className="text-[4rem] tracking-[-0.03em] leading-tight	 font-bold mb-4 text-white">Build and ship software on a <br /> single, collaborative platform</h1>
      <p className="text-[1.125rem] mb-8 mt-9 text-white">Join the world’s most widely adopted AI-powered developer platform <br /> where millions of developers, businesses, and the largest open source <br /> community build software that advances humanity.</p>
      <div className="flex justify-center gap-7 ">
        <a className="bg-[#EFF5FC]  text-black font-bold  pl-10 pr-10 pt-3 pb-3 rounded-md shadow-lg">
          Sign up for GitHub
        </a>
        <a className="bg-[#38377B] hover:bg-gray-700 text-white font-bold pl-10 pr-10 rounded-md border-2 tracking-[0.03em] leading-[1.5]">
          Try GitHub Copilot <br /> <span className="text-[13px]">30 days free</span>
        </a>
      </div>
    </div>
    </>
  );
}

export default Welcome;
