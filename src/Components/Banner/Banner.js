import React, { useState } from 'react'
import './Banner.css'
import {api_key,image_url} from '../../Constants/Constants'
import { useEffect } from 'react'
import axios from '../../axios'

export default function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then(response=>{
            console.log(response.data.results[3])
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
        })
    }, [])
    return (
        <div className="banner" style={{backgroundImage:`url(${movie? image_url+movie.backdrop_path:""})`}}>
            <div className="content">
                <h1 className="title">{movie?movie.title:""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="discription">{movie?movie.overview:""}</h1>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}
