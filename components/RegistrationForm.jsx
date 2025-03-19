'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [teamName, setTeamName] = useState('');
  const [track, setTrack] = useState('');
  const [members, setMembers] = useState([
    { id: 1, name: '', phone: '', roll: '', email: '' },
  ]);

  const addMember = () => {
    const newId =
      members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
    setMembers([
      ...members,
      { id: newId, name: '', phone: '', roll: '', email: '' },
    ]);
  };

  const updateMember = (id, field, value) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      teamName,
      track,
      members,
    });

    alert('Form submitted successfully!');
  };

  return (
    <div className='w-full md:w-[75%] rounded-xl bg-white overflow-y-scroll'>
      <form
        onSubmit={handleSubmit}
        className='shadow-xl border border-gray-300 p-6 rounded-xl'
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
              <option value='track1'>Track 1</option>
              <option value='track2'>Track 2</option>
              <option value='track3'>Track 3</option>
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
              <div key={member.id} className='mb-5 pb-10'>
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
                    htmlFor={`memberRoll${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Roll Number
                  </label>
                  <input
                    type='text'
                    id={`memberRoll${member.id}`}
                    value={member.roll}
                    onChange={(e) =>
                      updateMember(member.id, 'roll', e.target.value)
                    }
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
                <div className='mb-4'>
                  <label
                    htmlFor={`memberEmail${member.id}`}
                    className='block text-sm/6 font-semibold'
                  >
                    Email
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
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-nothing'
                    name='push-notifications'
                    type='radio'
                    className='relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-black checked:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm/6 font-medium text-gray-900'
                  >
                    Team Leader
                  </label>
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
            By selecting this, you agree to our{' '}
            <a href='#' className='font-semibold hover:underline'>
              rules
            </a>
            .
          </label>
        </div>
        <button
          type='submit'
          className='mt-10 block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-neutral-800'
        >
          Register
        </button>
      </form>
    </div>
  );
}
