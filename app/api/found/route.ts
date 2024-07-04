import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const { found_name, category, description, location, email, phone, date, claim_process } = await request.json();
        // console.log('Request body:', { lost_name, category, description, location, email, phone, date });

        const NewFound = await prisma.found.create({
            data: {
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

        return NextResponse.json(NewFound, { status: 201 });
    } catch (error) {
        console.error('Error creating lost item:', error);
        return NextResponse.json({ error: 'Failed to create lost' }, { status: 500 });
    }
}

export async function GET (request:NextRequest){
    const claims =await prisma.found.findMany();
    return NextResponse.json(claims);
}
