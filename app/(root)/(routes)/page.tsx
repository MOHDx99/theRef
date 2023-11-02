'use client'
 

import { HeaderNav } from '@/components/header/header';

import { MoodalDialog } from '@/components/ui/modals/modal-dialog';

import { useStoreModal } from '@/hooks/use-store-modal';

import { useEffect } from 'react';


export default function Home() {

  const onOpen= useStoreModal((state) => state.onOpen);
  const isOpen= useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen,onOpen]);

  return (
    <>
      
    </>
  );
}
