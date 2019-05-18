import { configure } from 'mobx'
import VehicleStore from './VehicleStore';

export default class RootStore {
  constructor() {
    configure({ enforceActions: 'always' })
    this.vehicleStore = new VehicleStore();
  }
}