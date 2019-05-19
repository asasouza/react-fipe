// modules
import React, { PureComponent } from 'react';
import Select from 'react-select';

class SelectForm extends PureComponent {
	_loadingMessage = () => {
		return 'Carregando...';
	}

	_noOptionsMessage = () => {
		return 'Não há opções a serem selecionadas';
	}

	render() {
		const { 
			brand,
			brandList,
			changeVehicleData, 
			model,
			modelList,
			type, 
			typeList,
			year,
			yearList
		} = this.props;
		return (
			<form>
				<div className='form-group'>
					<label htmlFor='type'>
						<span className={!type ? "badge badge-primary" : "badge"}>1</span>
						Selecione o tipo de seu veículo:
					</label>
					<Select 
						menuPlacement='auto'
						name='type'
						onChange={(value) => changeVehicleData('Type', value)}
						options={typeList}
						placeholder='Tipo de veículo'
						value={type}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='brand'>
						<span className={!type ? "badge badge-light" : !brand ? "badge badge-primary" : "badge"}>2</span>
						Selecione o fabricante de seu veículo:
					</label>
					<Select 
						isLoading={brandList === 'loading'}
						loadingMessage={this._loadingMessage}
						menuPlacement='auto'
						name='brand'
						noOptionsMessage={this._noOptionsMessage}
						onChange={(value) => changeVehicleData('Brand', value)}
						options={brandList === 'loading' ? [] : brandList}
						placeholder={brandList.length ? 'Fabricante do veículo' : 'Selecione um tipo para escolher'}
						value={brand}						
					/>
				</div>
				<div className='form-group'>
					<span className={!brand ? "badge badge-light" : !model ? "badge badge-primary" : "badge"}>3</span>
					<label htmlFor='model'>Selecione o modelo de seu veículo:</label>
					<Select 
						isLoading={modelList === 'loading'}
						loadingMessage={this._loadingMessage}
						menuPlacement='auto'
						name='model'
						noOptionsMessage={this._noOptionsMessage}
						onChange={(value) => changeVehicleData('Model', value)}
						options={modelList === 'loading' ? [] : modelList}
						placeholder={modelList.length ? 'Modelo do veículo' : 'Selecione o fabricante para escolher'}
						value={model}
					/>
				</div>
				<div className='form-group'>
					<span className={!model ? "badge badge-light" : !year ? "badge badge-primary" : "badge"}>4</span>
					<label htmlFor='year'>Selecione o ano de seu veículo:</label>
					<Select 
						isLoading={yearList === 'loading'}
						loadingMessage={this._loadingMessage}
						menuPlacement='auto'
						name='year'
						noOptionsMessage={this._noOptionsMessage}
						onChange={(value) => changeVehicleData('Year', value)}
						options={yearList === 'loading' ? [] : yearList}
						placeholder={yearList.length ? 'Ano do veículo' : 'Selecione o modelo para escolher'}
						value={year}
					/>
				</div>
			</form>
		);
	}
}

export default SelectForm;
