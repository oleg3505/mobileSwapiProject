import {ListModel, model} from 'mst-collection';
import {PeopleModel} from './PeopleModel';

export class PeopleList extends ListModel(PeopleModel, {}) {}

export const PeopleListModel = model(PeopleList);
