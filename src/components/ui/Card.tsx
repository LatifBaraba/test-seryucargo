import { useLocalStorage } from '@react-hooks-library/core'
import dayjs from 'dayjs'
import { Bookmark, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    movieId: number
    origina_title: string
    poster_path: string
    release_date: Date
}

const Card = ({ origina_title, poster_path, release_date, movieId }: CardProps) => {
    const navigate = useNavigate()
    const [storageFav, setStorageFav] = useLocalStorage<object[]>('favorite', [])
    const [storageWatch, setStorageWatch] = useLocalStorage<object[]>('watchlist', [])

    const handleFavorite = ({ movieId }: { movieId: number }) => {
        const exist = storageFav.find(({ id }: any) => id == movieId)
        if (exist) {
            const filtered = storageFav.filter(({ id }: any) => id != movieId)
            console.log(filtered)
            setStorageFav([...filtered])
            return
        }
        setStorageFav([...storageFav, { id: movieId }])
    }

    const handleWatchlist = ({ movieId }: { movieId: number }) => {
        const exist = storageWatch.find(({ id }: any) => id == movieId)
        if (exist) {
            const filtered = storageWatch.filter(({ id }: any) => id != movieId)
            console.log(filtered)
            setStorageWatch([...filtered])
            return
        }
        setStorageWatch([...storageWatch, { id: movieId }])
    }

    return (
        <div className='flex flex-col bg-slate-900 hover:bg-slate-700 rounded-xl min-w-[150px] w-[150px] h-[300px] md:min-w-[200px] md:w-[200px] md:h-[350px] overflow-hidden group hover:scale-105 transition-transform'>
            <div className='relative min-h-[60%]'>
                <img className='overflow-hidden h-full w-[200px] object-cover' src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                <div className='absolute right-2 bottom-2 flex gap-2'>
                    <Bookmark
                        className={`cursor-pointer hover:text-blue-400 transition-colors z-10 ${
                            storageWatch.find(({ id }: any) => id === movieId) && 'text-blue-400'
                        }`}
                        onClick={() => handleWatchlist({ movieId })}
                    />
                    <Heart
                        className={`cursor-pointer hover:text-red-600 transition-colors z-10 ${
                            storageFav.find(({ id }: any) => id === movieId) && 'text-red-600'
                        }`}
                        onClick={() => handleFavorite({ movieId })}
                    />
                </div>
            </div>
            <div className='flex flex-col p-2 px-4 gap-1 cursor-pointer' onClick={() => navigate(`/movie/${movieId}`, { replace: true })}>
                <h2 className='font-bold text-lg text-nowrap truncate text-[#B6B6B6] group-hover:text-white transition-colors'>
                    {origina_title}
                </h2>
                <span className='text-xs font-normal text-[#828282] group-hover:text-white transition-colors'>
                    {dayjs(release_date).format('YYYY')}
                </span>
            </div>
        </div>
    )
}

export default Card
