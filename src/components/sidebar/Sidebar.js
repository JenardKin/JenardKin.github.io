
import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import AccountCirle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Laptop from '@material-ui/icons/Laptop'
import Timeline from '@material-ui/icons/Timeline';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';

import AuthorImage from './img/sidebar_img.png'
import './css/sidebar.css'
import SocialMedia from './js/SocialMedia.js'

function ListItemLink(props){
    return <ListItem button component="a" {...props} />;
}

class Sidebar extends Component {
    render(){
        return(
            <div id="sidebar">
                <aside id="sidebar-aside">
                    <div>
                        <img src={ AuthorImage } className="author-image" alt="author" />
                        <h1 id="author-name">Jenard Kin Cabia</h1>
                        <span className="email">
                            <MailOutlineIcon></MailOutlineIcon>
                            nardjay1997@gmail.com
                        </span>
                    </div>
                    <div id="aside-navigation">
                    <List component="nav" aria-label="navigation">
                        <ListItemLink href="#main-introduction">
                            <ListItemIcon>
                                <SentimentSatisfied/>
                            </ListItemIcon>
                            <ListItemText primary="Introduction" />
                        </ListItemLink>
                        <ListItemLink href="#main-about">
                            <ListItemIcon>
                                <AccountCirle/>
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemLink>
                        <ListItemLink href="#main-timeline">
                            <ListItemIcon>
                                <Timeline/>
                            </ListItemIcon>
                            <ListItemText primary="Timeline" />
                        </ListItemLink>
                        <ListItemLink href="#main-projects">
                            <ListItemIcon>
                                <Laptop/>
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItemLink>
                    </List>
                    </div>
                    <hr/>
                    <div id="aside-social-media">
                    <List component="nav" aria-label="social media">
                        <SocialIcon url={SocialMedia.facebook}></SocialIcon>
                        <SocialIcon url={SocialMedia.twitter}></SocialIcon>
                        <SocialIcon url={SocialMedia.instagram}></SocialIcon>
                        <SocialIcon url={SocialMedia.twitch}></SocialIcon>
                        <SocialIcon url={SocialMedia.youtube}></SocialIcon>
                        <SocialIcon url={SocialMedia.reddit}></SocialIcon>
                        <SocialIcon url={SocialMedia.linkedin}></SocialIcon>
                        <SocialIcon url={SocialMedia.github}></SocialIcon>
                    </List>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Sidebar