'use client';

import {
  ArrowLeftToLine,
  ArrowRightToLine,
  Bug,
  CalendarCheck2,
  NotebookPen,
  StickyNote,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-80'
      } h-screen flex flex-col justify-between transition-all border-r`}
    >
      <nav className='h-full flex flex-col bg-white'>
        <header className='p-4 pb-2 flex justify-between items-center border-b'>
          {}
          {/* <Image
            src='https://img.logoipsum.com/224.svg'
            alt='logo'
            width={40}
            height={40}
          /> */}

          <h1
            className={`${
              isCollapsed ? 'hidden' : ''
            } font-bold font-ibm text-md`}
          >
            &lt;bits&bobs/&gt;
          </h1>
          <button
            onClick={handleSidebar}
            className='p-4 rounded-lg bg-slate-100 hover:bg-slate-200'
          >
            {isCollapsed ? <ArrowRightToLine /> : <ArrowLeftToLine />}
          </button>
          {/* <h1 className='font-bold font-fira'>Bob's Lab</h1> */}
        </header>

        <ul className='flex-1 space-y-2 p-4 '>
          <li className='bg-slate-100  px-3 py-4 rounded-md flex gap-2  hover:bg-sky-100'>
            <StickyNote />
            <Link href='/'>Item 1 </Link>
          </li>
          <li className='bg-slate-100  px-3 py-4 rounded-md flex gap-2  hover:bg-sky-100'>
            <CalendarCheck2 />
            <Link href='/'>Item 1 </Link>
          </li>
          <li className='bg-slate-100  px-3 py-4 rounded-md flex gap-2  hover:bg-sky-100'>
            <NotebookPen />
            <Link href='/'>Item 1 </Link>
          </li>
          <li className='bg-slate-100  px-3 py-4 rounded-md flex gap-2  hover:bg-sky-100'>
            <Bug />
            <Link href='/'>Item 1 </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
