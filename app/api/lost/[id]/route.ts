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
        const { lost_name, category, description, location, email, phone, date } = await request.json();
        const lostItem =await prisma.lost.findUnique({
            where:{id:parseInt(params.id)}
        })
        if (!lostItem)
            return nextResponse.json(
                {error: "Lost item not found"},
                {status:400}
            );
        const UpdateLostItem =await prisma.lost.update({
            where:{id: lostItem.id},
            data:{
                lost_name,
                category,
                description,
                location,
                email,
                phone,
                date: new Date(date).toISOString(),
            },
        });
        return NextResponse.json({lostItem, message:"Lost Item Updated Successfully", status: 201});
    }catch (error){
        console.error('Error updating lost item:', error);
        return NextResponse.json({ error: 'Failed to update lost' }, { status: 500 });
    }

}

export async function DELETE(request:NextRequest,
                             {params}:{params:{id:string}}
){
    try {
        const lostItem =await prisma.lost.findUnique({
            where:{id:parseInt(params.id)}
        })
        if (!lostItem)
            return nextResponse.json(
                {error: "Lost item not found"},
                {status:400}
            );

        await prisma.lost.delete({
            where:{id: lostItem.id}
        })
        return NextResponse.json({message:"Lost Item Deleted Successfully", status: 201});

    }catch (error){
        console.error('Error delete lost item:', error);
        return NextResponse.json({ error: 'Failed to delete lost' }, { status: 500 });
    }
}
