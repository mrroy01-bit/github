import { SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';

function SinIn() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center mt-8">
          <SiGithub className="text-5xl mb-3" />
          <h1 className="text-2xl font-normal pt-5">Sign in to GitHub</h1>
        </div>
        <div className="flex rounded flex-col items-center justify-center mt-6 border w-[300px] h-[220px] ml-[480px] bg-[#F6F8FA]">

          <form className="flex flex-col  justify-center ">
            <span className="text-sm pt-2 pb-2">Username or email address </span>
            <input
            type="text"
            className="w-[270px] h-8 p-2 mb-3 border border-gray-400
            rounded-lg"
            />
            <span className=" flex justify-between">
            <span className="text-sm pt-2 pb-2">Password</span>
            <span className="text-xs pt-2 pb-2 text-blue-400 cursor-pointer"> Forget password?</span>
            </span>
            <input
            type="password"
            className="w-[270px] h-8 p-2 mb-3 border border-gray-400
            rounded-lg"
            />
            <button
            className="w-[270px] h-8 p-2 mb-3 bg-[#1C8139] text-white rounded-lg"> Sign in</button>
           

          </form>
        </div>
        <div className="w-[300px]h-[100px] ml-[480px] border items-center justify-center mr-[500px] mt-5 rounded" >
       <div className="flex flex-col items-center justify-center pt-2 pb-2">
         <h2 className="text-[16px] font-semibold text-blue-400">Sign in with a passkey</h2>
         <h3 className="text-[15px]"> New to GitHub?
          <Link className="text-sm text-blue-400 pl-[3px]" to='./sinup'>Create an account</Link>
         </h3>
      </div>
        </div>
      </div>
    </>
  )
}

export default SinIn
