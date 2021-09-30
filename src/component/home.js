import { Component } from 'react';
import '../css/home-movie.css';
import {Link} from 'react-router-dom';
import Movie_Router from './sub-component/router.js';
 import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
//

import Movies from './Pages/Movies';
import Stream from './Pages/Stream.js';
import Events from './Pages/Events.js';
import Plays from './Pages/Plays.js';
import Sports from './Pages/Sports.js';
import Activities from './Pages/Activities.js';
import Buzz from './Pages/Buzz.js';

//



class Home extends Component{
    render(){
        return(
            <div>
                <div className="nav-movie">
                   <div className="nav-movie-container"> 
                       <span className="nav-movie-logo-title"> book<span className="nav-movie-letter-heiglight">my</span>ticket</span>
                       {/* <span className="nav-movie-search"> <InputBase className="nav-movie-search-text" placeholder="Search…" /> <button className="nav-movie-search-icon"> <SearchIcon /> </button></span> */}
                   </div>
                </div>
                <BrowserRouter>
                <div className="nav-movie-sub">
                    <div className="nav-movie-sub-container">
                        <ul className="nav-movie-sub-container-block">
                               { Movie_Router.map((item,index)=>{
                                    return(
                                    <li key={index} className={item.Name}> 
                                        <Link to="/" className="nav-movie-sub-container-block-link">
                                            <span>{item.title}</span> 
                                        </Link>
                                    </li> 
                                    )
                                }) 
                                }

                        </ul>
                    </div>
                </div>
                <div>
                <Switch>
                    <Route exact path="/" component={Movies}/>
                    <Route path="/stream" component={Stream}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/plays" component={Plays}/>
                    <Route path="/sports" component={Sports}/>
                    <Route path="/activities" component={Activities}/>
                    <Route path="/buzz" component={Buzz}/>
                </Switch> 
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home;