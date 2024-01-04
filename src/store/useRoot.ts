import React, { useContext } from 'react';
import { Instance } from 'mobx-state-tree';

import type { RootModelType } from './RootModel';

const RootModelContext =
  React.createContext<Instance<RootModelType> | null>(null);

export const RootModelProvider = RootModelContext.Provider;

/**
 * Hook which returns root model
 */
export function useRoot(): Instance<RootModelType> {
  const store = useContext(RootModelContext);

  return store as Instance<RootModelType>;
}
