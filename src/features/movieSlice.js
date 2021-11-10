import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../common/apis/movieApi'
import { APIkey } from '../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=movie`)
    return response.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=series`)
    return response.data
})
export const fetchAsyncShowsOrMovieDetails = createAsyncThunk('movies/fetchAsyncShowsOrMovieDetails',
    async (id) => {
        const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&plot=full`)
        return response.data
    })

const initialState = {
    movies: {},
    shows: {},
    ShowsOrMovieDetails:{}
}

export const counterSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeShowsOrMovieDetails: (state) => {
            state.ShowsOrMovieDetails = {}
        },
    },
    extraReducers: {
        // [fetchAsyncMovies.pending]: () => {
        //     console.log('pending')
        // },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('succefully')
            return { ...state, movies: payload }
        },
        // [fetchAsyncMovies.rejected]: () => {
        //     console.log('rejected')
        // },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('succefully')
            return { ...state, shows: payload }
        },
        [fetchAsyncShowsOrMovieDetails.fulfilled]: (state, { payload }) => {
            console.log('succefully')
            return { ...state, ShowsOrMovieDetails: payload }
        },
    }
})

export const { removeShowsOrMovieDetails } = counterSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getShowsOrMoviesDetail = (state) => state.movies.ShowsOrMovieDetails
export default counterSlice.reducer