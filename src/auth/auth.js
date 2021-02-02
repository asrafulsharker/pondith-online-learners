import React from 'react'

function auth() {
    return (
        <div>
            <div className="container">
                <a href="#">Join Session</a>
                <div className="col-md-6">
                    <p>Confirm your Presence</p>
                    <form >
                        <input type="text" name="text"  placeholder="Your Name"  required/>
                        <input type="tel" name="text"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  required placeholder="Phone Number"/>
                        <input type="email" name="email"  placeholder="Email"  required/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default auth;
