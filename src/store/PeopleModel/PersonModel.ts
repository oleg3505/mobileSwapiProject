import {types} from 'mobx-state-tree';
import {model, Model} from 'mst-collection';

export enum GenderType {
  Male = 'male',
  Female = 'female',
  Undefined = 'n/a',
}

export class Person extends Model({
  id: types.identifierNumber,
  name: types.string,
  height: types.string,
  mass: types.string,
  hair_color: types.string,
  skin_color: types.string,
  eye_color: types.string,
  birth_year: types.string,
  gender: types.enumeration([
    GenderType.Male,
    GenderType.Female,
    GenderType.Undefined,
  ]),
  homeworld: types.string,

  // species: [],

  created: types.string,
  edited: types.string,
  url: types.string,
}) {}

export const PersonModel = model(Person);
