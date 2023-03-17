import { useState } from "react";
import { useEffect } from "react";
import MovieList from './MovieList'
import axios from 'axios';
function Home(){
    const [movieListArr,setMovieListArr]=useState([]);
    const sendReq = ()=>{
        const serverURL='https://movies-library-production-1603.up.railway.app/trending'
        axios(serverURL)
        .then((res)=>{
            setMovieListArr(res.data);
        })
        
    }
    useEffect(()=>{
        sendReq();
    },[]);
    return(
        <>
        <MovieList movieListArr={movieListArr} />
        </>
    )
}
export default Home;