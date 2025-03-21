'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { registerTeam } from '@/app/actions/registerTeam';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail } from '@/app/actions/sendEmail';
import { sendTeleReg } from '@/app/actions/sendTeleReg';

export default function RegistrationForm() {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(false);
  const {data:session, status} = useSession();
  const [track, setTrack] = useState('web');
  const [members, setMembers] = useState([
    { id: 1, name: session?.user.name, phone: '', email: session?.user.email },
  ]);

  const addMember = () => {
    const newId =
      members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
    setMembers([
      ...members,
      { id: newId, name: '', phone: '', email: ''},
    ]);
  };

  const removeMembers = (id) => {
    setMembers(members.filter((member)=> member.id !== id));
  }

  const updateMember = (id, field, value) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    );
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const res = await registerTeam(teamName, track, members, session?.user.email);
    if(res.success){
      await sendEmail(members,res.id,teamName);
      await sendTeleReg(res.id,teamName,members);
      toast.success(res.message);
      setLoading(false);
      router.push('/');
    }else{
      toast.error(res.message);
      setLoading(false);
    }
  };

  return (
    <div className='md:w-[75%] w-full rounded-xl bg-white overflow-y-scroll h-full'>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className='shadow-xl p-6 rounded-xl'
      >
        <section>
        <h1 className='text-2xl font-medium'>Registration Form</h1>
          <div className='mt-10'>
            <label htmlFor='teamName' className='block text-sm/6 font-semibold'>
              Team Name
            </label>
            <input
              type='text'
              id='teamName'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className='mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black'
              required
            />
          </div>

          <div className='mt-5'>
            <label htmlFor='track' className='block text-sm/6 font-semibold'>
              Select Track
            </label>
            <select
              id='track'
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className='mt-2.5 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6'
              required
            >
              <option value='web'>Web Development</option>
              <option value='app'>App Development</option>
              <option value='ml'>Machine Learning</option>
            </select>
          </div>
        </section>

        <section className='mt-10'>
          <h2 className='text-base/7 font-semibold'>Member Details</h2>
          <p className='mt-1 text-sm/6'>
            Please provide the details of all team members
          </p>
          <hr className='my-5' />

          <div id='membersList' className='divide-y-1 divide-gray-500'>
            {members.map((member) => (
              <div key={member.id} className='flex flex-col mb-5 pb-10'>
                {member.id > 1 && <div className='flex self-end'>
                  <button
                  onClick={()=>{removeMembers(member.id)}}
                  className='rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                >
                   Remove
                </button>
                </div>}
                <div className='mb-4'>
                  <label
                    htmlFor={`memberName${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id={`memberName${member.id}`}
                    value={member.name}
                    onChange={(e) =>
                      updateMember(member.id, 'name', e.target.value)
                    }
                    className='mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor={`memberEmail${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Email (KIIT MAIL)
                  </label>
                  <input
                    type='email'
                    id={`memberEmail${member.id}`}
                    value={member.email}
                    onChange={(e) =>
                      updateMember(member.id, 'email', e.target.value)
                    }
                    className='mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor={`memberRoll${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Roll Number
                  </label>
                  <input
                    type='text'
                    id={`memberRoll${member.id}`}
                    value={member.email.split('@')[0]}
                    readOnly
                    className='mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor={`memberPhone${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    id={`memberPhone${member.id}`}
                    value={member.phone}
                    onChange={(e) =>
                      updateMember(member.id, 'phone', e.target.value)
                    }
                    className='mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black'
                    required
                  />
                </div>
                
              </div>
            ))}
          </div>

          {members.length < 3 && (
            <div className='flex justify-end mb-5'>
              <button
                type='button'
                onClick={addMember}
                className='block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
              >
                + Add Member
              </button>
            </div>
          )}
        </section>
        <div className='flex gap-x-3 h-6 items-center'>
          <div className='flex shrink-0 items-center'>
            <div className='group grid size-4 grid-cols-1'>
              <input
                required
                defaultChecked
                id='comments'
                name='comments'
                type='checkbox'
                aria-describedby='comments-description'
                className='col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-black checked:bg-black indeterminate:border-black indeterminate:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto'
              />
              <svg
                fill='none'
                viewBox='0 0 14 14'
                className='pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25'
              >
                <path
                  d='M3 8L6 11L11 3.5'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='opacity-0 group-has-checked:opacity-100'
                />
                <path
                  d='M3 7H11'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='opacity-0 group-has-indeterminate:opacity-100'
                />
              </svg>
            </div>
          </div>
          <label className='text-sm/6 text-gray-600'>
            Accept{' '}
            <a href='#' className='font-semibold hover:underline'>
              Terms & Conditions
            </a>
            .
          </label>
        </div>
        {!loading?<button
          type='submit'
          className='mt-10 block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-neutral-800'
        >
          Register
        </button>
        :
        <span
          className='mt-10 block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs'
        >
          Registering...
        </span>
        }
      </form>
    </div>
  );
}
