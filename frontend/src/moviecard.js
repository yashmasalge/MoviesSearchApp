import React from "react";
import ReactDOM from "react-dom";

export default function MovieCard({movie}){
    return(
        <div className = "card" >
                        <img className = "card--img"
                        src  ={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt = {movie.title + ' poster'}
                        />
                        <div className = "card--content card-desc">
                            <h3 className = "card--title">{movie.title}</h3>
                            <p className = "card--desc"><small className = "card--desc">RELEASE DATE: {movie.release_date}</small></p>
                            <p className = "card--desc"><small className = "card--desc">RATING: {movie.vote_average}</small></p>
                            <p className = "card--desc">{movie.overview}</p>
                        </div>
                    </div>
    )
}