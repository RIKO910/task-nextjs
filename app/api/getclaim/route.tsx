import {NextRequest, NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET (request:NextRequest){
    const claims =await prisma.claim.findMany();
    return NextResponse.json(claims);
}