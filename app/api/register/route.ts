import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const { name, user_name, email, password, bio_information, age } = await req.json();

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                name,
                user_name,
                email,
                password: hashedPassword,
                bio_information,
                age: parseInt(age, 10),
            },
        });
        const token = `jwt-token-for`;
        return NextResponse.json({ data: newUser ,token}, { status: 201 });
    } catch (error) {
        console.error('User registration failed:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export const GET = () => NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });