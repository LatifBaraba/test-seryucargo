import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            {/* Header */}
            <Header />
            {/* Content */}
            <Outlet />
            {/* Footer */}
        </div>
    )
}

export default MainLayout
