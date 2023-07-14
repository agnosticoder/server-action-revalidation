import { getUser } from '@/lib/user';
import NavButtons from './NavButtons';
import ProtectedLinks from './ProtectedLinks';
import UnProtectedLinks from './UnProtectedLinks';

const Navbar = async () => {
    const user = await getUser();

    return (
        <div>
            Navbar
            <div className="px-5 h-20 bg-green-300 border-2 border-green-400 flex items-center justify-between">
                <div className="flex gap-4">
                    {user && <ProtectedLinks />}
                    <UnProtectedLinks />
                </div>
                <NavButtons />
            </div>
        </div>
    );
};

export default Navbar;
