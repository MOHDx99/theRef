import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req:Request,
    {params}: {params: { storeId: string }}
    ) {
    try {
        const {userId} = auth();
        const body = await req.json();

        const {name} = body;


        if (!userId) {
            return new NextResponse("Unauthentificated",{status: 401})
        }

        if (!name) {
            return new NextResponse("Name is required", { status : 400})
        }

        if (!params.storeId) {
            return new NextResponse("Store is Required", {status : 400})
        }

        const stores = await prismadb.store.updateMany({
            where: {
                id:params.storeId,
                userId
            },
            data:{
                name
            }
        });

        return NextResponse.json(stores)

    } catch (error) {
        console.log('[STORE_PATCH]', error);
        return new NextResponse("Internal Error", {status : 500});
    }
}

export async function DELETE(
    req:Request,
    {params}: {params: { storeId: string }}
    ) {
    try {
        const {userId} = auth();
        

        if (!userId) {
            return new NextResponse("Unauthentificated",{status: 401})
        }

        
        if (!params.storeId) {
            return new NextResponse("Store is Required", {status : 400})
        }

        const stores = await prismadb.store.deleteMany({
            where: {
                id:params.storeId,
                userId
            }
        });

        return NextResponse.json(stores)

    } catch (error) {
        console.log('[STORE_DELETE]', error);
        return new NextResponse("Internal Error", {status : 500});
    }
}