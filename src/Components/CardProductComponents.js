import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createAppContainer} from 'react-navigation';

import {ScrollView} from 'react-native-gesture-handler';
import LocalCss from '../../css/local';
import ListProduct3KmScreen from '../Screens/ListProduct3KmScreen';
const imagesData = [];

const deviceWidth = Dimensions.get('window').width;
export default class CardProductComponents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // let _id = this.props._id;
    let object = this.props;
    //console.log(object);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ProductDetailComponent', {object});
            //console.log(object);
            // this.props.navigation.navigate('ProductDetailComponent', {_image});
            // this.props.navigation.navigate('ProductDetailComponent', {_id});
            // this.props.navigation.navigate('ProductDetailComponent', {_id});
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[LocalCss.backgroundColorFlatList]}>
              <View style={LocalCss.eachProduct}>
                <View>
                  <Image
                    style={{height: 193, width: 193, paddingTop: 20}}
                    source={{uri: this.props.images[0].medium.image_url}}
                  />
                </View>
                <View style={LocalCss.directionOfBottomInfo}>
                  <Text>{this.props.name}</Text>
                  <View style={LocalCss.directionOfBottomViewOfProduct}>
                    <Text style={LocalCss.priceTextStyle}>
                      {this.props.price}đ
                    </Text>
                    <Image
                      style={{height: 20, width: 20, alignItems: 'flex-end'}}
                      source={require('../../assets/heart.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </View>
    );
  }
}
