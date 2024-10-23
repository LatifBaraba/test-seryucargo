import { Suspense } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeData } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

import LayoutSplashScreen from './components/layouts/SplashScreen'

const router = createBrowserRouter(routeData)
const queryClient = new QueryClient()

function App() {
    return (
        <>
            <Suspense fallback={<LayoutSplashScreen />}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </Suspense>
        </>
    )
}

export default App
