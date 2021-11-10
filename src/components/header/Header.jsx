import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import  {Link}  from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice'
import user from '../../images/i.png'
import './header.scss'

const Header = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const handlerSubmit =(e)=>{
        if(term==='')return alert('Please enter search term!')
        e.preventDefault()
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('')
    }
    return (
        <div className='header'>
            <Link  to='/' >
                <div className='logo'>
                    <h3>Movie App</h3>
                </div>
            </Link>
            <div className="serch" >
                <form onSubmit={handlerSubmit}>
                    <input type="text" value={term} placeholder='Search movie or show' onChange={(e)=>setTerm(e.target.value)}/>
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="img" />
            </div>
        </div>
    )
}

export default Header
