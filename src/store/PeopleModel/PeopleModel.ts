import {createThunk, model, Model} from 'mst-collection';
import {types} from 'mobx-state-tree';
import {useRoot} from '../useRoot';

export class People extends Model({
  // list: types.optional(PeopleListModel, {})
}) {}

export const PeopleModel = model(People);

export function useTracksModel() {
  const root = useRoot();

  return root.track;
}