// 

// import HomeNav from '@/components/HomeNav';
// import Sidebar from '@/components/sidebar';
// import React, { ReactNode } from 'react';

// function Layout({ children }: { children: ReactNode }) {
//   return (
//     <main className="relative">
      
        
//           <HomeNav />
//         <div className='flex'>
//         <Sidebar />
//         <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
//         <div className="w-full">{children}</div>
//       </section>

//         </div>
//     </main>
//   );
// }

// export default Layout;



import HomeNav from '@/components/HomeNav';
import Sidebar from '@/components/sidebar';
import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <HomeNav />
      </div>

      <div className="flex pt-[64px]"> {/* Adjust pt value based on your navbar height */}
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-[64px] h-[calc(100vh-64px)] max-sm:hidden">
          <Sidebar />
        </div>

        {/* Main Content */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14 ml-[264px] max-sm:ml-0"> {/* 264px matches your sidebar width */}
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Layout;
