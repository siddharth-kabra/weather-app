import Image from 'next/image';

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
          <a
            key={link.id}
            href={link.href}
            className="flex items-center px-6 py-2.5 text-white hover:text-white/[0.5] group"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
