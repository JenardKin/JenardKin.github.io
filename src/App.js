import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Introduction from './components/introduction/Introduction'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Timeline from './components/timeline/Timeline'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import './App.css';

function App() {
  return (
    <div id="container-page">
      <div id="container-wrap">
		    <Sidebar></Sidebar>
        <div id="container-main">
          <Introduction></Introduction>
          <Portfolio></Portfolio>
          <About></About>
          <Blog></Blog>
          <Timeline></Timeline>
          </div>
      </div>
    </div>
  );
}

export default App;
