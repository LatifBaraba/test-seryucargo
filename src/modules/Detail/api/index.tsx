import { api } from '../../../utils/axios'

export const getMovieDetail = ({ id }: { id?: number | string }) => {
    return api.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`).then(res => res?.data)
}

export const getRecommendationsDetail = ({ id }: { id?: number | string }) => {
    return api.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`).then(res => res?.data)
}
