import React, {Component} from 'react';
//import './../../../css/Main/hfMain.css';
import fbIcon from '../../../images/fb-icon.svg';
import igIcon from '../../../images/instagram.svg';
import ptIcon from '../../../images/pinterest.svg';
import twIcon from '../../../images/twitter.svg';
import ytIcom from '../../../images/youtube.svg';

class MainFooter extends Component {
  
  render(){
      
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-div-left">
                    <h4>Company</h4>
                    <ul className="uk-list uk-list-collapse">
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Community</li>
                    </ul>
                </div>
                <div className="footer-div-middle">
                    <h4>Contact</h4>
                    <ul className="uk-list uk-list-collapse">
                        <li>Email: info@abc.com</li>
                        <li>Ph: +9277777777</li>
                        <li>Location: 141 Silicon Valley</li>
                    </ul>
                </div>
                <div className="footer-div-right">
                    <h4>Join our Community</h4>
                    <ul className="uk-list uk-list-collapse">
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Forums</li>
                        <li>Meetups</li>
                    </ul>
                </div>
                <div className="social-icon-div">
                <a href="#"><img className="social-icon" alt="Twitter" title="Twitter" src={fbIcon}></img></a>
                
                <a href="#"><img className="social-icon" alt="Twitter" title="Twitter" src={igIcon}></img></a>
                <a href="#"><img className="social-icon" alt="Twitter" title="Twitter" src={twIcon}></img></a>
                <a href="#"><img className="social-icon" alt="Twitter" title="Twitter" src={ytIcom}></img></a>
                <a href="#"><img className="social-icon" alt="Twitter" title="Twitter" src={ptIcon}></img></a>
            </div>
            <div>
                <p className="footer-copy-right">
                    Copyright © 2020 by Zee - All Rights Reserved - A Division of Zee Networks, Inc. 
                </p>
            </div>
            </div>
            
            
        </footer>
        
      );
    }
  
}

export default MainFooter;