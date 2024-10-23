import { useQuery } from 'react-query'
import { getListNowPlaying } from '../api'
import Card from '../../../components/ui/Card'

const NowPlaying = () => {
    const { data, isLoading } = useQuery(['list-now-playing'], () => getListNowPlaying(), {
        onSuccess: data => {
            console.log(data)
        },
    })
    return (
        <>
            <div className='flex flex-col gap-6'>
                <h2 className='text-5xl font-semibold'>Now Playing</h2>
            </div>
            <div className='flex overflow-auto w-full gap-6 py-4'>
                {!isLoading &&
                    data.results.map((item, idx) => {
                        return (
                            <Card
                                key={idx}
                                origina_title={item.original_title}
                                poster_path={item.poster_path}
                                release_date={item.release_date}
                            />
                        )
                    })}
            </div>
        </>
    )
}

export default NowPlaying
