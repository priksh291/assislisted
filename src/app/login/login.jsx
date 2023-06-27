
"use client"
import { signIn, signOut, useSession, } from 'next-auth/react'
import Image from 'next/image';
import design from './design';

import React, { useEffect } from 'react'
import { Router, useRouter } from 'next/router';


const Login = () => {
    // const router = useRouter();
    const session =useSession();

    // useEffect(()=>{
    //   if(!loading && session?.status === 'authenticated'){
    //     router.push('/design')
    //   }
      
    // })
    // [loading,session,router]

    // console.log(session);
    // if(session.status ==="loading"){
    //     return <p>Loading....</p>
    // }
    // if(session.status ==="authenticated"){
    //     // return  <button onClick={()=>signOut("google")}>Logout</button>
    //     return(
    //         // <design/>
    //         <button onClick={()=>signOut("google")}>Logout</button>
    //     )
    // }
    // if(session.status ==="unauthenticated"){
    //     return <p>user un  authenticated</p>
    // }
  return (
    <div>
        {/* <button className='font-bold text-center text-fuchsia-800' onClick={()=>signIn("google")}>Login with google</button> */}
        <div className="relative w-full h-[750px] overflow-hidden text-left text-base text-black font-montserrat">
        <div className="absolute top-[0px] left-[588px] w-[852px] h-[1000px]" />
        <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[850px]" />
        <b className="absolute top-[450px] left-[171px] text-[72px] text-white">
          Board.
        </b>
        <div className="absolute top-[409px] left-[832px] w-[385px] h-[350px] font-lato ">
          <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[20px] bg-white" />
          </div>
          <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
          </div>
          <div className="absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs bg-field-color-darker" />
          <input type='text' placeholder='Enter Your Password' className="absolute top-[74px] left-[1px]"/>
          <div className="absolute h-[5.34%] w-[0.26%] top-[44.52%] right-[68.7%] bottom-[50.14%] left-[31.04%] box-border border-r-[1px] border-solid border-darkgray" />
          <div className="absolute top-[160px] left-[5px] w-[325px] h-10 text-center text-white font-montserrat bg-black rounded-xl">
            {/* <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
            </div> */}
            <button className=" cursor-pointer absolute top-[0.1px] left-[112.58px] inline-block w-[131px] h-[44px]">
              Sign In
            </button>
          </div>
          <div className="absolute top-[-50px] left-[1px] ">Email address</div>
          <input type='text' placeholder='Enter your Email' className='absolute -top-3'/>
          <div className="absolute top-[39px] left-[1px]">Password</div>
          <div className="absolute top-[120px] left-[2px] text-link cursor-pointer">
            Forgot password?
          </div>
          <div className="absolute top-[220px] left-[50px] text-center text-secondary-text">
            <span>{`Don’t have an Account?`}</span>
            <span className="text-link m-3s cursor-pointer">Register here</span>
          </div>
        </div>
        <div className="absolute top-[300px] left-[832px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
          <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
          </div>
          <div onClick={()=>signIn("google")} className="cursor-pointer absolute top-[10px] left-[43px] font-montserrat text-secondary-text text-center text-xs">
            Sign in with Google
          </div>
          {/* <Image
            className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden cursor-pointer"
            alt="image"
            src="/google-icon 1.png"
            width={500} 
            height={500}
            onClick={()=>signIn("google")}
          /> */}
        </div>
        <div className="absolute top-[300px] left-[1037px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
          <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
            <button className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white cursor-pointer">Sign in with Apple</button>
          </div>
          
          {/* <img
            className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
            alt=""
            src="/apple-1.svg"
          /> */}
        </div>
        <b className="absolute top-[200px] left-[832px] text-[36px]">Sign In</b>
        <div className="absolute top-[260px] left-[832px] font-lato">
          Sign in to your account
        </div>
        <div>Don’t</div>
      </div>
    </div>
    
  )
}

export default Login

// <div>
    //     {/* <button className='font-bold text-center text-fuchsia-800' onClick={()=>signIn("google")}>Login with google</button> */}
    //     <div className="relative w-full h-[750px] overflow-hidden text-left text-base text-black font-montserrat">
    //     <div className="absolute top-[0px] left-[588px] w-[852px] h-[1000px]" />
    //     <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[850px]" />
    //     <b className="absolute top-[450px] left-[171px] text-[72px] text-white">
    //       Board.
    //     </b>
    //     <div className="absolute top-[409px] left-[832px] w-[385px] h-[350px] font-lato ">
    //       <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
    //         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[20px] bg-white" />
    //       </div>
    //       <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
    //         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
    //       </div>
    //       <div className="absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs bg-field-color-darker" />
    //       <input type='text' placeholder='Enter Your Password' className="absolute top-[74px] left-[1px]"/>
    //       <div className="absolute h-[5.34%] w-[0.26%] top-[44.52%] right-[68.7%] bottom-[50.14%] left-[31.04%] box-border border-r-[1px] border-solid border-darkgray" />
    //       <div className="absolute top-[160px] left-[5px] w-[325px] h-10 text-center text-white font-montserrat bg-black rounded-xl">
    //         {/* <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
    //           <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
    //         </div> */}
    //         <button className=" cursor-pointer absolute top-[0.1px] left-[112.58px] inline-block w-[131px] h-[44px]">
    //           Sign In
    //         </button>
    //       </div>
    //       <div className="absolute top-[-50px] left-[1px] ">Email address</div>
    //       <input type='text' placeholder='Enter your Email' className='absolute -top-3'/>
    //       <div className="absolute top-[39px] left-[1px]">Password</div>
    //       <div className="absolute text-blue-700 top-[120px] left-[2px] text-link cursor-pointer">
    //         Forgot password?
    //       </div>
    //       <div className="absolute top-[220px] left-[50px] text-center text-secondary-text">
    //         <span>{`Don’t have an Account?`}</span>
    //         <span className="text-link m-3 text-blue-700 cursor-pointer">Register here</span>
    //       </div>
    //     </div>
    //     <div className="absolute top-[300px] left-[832px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
    //       <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
    //         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
    //       </div>
    //       <div onClick={()=>signIn("google")} className="cursor-pointer absolute top-[10px] left-[43px] font-montserrat text-secondary-text text-center text-xs">
    //         Sign in with Google
    //       </div>
    //       {/* <Image
    //         className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden cursor-pointer"
    //         alt="image"
    //         src="/google-icon 1.png"
    //         width={500} 
    //         height={500}
    //         onClick={()=>signIn("google")}
    //       /> */}
    //     </div>
    //     <div className="absolute top-[300px] left-[1037px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
    //       <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
    //         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
    //       </div>
    //       <div className="absolute top-[8px] left-[46px] cursor-pointer ">Sign in with Apple</div>
    //       {/* <img
    //         className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
    //         alt=""
    //         src="/apple-1.svg"
    //       /> */}
    //     </div>
    //     <b className="absolute top-[200px] left-[832px] text-[36px]">Sign In</b>
    //     <div className="absolute top-[260px] left-[832px] font-lato">
    //       Sign in to your account
    //     </div>
    //     <div>Don’t</div>
    //   </div>
    // </div>
