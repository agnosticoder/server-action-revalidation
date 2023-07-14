import Link from 'next/link';
import UnProtected from './UnProtectedLinks';

const ProtectedLinks = () => {
    return (
        <div>
            <div className="text-sm">Protected Links</div>
            <div className="h-10 bg-gray-300 border-2 border-gray-500 flex items-center justify-evenly">
                <Link href="/page3" className="w-5 h-5 bg-red-600"></Link>
                <Link href="/page4" className="w-5 h-5 bg-amber-600"></Link>
            </div>
        </div>
    );
};

export default ProtectedLinks;
