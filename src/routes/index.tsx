import { lazy } from 'react'
import MainLayout from '../components/layouts/MainLayout'

const Home = lazy(() => import('../modules/Home/Home'))
const Detail = lazy(() => import('../modules/Detail/Detail'))
const Watchlist = lazy(() => import('../modules/Watchlist/Watchlist'))
const Favorite = lazy(() => import('../modules/Favorite/Favorite'))

export const routeData = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />,
            },
            {
                path: '/movie/:movieId',
                element: <Detail />,
            },
            {
                path: '/watchlist',
                element: <Watchlist />,
            },
            {
                path: '/favorite',
                element: <Favorite />,
            },
        ],
    },
]
