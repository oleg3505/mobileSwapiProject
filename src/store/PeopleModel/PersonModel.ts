import {getRoot, types} from 'mobx-state-tree';
import {createThunk, model, Model} from 'mst-collection';
import {Api} from '../../api/Api';
import {RootModelType} from '../RootModel';

export enum GenderType {
  Male = 'male',
  Female = 'female',
  NA = 'n/a',
  Germaphrodite = 'hermaphrodite',
  None = 'none',
}

export class Person extends Model({
  id: types.identifierNumber,
  name: types.string,
  height: types.string,
  mass: types.string,
  hair_color: types.string,
  skin_color: types.string,
  eye_color: types.string,
  birth_year: types.string,
  gender: types.enumeration([
    GenderType.Male,
    GenderType.Female,
    GenderType.NA,
    GenderType.Germaphrodite,
    GenderType.None,
  ]),
  species: types.maybeNull(types.array(types.string)),
  homeworld: types.string,
  created: types.string,
  edited: types.string,
  url: types.string,
  is_liked: false,

  homeworldName: types.maybeNull(types.string),
  speciesNames: types.optional(types.array(types.string), []),
}) {
  setIsLiked(isLiked: boolean) {
    this.is_liked = isLiked;
    if (isLiked) {
      switch (this.gender) {
        case GenderType.Male:
          getRoot<RootModelType>(this).people.incrementMaleLikes();
          break;
        case GenderType.Female:
          getRoot<RootModelType>(this).people.incrementFemaleLikes();
          break;
        default:
          getRoot<RootModelType>(this).people.incrementOthersLikes();
          break;
      }
    } else {
      switch (this.gender) {
        case GenderType.Male:
          getRoot<RootModelType>(this).people.decrementMaleLikes();
          break;
        case GenderType.Female:
          getRoot<RootModelType>(this).people.decrementFemaleLikes();
          break;
        default:
          getRoot<RootModelType>(this).people.decrementOthersLikes();
          break;
      }
    }
  }

  setHomeworldName(value: string) {
    this.homeworldName = value;
  }

  pushSpeciesNames(value: string) {
    this.speciesNames.push(value);
  }

  fetchDetails = createThunk(() => {
    return async function fetchDetails(this: Person) {
      const homeworldRes = await Api.getHomeWorldByUrl(this.homeworld);
      this.species?.map(async el => {
        const speciesRes = await Api.getSpeciesByUrl(el);

        this.pushSpeciesNames(speciesRes.data.name);
      });

      this.setHomeworldName(homeworldRes.data.name);
    };
  });
}

export const PersonModel = model(Person);
