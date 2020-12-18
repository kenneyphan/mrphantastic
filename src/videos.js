import React from 'react';
import ReactDOM from 'react-dom';

/* import css */
import './videos.css';

/* import library */
import ReactPlayer from 'react-player';
import Youtube from 'react-youtube';
import { StickyContainer, Sticky } from 'react-sticky';

class Videos extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<ShowVideos />
			</div>
		);
	}
}

function CheckScroll(props) {
	const isTop =  window.scrollY < 100 ;
	if (isTop !== true) {
		this.setState({ scrolled: true });
	}
	else {
		this.setState({ scrolled: false });
	}
}

function ShowVideos(props) {
	const opts = {
		width: '1100',
		height: '615'
	}
	return (
		<section >
			<div className="youtubeVideos">
				<Youtube className="video" videoId="V9z9_zEyJKQ" opts={opts}/>
				<Youtube className="video" videoId="cIvHA0W_V_4" opts={opts}/>
			</div>
		</section>
	);
}

function Title(props) {
	 return (
	 	<div style={{'backgroundColor':'black'}}>
	 		<h1 className='header'> MrPhantastic </h1>	
	 	</div>
	 );
}

ReactDOM.render(
	<Videos />,
	document.getElementById('root')
);

export default Videos;