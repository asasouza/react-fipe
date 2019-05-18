// modules
import { action, decorate, runInAction, observable } from 'mobx';
// providers
import RequestProvider from '../providers/RequestProvider';

class VehicleStore {
	constructor() {
		this.setInitialState();
	}

	setInitialState = () => {
		this.type = { value: 'carro', label: 'Carro' };
		this.brand = null;
		this.model = null;
		this.year = null;
		this.fipeInfo = null;
		this.brandsList = [];
		this.modelsList = [];
		this.yearsList = [];
	}

	setFactory = () => {
		this.factory = 'loading';
		RequestProvider.get('carros/marcas')
		.then(response => {
			runInAction(() => {
				this.factory = 'Ferrari'
			});
		})
		.catch(err => {
			console.log(err);
		})
	}
}

export default decorate(VehicleStore, {
	setInitialState: action,
	setFactory: action,
	factory: observable,

});
