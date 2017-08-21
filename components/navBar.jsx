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

function NavBar(){
	return(
		<Router>
			<div>
				<nav className ='navBar'>
					<a className='nav-left'>hello</a>
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