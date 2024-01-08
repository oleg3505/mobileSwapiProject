import {useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import HeartFilledIcon from '../../icons/svg/HeartFilledIcon';
import HeartIcon from '../../icons/svg/HeartIcon';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 26,
    marginHorizontal: 20,
  },
  spaceVertical: {
    width: 20,
  },
});

export const PersonScreen = observer(() => {
  const {params} = useRoute();
  // @ts-ignore
  const {item} = params;

  useEffect(() => {
    fetchDetails();
  }, []);

  function fetchDetails() {
    item.fetchDetails.run();
  }

  function setIsLiked() {
    item.setIsLiked(!item.is_liked);
  }
  return (
    <View style={styles.rootContainer}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Pressable onPress={setIsLiked}>
          {item.is_liked ? (
            <HeartFilledIcon width={40} height={40} />
          ) : (
            <HeartIcon width={40} height={40} />
          )}
        </Pressable>
        <Text style={styles.titleText}>{item.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <View>
          <Text>Gender</Text>
          <Text>{item.gender}</Text>
        </View>
        <View style={styles.spaceVertical} />
        <View>
          <Text>Birth Year</Text>
          <Text>{item.birth_year}</Text>
        </View>
        {item.homeworldName && (
          <>
            <View style={styles.spaceVertical} />
            <View>
              <Text>Home World</Text>
              <Text>{item.homeworldName}</Text>
            </View>
          </>
        )}
      </View>

      {!!item.speciesNames[0] && (
        <View>
          <Text>Species:</Text>
          {item.speciesNames.map((el: string, index: number) => (
            <Text key={el + index}>{el}</Text>
          ))}
        </View>
      )}
    </View>
  );
});
