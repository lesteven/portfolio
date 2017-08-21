import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from '../views/home.jsx';
import About from '../views/about.jsx';
import Projects from '../views/projects.jsx';
import Contact from '../views/contact.jsx';
import GitHubIcon from '../images/github-icon.png';
import FCCIcon from '../images/fcc.png';
import LIicon from '../images/linkedin.png';
import IconList from './iconList.jsx'

function NavBar(){
	return(
		<Router>
			<div>
				<nav className ='navBar'>
					<a className='nav-left' href="https://github.com/lesteven">
						<img src={GitHubIcon}/>
					</a>
					<a href='https://www.linkedin.com/in/stevennle/'>
						<img src={LIicon}/>
					</a>
					<a href='https://www.freecodecamp.org/lesteven'>
						<img src={FCCIcon}/>
					</a>
					<span className='flex-space'></span>
					<Link to ='/'>Home</Link>
					<Link to ='/about'>About</Link>
					<Link to ='/projects'>Projects</Link>
					<Link to ='/contact' className='nav-right'>Contact</Link>
				</nav>

				<Route exact path= '/' component ={Home}/>
				<Route exact path= '/about' component ={About}/>
				<Route exact path= '/projects' component ={Projects}/>
				<Route exact path= '/contact' component ={Contact}/>
			</div>
		</Router>
	)
}

export default NavBar