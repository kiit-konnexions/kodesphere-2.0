'use client'

import SideInfoBar from '@/components/fragments/SideInfoBar';
import RegistrationForm from '@/components/RegistrationForm';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkReg } from '../actions/checkReg';
import Link from 'next/link';


const RegistrationPage = () => {
    const router = useRouter();
    const {data:session, status} = useSession();
    const [pageStatus, setPageStatus] = useState("loading");
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect( ()=>{
        if(status==="authenticated"){
          const cr = async () => {
              // console.log(session?.user.email);
              const res = await checkReg(session?.user.email)
              if (res){
                  setIsRegistered(true)
                  setPageStatus("loaded")
              }
              setPageStatus("loaded")
          }
          cr();
        }
    },[status==="authenticated"])

    if(status==="unauthenticated"){
        setTimeout(()=>{
          router.push('/')
        },[100])
        return(
          <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
            401 | Unauthorized 🙅‍♂️
          </span>
        )
    }
    if(status==="loading" || pageStatus==="loading"){
        return(
          <div className='w-screen h-screen flex items-center justify-center text-xl'>
            loading...
          </div>
        )
    }

    if(isRegistered){
        return(
            <div className='w-screen h-screen flex flex-col items-center justify-center text-xl gap-2'>
              <span className='flex items-center gap-2'>
                <img src="/icons/check.svg" alt="check" className='w-auto h-[40px]'/>
                  You are Already Registered 🎉😍 <br />
              </span>
                Excited to see you there!
                <Link href="/idcard" className='bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-xl text-sm'>
                  View Id Card
                </Link>
            </div>
        )
    }

  return (
    <div className='flex min-h-screen md:h-screen md:p-4 p-2 gap-4 bg-gray-200 md:flex-row flex-col'>
        <SideInfoBar/>
        <RegistrationForm/>
    </div>
  )
}

export default RegistrationPage;
