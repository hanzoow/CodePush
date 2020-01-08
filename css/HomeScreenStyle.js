import {StyleSheet} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  headerDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    flex:1
  },
  styleForSearchbar: {
    paddingLeft:30,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default HomeScreenStyle;
