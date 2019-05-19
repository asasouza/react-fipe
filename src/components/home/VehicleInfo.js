// modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle, faTruck } from '@fortawesome/free-solid-svg-icons'
// components
import LoadingDots from '../common/LoadingDots';
// styles
import { info_label } from './home.module.css';

class VehicleInfo extends PureComponent {
	
	_renderIcon = () => {
		const { type } = this.props;
		if (type.value === 'carros') {
			return faCar;
		}
		if (type.value === 'motos') {
			return faMotorcycle;
		}
		if (type.value === 'caminhoes') {
			return faTruck;
		}
		return null;
	}

	render() {
		const { 
			brand,
			fipeInfo,
			model,
			type, 
			year,
		} = this.props;
		return (
			<div>
				
				<p className={info_label}>
					{ type && 
						<span>
						<FontAwesomeIcon icon={this._renderIcon()} color='#aaa' size='lg' className='mr-1'/>
						<span>{type.label}</span>
						</span>
					}
				</p>
				{ brand &&
					<div className='d-inline-flex align-items-center col-12 p-0'>
						<span className={`mr-2 ${info_label}`}>Fabricante: </span>
						<h2>{brand.label}</h2>
					</div>
				}
				{ model &&
					<div className='row'>
						<div className='col-sm-12 col-md-6'>
								<span className={info_label}>Modelo: </span>
								<h3>{model.label}</h3>
						</div>
						{ year && 
							<div className='col-sm-12 col-md-6'>
								<span className={info_label}>Ano: </span>
								<h4>{year.label}</h4>
							</div>
						}
					</div>
				}
				{
					fipeInfo && 
					
					<div>
						<hr />
						{ fipeInfo === 'loading' ? 
							<LoadingDots /> :
							<div>
								<div className='row mb-4'>
									<div className='col-sm-12 col-md-6'>
										<span className={info_label}>Valor: </span>
										<h3>{fipeInfo.Valor}</h3>
									</div>
									<div className='col-sm-12 col-md-6'>
										<span className={info_label}>Referência: </span>
										<h3>{fipeInfo.MesReferencia.toUpperCase()}</h3>
									</div>
								</div>

								<div className='row'>
									<div className='col-sm-12 col-md-6'>
										<span className={info_label}>Cód FIPE: </span>
										<h3>{fipeInfo.CodigoFipe}</h3>
									</div>
									<div className='col-sm-12 col-md-6'>
										<span className={info_label}>Combustível: </span>
										<h3>{fipeInfo.Combustivel}</h3>
									</div>
								</div>
							</div>
						}
					</div>
				}
			</div>
		);
	}
}


VehicleInfo.propTypes = {
	brand: PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }),
	fipeInfo: PropTypes.oneOfType([
		PropTypes.shape({
			Valor: PropTypes.string.isRequired,
			MesReferencia: PropTypes.string.isRequired,
			CodigoFipe: PropTypes.string.isRequired,
			Combustivel: PropTypes.string.isRequired
		}),
		PropTypes.string
	]),
	model: PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }),
	type: PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }),
	year: PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) }),
}

export default VehicleInfo;