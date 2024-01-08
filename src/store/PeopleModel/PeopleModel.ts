import {model, Model} from 'mst-collection';
import {types} from 'mobx-state-tree';
import {useRoot} from '../useRoot';
import {PeopleListModel} from './PeopleListModel';

export class People extends Model({
  list: types.optional(PeopleListModel, {}),
  maleLikesCount: 0,
  femaleLikesCount: 0,
  othersLikesCount: 0,
}) {
  incrementMaleLikes() {
    this.maleLikesCount = this.maleLikesCount + 1;
  }
  decrementMaleLikes() {
    this.maleLikesCount = this.maleLikesCount - 1;
  }
  incrementFemaleLikes() {
    this.femaleLikesCount = this.femaleLikesCount + 1;
  }
  decrementFemaleLikes() {
    this.femaleLikesCount = this.femaleLikesCount - 1;
  }
  incrementOthersLikes() {
    this.othersLikesCount = this.othersLikesCount + 1;
  }
  decrementOthersLikes() {
    this.othersLikesCount = this.othersLikesCount - 1;
  }
  resetLikes() {
    // @ts-ignore
    this.list.asArray.map(el => el.setIsLiked(false));
    this.maleLikesCount = 0;
    this.femaleLikesCount = 0;
    this.othersLikesCount = 0;
  }
}

export const PeopleModel = model(People);

export function usePeopleModel() {
  const root = useRoot();

  return root.people;
}
