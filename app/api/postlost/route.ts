import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const { lost_name, category, description, location, email, phone, date } = await request.json();
        // console.log('Request body:', { lost_name, category, description, location, email, phone, date });

        const NewLost = await prisma.lost.create({
            data: {
                lost_name,
                category,
                description,
                location,
                email,
                phone,
                date: new Date(date).toISOString(),
            },
        });

        return NextResponse.json(NewLost, { status: 201 });
    } catch (error) {
        console.error('Error creating lost item:', error);
        return NextResponse.json({ error: 'Failed to create lost' }, { status: 500 });
    }
}
