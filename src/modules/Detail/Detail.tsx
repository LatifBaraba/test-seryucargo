import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from './api'
import Recommendations from './components/Recommendations'
import DetailContent from './components/DetailContent'
import { useEffect } from 'react'

const Detail = () => {
    const { movieId } = useParams()

    const { data, refetch, isFetching } = useQuery(['detail'], () => getMovieDetail({ id: movieId }), {
        onSuccess: data => {
            console.log(data, 'dTail')
        },
    })

    useEffect(() => {
        refetch()
    }, [movieId])

    return (
        !isFetching ? (
            <div className='flex flex-col gap-6'>
                <DetailContent {...data} />
                <Recommendations />
            </div>
        ) : (<></>)
    )
}

export default Detail
