import {createThunk, ListModel, model} from 'mst-collection';
import {extractPersonId} from '../../utils/extractId';
import {Api} from '../../api/Api';

import {PersonModel} from './PersonModel';

export class PeopleList extends ListModel(PersonModel, {}) {
  fetch = createThunk(() => {
    return async function fetch(this: PeopleList) {
      const res = await Api.getPeople();
      console.log(1111, res.data.results);

      const result = res.data.results?.map((person: {url: string}) => ({
        ...person,
        id: extractPersonId(person.url),
      }));

      this.set(result);
      console.log('array', this.asArray);
    };
  });
}

export const PeopleListModel = model(PeopleList);
