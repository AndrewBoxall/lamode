import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner(props) {
    return (
			<div className="loading-spinner">
				<h2>Loading..</h2>
				<div className="spinner">
				</div>
			</div>
		);
}
export default LoadingSpinner;