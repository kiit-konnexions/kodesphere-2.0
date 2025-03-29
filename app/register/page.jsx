'use client'

import SideInfoBar from '@/components/fragments/SideInfoBar';
import RegistrationForm from '@/components/RegistrationForm';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkLimit, checkReg } from '../actions/checkReg';
import Link from 'next/link';
import EventDateCounter from "@/components/EventDateCounter";
import LoadingSpinner from "@/components/LoadingSpinner";


const RegistrationPage = () => {
    const router = useRouter();
    const {data:session, status} = useSession();
    const [tid,setTid] = useState("")
    const [pageStatus, setPageStatus] = useState("loading");
    const [isRegistered, setIsRegistered] = useState(false);
    const [isRegClosed, setIsRegClosed] = useState(true);

    useEffect( ()=>{
        if(status==="authenticated"){
          const cr = async () => {
              // console.log(session?.user.email);
              const res = await checkReg(session?.user.email)
              const regLimit = await checkLimit();
              if (res.success){
                  setIsRegistered(true);
                  setTid(res.tid);
                  setPageStatus("loaded");
              }else if(regLimit.success){
                if(regLimit.RegCount >= 650 ){
                    setIsRegClosed(true);
                    setPageStatus("loaded");
                }
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
              <LoadingSpinner />
          </div>
        )
    }

    if(isRegistered){
        return(
            <div className="min-h-screen">
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div
                        className="w-full max-w-md p-8 mx-4 bg-white rounded-2xl shadow-xl transform transition-all animate-fadeIn">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full bg-green-100 p-4 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Confirmed!</h2>
                            <p className="text-gray-600 mb-6">
                                You're all set and ready to go. We're excited to see you at Campus 14!
                            </p>

                            <EventDateCounter/>

                            <Link
                                href={`/digital-id/${tid}`}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    <rect width="18" height="16" x="3" y="4" rx="2" />
                                    <path d="M7 12h10" />
                                    <path d="M7 16h10" />
                                    <path d="M7 8h4" />
                                </svg>
                                View Digital ID Card
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(isRegClosed){
        return(
            <div className="min-h-screen">
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div
                        className="w-full max-w-md p-8 mx-4 bg-white rounded-2xl shadow-xl transform transition-all animate-fadeIn">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full bg-red-100 p-4 mb-4">
                                {/* cross svg */}
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 16 16"><path fill="none" stroke="#f00909" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"></path></svg>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registrations are Closed!</h2>
                            <p className="text-gray-600 mb-6">
                                Better luck next time, see you next year with the same spirit and enthusiasm!
                            </p>
                            <EventDateCounter/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='flex min-h-screen md:h-screen md:p-4 p-2 gap-4 bg-gray-200 md:flex-row flex-col'>
        <SideInfoBar/>
        <RegistrationForm setIsRegistered={setIsRegistered}/>
    </div>
  )
}

export default RegistrationPage;
