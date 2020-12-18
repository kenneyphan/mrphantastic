import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import banner from './images/mrphantastic banner.jpg';
import mrphantasticPic from './images/mrphantastic no logo.jpg';
import mikePic from './images/erebus-knight-chii.jpg';
import { SocialIcon } from 'react-social-icons';
import bannerVid from './bannerVid.mp4';

function Banner(props) {
	return (
		<div>
			<video className="banner" autoPlay muted loop>
				<source src={bannerVid} type="video/mp4" />
			</video>
		</div>
	);
}

function ProfilePic(props) {
	return (
		<div>
			<img className='profilePic' src={mrphantasticPic} alt="profilePic"/>
		</div>
	);
}

function Homepage(props) {
	return (
		<div>
			<Banner />
			<SocialMedia />
			<ProfilePic />
		</div>
	);
}

function SocialMedia(props) {
	return (
		<div className="socialMedia">
			 <SocialIcon className="icon" url="https://www.instagram.com/mrphantastiic/" bgColor="black" label="penis" />
			 <SocialIcon className="icon" url="https://www.facebook.com/mrphantasticmusic/" bgColor="black" label="penis" />
			 <SocialIcon className="icon" url="https://soundcloud.com/phantastiic" bgColor="black"/>
			 <SocialIcon className="icon" url="https://open.spotify.com/artist/66y34ojk7OuSIREZnjkQ7k?si=_ts-AW4uTMCdMHAtu1tNVQ" bgColor="black"/>
			 <SocialIcon className="icon" url="https://www.youtube.com/channel/UCKlfLNBYM7pOH7dPNkPQllg?view_as=subscriber" bgColor="black"/>
			</div>
	);
}


ReactDOM.render(
	<Homepage />, 
	document.getElementById('root')
);

export default Homepage;