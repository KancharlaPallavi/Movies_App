import React from 'react';
import Header from '../../common/header/Header';
import './UpcomingMovies.css';

class UpcomingMovies extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="heading">Upcoming Movies</div> 
            </div>
        )
    }
}

export default UpcomingMovies;
