import dayjs from 'dayjs'
import { Bookmark, Heart } from 'lucide-react'

interface CardProps {
    origina_title: string
    poster_path: string
    release_date: Date
}

const Card = ({ origina_title, poster_path, release_date }: CardProps) => {
    console.log(origina_title)

    return (
        <div className='flex flex-col bg-slate-900 rounded-xl w-[200px] min-w-[200px] h-[350px] overflow-hidden'>
            <div className='relative min-h-[60%]'>
                <img className='overflow-hidden h-full w-[200px] object-cover' src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                <div className='absolute right-2 bottom-2 flex gap-2'>
                    <Bookmark className='' />
                    <Heart />
                </div>
            </div>
            <div className='flex flex-col p-2 px-4 gap-1'>
                <h2 className='font-bold text-lg text-nowrap truncate text-[#B6B6B6]'>{origina_title}</h2>
                <span className='text-xs font-normal text-[#828282]'>{dayjs(release_date).format('YYYY')}</span>
            </div>
        </div>
    )
}

export default Card
