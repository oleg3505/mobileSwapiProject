import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PersonItem} from './PersonItem';
import {usePeopleModel} from '../../store/PeopleModel/PeopleModel';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  clearTextPressed: {
    color: '#FF5F57',
  },
  clearText: {
    color: 'white',
  },
  countContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  countItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    width: '30%',
  },
  clearButton: {
    borderColor: '#FF5F57',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  separator: {
    height: 10,
  },
  indicator: {
    marginVertical: 10,
  },
});

export const HomeScreen = observer(() => {
  const people = usePeopleModel();
  const {setOptions} = useNavigation();

  const isRefreshing = people.list.fetch.inProgress;
  const isFetchingMore = people.list.fetchMore.inProgress;
  function fetch() {
    try {
      people.list.fetch.run();
    } catch (error) {
      console.log(error);
    }
  }
  function fetchMore() {
    try {
      people.list.fetchMore.run();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#FF5F57' : 'white',
            },
            styles.clearButton,
          ]}
          onPress={people.resetLikes}>
          {({pressed}) => (
            <Text style={pressed ? styles.clearText : styles.clearTextPressed}>
              CLEAR FANS
            </Text>
          )}
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.countContainer}>
        <View style={styles.countItem}>
          <Text>{people.femaleLikesCount}</Text>
          <Text>Female fans</Text>
        </View>
        <View style={styles.countItem}>
          <Text>{people.maleLikesCount}</Text>
          <Text>Male fans</Text>
        </View>
        <View style={styles.countItem}>
          <Text>{people.othersLikesCount}</Text>
          <Text>Others</Text>
        </View>
      </View>

      <FlatList
        data={people.list.asArray ?? []}
        // @ts-ignore
        renderItem={({item}) => <PersonItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          isFetchingMore ? (
            <ActivityIndicator
              style={styles.indicator}
              size="large"
              color="#FF5F57"
            />
          ) : null
        }
        ListEmptyComponent={
          isRefreshing ? (
            <ActivityIndicator size="large" color="#FF5F57" />
          ) : (
            <Text>No results</Text>
          )
        }
        onEndReached={isFetchingMore ? null : fetchMore}
        // it too big number for this prop, but I used it becouse API works slowly
        onEndReachedThreshold={0.8}
      />
    </View>
  );
});
