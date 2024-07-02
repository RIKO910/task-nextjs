// pages/api/users/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; // Adjust the path to your prisma setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Fetch all users
        try {
            const users = await prisma.user.findMany();
            return res.status(200).json(users);
        } catch (error) {
            console.error('Fetching users failed:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        return res.status(406).json({ message: 'Method Not Allowed' });
    }
}
