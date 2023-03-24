import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyTypes: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyTypes = 'stamina';
    Ranger._archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyTypes;
  }

  static createdArchetypeInstances(): number {
    return this._archetypeInstances;
  }
}