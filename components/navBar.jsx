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
					<a className = 'right'>hello</a>
					<Link to ='/' className='left'>Home</Link>
					<Link to ='/about' className='left'>About</Link>
					<Link to ='/projects' className='left'>Projects</Link>
					<Link to ='/contact' className='left'>Contact</Link>
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