import {NextRequest, NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";
import exp from "node:constants";

export  async function PUT ( request:NextRequest,
                             {params}:{params:{id:string}}
){
    // Validation

    // const body =await request.json();
    // const validation =schema.safeParse(body);
    // if(!validation.success())
    //     return NextResponse.json(validation.error.errors,{status:400});
    try {
        const { found_name, category, description, location, email, phone, date, claim_process } = await request.json();
        const FoundItem =await prisma.found.findUnique({
            where:{id:parseInt(params.id)}
        })
        if (!FoundItem)
            return nextResponse.json(
                {error: "Lost item not found"},
                {status:400}
            );
        const UpdateLostItem =await prisma.found.update({
            where:{id: FoundItem.id},
            data:{
                found_name,
                category,
                description,
                location,
                email,
                phone,
                date: new Date(date).toISOString(),
                claim_process,
            },
        });
        return NextResponse.json({FoundItem, message:"Lost Item Updated Successfully", status: 201});
    }catch (error){
        console.error('Error updating lost item:', error);
        return NextResponse.json({ error: 'Failed to update lost' }, { status: 500 });
    }

}

export async function DELETE(request:NextRequest,
                             {params}:{params:{id:string}}
){
    try {
        const FoundItem =await prisma.found.findUnique({
            where:{id:parseInt(params.id)}
        })
        if (!FoundItem)
            return nextResponse.json(
                {error: "Lost item not found"},
                {status:400}
            );

        await prisma.found.delete({
            where:{id: FoundItem.id}
        })
        return NextResponse.json({message:"Lost Item Deleted Successfully", status: 201});

    }catch (error){
        console.error('Error delete lost item:', error);
        return NextResponse.json({ error: 'Failed to delete lost' }, { status: 500 });
    }
}
