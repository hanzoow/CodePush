import React, {PureComponent} from 'react';
//import UI from react-native
import {View, Text, Image, Button} from 'react-native';
//import styles for component.
import {ScrollView} from 'react-native-gesture-handler';
import LocalCss from '../../css/local';
import CardProductComponents from './CardProductComponents';
import ProductDetail from '../../css/ProductDetail';
import {SearchBar} from 'react-native-elements';

export default class ProductDetailComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitle: () =>{
        return (<View style={ProductDetail.headerBarStyle}>
        <Text style={ProductDetail.headTextStyle}>Chi tiết tin rao</Text>
        <View style={ProductDetail.imageHeaderStyle}>
          <Image
            style={{height: 20, width: 20, marginRight: 20}}
            source={require('../../assets/heart-white.png')}
          />
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/share.png')}
          />
        </View>
      </View>);
    },
}
  render() {
    let data = this.props.navigation.getParam('object', 'Data from parent');
    // let image_url = this.props.navigation.getParam('_image', 'Image');
    return (
      <View>
        <View style={ProductDetail.backgroundColorOfProductPicture}>
          <ScrollView>
            <View style={ProductDetail.alignPicture}>
              <Image
                style={{
                  height: 240,
                  width: 240,
                  borderRadius: 5,
                }}
                source={{uri: data.images[0].medium.image_url}}
              />
            </View>
            <View style={ProductDetail.backgroundColorOfCategoryName}>
              <Text style={ProductDetail.styleForCategory}>
                {data.category.name}
              </Text>
              <Text style={ProductDetail.styleForNameOfProduct}>
                {data.name}
              </Text>
              <Text style={ProductDetail.styleForPriceOfProduct}>
                {data.price} đ
              </Text>
            </View>
            <View style={ProductDetail.backgroundColorOfStatusProduct}>
              <Text style={ProductDetail.styleForHeaderStatusOfProduct}>
                TÌNH TRẠNG SẢN PHẨM
              </Text>
              <Text style={ProductDetail.styleFotStatusProduct}>
                {data.status == 'new' ? 'Mới 100%' : 'Cũ'}
              </Text>
            </View>
            <View style={ProductDetail.backgroundDescriptionOfStatusProduct}>
              <Text style={ProductDetail.styleForHeaderDescriptionOfProduct}>
                MÔ TẢ SẢN PHẨM
              </Text>
              <Text style={ProductDetail.styleForDescriptionOfProduct}>
                {data.description}
              </Text>
            </View>
            <View style={ProductDetail.backgroundPosterOfStatusProduct}>
              <Text style={ProductDetail.styleForHeaderPosterOfProduct}>
                NGƯỜI ĐĂNG TIN
              </Text>
              <View style={ProductDetail.styleForDetailOfPoster}>
                <Image
                  style={[
                    {height: 50, width: 50},
                    ProductDetail.styleForAvatarOfPoster,
                  ]}
                  source={{uri: data.posted_by.avatar_url}}
                />
                <View style={ProductDetail.marginBetweenAvatarAndInfo}>
                  <Text style={ProductDetail.styleForNameOfPoster}>
                    {data.posted_by.display_name}
                  </Text>
                  <View style={ProductDetail.directionOfStarsRating}>
                    <Image
                      style={[
                        [{height: 20, width: 20}, ProductDetail.eachStar],
                        ProductDetail.eachStar,
                      ]}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={[{height: 20, width: 20}, ProductDetail.eachStar]}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={[{height: 20, width: 20}, ProductDetail.eachStar]}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={[{height: 20, width: 20}, ProductDetail.eachStar]}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={[{height: 20, width: 20}, ProductDetail.eachStar]}
                      source={require('../../assets/star.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={ProductDetail.backgroundReportOfStatusProduct}>
              <View style={ProductDetail.rowForReport}>
                <Image
                  style={{height: 20, width: 20, marginRight: 5}}
                  source={require('../../assets/exclamation-mark.png')}
                />
                <Text style={ProductDetail.styleForReportTextOfProduct}>
                  Báo cáo vi phạm
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
