import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieCard from "./moviecard"


export default function SearchMovies() {

    const [query, setQuery] = useState('');

    const [movies , setMovies] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();


        //const url ="https://api.themoviedb.org/3/search/movie?api_key=c46ad77b1f358053a21273655ea4b200&language=en-US&query=${query}&include_adult=true";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c46ad77b1f358053a21273655ea4b200&language=en-US&query=${query}&page=1&include_adult=true`;
 try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
     } catch (err) {
            console.error(err);
     }	

    }


    return (
        <>
          
             <form className="form" onSubmit={searchMovies}>
                   <label className="label" htmlFor="query" >Movie Name</label>
                   <input className="input" type="text" name="query" placeholder="i.e Avengers Endgame"value={query} onChange={(e) => setQuery(e.target.value)} />
                   <button className="button" type="submit">Search</button>
             </form>
             <div className = "card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie = {movie} key = {movie.id} />
                ))}
                 </div>
        </>
    )
}
