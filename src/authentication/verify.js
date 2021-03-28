import React,{Component} from 'react'
import fire from '../config/fire';
import Home from '../Home/home';
import Auth from './authentication';
class Verify extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            user: {}
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
            else{
                this.setState({user : null})
            }
        })
    }
    render()         {
        return (
            <div>
                {this.state.user ? (<Home/>) : (<Auth/>)}
            </div>
        )
    }

}

export default Verify
