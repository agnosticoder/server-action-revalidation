'use server';

import { IN_PROD, NAME } from '@/lib/config';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const loginAction = async () => {
    const user = 'user';

    cookies().set({
        name: NAME,
        value: user,
        secure: IN_PROD,
        httpOnly: IN_PROD,
        maxAge: 1000 * 60 * 60 * 2,
    });

    revalidatePath('/');
    redirect('/page4')
};

export const logoutAction = async () => {
    cookies().set({
        name: NAME,
        value: '',
        expires: new Date('2016-10-05'),
        path: '/',
    });
    revalidatePath('/');
    redirect('/page1');
}