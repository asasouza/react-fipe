// modules
import React from 'react';

const LoadingDots = (props) => {
	return (
		<div className='text-center'>
			<div className='spinner-grow spinner-grow-sm text-muted'></div> 
			<div className='spinner-grow spinner-grow-sm text-muted'></div> 
			<div className='spinner-grow spinner-grow-sm text-muted'></div> 
		</div>
	);
}

export default LoadingDots;