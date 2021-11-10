import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchAsyncShowsOrMovieDetails, getShowsOrMoviesDetail, removeShowsOrMovieDetails } from '../../features/movieSlice'
import './movieDetails.scss'



const MovieDetails = () => {
    const { imdbID } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getShowsOrMoviesDetail)
    useEffect(() => {
        dispatch(fetchAsyncShowsOrMovieDetails(imdbID))
        return () => {
            dispatch(removeShowsOrMovieDetails())
        }
    }, [dispatch, imdbID])
    return (
        <div className='detail-block'>
            {Object.keys(data).length === 0 ? <div>
                Load...
            </div>
            :<div>
                <h1>{data.Title}</h1>
                <span>IMDB Rating : {data.imdbRating}</span>
                <span>IMDB Votes : {data.imdbVotes}</span>
                <span>Runtime : {data.Runtime}</span>
                <span>Year : {data.Year}</span>
                <div className='plot'>
                    {data.Plot}
                </div>
                <div className='info-item'>
                    <h4>Director</h4> <span className='span'>{data.Director}</span>
                </div>
             
                <div className='info-item'>
                    <h4>Generes </h4> <span className='span'>{data.Genre}</span>
                </div>
                <div className='info-item'>
                    <h4>Stars</h4> <span className='span'>{data.Actors}</span>
                </div>
                <div className='info-item'>
                    <h4>Languages </h4>  <span className='span'>{data.Language}</span>
                </div>
            </div>}
            <div>
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    )
}

export default MovieDetails
