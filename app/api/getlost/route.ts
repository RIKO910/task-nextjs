import {NextRequest, NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET (request:NextRequest){
    const claims =await prisma.lost.findMany();
    return NextResponse.json(claims);
}