import {AppRegister} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListProduct3KmScreen from './src/Screens/ListProduct3KmScreen';
import ProductDetailComponent from './src/Components/ProductDetailComponent';
import CardProductComponents from './src/Components/CardProductComponents';

const navigator = createStackNavigator(
  {
    CardProductComponents: CardProductComponents,
    Home: ListProduct3KmScreen,
    ProductDetailComponent: ProductDetailComponent,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo Reddit',
      tintColor: '#DDDD32',
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(navigator);