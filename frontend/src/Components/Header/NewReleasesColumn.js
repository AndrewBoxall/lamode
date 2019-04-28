import React from 'react';
import { Link } from 'react-router-dom';
import './NewReleasesColumn.css';

function NewReleasesColumn(props) {
    return (
			<div className="new-releases-column">
				<Link to={`"/categories/${props.category}/new-releases"`}>
					<img src={props.image} alt="New releases"></img>
					<p>NEW RELEASES</p>
				</Link>
			</div>
	);
}
export default NewReleasesColumn;