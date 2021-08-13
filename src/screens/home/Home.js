
import React from 'react';
import { Route ,Switch } from 'react-router-dom';
import Details from './Details';
import UpcomingMovies from './UpcomingMovies';

class Home extends React.Component{
    render(){
        return(
            <Switch>
                <Route  exact path="/" component={UpcomingMovies}/>
                <Route  exact path="/details/:id" component={Details} /> 
            </Switch>
        )
    }
}

export default Home;
