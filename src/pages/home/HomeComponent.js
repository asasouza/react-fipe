// modules
import React, { Component } from 'react';
import Select from 'react-select';
// store
import { connect } from '../../stores';

class HomeComponent extends Component {
	render() {
		console.log(this.props);
		const { vehicleStore: { 
			brand,
			brandList,
			changeVehicleData, 
			fipeInfo,
			model,
			modelList,
			type, 
			typeList,
			year,
			yearList
		} } = this.props;
		console.log(fipeInfo);
		return (
			<div>
				<div>
					<Select 
						options={typeList}
						value={type}
						onChange={(value) => changeVehicleData('Type', value)}
						placeholder='Selecione o tipo de veículo'
					/>
					<Select 
						options={brandList === 'loading' ? [] : brandList}
						isLoading={brandList === 'loading'}
						loadingMessage={() => 'Carregando...'}
						value={brand}
						onChange={(value) => changeVehicleData('Brand', value)}
						noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
						placeholder={brandList.length ? 'Selecione a marca do seu veículo' : 'Selecione um tipo de veículo para escolher'}
					/>
					<Select 
						options={modelList === 'loading' ? [] : modelList}
						isLoading={modelList === 'loading'}
						loadingMessage={() => 'Carregando...'}
						value={model}
						onChange={(value) => changeVehicleData('Model', value)}
						noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
						placeholder={modelList.length ? 'Selecione o modelo do seu veículo' : 'Selecione a marca do veículo para escolher'}
					/>
					<Select 
						options={yearList === 'loading' ? [] : yearList}
						isLoading={yearList === 'loading'}
						loadingMessage={() => 'Carregando...'}
						value={year}
						onChange={(value) => changeVehicleData('Year', value)}
						noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
						placeholder={yearList.length ? 'Selecione o ano do seu veículo' : 'Selecione o modelo do veículo para escolher'}
					/>
				</div>
				{ fipeInfo && 
					<div>
						<h1>Marca: {brand.label}</h1>
						<h2>Modelo: {model.label}</h2>
						<h2>Ano: {year.label}</h2>
						<h3>Valor (R$): {fipeInfo.Valor}</h3>
						<h3>Código FIPE: {fipeInfo.CodigoFipe}</h3>
						<h3>Combustível: {fipeInfo.Combustivel}</h3>
						<h3>Referência: {fipeInfo.MesReferencia}</h3>
					</div>
				}
				
			</div>
		);
	}
}

export default connect(HomeComponent, ['vehicleStore']);