import React from 'react'
import { Link } from 'react-router-dom'
import targetImg from '../assets/target.svg'
import exerciseImg from '../assets/exercise.svg'
import calorieImg from '../assets/calori.svg'
import activityImg from '../assets/activity.svg'
import avatarImg from '../assets/avatar.webp'
import logoutImg from '../assets/logout.svg'

export const SideBar = () => {
  const Bar = [
    {
      text: "Hedef",
      path: "/hedef",
      from: targetImg
    },
    {
      text: "Egzersizler",
      path: "/egzersiz",
      from: exerciseImg
    },
    {
      text: "Beslenme",
      path: "/beslenme",
      from: calorieImg
    },
    {
      text: "Aktivite",
      path: "/aktivite",
      from: activityImg
    }
  ]

  return (
    <div className='flex flex-col w-[200px] h-screen bg-white items-center justify-center'>
      <div className='text-gray-400 flex-col space-y-10 mt-20'>
        {
          Bar.map((item, index) => (
            <Link to={item.path} key={index} className='flex items-center p-2 font-bold text-xl hover:text-primary transition-colors duration-300'>
              <img src={item.from} alt={item.text} className='w-10 h-10 mr-2' />
              {item.text}
            </Link>
          ))
        }
      </div>
      <div className='mt-auto'>
        <Link to={"/user"} >
          <img src={avatarImg} alt="avatarImg" className='w-20 h-20 rounded-full border-collapse border-red-500 border-[3px]' />
        </Link>
      </div>
      <div className='flex mt-7 mb-5'>
        <Link className='flex items-center p-2 font-bold text-xl hover:text-red-500 transition-colors duration-300'>
          <img src={logoutImg} alt="log out" className='w-8 h-8 mr-2' />
          Çıkış
        </Link>
      </div>
    </div>
  )
}
