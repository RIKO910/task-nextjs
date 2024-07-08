// pages/api/found.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const { found_name, category, description, location, email, phone, date, claim_process, userId } = await req.json();

        if (!userId) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        // Validate that the user exists
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        console.log(userId);

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const newFoundItem = await prisma.found.create({
            data: {
                found_name,
                category,
                description,
                location,
                email,
                phone,
                date: new Date(date),
                claim_process,
                user: {
                    connect: { id: userId },
                },
            },
        });


        return NextResponse.json(newFoundItem, { status: 201 });
    } catch (error) {
        console.error('Error creating found item:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

// export const GET = () => NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
export async function GET (request:NextRequest){
    const claims =await prisma.found.findMany();
    return NextResponse.json(claims);
}