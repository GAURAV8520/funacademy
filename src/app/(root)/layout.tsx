import HomeNav from '@/components/HomeNav'
import Sidebar from '@/components/sidebar'
import React, { ReactNode } from 'react'

function layout({ children }: {children: ReactNode }) {
  return (
    <main>
        <HomeNav/>
        <Sidebar/>
        
        {children}
    </main>
  )
}

export default layout
