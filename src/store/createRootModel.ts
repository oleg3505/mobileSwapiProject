import {Instance} from 'mobx-state-tree';

import {RootModel, RootModelType} from './RootModel';

interface ICreateRootModelResult {
  store: Instance<RootModelType>;
}

export function createRootModel(initialState = {}): ICreateRootModelResult {
  const store = RootModel.create(initialState);

  return {
    store,
  };
}
