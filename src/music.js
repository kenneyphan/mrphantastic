import React from 'react';
import ReactDOM from 'react-dom';
import "./music.css";
import nightVid from './WebsitemusicBG.mp4';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

// images
import nightPic from './images/blood new.png';
import selahPic from './images/Selah pic final.png';
import rankPic from './images/Rank pic.png';
import reppoPic from './images/reppo pic.png';
import bopPic from './images/BOP_FINAL.png';
import mikePic from './images/erebus-knight-chii.jpg';


class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}
	
	componentDidMount() {
		if (this.video) {
			this.video.addEventListener("loadeddata", () => {
				this.setState({ loading: false });
			});
		}
	}

	componentWillUnmount() {
		if (this.video) {
			this.video.removeEventListener("loadeddata", () => {
			});
		}
	}

	render() {
		return (
			<div>
				<h1 className='title'> MrPhantastic </h1>	
				<video 
				ref={ref => (this.video = ref)} 
				className="bgVid" autoPlay muted loop
				style={{
					opacity: this.state.loading ? 0 : 1,
					transition: "opacity, 2s ease-in-out"
				}}>
					<source src={nightVid} type="video/mp4" />
				</video>
				<MusicPlayer />
			</div>
		);
	}
}

// function Follow(props) {
// 	return (
// 		<a href='https://open.spotify.com/artist/66y34ojk7OuSIREZnjkQ7k?si=dGY58JtMRfCy-UgMFSVnMw' style={{color:'white', position: 'fixed'}}>[follow me]</a>
// 	);
// }

function MusicPlayer(props) {
	return (
		<StyleRoot className="albums">
		    <Coverflow 
		      displayQuantityOfSide={5}
		      InfiniteScrolling
		      navigation
		      enableHeading={false}
		      media={{
		        '@media (max-width: 900px)': {
		          width: '600px',
		          height: '300px'
		        },
		        '@media (min-width: 900px)': {
		          width: '960px',
		          height: '600px'
		        }
		      }}
		    >
		    <img src={nightPic}  data-action="https://smarturl.it/mrphantasticBlood"/>
		    <img src={selahPic} data-action="https://smarturl.it/mrphantasticSelah"/>
		    <img src={rankPic}  data-action="https://smarturl.it/mrphantasticRank"/>
		    <img src={reppoPic} data-action="https://smarturl.it/mrphantasticReppo"/>
		    <img src={bopPic} data-action="https://smarturl.it/mrphantasticBOP"/>
		    </Coverflow>
  		</StyleRoot>
	);
}

ReactDOM.render(
	<Music />, 
	document.getElementById('root')
);

export default Music;