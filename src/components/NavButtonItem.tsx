'use client'

import { loginAction, logoutAction } from '@/app/_actions';
import { useTransition } from 'react';

const NavButtonItem = ({user}: {user: string | null}) => {
    const [, setTransition] = useTransition();
    console.log('user', user);

    return (
        <div>
            {user ? (
                <button onClick={() => setTransition(() => logoutAction())}>
                    Logout
                </button>
            ) : (
                <button onClick={() => setTransition(() => loginAction())}>Login</button>
            )}
        </div>
    );
}

export default NavButtonItem;