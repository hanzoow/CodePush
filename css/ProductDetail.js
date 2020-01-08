import {StyleSheet} from 'react-native';

const ProductDetail = StyleSheet.create({
  backgroundColorOfProductPicture: {
    backgroundColor: '#e2e2e9',
  },
  alignPicture: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundColorOfCategoryName: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 7,
  },
  styleForCategory: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  styleForNameOfProduct: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  styleForPriceOfProduct: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  styleForHeaderStatusOfProduct: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  backgroundColorOfStatusProduct: {
    marginTop: 12,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 7,
  },
  styleFotStatusProduct: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    paddingTop: 10,
    paddingBottom: 5,
  },
  backgroundDescriptionOfStatusProduct: {
    marginTop: 12,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 7,
  },
  styleForHeaderDescriptionOfProduct: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  styleForDescriptionOfProduct: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    paddingTop: 10,
    paddingBottom: 5,
    alignSelf: 'flex-start',
  },
  backgroundPosterOfStatusProduct: {
    marginTop: 12,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 7,
  },
  styleForHeaderPosterOfProduct: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  styleForDetailOfPoster: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  styleForAvatarOfPoster: {
    overflow: 'hidden',
    borderRadius: 40,
  },
  directionOfStarsRating: {
    flexDirection: 'row',
    flex: 1,
  },
  styleForNameOfPoster: {
    color: '#2132B4',
    fontSize: 16,
  },
  marginBetweenAvatarAndInfo: {
    marginLeft: 10,
  },
  eachStar: {
    marginRight: 10,
  },
  backgroundReportOfStatusProduct: {
    marginTop: 12,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 7,
    height: 50,
  },
  rowForReport: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  styleForReportTextOfProduct: {
    color: '#E2574C',
  },
  bottomButton: {
    flexDirection: 'row',
  },
  headerBarStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headTextStyle: {
    color: 'white',
  },
  imageHeaderStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
});

export default ProductDetail;
