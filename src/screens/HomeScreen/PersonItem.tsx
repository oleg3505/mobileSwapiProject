import {observer} from 'mobx-react-lite';
import {Text, View} from 'react-native';
import {Person} from '../../store/PeopleModel/PersonModel';

export const PersonItem = observer(({item}: {item: Person}) => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'green',
        marginHorizontal: 10,
        borderRadius: 20,
      }}>
      <Text>{item.name}</Text>
      <Text>{item.gender}</Text>
      <Text>{item.birth_year}</Text>
    </View>
  );
});
