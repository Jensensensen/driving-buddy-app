import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


// sign up route handler
export async function POST(request: Request) {
    try {
        const { name, email, password, role  } = await request.json();
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        // check user exists
        if (existingUser) {
            return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user in db
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role ?? 'LEARNER', // default to LEARNER if role is not provided
            },
        });

        return NextResponse.json({
            message: 'Account created successfully',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        }, { status: 201 });
    }
    catch (error) {
        console.error('Error during sign up:', error);
        return NextResponse.json({ error: 'Something went wrong, please try again.' }, { status: 500 });
    }

}