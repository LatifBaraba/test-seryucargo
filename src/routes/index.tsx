import { lazy } from 'react'
import MainLayout from '../components/layouts/MainLayout'
const Home = lazy(() => import('../modules/Home/Home'))

export const routeData = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]