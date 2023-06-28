
"use client"
import { signIn, signOut, useSession, } from 'next-auth/react'
import Image from 'next/image';
import design from './login/design';

import React, { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router';

import {AiOutlineSetting,AiOutlinePieChart,AiOutlineLike,AiOutlineSearch} from 'react-icons/ai'
import {BiUserCircle,BiPurchaseTagAlt} from 'react-icons/bi'
import {TbCalendarTime} from 'react-icons/tb'

import {BsHouseDown,BsBell} from 'react-icons/bs'
import {LuUsers} from 'react-icons/lu'

import {FaBars, FaTimes} from "react-icons/fa";



const Login = () => {

  const [nav, setNav] = React.useState(false);
   
    const session = useSession();

    

    console.log(session);
    if(session.status ==="loading"){
        return <p>Loading....</p>
    }


    // const [donationsData, setDonationsData] = useState(null);
    // useEffect(()=>{
    //   const axiosConfig = {
    //     headers:{
    //       Accept:"application/json",
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // });
    // axios.get('https://donorapi.mervice.ca/api/v1/dashboard/lastTopNth Summary?language=en', axiosConfig)
    // const profilepicture = user.image
    if(session?.status ==="authenticated"){
        return (
          
          <div className="relative bg-background w-full sm:h-[1024px] overflow-hidden text-left text-sm text-black h-[1500px]">

      {/* <div className="absolute top-[0px] left-[0px] bg-black w-10  sm:h-[1024px] flex justify-center items-center" /> */}

      <b className="absolute text-[50px] sm:hidden sm:w-full sm:text-[72px] sm:top-[464px] sm:left-[171px] text-white w-full bg-black h-[100px] left-0 right-0">
        Board.
      </b>


      <div className="flex justify-between items-center
    w-full h-20 px-8 text-white">

<div onClick = {() => setNav(!nav)}className="cursor-pointer pl-2 pr-8 z-10 text-gray-500 sm:hidden ml-auto">
        {nav ? <FaTimes size = {30}/> : <FaBars size={30}/>}
      </div>

      {nav && 
        <ul className=" list-none gap-4 flex justify-center items-center absolute -top-2 left-0 right-3 w-screen h-[130px] bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className='justify-center py-2 text-2xl cursor-pointer'>Dashboard</li>
          <li className='justify-center py-2 text-2xl cursor-pointer'>Transactions</li>
          <li  className='justify-center py-2 text-2xl cursor-pointer'>Schedules</li>
          <li  className='justify-center py-2 text-2xl cursor-pointer'>Users</li>
      

          </ul>
      }

      </div>

     
      

      <b className="absolute top-[140px] left-[150px] h-[30px] text-5xl font-Montserrat sm:hidden">Dashboard</b>

      <div className="absolute top-[200px] left-[90px] w-[221.05px] h-[120px] sm:hidden">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25px] inline-block w-[124px]">
          Total Revenues
        </div>
        <div className="absolute top-[20px] left-[170px] inline-block w-[124px]">
          <BsHouseDown/>
        </div>
        <b className="absolute top-[67px] left-[25px] text-5xl inline-block font-open-sans w-[124px]">
          $2,129,430
        </b>
        
        
      </div>

      <div className='absolute top-[350px] left-[90px] w-[221.05px] h-[120px] sm:hidden'>
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25.11px] inline-block  w-[126px] ">
          Total Transactions
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[150px] ">
          <BiPurchaseTagAlt/>
        </div>
        <b className="absolute top-[67px] left-[25.11px] text-5xl inline-block font-open-sans w-[65.26px]">
          1,520
        </b>

      </div>

      <div className='absolute top-[500px] left-[90px] w-[221.05px] h-[120px] sm:hidden'>
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
      <div className="absolute top-[45px] left-[25.21px] inline-block w-[81px]">
          Total Likes
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[81px]">
          <AiOutlineLike/>
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[65.26px]">
          9,721
        </b>
      </div>

      <div className='absolute top-[650px] left-[90px] w-[221.05px] h-[120px] sm:hidden'>
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25.58px] inline-block w-[85.26px]">
          Total Users
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[85.26px]">
          <LuUsers/>
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[44.21px]">
          892
        </b>
      </div>


      <div className="absolute top-[788px] left-[0px] w-[480px] h-64 font-Montserrat sm:hidden">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[72px] left-[244px] w-[98px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-darkseagreen w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Basic Tees</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            55%
          </div>
        </div>
        <div className="absolute top-[31px] left-[327px] w-[97px] h-[15px] text-xs text-secondary-text sm:hidden">
          <div className="absolute top-[0px] left-[0px] inline-block w-[97px]">
            May - June 2021
          </div>
        </div>
        
        <div className="absolute top-[129px] left-[244px] w-[168px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-khaki w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Custom Short Pants</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            31%
          </div>
        </div>
        <div className="absolute top-[186px] left-[244px] w-32 h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-lightcoral w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Super Hoodies</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            14%
          </div>
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg">Top products</b>
        <Image
          className="absolute top-[82px] left-[60px] w-[134px] h-[134px]"
          alt="piechart"
          src="/piechart.png"
          height={200}
          width={200}
        />

          

      </div>



      <div className="absolute top-[1088px] left-[0px] w-[400px] h-64 text-xs text-icon font-Montserrat sm:hidden">
        <div className="absolute top-[2px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg text-black">
          Today’s schedule
        </b>
        <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-Lato sm:hidden">
          <b className="absolute top-[1px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
        </div>
        <div className="absolute top-[34px] left-[398px] text-secondary-text">
          See All
        </div>
        
        <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-Lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga 
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
        </div>
      </div>



      <div className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-lg text-white font-Montserrat hidden sm:block">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-black" />
        <div className="absolute top-[87.92%] left-[17.86%] text-sm">Help</div>
        <div className="absolute top-[91.84%] left-[17.86%] text-sm">
          Contact Us
        </div>
        <div className="absolute top-[43.64%] left-[31.43%] cursor-pointer">Settings</div>
        <div className="absolute top-[43.64%] left-[22.43%] cursor-pointer"><AiOutlineSetting/></div>
        <div className="absolute top-[37.08%] left-[31.43%] cursor-pointer">Users</div>
        <div className="absolute top-[37.08%] left-[22.43%] cursor-pointer"><BiUserCircle/></div>
        <div className="absolute top-[30.51%] left-[31.43%] cursor-pointer">Schedules</div>
        <div className="absolute top-[30.51%] left-[22.43%] cursor-pointer"><TbCalendarTime/></div>
        <div className="absolute top-[23.94%] left-[31.43%] cursor-pointer font-Montserrat">Transactions</div>
        <div className="absolute top-[23.94%] left-[22.43%] cursor-pointer"><BiPurchaseTagAlt/></div>
        <b className="absolute top-[17.37%] left-[31.43%] cursor-pointer font-Montserrat">Dashboard</b>
        <div className="absolute top-[17.37%] left-[22.43%] cursor-pointer"><AiOutlinePieChart/></div>
        
        <b className="absolute top-[6.36%] left-[17.86%] text-17xl">Board.</b>
      </div>
      <div className="absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px] font-Montserrat hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
        </div>
        <div className="absolute top-[45px] left-[25.11px]  w-[126px] hidden sm:block">
          Total Transactions
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[150px] ">
          <BiPurchaseTagAlt/>
        </div>
        <b className="absolute top-[67px] left-[25.11px] text-5xl inline-block font-open-sans w-[65.26px]">
          1,520
        </b>
      </div>
      <div className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px] hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[45px] left-[25px] inline-block w-[124px]  ">
          Total Revenues
        </div>
        <div className="absolute top-[20px] left-[170px] inline-block w-[124px]">
          <BsHouseDown/>
        </div>
        <b className="absolute top-[67px] left-[25px] text-5xl inline-block font-open-sans w-[124px]">
          $2,129,430
        </b>
        
      </div>
      <div className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px] font-Montserrat hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose" />
        </div>
        <div className="absolute top-[45px] left-[25.21px] inline-block w-[81px]">
          Total Likes
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[81px]">
          <AiOutlineLike/>
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[65.26px]">
          9,721
        </b>
        
      </div>
      <div className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px] hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
        </div>
        
        <div className="absolute top-[45px] left-[25.58px] inline-block w-[85.26px]">
          Total Users
        </div>
        <div className="absolute top-[20px] left-[171px] inline-block w-[85.26px]">
          <LuUsers/>
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[44.21px]">
          892
        </b>
        
      </div>
      
      <div className="absolute top-[289px] left-[380px] w-[1000px] h-[359px] font-Montserrat hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[1000px] h-[359px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[49px] left-[808px] inline-block w-[42px]">
          Guest
        </div>
        <div className="absolute top-[49px] left-[906px] inline-block w-[34px]">
          User
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg inline-block font-Montserrat w-[93px]">
          Activities
        </b>
        <div className="absolute top-[57px] left-[40px] w-[124px] h-[17px] text-secondary-text font-Montserrat hidden sm:block">
          <div className="absolute top-[0px] left-[0px] inline-block w-[111px]">
            May - June 2021
          </div>
          <Image
            className="absolute w-50 h-32 flex-shrink left-12 top-9 z-10"
            alt=""
            src="/line_chart_1.png"
            height={600}
            width={800}
          />
          <Image
            className="absolute w-50 h-32 flex-shrink left-12 top-9 z-10"
            alt=""
            src="/line_chart_2.png"
            height={600}
            width={800}
          />
        </div>
        <div className="absolute top-[105px] left-[40px] w-[921px] h-[212px] text-secondary-text hidden sm:block">
          <div className="absolute top-[0px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              500
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              300
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[39px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              400
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              200
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[156px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              100
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[195px] left-[17.23px] w-[903.77px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[9.12px]">
              0
            </div>
            <div className="absolute top-[9.5px] left-[22.27px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
        </div>
        <div className="absolute top-[54px] left-[787.53px] rounded-[50%] bg-light-red w-2.5 h-2.5" />
        <div className="absolute top-[54px] left-[885px] rounded-[50%] bg-light-green w-2.5 h-2.5" />
      </div>
      <div className="absolute top-[688px] left-[380px] w-[480px] h-64 font-Montserrat hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[72px] left-[244px] w-[98px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-darkseagreen w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Basic Tees</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            55%
          </div>
        </div>
        <div className="absolute top-[31px] left-[327px] w-[97px] h-[15px] text-xs text-secondary-text hidden sm:block">
          <div className="absolute top-[0px] left-[0px] inline-block w-[97px]">
            May - June 2021
          </div>
        </div>
        
        <div className="absolute top-[129px] left-[244px] w-[168px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-khaki w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Custom Short Pants</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            31%
          </div>
        </div>
        <div className="absolute top-[186px] left-[244px] w-32 h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-lightcoral w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Super Hoodies</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-Lato text-secondary-text">
            14%
          </div>
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg">Top products</b>
        <Image
          className="absolute top-[82px] left-[60px] w-[134px] h-[134px]"
          alt="piechart"
          src="/piechart.png"
          height={200}
          width={200}
        />
      </div>

      <div className="absolute top-[688px] left-[900px] w-[480px] h-64 text-xs text-icon font-Montserrat hidden sm:block">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg text-black">
          Today’s schedule
        </b>
        <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-Lato">
          <b className="absolute top-[1px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
        </div>
        <div className="absolute top-[34px] left-[398px] text-secondary-text">
          See All
        </div>
        
        <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-Lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga 
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
        </div>
      </div>
      <div className="absolute top-[604px] left-[559px] w-[648px] h-[19px] text-secondary-text font-open-sans">
        <div className="absolute top-[0px] left-[0px] font-Lato">Week 1</div>
        <div className="absolute top-[0px] left-[200px]">Week 2</div>
        <div className="absolute top-[0px] left-[400px]">Week 3</div>
        <div className="absolute top-[0px] left-[600px]">Week 4</div>
      </div>
      
      <div className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-5xl font-Montserrat hidden sm:block ">
        <b className="absolute top-[0px] left-[0px]">Dashboard</b>
        <div className="absolute top-[0px] left-[713px] w-[180px] h-[30px] text-sm text-light-grey font-Lato">
          <input type='text' placeholder='Search...' className="w-[120px] h-[30px] rounded-lg bg-white pl-10 pr-10"/>
            
          <div className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none"><AiOutlineSearch/></div>
          <div className="absolute top-3 right-[-45px] flex items-center cursor-pointer"><BsBell/></div>
          
      </div>

    </div>
    <button className='absolute cursor-pointer bg-slate-500 p-2 rounded-lg font-Montserrat text-white right-10 top-6' onClick={()=>signOut("google")}>LogOut</button>

    </div> 
    
    

        ) 
    }


      // const { data: session } = useSession();
      // const router = useRouter();
    
      // useEffect(() => {
      //   if (session?.status === "authenticated") {
      //     router.replace('/login/design');
      //   }
      // }, [session, router]);
    
      // console.log(session);
      // if (session?.status === "loading") {
      //   return <p>Loading....</p>;
      // }
    



  return (
    



    // check

    <div className="relative w-full h-[1024px] overflow-hidden text-left text-base text-black ">
      <div className="absolute top-[0px] left-[588px] bg-background w-[930px] h-[1024px] font-Montserrat" />
      <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[94px] sm:h-[1024px] flex justify-center items-center" />
      <b className="absolute text-[50px] top-10 sm:text-[72px] sm:top-[464px] sm:left-[171px] text-white">
        Board.
      </b>
      {/* text-[24px] sm:text-[72px] text-white absolute inset-0 flex items-center justify-center */}
      <div className="absolute top-[409px] left-[832px] w-[385px] h-[356px] font-Lato">
        <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-background" />
        </div>
        <div className="absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs bg-field-color-darker" />
        <input type='password' placeholder='Enter Your Password' className="absolute top-[44.38%] left-[11.69%] outline-none bg-field-color-darker"/>

        <div className="absolute sm:top-[247px] sm:left-[30px] sm:w-[325px] sm:h-10 text-center text-white font-Montserrat">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
          </div>
          <b className="absolute sm:top-[9px] sm:left-[112.58px] inline-block w-[101.96px] h-[21.71px] font-Montserrat">
            Sign In
          </b>
        </div>
        <div className="absolute top-[30px] left-[30px] font-Montserrat">Email address</div>
        <input type='text' placeholder='Enter your Email' className="absolute top-[69px] left-[45px] outline-none bg-background"/>
        <div className="absolute top-[119px] left-[30px]">Password</div>
        <div className="absolute top-[208px] left-[31px] text-link cursor-pointer">
          Forgot password?
        </div>
        <div className="absolute top-[337px] left-[62px] text-center text-secondary-text">
          <span>{`Don’t have an account? `}</span>
          <span className="text-link cursor-pointer">Register here</span>
        </div>
      </div>
      <div className="absolute top-[354px] left-[832px] w-[180px] h-[30px] text-center text-xs text-secondary-text font-Montserrat">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">

          <button className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white cursor-pointer font-Montserrat" onClick={()=>signIn("google")}>
          Sign in with Google
        </button>
        </div>
        
        <Image
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden z-10 cursor-pointer"
          alt=""
          src="/google-icon.png"
          height={100}
          width={100}
          onClick={()=>signIn("google")}
        />
      </div>
      <div className="absolute top-[354px] left-[1037px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
        <button className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white cursor-pointer'>Sign in with Apple</button>
        
        <Image
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden z-10"
          alt=""
          src="/apple.png"
          height={100}
          width={100}
        />
      </div>
      <b className="absolute top-[260px] left-[832px] text-17xl font-Montserrat">Sign In</b>
      <div className="absolute top-[309px] left-[832px] font-Lato">
        Sign in to your account
      </div>

      <div className="sm:hidden">
    <div className="mt-[100px] text-center">
      <b className="text-[24px] sm:text-[72px] text-white">Sign In</b>
      <div className="font-Lato mt-[20px]">Sign in to your account</div>
    </div>
    <div className="mt-[30px]">
      <div className="font-Montserrat">Email address</div>
      <input
        type="text"
        placeholder="Enter your Email"
        className="w-full px-[15px] py-[12px] mt-[10px] outline-none bg-background"
      />
    </div>
    <div className="mt-[20px]">
      <div className="font-Montserrat">Password</div>
      <input
        type="password"
        placeholder="Enter Your Password"
        className="w-full px-[15px] py-[12px] mt-[10px] outline-none bg-background"
      />
      <div className="text-link mt-[8px] cursor-pointer">Forgot password?</div>
    </div>
    <button className="w-full px-[15px] py-[12px] mt-[20px] bg-black text-white font-Montserrat">
      Sign In
    </button>
    <div className="text-center mt-[20px] text-secondary-text">
      <span>{`Don't have an account? `}</span>
      <span className="text-link cursor-pointer">Register here</span>
    </div>
    <div className="mt-[30px] text-center text-secondary-text font-Montserrat">
      <button className="w-full px-[15px] py-[12px] bg-white rounded-3xs cursor-pointer">
        Sign in with Google
      </button>
      <Image
        className="w-[11.5px] h-[11.5px] mt-[10px] mx-auto cursor-pointer"
        alt=""
        src="/google-icon.png"
        height={100}
        width={100}
        onClick={() => signIn('google')}
      />
    </div>
    <div className="mt-[20px] text-center text-secondary-text font-Montserrat">
      <button className="w-full px-[15px] py-[12px] bg-white rounded-3xs cursor-pointer">
        Sign in with Apple
      </button>
      <Image
        className="w-[11.5px] h-[11.5px] mt-[10px] mx-auto"
        alt=""
        src="/apple.png"
        height={100}
        width={100}
      />
    </div>
  </div>

  {/* Tablet and larger screens layout */}
  <div className="hidden sm:block absolute top-[354px] left-[832px]">
    <div className="w-[180px] h-[30px] text-center text-xs text-secondary-text font-Montserrat">
      <button className="w-full h-full rounded-3xs bg-white cursor-pointer" onClick={() => signIn('google')}>
        Sign in with Google
      </button>
      {/* <Image
        className="absolute top-[7px] left-[24px] w-[11.5px] h-[11.5px] overflow-hidden z-10"
        alt=""
        src="/google-icon.png"
        height={100}
        width={100}
        onClick={() => signIn('google')}
      /> */}
    </div>
    <div className="mt-[20px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
      <button className="w-full h-full rounded-3xs bg-white cursor-pointer">Sign in with Apple</button>
      {/* <Image
        className="absolute top-[7px] left-[24px] w-[11.5px] h-[11.5px] overflow-hidden z-10"
        alt=""
        src="/apple.png"
        height={100}
        width={100}
      /> */}
    </div>
    </div>
    </div>
    
  )
}

export default Login


// "use client"
// import Base from "./login/Base";
// import { useSession } from "next-auth/react";


// const Page = () => {

  
//   // console.log(session);
  
//   return (
//     <div>
//       <Base/>
//     </div>
//   );
// };

// export default Page;
