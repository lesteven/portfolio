import React,{Component} from 'react';

function Projects(){
	return(
		<div className='topDiv'>
			<h2>Some projects I've worked on:</h2>
			<h3>MERN:</h3>
			<p></p>
			<div className='flexBox'>
				<span className='flex-item' >
					<a href='https://stormy-badlands-58815.herokuapp.com/'>
						<img src='http://i.imgur.com/Zu0DH0q.png'/>
					</a>
					<p className='title'>Pinterest Clone</p>
				</span>
				<span className='flex-item' >
					<a href='https://murmuring-bastion-36829.herokuapp.com/'>
						<img src='http://i.imgur.com/0veHEe3.png'/>
					</a>
				</span>
				<span className='flex-item' >
					<a href='https://fast-brushlands-52388.herokuapp.com/'>
						<img src='http://i.imgur.com/4QV79in.png'/>
					</a>
				</span>
			</div>
			<h3>React:</h3>
			<div className='flexBox'>
				<a className='flex-item'><img src=''/></a>
				<a className='flex-item'><img src=''/></a>
				<a className='flex-item'><img src=''/></a>
			</div>
			<h3>D3:</h3>
			<div className='flexBox'>
				<a className='flex-item'><img src=''/></a>
				<a className='flex-item'><img src=''/></a>
				<a className='flex-item'><img src=''/></a>
			</div>
		</div>
	)

	
}
export default Projects