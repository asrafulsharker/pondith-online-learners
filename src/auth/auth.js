import React from 'react'
import Auth1 from '../images/auth1.png';
function auth() {
    return (
        <div>
            <div className="container">
                <a href="#">Join Session</a>
                    <div className="row">
                    <div className="col-md-6">
                    <p>Confirm your Presence</p>
                    <form >
                        <input type="text" name="text"  placeholder="Your Name"  required/>
                        <input type="tel" name="text"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  required placeholder="Phone Number"/>
                        <input type="email" name="email"  placeholder="Email"  required/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src={Auth1}/>
                </div>
                    </div>
            </div>
        </div>
    )
}

export default auth;
