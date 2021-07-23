import React from 'react';
import './Header.css';
import logo from 'C:/Users/Tej/Desktop/movies-app/src/assests/logo.svg';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}
export default Header;