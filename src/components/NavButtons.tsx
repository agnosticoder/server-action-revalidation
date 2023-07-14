import { getUser } from '@/lib/user';
import NavButtonItem from './NavButtonItem';

const NavItems = async () => {
    const user = await getUser();

    return (
        <div>
            <div className="text-sm">Nav Buttons</div>
            <div className="w-20 h-10 bg-gray-300 border-2 border-gray-500 flex justify-center items-center">
                <NavButtonItem user={user}/>
            </div>
        </div>
    );
}

export default NavItems;