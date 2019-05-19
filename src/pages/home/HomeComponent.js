// modules
import React, { Component } from 'react';
import Select from 'react-select';
// store
import { connect } from '../../stores';

class HomeComponent extends Component {
	render() {
		// console.log(this.props);
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
			<div className='container-fluid d-flex' style={{height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
				<div className='col-lg-10'>
					<div className='card'>
						<div className='card-body'>
							<div className='row'>
								<div className='col-lg-5'>
									<form>
										<div className='form-group'>
											<label htmlFor='type'>
												<span className={!type ? "badge badge-primary" : "badge"}>1</span>
												Selecione o tipo de seu veículo:
											</label>
											<Select 
												options={typeList}
												value={type}
												name='type'
												onChange={(value) => changeVehicleData('Type', value)}
												placeholder='Tipo de veículo'
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='brand'>
												<span className={!type ? "badge badge-light" : !brand ? "badge badge-primary" : "badge"}>2</span>
												Selecione o fabricante de seu veículo:
											</label>
											<Select 
												options={brandList === 'loading' ? [] : brandList}
												isLoading={brandList === 'loading'}
												loadingMessage={() => 'Carregando...'}
												value={brand}
												name='brand'
												onChange={(value) => changeVehicleData('Brand', value)}
												noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
												placeholder={brandList.length ? 'Fabricante do veículo' : 'Selecione um tipo para escolher'}
											/>
										</div>
										<div className='form-group'>
											<span className={!brand ? "badge badge-light" : !model ? "badge badge-primary" : "badge"}>3</span>
											<label htmlFor='model'>Selecione o modelo de seu veículo:</label>
											<Select 
												options={modelList === 'loading' ? [] : modelList}
												isLoading={modelList === 'loading'}
												loadingMessage={() => 'Carregando...'}
												value={model}
												name='model'
												onChange={(value) => changeVehicleData('Model', value)}
												noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
												placeholder={modelList.length ? 'Modelo do veículo' : 'Selecione o fabricante para escolher'}
											/>
										</div>
										<div className='form-group'>
											<span className={!model ? "badge badge-light" : !year ? "badge badge-primary" : "badge"}>4</span>
											<label htmlFor='year'>Selecione o ano de seu veículo:</label>
											<Select 
												options={yearList === 'loading' ? [] : yearList}
												isLoading={yearList === 'loading'}
												loadingMessage={() => 'Carregando...'}
												value={year}
												name='year'
												onChange={(value) => changeVehicleData('Year', value)}
												noOptionsMessage={() => 'Não há opções a serem selecionadas.'}
												placeholder={yearList.length ? 'Ano do veículo' : 'Selecione o modelo para escolher'}
											/>
										</div>
									</form>
								</div>
								<div className='col-lg-7'>
									<p style={{ fontSize: 16, color: '#aaa' }}>{type && type.label}</p>
									{ brand &&
										<div className='d-inline-flex align-items-center col-12 p-0'>
											<span className='mr-2' style={{ fontSize: 16, color: '#aaa' }}>Fabricante: </span>
											<h2>{brand.label}</h2>
										</div>
									}
									{ model &&
										<div className='d-inline-flex align-items-center col-12 p-0'>
											<div className='mr-3'>
												<span className='mr-2' style={{ fontSize: 16, color: '#aaa' }}>Modelo: </span>
												<h3>{model.label}</h3>
											</div>
											{ year && 
												<div>
													<span className='mr-2' style={{ fontSize: 16, color: '#aaa'}}>Ano: </span>
													<h4>{year.label}</h4>
												</div>
											}
										</div>
									}
									{
										fipeInfo && 
										
										<div>
											<hr />
											<div className='d-inline-flex align-items-center col-12 p-0 mb-4'>
												<div className='mr-3 d-inline-flex align-items-center'>
													<span className='mr-2' style={{ fontSize: 16, color: '#aaa'}}>Valor: </span>
													<h3>{fipeInfo.Valor}</h3>
												</div>
												<div className='mr-3 d-inline-flex align-items-center'>
													<span className='mr-2' style={{ fontSize: 16, color: '#aaa'}}>Referência: </span>
													<h5>{fipeInfo.MesReferencia.toUpperCase()}</h5>
												</div>
											</div>

											<div className='d-inline align-items-center col-12 p-0'>
												<div className='mr-3 d-inline-flex align-items-center'>
													<span className='mr-2' style={{ fontSize: 16, color: '#aaa'}}>Cód FIPE: </span>
													<h3>{fipeInfo.CodigoFipe}</h3>
												</div>
												<div className='d-inline-flex align-items-center'>
													<span className='mr-2' style={{ fontSize: 16, color: '#aaa'}}>Combustível: </span>
													<h5>{fipeInfo.Combustivel}</h5>
												</div>
											</div>
										</div>
									}
								</div>

								<div className="col-lg-12 progress" style={{ padding: 0, position: 'absolute', bottom: 0, right: 0, height: 5, borderRadius: 0 }}>
								  <div className="progress-bar" style={{width: progress}}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(HomeComponent, ['vehicleStore']);