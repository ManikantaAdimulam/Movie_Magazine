import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Authentication from '@screens/auth/authentication';
import {screens} from './constants';

//
const Stack = createNativeStackNavigator();

//
const options: NativeStackNavigationOptions = {
  headerShown: false,
};

//
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={screens.AUTH} component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
