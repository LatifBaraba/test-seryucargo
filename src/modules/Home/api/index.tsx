import { api } from '../../../utils/axios'

export const getListNowPlaying = () => {
    return api.get('/movie/now_playing?language=en-US&page=1&adult=true').then(res => res?.data)
}
export const getListTopRated = () => {
    return api
        .get(
            '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
        )
        .then(res => res?.data)
}
