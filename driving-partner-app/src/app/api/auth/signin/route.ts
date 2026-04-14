import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

// sign in route handler
export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await prisma.user.findUnique({
            where: { email },
        });

        // check user exists
        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        // verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        return NextResponse.json({
            message: 'User signed in succesfully',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        }, { status: 201 });
    }
    catch (error) {
        console.error('Sign-in Error:', error);
        return NextResponse.json({ error: 'Something went wrong, please try again.' }, { status: 500 });
    }

}