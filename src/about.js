import React from 'react';
import ReactDOM from 'react-dom';

/* import css */
import './about.css';

/* import pics */
import DJpic from './images/Arena.JPG';


class About extends React.Component {
	render() {
		return (
			<body className='about'>
				<div>
					<Title />
					<img className='arenaPic' src={DJpic} alt='djPic' />
					<Description />
				</div>
			</body>
		);
	}
}

function Title(props) {
	let spotify = "https://open.spotify.com/follow/1/?uri=spotify:artist:6sFIWsNpZYqfjUpaCgueju&size=basic&theme=dark&show-count=0";
	let width = 100;
	let height = 25;
	let color='black';
	let link = 'spotify';
	let id='https://open.spotify.com/artist/66y34ojk7OuSIREZnjkQ7k?si=CFZLGzptTDGXNNpXV5Y9Gg';
	 return ( 
	 	<div style={{'backgroundColor':'black'}}>
	 		<h1 className='header'> MrPhantastic </h1>	
	 	</div>
	 );
}


function Description(props) {
	return (
		<p className='description'>
			Kenney Phan, also known as 'MrPhantastic', is a DJ/Producer from the Bay Area. 
			Influenced by a mixture of hip hop and trap growing up, Kenney creates music that contains some of his lyrical flow on trap beats.	
			Drawing influences from major EDM artists such as RL Grime, Boombox Cartel, and 4B and hip hop influences from Rich Brian, A$AP Ferg, Big Sean, and Night Lovell,
			Kenney's art portrays his love for simplistic, emotional sounds while still delivering his love for heavy bass. 
			Before Kenney ever pursued music, he once had a vision where he remembers looking around and seeing how happy everyone was, like there was no care in the world. 
			Even though he didn't know why everyone was so happy, he knew whatever it was that it was what he wanted to pursue in life.
			When he found his love for EDM music and DJing, he knew this was his calling. Now, Kenney's dream is to travel the world to reinact that exact vision with the power of his music. 
		</p>	

	);
}

ReactDOM.render(
	<About />,	
	document.getElementById('root')
);

export default About;