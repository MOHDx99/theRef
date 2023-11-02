'use client'
 

import { StoreModalSearch } from '@/components/ui/schema/search';
import { HeaderNav } from '@/components/header/header';
import { TableProduit } from '@/components/ui/modals/modal-table';



 

export default function Home() {
  return (
    <div className="">
        <HeaderNav></HeaderNav>
      <div>
        <div className=' text-xl p-8'>
          <b>Gestion de Stock</b>
          <StoreModalSearch></StoreModalSearch>
          <div>
            <TableProduit/>
          </div>
        </div>
      </div>
    </div>
  );
}
