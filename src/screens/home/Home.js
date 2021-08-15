
import React from 'react';
import { Route ,Switch } from 'react-router-dom';
import BookShow from '../BookShow/BookShow';
import Details from './Details';
import UpcomingMovies from './UpcomingMovies';

class Home extends React.Component{
    render(){
        return(
            <Switch>
                <Route  exact path="/" component={UpcomingMovies}/>
                <Route  exact path="/details/:id" component={Details} />
                <Route exact path="/bookshow" component={BookShow} /> 
            </Switch>
        )
    }
}

export default Home;
