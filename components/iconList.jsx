import React,{Component} from 'react';
import GitHubIcon from '../images/github-icon.png';
import FCCIcon from '../images/fcc.png';
import LIicon from '../images/linkedin.png';


function IconList(){
	return(
		<div className='iconList'>
			<a href="https://github.com/lesteven">
				<img src={GitHubIcon}/>
			</a>
			<a href='https://www.linkedin.com/in/stevennle/'>
				<img src={LIicon}/>
			</a>
			<a href='https://www.freecodecamp.org/lesteven'>
				<img src={FCCIcon}/>
			</a>
		</div>
	)
}
export default IconList