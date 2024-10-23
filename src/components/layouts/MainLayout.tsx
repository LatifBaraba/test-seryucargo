import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            {/* Header */}
            <Header />
            {/* Content */}
            <div className='px-[4%] md:px-[10%] relative'>
                <Outlet />
            </div>
            {/* Footer */}
        </div>
    )
}

export default MainLayout
