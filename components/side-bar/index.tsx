'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBell, FaHome, FaWhmcs } from 'react-icons/fa';
import { FaArrowTrendUp, FaLocationDot } from 'react-icons/fa6';

const SidebarComponent = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home', id: '1', icon: <FaHome /> },
    { href: '/location', label: 'Location', id: '2', icon: <FaLocationDot /> },
    { href: '/users', label: 'Top Stories', id: '3', icon: <FaArrowTrendUp /> },
    {
      href: '/notifications',
      label: 'Notifications',
      id: '4',
      icon: <FaBell />,
    },
    { href: '/settings', label: 'Settings', id: '5', icon: <FaWhmcs /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="py-4 px-6 mb-6">
        <Image
          src="/images/logo.svg"
          alt="Logo Name"
          width={200}
          height={100}
        />
      </div>

      <div className="mb-10 px-3">
        {links.map(link => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`flex items-center px-6 py-2.5 mb-3 ${
                isActive
                  ? 'bg-blue-700 text-white rounded'
                  : 'text-gray-500 hover:text-white hover:bg-blue-700 rounded'
              } group`}
            >
              {link.icon}
              <span className="ml-2">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
