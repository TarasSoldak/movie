import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movieSlice'
import MovieCard from '../movieCard/MovieCard'
import './movieListing.scss'


const MovieListing = () => {

    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllShows)

    const renderMovies =
        movies.Response === 'True'
            ? <div className='cart-flex'>
                {movies.Search.map((movie, i) => <div key={i} >
                    <MovieCard movie={movie} /></div>)}
            </div>
            : <div>
                <h3 style={{color:'red'}}>{movies.Error}</h3>
            </div>

    const renderShows =
        series.Response === 'True'
            ? <div className='cart-flex'>
                {series.Search.map((serie, i) => <div key={i} >
                    <MovieCard movie={serie} />
                </div>)}
            </div>
            : <div>
                <h3 style={{ color: 'red' }}>{series.Error}</h3>
            </div>

    return (
        <div>
            <div>
                <h2 className='h2'>Movies</h2>
               {renderMovies}
            </div>
            <div>
                <h2 className='h2'>Series</h2>
                {renderShows}
            </div>
        </div>
    )
}

export default MovieListing
