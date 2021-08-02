import React from 'react';
import MovieForm from './MovieForm';
import MoviesGridList from './MoviesGridList';
import ReleasedMovies from './ReleasedMovies';
import UpcomingMovies from './UpcomingMovies';

class Home extends React.Component{
    render(){
        return(
            <div>
                <UpcomingMovies/>
                <MoviesGridList/>
                <div style={{display:'flex'}}>
                <div style={{width:"74%"}}>
                <ReleasedMovies/>
                </div>
                <div style={{width:"26%"}}>
                <MovieForm/>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;
