import React, { Component } from 'react';
import { connect } from '../../stores';

class HomeComponent extends Component {
	render() {
		console.log(this.props);
		const { vehicleStore: { factory, setFactory } } = this.props;
		return (
			<div>
				<p>{factory}</p>
				<button onClick={() => setFactory()}>Click</button>
			</div>
		);
	}
}

export default connect(HomeComponent, ['vehicleStore']);