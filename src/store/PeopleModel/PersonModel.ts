import {types} from 'mobx-state-tree';
import {model, Model} from 'mst-collection';

export class Person extends Model({
  name: types.string,
  height: types.string,
  mass: types.string,
  hair_color: types.string,
  skin_color: types.string,
  eye_color: types.string,
  birth_year: types.string,
  gender: types.string,
  homeworld: types.string,

  // species: [],

  created: types.string,
  edited: types.string,
  url: types.string,
}) {}

export const PersonModel = model(Person);
