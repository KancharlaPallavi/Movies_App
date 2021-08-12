import React from 'react';
import Header from '../../common/header/Header';
import MoviesGridList from './MoviesGridList';
import './UpcomingMovies.css';

class UpcomingMovies extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="heading">Upcoming Movies</div> 
                <MoviesGridList/>
            </div>
        )
    }
}

export default UpcomingMovies;
