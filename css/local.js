import {StyleSheet} from 'react-native';

const LocalCss = StyleSheet.create({
  backgroundRootViewColor: {
    backgroundColor: '#e2e2e9',
  },
  backgroundColorTrending: {
    backgroundColor: '#FFF',
    height: 150,
  },
  paddingTrendingComponent: {
    marginTop: 20,
  },
  heightOfTopTrendingComponent: {
    height: 160,
  },
  paddingScrollViewTrending: {
    marginTop: 5,
  },
  directionOfPost: {
    flex: 1,
    flexDirection: 'column',
  },
  directionOfHeaderOfPost: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7,
  },
  directionOfVoteUpVoteDownPost: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  directionOfBottomButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  alignItems: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  number: {
    textAlign: 'center',
  },
  columnDirectionPost: {
    flex: 1,
    flexDirection: 'column',
  },
  commonHWofPicture: {
    height: 50,
    width: 50,
  },
  commonHWofBottomButton: {
    height: 30,
    width: 30,
  },
  backgroundColorPost: {
    backgroundColor: '#FFF',
  },
  alignPost: {
    marginTop: 10,
    marginBottom: -2,
    paddingLeft: 9,
    paddingRight: 9,
  },

  marginPostComponent: {
    marginTop: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  directionOfShareItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  commonFontTextBottomText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  circleForAvatar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: 'hidden',
  },
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  pokeItemHeader: {
    fontSize: 24,
    color: 'black',
  },
  pokeImage: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  pokemonImage: {
    height: 250,
    width: 250,
  },
  nameOfPokemon: {
    fontSize: 25,
  },
  directionOfListProduct: {
    backgroundColor: 'green',
  },
  backgroundColorFlatList: {
    backgroundColor: 'rgba(213, 205, 205, 1)',
  },
  eachProduct: {
    // display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',

    // alignItems: 'stretch',
    // // flexWrap: 'wrap',
    // marginBottom: 10,
    width: 193,
    height: 300,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },

  directionOfBottomInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  flexImage: {
    flex: 1,
  },
  heightAndWidthForImageProduct: {
    width: 194,
    height: 20,
  },

  headerFinder: {
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dropdownStyle: {
    width: 190,
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  overlayStyleFinder: {
    alignSelf: 'center',
    paddingBottom: 30,
  },
  directionForFlatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  directionOfBottomViewOfProduct: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  priceTextStyle: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default LocalCss;
