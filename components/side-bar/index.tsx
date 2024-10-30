"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarComponent = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home", id: "1" },
    { href: "/location", label: "Location", id: "2" },
    { href: "/users", label: "Users", id: "3" },
    { href: "/notifications", label: "Notifications", id: "4" },
    { href: "/settings", label: "Settings", id: "5" },
  ];

  return (
    <div className="w-64 border-r border-gray-200 bg-white shadow-lg">
      <div className="py-4 px-6 mb-6">
        <Image
          src="/images/logo.svg"
          alt="Logo Name"
          width={200}
          height={100}
        />
      </div>

      <div className="mb-10 px-3">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`flex items-center px-6 py-2.5 mb-3 ${
                isActive
                  ? "bg-blue-700 text-white rounded"
                  : "hover:text-white hover:bg-blue-700 rounded"
              } group`}
            >
              <svg
                className={`h-5 w-5 mr-2 ${
                  isActive ? "text-white" : "text-white group-hover:text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
