import NowPlaying from './components/NowPlaying'
import TopRated from './components/TopRated'

const Home = () => {
    return (
        <div className='m-10 flex flex-col gap-10'>
            <NowPlaying />
            <TopRated />
        </div>
    )
}

export default Home
