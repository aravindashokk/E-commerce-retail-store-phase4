import React from "react";
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import signup from '../../assets/images/signup.png'
import Authentication from "../authentication";
function Forgotpassword() {
    return (
        <Router>
        <Switch>
        <Route exact path='/forgotpassword'>
        {/* forgot password section */}
        <div className="d-flex flex-direction-row justify-around forgotPassword-section fade">
            <div className="forgotPassword-container">
                <div className="d-flex justify-center forgotPassword-header font-oswald">Password Assistance</div>
                <form className="d-flex flex-direction-column w-100" method="post" encType="text/html">
                <div class="d-flex flex-direction-column">
                    <input type="email" id="email" name="email" placeholder="Username / Email"></input>
                </div>
                    <div className="d-flex flex-direction-column align-items-center">
                        <button className="btn continue-btn" type="submit">Continue</button>
                        <br />
                        <p>Changed your mind? <Link className='link-style'
                            to="/authentication">Click</Link> here</p>
                    </div>
                </form>
            </div>
            <div className="image-container">
                <img src={signup} width="550px" height="500px" alt="registrationimage"/>
            </div>
        </div>
        </Route>
        <Route exact path='/authentication'><Authentication/></Route>
        </Switch>
        </Router>
    )
}

export default Forgotpassword;