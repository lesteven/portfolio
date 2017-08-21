import React,{Component} from 'react';

function Projects(){
	return(
		<div className='topDiv'>
			<h1>MERN:</h1>
			<p>MERN Projects are hosted on Heroku, so it may 
			take a while to load if the site is inactive.</p>
			<div className='flexBox'>
				<span className='flex-item' >
					<a href='https://stormy-badlands-58815.herokuapp.com/'>
						<img src='https://i.imgur.com/y1QwjDv.png'/>
					</a>
					<h3>Pinterest Clone</h3>
					<p>Tech: MERN + Twitter OAuth</p>
					<p>Info: Post image to website</p>
					<p>and visit other users' pages.</p>
				</span>
				<span className='flex-item' >
					<a href='https://murmuring-bastion-36829.herokuapp.com/'>
						<img src='https://i.imgur.com/Lp429eX.png'/>
					</a>
					<h3>Stock Market Chart</h3>
					<p>Tech: MERN + Websocket + D3</p>
					<p>Info: Chart opening stock market prices</p>
					<p>with live update using websocket.</p>
				</span>
				<span className='flex-item' >
					<a href='https://fast-brushlands-52388.herokuapp.com/'>
						<img src='https://i.imgur.com/uRdSoKO.png'/>
					</a>
					<h3>Book Trading</h3>
					<p>Tech: MERN + Passport</p>
					<p>Info: Personal booklist with</p>
					<p>ability to trade with others.</p>
				</span>
			</div>
			<h1>React:</h1>
			<div className='flexBox'>
				<span className='flex-item'>
					<a href='https://lesteven.github.io/roguelike/'>
						<img src='https://i.imgur.com/h0NYaQQ.png'/>
					</a>
					<h3>Roguelike</h3>
					<p>Tech: React + Rot.js</p>
					<p>Roguelike game using Rot.js library.</p>
				</span>
				<span className='flex-item'>
					<a href='https://lesteven.github.io/gameoflifev2/'>
						<img src='https://i.imgur.com/N6BJum3.png'/>
					</a>
					<h3>Game of Life</h3>
					<p>Tech: React</p>
					<p>Conway's Game Of Life on HTML canvas.</p>
				</span>
			</div>
			<h1>D3:</h1>
			<div className='flexBox'>
				<span className='flex-item'>
					<a href='https://lesteven.github.io/heatmap/'>
						<img src='https://i.imgur.com/IKNJ8Jk.png'/>
					</a>
					<h3>Heatmap</h3>
					<p>Tech: D3</p>
					<p>Heat map of land temperature.</p>
				</span>
				<span className='flex-item'>
					<a href='https://lesteven.github.io/globe/'>
						<img src='https://i.imgur.com/CQvabhw.png'/>
					</a>
					<h3>Globe</h3>
					<p>Tech: D3</p>
					<p>Map of meteorite landings.</p>
				</span>
			</div>
		</div>
	)

	
}
export default Projects

