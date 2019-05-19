// modules
import React, { Component } from 'react';
// components
import ProgressBar from '../../components/common/ProgressBar';
import SelectForm from '../../components/home/SelectForm';
import VehicleInfo from '../../components/home/VehicleInfo';
// store
import { connect } from '../../stores';

class HomeComponent extends Component {
	render() {
		const { vehicleStore: { 
			brand,
			brandList,
			changeVehicleData, 
			fipeInfo,
			model,
			modelList,
			progress,
			type, 
			typeList,
			year,
			yearList
		} } = this.props;
		return (
			<div className='container-fluid d-flex py-5' style={{minHeight: '100vh', alignItems: 'center', justifyContent: 'center'}}>
				<div className='col-lg-10'>
					<div className='card'>
						<div className='card-header'>
							<p style={{ fontSize: 14 }}>A Tabela FIPE, criada pela Fundação Instituto de Pesquisas Econômicas, é a principal referência no mercado de carros usados e seminovos, além de ser usada como base para contratos e seguros.</p>
							<p style={{ fontSize: 14 }}>Esta expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações. Os preços efetivamente praticados variam em função da região, conservação, cor, acessórios ou qualquer outro fator que possa influenciar as condições de oferta e procura por um veículo específico.</p>
							<p style={{ fontSize: 14 }}>Para utilizar essa aplicação selecione o tipo, fabricante, modelo e ano de seu veículo. Os valores e informações foram disponibilizadas através da <a href='http://deividfortuna.github.io/fipe/' target='_blank' rel="noopener noreferrer">FIPE API REST</a></p>
						</div>
						<div className='card-body'>
							<div className='row'>
								<div className='col-lg-5'>
									<SelectForm 
										brand={brand}
										brandList={brandList}
										changeVehicleData={changeVehicleData}
										model={model}
										modelList={modelList}
										type={type}
										typeList={typeList}
										year={year}
										yearList={yearList}
									/>	
								</div>
								<div className='col-lg-7'>
									<VehicleInfo 
										brand={brand}
										fipeInfo={fipeInfo}
										model={model}
										type={type}
										year={year}	
									/>
								</div>

								<ProgressBar progress={progress} />
								
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(HomeComponent, ['vehicleStore']);