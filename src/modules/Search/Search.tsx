import { useQuery } from 'react-query'
import { Key, useEffect } from 'react'
import Card from '../../components/ui/Card'
import HeaderTitle from '../../components/ui/HeaderTitle'
import { getSearchMovie } from './api'
import { useSearch } from '../../contexts/Search'

interface dataInterface {
    id: number
    original_title: string
    poster_path: string
    release_date: Date
}

const Search = () => {
    const { search, debouncedSearch } = useSearch()

    const { data, refetch, isFetching } = useQuery(['list-search'], () => getSearchMovie({ search: search }), {
        onSuccess: data => {
            console.log(data)
        },
    })

    useEffect(() => {
        refetch()
    }, [debouncedSearch])

    return (
        <>
            <div className='flex flex-col gap-6 my-10'>
                <HeaderTitle title='Search' />
            </div>
            <div className='flex flex-wrap gap-6 justify-center'>
                {!isFetching &&
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

export default Search
