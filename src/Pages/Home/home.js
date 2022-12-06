import React, { useEffect, useState} from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () =>
{
 //const [ popularMovies, setPopularMovies ] = useState([])
    // useEffect(() =>
    // {
    //     fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    //     .then(res=>res.json())
    //     .then(data=>console.log(data.results)))
    // },[])
    // const message = `Hello hi `;   // Calculates output
    // useEffect(() => {
    //   // Good!
    //   document.title = `Greetings to `; // Side-effect!
    // }, []);
    // return <div>{message}</div>;  
 
     const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
            {
                popularMovies.map(movie => (
                    // <span>{movie.original_title}</span>
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}></img>
                    </div>
                    <div className="posterImage_overlay">
                        <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                        <div className="posterImage_runtime">
                        {movie ? movie.release_date : ""}
                        <span className="posterImage_rating">
                        {movie ? movie.vote_average :""}
                      
                        <i class="fa-solid fa-star"></i> {" "}
                        
                        </span>
                        </div>
                        <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                    </div>
                    </Link>
                ))
            }
            </Carousel>
        </div>
        </>
    )
}
export default Home