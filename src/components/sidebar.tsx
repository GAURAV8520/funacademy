
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Sidebar() {
  const sidebarLinks = [
    { imgURL: '/home.png', route: '/home', label: 'Home' },
    { imgURL: '/study.png', route: '/study', label: 'Study' },
    { imgURL: '/batches.png', route: '/batches', label: 'Batches' },
    { imgURL: '/test.png', route: '/mocktest', label: 'Mocktest' },
    { imgURL: '/paper.png', route: '/pyq', label: 'PYQ' },
    { imgURL: '/library.png', route: '/library', label: 'Library' },
    { imgURL: '/phone-call.png', route: '/contact-us', label: 'Contact Us' },
  ];

  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col bg-gray-50 p-6 text-black border border-gray-300  max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.slice(0, showMore ? sidebarLinks.length : 5).map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg transition hover:bg-gray-200',
                { 'bg-blue-100 text-blue-500': isActive }
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold">{link.label}</p>
            </Link>
          );
        })}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex gap-4 items-center p-4 rounded-lg transition hover:bg-gray-200 text-gray-500"
        >
          
          <Image
            src="/arrow-down.png"
            alt="Toggle"
            width={24}
            height={24}
            className={showMore ? 'rotate-180 transition' : 'transition'}
          />
          <p className="text-lg font-semibold">
            {showMore ? 'Show Less' : 'See More'}
          </p>
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
