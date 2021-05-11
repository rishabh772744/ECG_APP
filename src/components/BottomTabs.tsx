import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { home, location, call, person } from 'ionicons/icons';

export const BottomTabs: React.FC = () => (
  <div className="bottom-tab">
  	<div className="bottom-lower">
  		<div className="bottom-icon text-center">
  			<div>
	  			<div className="active-bottom-icon">
	  			</div>
  			</div>
  		</div>
  		<div className="bottom-icon">
  		</div>
  		<div className="bottom-icon">
  		</div>
  		<div className="bottom-icon">
  		</div>
  	</div>
  </div>
);