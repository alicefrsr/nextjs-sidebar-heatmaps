'use client';

import { ChevronFirst, MoreVertical } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar({ children }) {
  return (
    <aside className='h-screen'>
      <nav className='h-full w-60 flex flex-col bg-white border-r shadow-lg'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <Image
            src='https://img.logoipsum.com/224.svg'
            alt='logo'
            width={40}
            height={40}
          />
          <h1 className='font-bold'>Build it</h1>
          <button className='p-2 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <ChevronFirst />
          </button>
        </div>
        <ul classname='flex-1 px-3 bg-slate-500'>{children}</ul>
        <div className='border-t  flex p-3'>
          {/* <Image
            src='https://randomuser.me/api/portraits/women/3.jpg'
            alt='avatar'
            width={45}
            height={45}
            className='rounded-full'
          /> */}
          <div
            classname={`w-52 flex flex-col justify-between items-center ml-3`}
          >
            <div classname='leading-4'>
              <h2 className='font-semibold'>Jane Doe</h2>
              <span className='text-xs text-gray-600'>janedoe@email.com</span>
            </div>

            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
