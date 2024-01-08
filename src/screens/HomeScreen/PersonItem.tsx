import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import HeartFilledIcon from '../../icons/svg/HeartFilledIcon';
import HeartIcon from '../../icons/svg/HeartIcon';
import {Person} from '../../store/PeopleModel/PersonModel';
import {screens} from '../../navigation/screens';

const styles = StyleSheet.create({
  rootContainer: {
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#E0E0E0',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },
});

export const PersonItem = observer(({item}: {item: Person}) => {
  const {navigate} = useNavigation();

  function goToPersonInfo() {
    // @ts-ignore
    navigate(screens.Info, {
      item,
    });
  }

  function setIsLiked() {
    item.setIsLiked(!item.is_liked);
  }
  return (
    <Pressable
      onPress={goToPersonInfo}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#E0E0E0' : 'white',
        },
        styles.rootContainer,
      ]}>
      <View style={{justifyContent: 'space-between'}}>
        <Text>{item.name}</Text>
        <Pressable onPress={setIsLiked}>
          {item.is_liked ? <HeartFilledIcon /> : <HeartIcon />}
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <View>
          <Text>Gender</Text>
          <Text>{item.gender}</Text>
        </View>
        <View>
          <Text>Birth Year</Text>
          <Text>{item.birth_year}</Text>
        </View>
      </View>
    </Pressable>
  );
});
