import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from './api'
import Recommendations from './components/Recommendations'
import DetailContent from './components/DetailContent'

const Detail = () => {
    const { movieId } = useParams()

    const { data, isLoading } = useQuery(['detail'], () => getMovieDetail({ id: movieId }), {
        onSuccess: data => {
            console.log(data, 'dTail')
        },
    })

    return (
        !isLoading && (
            <div className='flex flex-col gap-6'>
                <DetailContent {...data} />
                <Recommendations />
            </div>
        )
    )
}

export default Detail
