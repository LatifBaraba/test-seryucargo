import { useSearch } from '../../contexts/Search'
import Search from '../../modules/Search/Search'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const { isSearch } = useSearch()
    const location = useLocation()

    return (
        <div className='flex flex-col'>
            {/* Header */}
            <Header />
            {/* Content */}
            <div className='px-[4%] md:px-[10%] relative'>{isSearch && location.pathname === '/' ? <Search /> : <Outlet />}</div>
            {/* Footer */}
        </div>
    )
}

export default MainLayout
