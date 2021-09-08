import React,{useEffect,useState} from 'react'
import {api_key, image_url} from '../../Constants/Constants'
import './RowPost.css'
import axios from 'axios'
import ReactPlayer from 'react-player'

// import { Carousel, CarouselItem } from 'react-bootstrap'


export default function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState()
    
    const options={
        playing:true,
        loop:true,
        controls:true,
        volume:0.2
    }


    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        }).catch(err=>{
            // alert("network error")
        })
       
    }, [])
    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
            console.log(response.data.results)
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
            else{
                console.log("Array emply");
            }

        })
    }
    return (
      
        <div className="row">
        
            <h1>{props.title}</h1>
            
            <div className="posters">
                {movies.map((obj,key)=>
                 <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall? "smallPoster":"poster"} src={`${image_url+obj.backdrop_path}`} alt="" />
                )}
            </div>
          
        <div>
            
            { urlId && <ReactPlayer 
                controls={true} 
                width={'100%'}  
                playing={true} 
                url={`https://www.youtube.com/watch?v=${urlId.key}`}/>} 
        </div>
           
        </div>
    )
}
