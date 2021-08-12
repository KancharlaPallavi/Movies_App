import React from 'react';
import ReleasedMovies from './ReleasedMovies';
import UpcomingMovies from './UpcomingMovies';

class Home extends React.Component{
    render(){
        return(
            <div>
                <UpcomingMovies/>
                <ReleasedMovies/>
            </div>
        )
    }
}

export default Home;
