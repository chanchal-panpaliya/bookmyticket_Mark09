import './App.css';
import { Component } from 'react';
import Home from './component/home.js';

import FacebookIcon from './img/icons/facebook.png';
import TwitterIcon from './img/icons/twitter.png';
import LinkedInIcon from './img/icons/linkedin.png';
import GithubIcon from './img/icons/github.png'; 

class App extends Component{
  render(){
    return (
      <div>
        <div className="container-bananatalk">
          <div className="background-bananatalk">
            <div style={{width:'-webkit-fill-available',position:'fixed'}}>
                <div className="menu__logoSpace"> 
                    <a href="/" className="menu__logo" style={{color:'#e5e7eb'}}> Creator Space </a>
                </div>
                <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={FacebookIcon} alt="facebooklink"/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <img style={{width:'8%',paddingTop:'2%'}} src={TwitterIcon} alt="twitterlink"/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                       <img style={{width:'8%',paddingTop:'2%'}} src={LinkedInIcon} alt="linkedinlink"/>
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={GithubIcon} alt="githublink"/>
                    </span>
                </a>
              </div>
            </div>
          </div>
          <div className="body-frame-bananatalk">
          <Home/>
          </div> 
        </div>
    </div>   
    );
  }
 
}

export default App;
