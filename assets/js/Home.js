// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/symfony-react-project/public/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/symfony-react-project/public/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/symfony-react-project/public/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                   <Route path="/symfony-react-project/public/" element={ <Posts/> }/>
                   <Route path="/symfony-react-project/public/users" element={ <Users/>} />
                   <Route path="/symfony-react-project/public/posts" element={ <Posts/> } />
               </Routes>
           </div>
        )
    }
}
    
export default Home;
