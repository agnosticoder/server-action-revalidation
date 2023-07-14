import Link from 'next/link';

const UnProtectedLinks = () => {
    return (
        <div>
            <div className="text-sm">Un-protected Links</div>
            <div className="h-10 bg-gray-300 border-2 border-gray-500 flex items-center justify-evenly">
                <Link href='/' className="w-5 h-5 bg-orange-600"></Link>
                <Link href='/page2' className="w-5 h-5 bg-violet-600"></Link>
            </div>
        </div>
    );
};

export default UnProtectedLinks;
