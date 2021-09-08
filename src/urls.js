import {api_key} from './Constants/Constants'

export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`;
export const ComedyMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`;
export const horrorMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`