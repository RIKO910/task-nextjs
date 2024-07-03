// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma'; // Adjust the path to your prisma setup

export const GET = async (req: NextRequest) => {
    try {
        const users = await prisma.user.findMany();
        console.log(users);
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Fetching users failed:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};

export const POST = async (req: NextRequest) => {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
};
