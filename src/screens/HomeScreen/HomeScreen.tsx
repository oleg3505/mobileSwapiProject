import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Button, FlatList, View} from 'react-native';
import {PersonItem} from './PersonItem';
import {usePeopleModel} from '../../store/PeopleModel/PeopleModel';

export const HomeScreen = observer(() => {
  const people = usePeopleModel();
  function fetch() {
    try {
      people.list.fetch.run();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(111);

    fetch();
  }, []);

  function showList() {
    console.log(people.list.asArray);
  }

  return (
    <View style={{flex: 1}}>
      <Button title="fetch" onPress={fetch} />
      <Button title="show list" onPress={showList} />

      <FlatList
        data={people.list.asArray ?? []}
        renderItem={({item}) => <PersonItem item={item} />}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
});
