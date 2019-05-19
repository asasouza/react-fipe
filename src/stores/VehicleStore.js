// modules
import { action, computed, decorate, runInAction, observable } from 'mobx';
// providers
import RequestProvider from '../providers/RequestProvider';

class VehicleStore {
	constructor() {
		this.setInitialState();
	}

	setInitialState = () => {
		this.type = null;
		this.brand = null;
		this.model = null;
		this.year = null;
		this.fipeInfo = null;
		this.typeList = [
			{ label: 'Carros', value: 'carros'}, 
			{ label: 'Motocicletas', value: 'motos' }, 
			{ label: 'Caminhões', value: 'caminhoes' }
		];
		this.brandList = [];
		this.modelList = [];
		this.yearList = [];
	}

	changeVehicleData = (field, value) => {
		this[field.toLowerCase()] = value;
		this[`_onChange${field}`]();
	}

	_onChangeType = () => {
		this._resetData(['brand', 'model', 'year', 'fipeInfo']);
		this.brandList = 'loading';
		RequestProvider.get(`${this.type.value}/marcas`)
		.then(response => {
			runInAction(() => {
				this.brandList = responseToOptions(response);
			})
		})
		.catch(err => {
			console.log(err);
			runInAction(() => {
				this.brandList = new Error();
			})
		})
	}

	_onChangeBrand = () => {
		this._resetData(['model', 'year', 'fipeInfo']);
		this.modelList = 'loading';
		RequestProvider.get(`${this.type.value}/marcas/${this.brand.value}/modelos`)
		.then(response => {
			runInAction(() => {
				this.modelList = responseToOptions(response.modelos);
			})
		})
		.catch(err => {
			console.log(err);
			runInAction(() => {
				this.modelList = new Error();
			})
		})
	}

	_onChangeModel = () => {
		this._resetData(['year', 'fipeInfo']);
		this.yearList = 'loading';
		RequestProvider.get(`${this.type.value}/marcas/${this.brand.value}/modelos/${this.model.value}/anos`)
		.then(response => {
			runInAction(() => {
				this.yearList = responseToOptions(response);
			})
		})
		.catch(err => {
			console.log(err);
			runInAction(() => {
				this.yearList = new Error();
			})
		})
	}

	_onChangeYear = () => {
		this._resetData(['fipeInfo']);
		// this.fipeInfo = 'loading';
		RequestProvider.get(`${this.type.value}/marcas/${this.brand.value}/modelos/${this.model.value}/anos/${this.year.value}`)
		.then(response => {
			runInAction(() => {
				this.fipeInfo = response;
			})
		})
		.catch(err => {
			console.log(err);
			runInAction(() => {
				this.yearList = new Error();
			})
		})
	}

	_resetData = (fields) => {
		fields.forEach(field => {
			this[field] = null;
			this[`${field}List`] = [];
		});
	}

	get progress() {
		let progress = 0;
		progress += this.type ? 25: 0;
		progress += this.brand ? 25: 0;
		progress += this.model ? 25: 0;
		progress += this.year ? 25: 0;
		return `${progress}%`;
	}
}

function responseToOptions(response) {
	return response.map(option => {
		return { label: option.nome, value: option.codigo };
	})
}

export default decorate(VehicleStore, {
	changeVehicleData: action,
	setInitialState: action,
	typeList: observable,
	brandList: observable,
	modelList: observable,
	yearList: observable,
	type: observable,
	brand: observable,
	model: observable,
	year: observable,
	fipeInfo: observable,
	progress: computed
});
