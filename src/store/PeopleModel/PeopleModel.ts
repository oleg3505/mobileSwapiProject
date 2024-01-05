import {model, Model} from 'mst-collection';
import {types} from 'mobx-state-tree';
import {useRoot} from '../useRoot';
import {PeopleListModel} from './PeopleListModel';

export class People extends Model({
  list: types.optional(PeopleListModel, {}),
}) {}

export const PeopleModel = model(People);

export function usePeopleModel() {
  const root = useRoot();

  return root.people;
}
