'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

import { api } from '../../../utils/axios'

export const getSearchMovie = ({ search }: { search: string | undefined }) => {
    return api.get(`/search/movie?query=${search}&language=en-US&page=1&adult=true`).then(res => res?.data)
}
