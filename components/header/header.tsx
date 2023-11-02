'use client'

import { ModalNavMenu } from '@/components/ui/modals/modal-navmenu';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ModalMenuBar } from '../ui/modals/modal-menubar';
import { ModeToggle } from '../ui/modals/modal-dark-light';


interface ModalProps {
    children?: React.ReactNode;
}

export const HeaderNav: React.FC<ModalProps>= ({
    children
}) =>{
    return (
      <div>
        <div className=" h-auto border-b-2 border-purple-300">
          <header className="ml-8 mr-8 flex items-center justify-between p-2 ">
            <h1 className=' text-2xl'>
              <Link href="/">The Reference</Link>
            </h1>
            <ModalNavMenu></ModalNavMenu>
            <div className='flex items-center justify-between'>
              <UserButton></UserButton>
              <ModeToggle></ModeToggle>
            </div>
          </header>
        </div>
      </div>
    );
}