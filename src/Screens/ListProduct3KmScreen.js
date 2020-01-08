import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import HomeScreenStyle from '../../css/HomeScreenStyle';
import {SearchBar} from 'react-native-elements';
import CardProductComponents from '../Components/CardProductComponents';
import ProductDetailComponent from '../Components/ProductDetailComponent';
import LocalCss from '../../css/local';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

class ListProduct3KmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      productList: [],
      isLoading: true,
    };
  }
  updateSearch = search => {
    this.setState({search});
  };

  componentDidMount() {
    axios
      .get(`http://api-qa2.3km.vn/api/products`)
      .then(res => {
        const products = res.data.data;
        this.setState({productList: products, loading: false});
      })
      .catch(error => console.log(error));
  }

  static navigationOptions = {
    headerShown: false,
  };

  renderItem(data) {
    return (
      <View>
        <View style={{backgroundColor: 'red', height: 100}}></View>
        <CardProductComponents {...data.item} />
      </View>
    );
  }
  render() {
    const {search} = this.state;

    const {productList, loading} = this.state;
    const {navigation} = this.props;
    if (!loading) {
      return (
        <View style={{flex: 1}}>
          <View>
            <View style={HomeScreenStyle.headerDirection}>
              <Image
                source={require('../../assets/3km.png')}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 20,
                  overflow: 'hidden',
                  marginLeft: 15,
                }}
              />
              <View style={HomeScreenStyle.styleForSearchbar}>
                <SearchBar
                  inputContainerStyle={{
                    marginTop: 0,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    height: 40,
                  }}
                  lightTheme
                  platform="ios"
                  placeholder="Bạn tìm gì hôm nay ?"
                  placeholderTextColor="white"
                  containerStyle={{
                    backgroundColor: '#f4a11e',
                    width: 300,
                    height: 60,
                    marginBottom: 5,
                    alignItems: 'center',
                  }}
                  style={{fontSize: 1, elevation: 0}}
                  cancelButtonProps={{
                    color: 'white',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={LocalCss.headerFinder}>
            <View>
              <Text>20km từ</Text>
              {/* <Dropdown
                label="Test"
                containerStyle={LocalCss.dropdownStyle}
                rippleCentered={true}
                inputContainerStyle={{borderBottomColor: 'transparent'}}
              /> */}
            </View>
            <View>
              <Text>Sắp xếp theo</Text>
              {/* <DroCopdown
                label="Test"
                containerStyle={LocalCss.dropdownStyle}
                overlayStyle={LocalCss.overlayStyleFinder}
                inputContainerStyle={{borderBottomColor: 'transparent'}}
                rippleCentered={true}
              /> */}
            </View>
          </View>
          <FlatList
            style={LocalCss.directionForFlatList}
            numColumns={2}
            data={productList}
            renderItem={data => (
              <CardProductComponents {...data.item} navigation={navigation} />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
  },
});
export default ListProduct3KmScreen;
