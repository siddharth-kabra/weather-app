import Image from 'next/image';
import Link from 'next/link';

const SidebarComponent = () => {
  const links = [
    { href: '/', label: 'Home', id: '1' },
    { href: '/', label: 'Location', id: '2' },
    { href: '/', label: 'Users', id: '3' },
    { href: '/', label: 'Notifications', id: '4' },
    { href: '/', label: 'Settings', id: '5' },
  ];

  return (
    <div className="w-64 border-r border-gray-200 bg-blue-500">
      <div className="py-4 px-6 mb-6">
        <Image src="images/logo.svg" alt="Logo Name" width={200} height={100} />
      </div>

      <div className="mb-10">
        {links.map(link => (
          <Link
            key={link.id}
            href={link.href}
            className="flex items-center px-6 py-2.5 text-white hover:text-white/[0.5] group"
          >
            <svg className="h-5 w-5 text-white mr-2 group-hover:text-white/[0.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
