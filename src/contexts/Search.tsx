import { createContext, useState, useEffect, FC, PropsWithChildren, useContext } from 'react'

export type SearchContextProps = {
    search?: string
    setSearch: (search: any) => void
    isSearch?: Boolean
    setIsSearch: (isSearch: any) => void
    handleClearSearch: () => void
}

export const initSearchContext: SearchContextProps = {
    search: undefined,
    setSearch: () => {},
    isSearch: false,
    setIsSearch: () => {},
    handleClearSearch: () => {},
}

const SearchContext = createContext<SearchContextProps>(initSearchContext)

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        search ? setIsSearch(true) : setIsSearch(false)
    }, [search])

    const handleClearSearch = () => {
        setSearch('')
        setIsSearch(false)
    }

    return <SearchContext.Provider value={{ search, setSearch, isSearch, setIsSearch, handleClearSearch }}>{children}</SearchContext.Provider>
}

const useSearch = () => useContext(SearchContext)

export { SearchContext, SearchProvider, useSearch }
