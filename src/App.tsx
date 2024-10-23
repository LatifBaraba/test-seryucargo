import { Suspense } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeData } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

import LayoutSplashScreen from './components/layouts/SplashScreen'
import { SearchProvider } from './contexts/Search'

const router = createBrowserRouter(routeData)
const queryClient = new QueryClient()

function App() {
    return (
        <>
            <Suspense fallback={<LayoutSplashScreen />}>
                <QueryClientProvider client={queryClient}>
                    <SearchProvider>
                        <RouterProvider router={router} />
                    </SearchProvider>
                </QueryClientProvider>
            </Suspense>
        </>
    )
}

export default App
