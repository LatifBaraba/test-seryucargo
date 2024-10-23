import { useQuery } from 'react-query'
import { getListNowPlaying, getListTopRated } from '../api'
import Card from '../../../components/ui/Card'

const TopRated = () => {
    const { data, isLoading } = useQuery(['list-top-rated'], () => getListTopRated(), {
        onSuccess: data => {
            console.log(data)
        },
    })
    return (
        <>
            <div className='flex flex-col gap-6'>
                <h2 className='text-5xl font-semibold'>Top Rated</h2>
            </div>
            <div className='flex flex-wrap gap-4'>
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

export default TopRated
