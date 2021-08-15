import React from 'react';
import './Header.css';
import logo from 'C:/Users/Tej/Desktop/movies-app/src/assests/logo.svg';
import Button from '@material-ui/core/Button';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          login: true
        };
        this.changeState = this.changeState.bind(this);
      }
      changeState = () => {
        this.setState({
          login: !this.state.login
        });
      };

    render(){
        const { login } = this.state;
        return(
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button variant="contained" style={{color:"black", float:"right"}} onClick={this.changeState} >
               {login ? "Login" : " Log Out"}</Button>
            </div>
        )
    }
}
export default Header;