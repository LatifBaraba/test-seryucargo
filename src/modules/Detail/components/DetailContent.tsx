import dayjs from 'dayjs'
import { Bookmark, Heart } from 'lucide-react'
import { minuteToDuration } from '../../../utils/duration'
import { trailingComma } from '../../../utils/trailling'

interface DetailProps {
    poster_path: string
    backdrop_path: string
    original_title: string
    release_date: Date
    genres: {
        id: number
        name: string
    }[]
    runtime: number
    vote_average: number
    overview: string
    tagline: string
}

const DetailContent = ({
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    genres,
    runtime,
    vote_average,
    overview,
    tagline,
}: DetailProps) => {

    return (
        <div className='w-full'>
            <img
                className='absolute top-0 left-0 w-screen object-cover h-[400px] -z-10'
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            />
            <div className='flex flex-col md:flex-row gap-6 my-10 justify-center md:justify-normal'>
                {/* Left Image */}
                <img className='max-w-52 m-auto md:m-0' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='' />
                {/* Right */}
                <div className='flex flex-col gap-4'>
                    {/* Header Title */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-wrap gap-2 text-center justify-center md:justify-normal'>
                            <h1 className='text-3xl font-bold'>{original_title}</h1>
                            <span className='text-3xl'>( {dayjs(release_date).format('YYYY')} )</span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 items-center'>
                            <span>{dayjs(release_date).format('MM/DD/YYYY')}</span>
                            <div className='size-1 rounded-full bg-white' />
                            {genres.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                            <div className='size-1 rounded-full bg-white' />
                            <span>{minuteToDuration({ minute: runtime })}</span>
                        </div>
                    </div>
                    {/* Desc */}
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-8 bg-white flex items-center justify-center'>
                                <span className='text-[#0EA5E9] font-extrabold text-xs'>{trailingComma({num: vote_average})}</span>
                            </div>
                            <span className='text-[8px] font-normal'>
                                User <br /> Score
                            </span>
                        </div>
                        <Bookmark
                            className='cursor-pointer hover:text-blue-400 transition-colors z-10'
                            onClick={() => console.log('inner')}
                        />
                        <Heart className='cursor-pointer hover:text-red-600 transition-colors z-10' />
                    </div>
                    {/* Quote */}
                    <span className='italic font-normal text-sm'>{tagline}</span>
                    {/* Overview */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm font-bold'>Overview</span>
                        <p className='text-sm'>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailContent
