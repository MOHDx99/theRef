import prismadb from "@/lib/prismadb";
import { BillboardsForm } from "../components/billboards-form";

const BillboardPage = async ({
    params
}: {
    params:{ billboardId: string }
}) => {

    const Billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })

    

    return ( 
        <div className=" flex-col">
            <div className=" flex-1 space-y-4 p-8 pt-6">
                <div>
                    <BillboardsForm initialData={Billboard}/>
                </div>
            </div>
        </div>
     );
}
 
export default BillboardPage;