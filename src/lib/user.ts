import { cookies } from 'next/headers';
import { NAME } from './config';

export const getUser = async () => {
    const data = cookies().get(NAME)?.value || '';
    console.log('data', data);
    if(data === 'user') return data;
    return null;
}