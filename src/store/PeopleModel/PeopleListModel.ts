import {createThunk, ListModel, model} from 'mst-collection';
import {extractPersonId} from '../../utils/extractId';
import {Api} from '../../api/Api';

import {PersonModel} from './PersonModel';

export class PeopleList extends ListModel(PersonModel, {}) {
  fetch = createThunk(() => {
    return async function fetch(this: PeopleList) {
      const res = await Api.getPeople();

      const result = res.data.results?.map((person: {url: string}) => ({
        ...person,
        id: extractPersonId(person.url),
      }));

      this.set(result);
    };
  });

  fetchMore = createThunk(() => {
    return async function fetch(this: PeopleList) {
      if (typeof this.offset === 'number' && this.asArray.length < 82) {
        const res = await Api.getPeopleByUrl(Math.round(this.offset / 10) + 1);

        const result = res.data.results?.map((person: {url: string}) => ({
          ...person,
          id: extractPersonId(person.url),
        }));

        this.append(result);
      }
    };
  });
}

export const PeopleListModel = model(PeopleList);
