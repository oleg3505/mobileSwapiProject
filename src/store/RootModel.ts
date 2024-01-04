import {applySnapshot} from 'mobx-state-tree';
import {model, RootModel as BaseRootModel} from 'mst-collection';
import {PeopleModel} from './PeopleModel/PeopleModel';

export class Root extends BaseRootModel({
  people: PeopleModel,
}) {
  reset() {
    applySnapshot(this, {});
  }
}

export const RootModel = model(Root);

export type RootModelType = typeof RootModel;
