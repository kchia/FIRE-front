import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

const StrainsList = (props) => {
	const [strains, setStrains] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${APIURL}/strains`)
			.then((res) => res.json())
			.then((data) => {
				setStrains(data);
			})
			.catch(() => {
				setError(true);
			});
		// eslint-disable-next-line
	}, []);

	if (error) {
		return <div>Sorry, there was a problem getting strains.</div>;
	}

	if (strains.length === 0) {
		return <div>Loading...</div>;
	}
	console.log(strains);

	return (
		<div className='strains-gallery-container'>
			<h2 style={{ color: 'white' }}>Indica</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Indica' ? (
					<div>
						<img alt='' src='' />
						<Link to={`/strains/${strain._id}`}> {strain.name}</Link>
					</div>
				) : null
			)}
			<h2 style={{ color: 'white' }}>Sativa</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Sativa' ? (
					<div>
						<img alt='' src='' />
						<Link to={`/strains/${strain._id}`}> {strain.name}</Link>
					</div>
				) : null
			)}
			<h2 style={{ color: 'white' }}>Hybrid: Indica Dominant</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: Indica Dominant' ? (
					<div>
						<img alt='' src='' />
						<Link to={`/strains/${strain._id}`}> {strain.name}</Link>
					</div>
				) : null
			)}
			<h2 style={{ color: 'white' }}>Hybrid: Sativa Dominant</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: Sativa Dominant' ? (
					<div>
						<img alt='' src='' />
						<Link to={`/strains/${strain._id}`}> {strain.name}</Link>
					</div>
				) : null
			)}
			<h2 style={{ color: 'white' }}>Hybrid: 50/50</h2>
			{strains.map((strain) =>
				strain.plantCategory === 'Hybrid: 50/50' ? (
					<div>
						<img alt='' src='' />
						<Link to={`/strains/${strain._id}`}> {strain.name}</Link>
					</div>
				) : null
			)}
		</div>
	);
};

export default StrainsList;