import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayout: React.FC = () => {

  return (
    <div 
      className="min-h-screen w-full font-inter"
    >
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Outlet />
      </main>
    </div>
  )
}