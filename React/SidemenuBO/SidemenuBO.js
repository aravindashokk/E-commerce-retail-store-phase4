import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Chat from '../chat/chat';


import RegisterIncident from '../registerIncident/registerIncident';
import SubscribeService from '../subscribeService/subscribeService';
import './SideMenuBar.css'
function SideMenuBar () {
    return (
        <Router>
            <div className="d-flex flex-direction-row container">
                <div className="font-oswald heading "> Hello User </div>
            </div>
            <div className="user-dashboard-container h-100 d-flex flex-direction-row">
                <div className="sideNav">
                    <ul className="d-fle flex-direction-column space-between">
                        <li className="sideNavItem " id="order">
                            <Link className="sideNav-link" name="products" to="/BO">Products</Link>
                        </li>
                        <li className="sideNavItem" id="deletepro" >
                            <Link className="sideNav-link" name="deletepro" to="/deletepro">Delete a product</Link>
                        </li>
                        <li className="sideNavItem" id="createAD" >
                            <Link className="sideNav-link" name="createAD" to="/CreateAD">Create an Advertisement</Link>
                        </li>
                        <li className="sideNavItem" id="deleteAD" >
                            <Link className="sideNav-link" name="deleteAD" to="/deleteAD">Delete an Advertisement</Link>
                        </li>
                        <li className="sideNavItem" id="chat">
                            <Link className="sideNav-link" name="chats" to="/Chat">Chat</Link>
                        </li>
                    </ul>
                </div>
                <section className='d-flex w-100 justify-center'>
            <Switch>
                <Route exact path='/deletepro'><deletepro/></Route>
                <Route exact path='/CreateAD'><CreateAD/></Route>
                <Route exact path='/BO'><PlaceOrder/></Route>
                <Route exact path='/deleteAD'><deleteAD/></Route>
                <Route exact path='/Chat'><Chat/></Route>
            </Switch>
            </section>
            </div>
            
        </Router>
    )
}
export default SideMenuBar