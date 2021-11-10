import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.scss'

const MovieCard = ({ movie }) => {
   
    return (
        <div className='movie'>
            <Link to={`/movie/${movie.imdbID}`}>
                <div className='padding'>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className='card-info padding'>
                    <div>
                        {movie.Title}
                    </div>
                    <div>
                        {movie.Year}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
