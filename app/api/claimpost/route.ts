import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const { claim, feature, date } = await request.json();
        // const body = await request.json();
        console.log(request.json());
        const NewClaim = await prisma.claim.create({
            data: {
                claim,
                feature,
                date: new Date(date).toISOString(),
                // claim: body.claim,
                // feature: body.feature,
                // date: new Date(body.date), // Ensure the date is in a valid format
            },
        });
        console.log(NewClaim);
        return NextResponse.json(NewClaim, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create claim' }, { status: 500 });
    }
}
