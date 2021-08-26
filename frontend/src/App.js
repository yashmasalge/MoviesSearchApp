//API Key : c46ad77b1f358053a21273655ea4b200
//API Request : https://api.themoviedb.org/3/movie/550?api_key=c46ad77b1f358053a21273655ea4b200
//API ReadAccess Token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZhZDc3YjFmMzU4MDUzYTIxMjczNjU1ZWE0YjIwMCIsInN1YiI6IjYwZTQ2MWYzZGIxNTRmMDA0NzAxZDNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19LQRhtFu5how-u2FQOwCFWlg-h_WBRKM7yJ65eS3rs 

import './App.css';
import SearchMovies from "./searchmovie";

function App() {
  return (
    <div className ="container">
    <h1 className = "title">React Movie Search</h1>
    <SearchMovies />
    </div>
  );
}

export default App;
