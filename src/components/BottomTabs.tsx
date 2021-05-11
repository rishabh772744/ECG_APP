import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';

interface IMyProps {
    name: string,
}

export const BottomTabs: React.FC<IMyProps> = (props: IMyProps) => (
  <div className="bottom-tab">
  	<div className="bottom-lower">
  		<div className="bottom-icon text-center">
  			{props.name === "home" ? 
  			<div>
	  			<div className="active-bottom-icon py-2">
	  				<FontAwesomeIcon icon={faHome} color="white"/>
	  			</div>
  			</div> : 
  			<div className="text-center">
  				<Link to="/home">
		  			<div className="inactive-bottom-icon py-2">
		  				<FontAwesomeIcon icon={faHome} />
		  			</div>
		  		</Link>
  			</div>
  			 }
  		</div>
  		<div className="bottom-icon text-center">
  			{props.name === "location" ? 
  			<div>
	  			<div className="active-bottom-icon py-2">
	  				<FontAwesomeIcon icon={faMapMarkerAlt} color="white"/>
	  			</div>
  			</div> : 
  			<div className="text-center">
				<Link to="/location">
		  			<div className="inactive-bottom-icon py-2">
		  				<FontAwesomeIcon icon={faMapMarkerAlt} />
		  			</div>
				</Link>
  			</div>
  			 }
  		</div>
  		<div className="bottom-icon text-center">
  			{props.name === "emergency" ? 
  			<div>
	  			<div className="active-bottom-icon py-2">
	  				<FontAwesomeIcon icon={faPhoneAlt} color="white"/>
	  			</div>
  			</div> : 
  			<div className="text-center">
				<Link to="/emergency">
		  			<div className="inactive-bottom-icon py-2">
		  				<FontAwesomeIcon icon={faPhoneAlt} />
		  			</div>
		  		</Link>
  			</div>
  			 }
  		</div>
  		<div className="bottom-icon text-center">
  			{props.name === "profile" ? 
  			<div>
	  			<div className="active-bottom-icon py-2">
	  				<FontAwesomeIcon icon={faUser} color="white"/>
	  			</div>
  			</div> : 
  			<div className="text-center">
  				<Link to="/profile">
		  			<div className="inactive-bottom-icon py-2">
		  				<FontAwesomeIcon icon={faUser} />
		  			</div>
				</Link>
  			</div>
  			 }
  		</div>
  	</div>
  </div>
);