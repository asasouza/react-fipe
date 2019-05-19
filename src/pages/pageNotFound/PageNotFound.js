// modules
import React from 'react';
import { container } from './page-not-found.module.css';

const PageNotFound = () => {
	return (
		<div className={`d-flex flex-1 align-items-center justify-content-center ${container}`}>
			<div className='text-center'>
				<h2>404!</h2>
				<h5>Desculpe, a página procurada não existe.</h5>
			</div>
		</div>
	);
}

export default PageNotFound;
