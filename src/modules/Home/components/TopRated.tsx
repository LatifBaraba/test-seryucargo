import { useQuery } from 'react-query'
import { getListTopRated } from '../api'
import Card from '../../../components/ui/Card'
import { Key } from 'react'
import HeaderTitle from '../../../components/ui/HeaderTitle'

interface dataInterface {
    id: number
    original_title: string
    poster_path: string
    release_date: Date
}

const TopRated = () => {
    const { data, isLoading } = useQuery(['list-top-rated'], () => getListTopRated(), {
        onSuccess: data => {
            console.log(data)
        },
    })
    return (
        <>
            <div className='flex flex-col gap-6'>
                <HeaderTitle title='Top Rated' />
            </div>
            <div className='flex flex-wrap gap-6'>
                {!isLoading &&
                    data.results.map((item: dataInterface, idx: Key | null | undefined) => {
                        return (
                            <Card
                                key={idx}
                                movieId={item.id}
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
