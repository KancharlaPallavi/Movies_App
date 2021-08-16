
import React from 'react';
import { Route ,Switch } from 'react-router-dom';
import BookShow from '../BookShow/BookShow';
import Details from './Details';
import UpcomingMovies from './UpcomingMovies';
import Login from 'C:/Users/Tej/Desktop/movies-app/src/common/header/Login.js';

class Home extends React.Component{
    render(){
        return(
            <Switch>
                <Route  exact path="/" component={UpcomingMovies}/>
                <Route  exact path="/details/:id" component={Details} />
                <Route exact path="/bookshow" component={BookShow} /> 
                <Route exact path="/login" component={ Login } />
            </Switch>
        )
    }
}

export default Home;
