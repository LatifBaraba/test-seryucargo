import { X } from 'lucide-react'
import { useSearch } from '../../contexts/Search'

const SearchBar = () => {
    const { search, setSearch, handleClearSearch } = useSearch()

    return (
        <div className='relative text-gray-600 flex items-center'>
            <input
                className='border-2 border-gray-300 bg-black h-10 px-5 rounded-lg text-sm focus:outline-none text-white'
                name='search'
                placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button className='absolute right-2 top-[20%]' onClick={() => handleClearSearch()}>
                <X className='text-white' />
            </button>
        </div>
    )
}

export default SearchBar
