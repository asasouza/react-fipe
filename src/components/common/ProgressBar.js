// modules
import PropTypes from 'prop-types';
import React from 'react';

const ProgressBar = (props) => {
	const { progress } = props;
	return (
		<div className="col-lg-12 progress" style={{ padding: 0, position: 'absolute', bottom: 0, right: 0, height: 5, borderRadius: 0 }}>
		  <div className="progress-bar" style={{width: `${progress}%`}}></div>
		</div>
	);
}

ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired
};

export default ProgressBar;