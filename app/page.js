'use client'
import { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userData , setUserData] = useState();
  const [inputValue, setInputValue] = useState("");
  const [warn, setWarn] = useState()

  async function getUserInfo() {
    const res = await fetch(`https://api.github.com/users/${inputValue}`)
    const data = await res.json()
    if (data.message == "Not Found") {
      setWarn(<p className='text-red-900 text-sm'>User Not Found!</p>)
    }else if(data.message?.indexOf("API")) {
      setWarn(<p className='text-red-900 text-sm'>limit api call!</p>)
    } else if (data.login) {
    setUserData(data);
    setWarn("")
    }
  }





  return (
    <div className="card flex flex-col justify-center items-center m-10">
      <Form IV={inputValue} setIV={setInputValue} gUI={getUserInfo} warn={warn}/>
      <UserCard data={userData} />

    </div>
  );
}
